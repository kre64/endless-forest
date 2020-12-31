const { gql, GraphQLClient } = require("graphql-request");

exports.handler = async function (event, context) {
	const INSERT_USER = gql`
		mutation insert_single_users($email: String!, $name: String!, $level: Int!, $xp: Int!) {
			insert_users_one(
				object: { email: $email, name: $name, level: $level, xp: $xp}
			) {
				email
				name
				level
				xp
			}
		}
	`;

	const graphQLClient = new GraphQLClient(process.env.GQL_ENDPOINT, {
		headers: {
			"x-hasura-admin-secret": process.env.GQL_AUTH_TOKEN,
		},
	});

	console.log(event.body)
	console.log(event.body.user)

	const variables = {
		email: event.body.user.email,
		name: event.body.user.user_metadata.full_name,
		level: 0,
		xp: 0,
	};

	const data = await graphQLClient.request(INSERT_USER, variables);

	return {
		statusCode: 200,
		body: JSON.stringify({
			app_metadata: { roles: ["adventurer"] },
		}),
	};
};
