const axios = require("axios");
import { request, gql } from "graphql-request";

exports.handler = async function (event, context) {
	const INSERT_USER = gql`
		mutation insert_single_users {
			insert_users_one(
				object: { level: 0, inventory: "1, 2, 3", xp: 0 }
			) {
				level
				inventory
				xp
			}
		}
	`;

	request(process.env.GQL_ENDPOINT, query).then((data) => console.log(data));

	const client = new GraphQLClient(process.env.GQL_ENDPOINT, {
		headers: { "x-hasura-admin-secret": process.env.GQL_AUTH_TOKEN },
	});

	client.request(INSERT_USER).then((data) => console.log(data));

	const res = await axios.put("/user", {
		data: {
			level: 0,
			inventory: "",
			xp: 0,
		},
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			app_metadata: ["adventurer"],
		}),
	};
};
