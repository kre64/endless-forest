import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import netlifyAuth from "../lib/netlifyAuth";

const Account = () => {
	let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
	let [user, setUser] = useState(null);

	useEffect(() => {
		netlifyAuth.initialize((user) => {
			setLoggedIn(!!user);
			setUser(user);
		});
	}, [loggedIn]);

	let login = () => {
		netlifyAuth.authenticate((user) => {
			setLoggedIn(!!user);
			setUser(user);
			netlifyAuth.closeModal();
		});
	};

	let logout = () => {
		netlifyAuth.signout(() => {
			setLoggedIn(false);
			setUser(null);
		});
	};

	return (
		<div>
			<Header
				loggedIn={loggedIn}
				loginHandler={login}
				logoutHandler={logout}
			/>
			{loggedIn ? (
				<div>
					Redirect to worlds page
				</div>
			) : (
				<div>
					Landing page with CTAs for logging in
				</div>
			)}
		</div>
	);
};

export default Account;
