// pages/index.js

import PlayersList, {
	ALL_CLUBS_QUERY,
	ALL_COUNTRIES_QUERY,
} from "components/PlayersList";
import Link from "next/link";

const IndexPage = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>EPL Players Directory</h1>
			<PlayersList />
		</div>
	);
};

export default IndexPage;
