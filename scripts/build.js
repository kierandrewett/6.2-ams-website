#!/usr/bin/env node

import { execa } from "execa";
import { readFileSync, writeFileSync } from "fs";
import { ensureDirSync } from "fs-extra/esm";
import { glob } from "glob";
import { resolve } from "path";
import prettier from "prettier";
import sass from "sass";

async function main() {
    const argv = process.argv.splice(2);

    const command = argv[0];

    const nextConfig = (await import(resolve(process.cwd(), "next.config.js"))).default

    const distDir = resolve(process.cwd(), nextConfig.distDir);
    const prettierConfig = await prettier.resolveConfig(resolve(process.cwd(), ".prettierrc.json"))

    const nextProcess = execa(resolve(process.cwd(), "node_modules", ".bin", "next"), argv, { env: { FORCE_COLOR: "1" } })
    nextProcess.pipeStdout(process.stdout);
    nextProcess.pipeStderr(process.stderr);

    const code = await new Promise((res, rej) => nextProcess.on("exit", (code) => {
        res(code)
    }))

    if (code == 0) {
        const compiledCSS = sass.compile(resolve(process.cwd(), "src", "styles", "ams.scss")).css;
        ensureDirSync(resolve(distDir, "assets", "css"));
        writeFileSync(
            resolve(distDir, "assets", "css", "ams.css"),
            prettier.format(compiledCSS, { ...prettierConfig, parser: "css" })
        );

        if (command == "build") {
            const htmlFiles = glob.sync(resolve(distDir, "**", "*.html"));

            for (const html of htmlFiles) {
                writeFileSync(
                    html,
                    prettier.format(readFileSync(html, "utf-8"), { ...prettierConfig, parser: "html" })
                )
            }
        }
    }
}

main();