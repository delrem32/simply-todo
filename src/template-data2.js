import templateData from "./template-data";

const templateData2 = {
	tasks: [
		{ id: "task-1", content: "Do something right" },
		{ id: "task-2", content: "Dont something right" },
		{ id: "task-3", content: "Should something right" },
		{ id: "task-4", content: "Would something right" },
	],
	columns: [
		{
			id: "column-1",
			title: "To Do",
			taskIds: ["task-1", "task-2", "task-3", "task-4"],
		},
		{
			id: "column-2",
			title: "Progress",
			taskIds: [],
		},
		{
			id: "column-3",
			title: "Done",
			taskIds: [],
		},
	],
	columnOrder: ["column-1", "column-2", "column-3"],
};

export default templateData2;