import { verify } from "hcaptcha";
import { NextApiRequest, NextApiResponse } from "next";
import { openDatabaseConnection } from "../../lib/database";

const emailRegex =
	/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const error = (code: number, message: string) =>
		res.status(code).json({
			ok: false,
			message
		});

	if (req.method == "POST") {
		try {
			const body = req.body;

			if (
				!body.name ||
				!body.emailAddress ||
				!body.message ||
				!body.securityToken ||
				!body.name.trim().length ||
				!body.emailAddress.trim().length ||
				!body.message.trim().length ||
				!body.securityToken.trim().length
			) {
				return error(400, "Missing required fields.");
			}

			const verified = await verify(
				process.env.HCAPTCHA_SECRET_KEY as string,
				body.securityToken
			);

			if (!verified.success) {
				return error(400, "Captcha challenge failed, please try again.");
			}

			if (!emailRegex.test(body.emailAddress)) {
				return error(400, "Invalid email address.");
			}

			try {
				const db = openDatabaseConnection();

				await db.execute(`CREATE TABLE IF NOT EXISTS messages (
                    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    name varchar(255) NOT NULL,
                    emailAddress varchar(255) NOT NULL,
                    message text NOT NULL,
                    createdAt datetime(3) NOT NULL DEFAULT current_timestamp(3)
                );`);

				const inserted = await db.execute(
					`INSERT INTO messages (name, emailAddress, message) VALUES (?, ?, ?)`,
					[body.name, body.emailAddress, body.message]
				);

				const record = await db.execute(`SELECT * FROM messages WHERE id=?`, [
					inserted.insertId
				]);

				return res.status(200).send(record.rows[0] || {});
			} catch (e) {
				console.error(e);
				return error(500, "Could not send message, database problem.");
			}
		} catch (e: any) {
			return error(400, "Field validation failed.");
		}
	} else {
		res.status(405).send("405 Method Not Allowed");
		return;
	}
}
