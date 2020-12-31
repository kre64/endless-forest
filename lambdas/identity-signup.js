exports.handler = async function (event, context) {
	const { identity, user } = context.clientContext;
	return {
		statusCode: 200,
		body: JSON.stringify({ app_metadata: { roles: ["member"] } }),
	};
};
