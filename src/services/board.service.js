const API_URL_COLUMNORDER =
	"https://baazeeboo-hapi.herokuapp.com/trello/column-order";
const API_URL_COLUMNS = "https://baazeeboo-hapi.herokuapp.com/trello/columns";
const API_URL_TASKS = "https://baazeeboo-hapi.herokuapp.com/trello/tasks";

const getColumnOrder = async () => {
	try {
		const response = await fetch(
			API_URL_COLUMNORDER + `/${localStorage.getItem("userInfo")}`,
			{
				method: "GET",
				headers: {
					"Content-type": "application/json",
					Accept: "application/json",
					Authorization: localStorage.getItem("Authorization"),
				},
			}
		);
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};

const getColumns = async (columnsIds) => {
	try {
		const response = await fetch(API_URL_COLUMNS + "/getByIds", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
			body: JSON.stringify({
				ids: columnsIds,
			}),
        });
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};

const getTasks = async (taskIds) => {
	try {
		const response = await fetch(API_URL_TASKS + "/getTasksByIds", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
			body: JSON.stringify({
				ids: taskIds,
			}),
		});
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};
const addTask = async (content, columnId) => {
	try {
		const response = await fetch(API_URL_TASKS, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
			body: JSON.stringify({content: content, columnId: columnId}),
		});
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {	
		console.log(new Error(err));
	}
};
const addColumn = async (title, columnOrderId) => {
	try {
		const response = await fetch(API_URL_COLUMNS, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
			body: JSON.stringify({
				title: title,
				columnOrderId: columnOrderId,
				taskIds: [],
			}),
		});
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};
const updateColumnOrder = async (columnsIds) => {
	try {
		const response = await fetch(
			API_URL_COLUMNORDER + `/${localStorage.getItem("userInfo")}`,
			{
				method: "PUT",
				headers: {
					"Content-type": "application/json",
					Accept: "application/json",
					Authorization: localStorage.getItem("Authorization"),
				},
				body: JSON.stringify({
					columnOrder: columnsIds,
				}),
			}
		);
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};
const getColumn = async (columnId) => {
	try {
		const response = await fetch(API_URL_COLUMNS + `/${columnId}`, {
			method: "GET",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
		});
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};
const updateColumn = async (columnId, columnInfo) => {
	try {
		const response = await fetch(API_URL_COLUMNS + `/${columnId}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
				Authorization: localStorage.getItem("Authorization"),
			},
			body: JSON.stringify({title: columnInfo.title, taskIds: columnInfo.taskIds}),
		});
		const responseBody = await response.json();
		return responseBody;
	} catch (err) {
		console.log(new Error(err));
	}
};

export default {
	getColumnOrder,
	updateColumnOrder,
	getColumns,
	getColumn,
	updateColumn,
	addColumn,
	getTasks,
	addTask,
};
