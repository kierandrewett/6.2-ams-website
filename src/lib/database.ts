import { connect } from "@planetscale/database";

export const openDatabaseConnection = () => {
	const conn = connect({
		host: process.env.DATABASE_HOST,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD
	});

	return conn;
};
