const axios = require("axios");
const { request, gql, GraphQLClient } = require("graphql-request");

exports.handler = async function (event, context) {
	const mutation = gql`
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

	const graphQLClient = new GraphQLClient(process.env.GQL_ENDPOINT, {
		headers: {
			"x-hasura-admin-secret": process.env.GQL_AUTH_TOKEN,
		},
	});

	const data = await graphQLClient.request(mutation, variables);
	console.log(JSON.stringify(data, undefined, 2));

	return {
		statusCode: 200,
		body: JSON.stringify({
			app_metadata: ["adventurer"],
		}),
	};
};
