import { gql, useQuery } from "@apollo/client";
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

const WorldsList = () => {
	const { loading, error, data } = useQuery(ALL_WORLDS_QUERY);

	if (error) {
		console.log(error);
		return <div>Error loading players.</div>;
	}
	if (loading) return <div>Loading</div>;

	console.log(loading, error, data);

	return (
		<div>
			<Button
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
