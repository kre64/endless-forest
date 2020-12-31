import { gql, useQuery } from "@apollo/client";

const { identity, user } = context.clientContext;

// const INSERT_USER = gql`
// mutation insert_single_user {
// 	insert_user(
// 		object: {
// 			level: 0,
// 			items: {}
// 			xp: 0,
// 			name: ${user.app_metadata.name}
// 		}
// 	)
// }
// `;

exports.handler = async function (event, context) {
	// useQuery(INSERT_USER);

	return {
		statusCode: 200,
		body: JSON.stringify({
			user_metadata: {
				level: 0,
				items: {},
				xp: 0,
			},
		}),
	};
};
