const axios = require("axios");
const { request, gql, GraphQLClient } = require("graphql-request");

exports.handler = async function (event, context) {
	const INSERT_USER = gql`
		mutation insert_single_users {
			insert_users_one(
				object: { $email: String!, $name: String!, $level: Int!, $inventory: String!, $xp: Int!}
			) {
				email
				name
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

	const data = await graphQLClient.request(INSERT_USER, variables);
	const {identity, user} = context.clientContext;
	
	const email = event.body.user.email;
	const name = event.body.user.user_metadata.full_name;

	const variables = {
		email: email,
		name: name,
		level: 0,
		inventory: "",
		xp: 0
	}

	const data = await graphQLClient.request(INSERT_USER, variables);

	return {
		statusCode: 200,
		body: JSON.stringify({
			app_metadata: { roles: ["adventurer"] }
		}),
	};
};