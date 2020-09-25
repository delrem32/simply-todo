import AuthService from "../services/auth.service";
import BoardService from "../services/board.service";

export const ADD_NEW_CARD = "ADD_NEW_CARD";
export const ADD_NEW_LIST = "ADD_NEW_LIST";
export const GET_COLUMNS = "GET_COLUMNS";
export const GET_TASKS = "GET_TASKS";
export const ADD_COLUMN = "ADD_COLUMN";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_COLUMNORDER = "UPDATE_COLUMNORDER";
export const UPDATE_COLUMNS = "UPDATE_COLUMNS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const REGISTER = "REGISTER";
export const GET_COLUMNORDER = "GET_COLUMNORDER";

export const singIn = (email, password) => (dispatch) => {
	return AuthService.login(email, password)
		.then((response) => {
			if (!response.responseBody) {
				dispatch({
					type: LOG_IN,
				});
			} else {
				console.log(response.responseBody.message);
			}
		})
		.then(() => {
			return AuthService.userInfo();
		});
};

export const singOut = () => {
	localStorage.clear();
	return {
		type: LOG_OUT,
	};
};

export const register = (email, password) => (dispatch) => {
	return AuthService.register(email, password)
		.then((response) => {
			if (!response.responseBody) {
				dispatch({
					type: REGISTER,
				});
				return true;
			} else {
				console.log(response.responseBody.message);
				return false;
			}
		})
		.then((next) => {
			if (next) {
				return AuthService.userInfo();
			}
		});
};

export const addColumn = (title) => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true) {
			return BoardService.addColumn(
				title,
				localStorage.getItem("userInfo")
			).then((response) => {
				dispatch({
					type: ADD_COLUMN,
					response: {
						id: response._id,
						title: response.title,
						taskIds: [],
					},
				});
			});
		} else {
			return singOut();
		}
	});
};

export const addTask = (content, columnId) => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true) {
			return BoardService.addTask(content, columnId).then((response) => {
				dispatch({
					type: ADD_TASK,
					response: {
						id: response._id,
						content: response.content,
						columnId: columnId,
					},
				});
			});
		} else {
			return singOut();
		}
	});
};

export const getColumnOrder = () => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true && !responseBody.message) {
			return AuthService.userInfo().then(() => {
				return BoardService.getColumnOrder().then((response) => {
					dispatch({
						type: GET_COLUMNORDER,
						response,
					});
					return response;
				});
			});
		} else {
			debugger;
			return singOut();
		}
	});
};

export const getColumns = (columnsIds) => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true) {
			return BoardService.getColumns(columnsIds).then((response) => {
				dispatch({
					type: GET_COLUMNS,
					response,
				});
				return response;
			});
		} else {
			return;
		}
	});
};

export const getTasks = (columnsIds) => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true) {
			return BoardService.getColumns(columnsIds)
				.then((columns) => {
					return columns.reduce((acc, column) => {
						acc = [...acc, ...column.taskIds];
						return acc;
					}, []);
				})
				.then((taskIds) => {
					return BoardService.getTasks(taskIds).then((response) => {
						dispatch({
							type: GET_TASKS,
							response,
						});
						return response;
					});
				})
				.then(() => console.log("FUCK"));
		} else {
			return;
		}
	});
};

export const updateColumnOrder = (request) => (dispatch) => {
	return AuthService.checkUser().then((responseBody) => {
		if (responseBody === true) {
			return BoardService.updateColumnOrder(request).then((response) => {
				dispatch({
					type: UPDATE_COLUMNORDER,
					response: response,
				});
			});
		} else {
			return singOut();
		}
	});
};

export const updateColumns = (request) => (dispatch) => {
	return AuthService.checkUser()
		.then((responseBody) => {
			if (responseBody === true) {
				return request.forEach((column) =>
					BoardService.updateColumn(column.id, column)
				);
			} else {
				return singOut();
			}
		})
		.then(() =>
			BoardService.getColumnOrder().then((response) => {
				return BoardService.getColumns(response.columnOrder).then(
					(response) =>
						dispatch({
							type: UPDATE_COLUMNS,
							response,
						})
				);
			})
		);
};
