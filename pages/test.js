// pages/index.js

import WorldsList from "@components/TestApollo";
import Link from "next/link";

const Test = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>EPL Players Directory</h1>
			<WorldsList />
		</div>
	);
};

export default Test;
