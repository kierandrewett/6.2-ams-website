import { DockerLogo } from "../../art/client-logos/Docker";
import { GoogleLogo } from "../../art/client-logos/Google";
import { MetaLogo } from "../../art/client-logos/Meta";
import { NetflixLogo } from "../../art/client-logos/Netflix";
import { TwitterLogo } from "../../art/client-logos/Twitter";
import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Eyebrow } from "../../components/Typography";
import { Book } from "../../icons/Book";
import { Chart } from "../../icons/Chart";
import { Database } from "../../icons/Database";
import { Graphs } from "../../icons/Graphs";

export default function Solutions() {
    return (
        <Layout page={"solutions"}>
            <Hero size={"md"} className={"ai-center"}>
                <HeroBody className={"ai-center gap-md"} direction={"v"}>
                    <div className={"flex gap-sm dir-col ai-center jc-center"}>
                        <h1 className={"ams-text-center"}>Interconnected solutions from AMS</h1>
                        <p className={"ams-text-center"} style={{ maxWidth: "450px" }}>AMS provides industry-leading solutions that just work together - whether you’re a small or big business.</p>
                    </div>
                
                    <ul className={"ams-solutions-list"}>
                        <li>
                            <a href="/solutions/amstore">
                                <div className="ams-solution-icon">
                                    <Database />
                                </div>
                                <span>AMStore</span>
                            </a>
                        </li>
                        <li>
                            <a href="/solutions/ambuilder">
                                <div className="ams-solution-icon">
                                    <Graphs />
                                </div>
                                <span>AMBuilder</span>
                            </a>
                        </li>
                        <li>
                            <a href="/solutions/amreports">
                                <div className="ams-solution-icon">
                                    <Chart />
                                </div>
                                <span>AMReports</span>
                            </a>
                        </li>
                        <li>
                            <a href="/solutions/amcat">
                                <div className="ams-solution-icon">
                                    <Book />
                                </div>
                                <span>AMCat</span>
                            </a>
                        </li>
                    </ul>
                </HeroBody>
            </Hero>

            <Hero size={"md"} direction={"v"} className={"gap-lg ai-center"} style={{ borderTop: "1px solid var(--ams-gray1)" }}>
                <HeroBody>
                    <h1 className={"ams-text-center"}>Why choose us?</h1>
                </HeroBody>
				<HeroBody className={"ai-center gap-lg jc-center"}>
					<div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>
							Always online
						</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>99.9% uptime guarantee</h1>
                            <p>Cloud infrastructure ensures your business is up and running at all times.</p>
						</div>
					</div>

                    <div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>
							Transnational coverage
						</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>Available in 10+ countries</h1>
                            <p style={{ maxWidth: "550px" }}>AMS is available across the world in countries like the UK, Germany, France, United States, Australia, India, China and Japan.</p>
						</div>
                        <img src={"/assets/images/world.png"} style={{ width: "100%", marginTop: "2.5rem" }} />
					</div>

                    <div className={"flex dir-col ai-center"}>
						<Eyebrow uppercase>
							Trusted by tech
						</Eyebrow>
						<div className={"ams-text-center gap-sm flex dir-col"}>
							<h1>Trusted by industry leaders</h1>
                            <p>Learn more about our case study with Netflix.</p>
						</div>
                        <div className={"ams-client-logos"} style={{ marginTop: "2.5rem" }}>
                                <NetflixLogo />
                                <GoogleLogo />
                                <TwitterLogo />
                                <MetaLogo />
                                <DockerLogo />
                            </div>
					</div>
                </HeroBody>
            </Hero>
        </Layout>
    )
}