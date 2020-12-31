import { gql, useQuery, useMutation } from "@apollo/client";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export const ALL_WORLDS_QUERY = gql`
	query allWorlds {
		worlds {
			id
			name
		}
	}
`;

export const INSERT_USER = gql`
	mutation insert_single_users {
		insert_users_one(object: { level: 0, inventory: "1, 2, 3", xp: 0 }) {
			level
			inventory
			xp
		}
	}
`;

const WorldsList = () => {
	const { loading, error, data } = useQuery(ALL_WORLDS_QUERY);
	const [addTodo, { d }] = useMutation(INSERT_USER);

	if (error) {
		console.log(error);
		return <div>Error loading players.</div>;
	}
	if (loading) return <div>Loading</div>;

	console.log(loading, error, data);

	return (
		<div>
			<Button
			onClick={addTodo}
				variant="contained"
				color="primary"
				style={{ marginLeft: "10px" }}
			>
				Search
			</Button>
		</div>
	);
};

export default WorldsList;
