const axios = require("axios");
import { gql, useQuery } from "@apollo/client";

const { identity, user } = context.clientContext;

const INSERT_USER = gql`
	mutation insert_single_users {
		insert_users_one(
			object: { name: ${user.user_metadata.name}, level: 0, inventory: "1, 2, 3", xp: 0 }
		) {
			name
			level
			inventory
			xp
		}
	}
`;

exports.handler = async function (event, context) {
	useQuery(INSERT_USER);

	const res = await axios.put("/user", {
		data: {
			level: 0,
			inventory: "",
			xp: 0
		},
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			app_metadata: ["adventurer"],
		}),
	};
};
