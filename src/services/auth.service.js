const API_URL = "https://baazeeboo-hapi.herokuapp.com/users";

const checkUser = async () => {
	try {
		const response = await fetch(API_URL + '/authorized', {
			method: "GET",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				"Authorization": localStorage.getItem("Authorization"),
			},
		});
		const responseBody = response.json();
		if (responseBody.authorized) {
			return true;
		} else {
			localStorage.removeItem("Authorization");
			return false;
		}
	} catch (err) {
		console.log(new Error(err));
	}
};

const register = async (email, password) => {
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const responseBody = await response.json();
		if (responseBody.token) {
			localStorage.setItem(
				"Authorization",
				"Bearer " + responseBody.token
			);
			return responseBody.token;
		} else {
			localStorage.removeItem("Authorization");
			return { responseBody };
		}
	} catch (err) {
		console.log(new Error(err));
	}
};

const login = async (email, password) => {
	try {
		const response = await fetch(API_URL + "/login", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const responseBody = await response.json();
		if (responseBody.token) {
			localStorage.setItem(
				"Authorization",
				"Bearer " + responseBody.token
			);
			return responseBody.token;
		} else {
			localStorage.removeItem("Authorization");
			return { responseBody };
		}
	} catch (err) {
		console.log(new Error(err));
	}
};

const logout = () => {
	localStorage.removeItem("Authorization");
};

export default {
    checkUser,
	register,
	login,
	logout,
};
