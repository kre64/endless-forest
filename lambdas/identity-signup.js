const axios = require("axios");
const { gql, useQuery } = require("@apollo/client");

const INSERT_USER = gql`
	mutation insert_single_users {
		insert_users_one(object: { level: 0, inventory: "1, 2, 3", xp: 0 }) {
			level
			inventory
			xp
		}
	}
`;

exports.handler = async function (event, context) {
	useQuery(INSERT_USER);

	console.log(event, context)

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
