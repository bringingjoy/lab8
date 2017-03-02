exports.addTask = function(req, res) {
	var taskName = req.body.taskName;
	console.log(taskName);
	data.tasks.push(taskName);
	res.send(taskName);
}
