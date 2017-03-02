exports.addTask = function(req, res) {
	var taskName = req.body.taskName;
	console.log(taskName);
	data.tasks.push(taskName);
	res.send(taskName);
}
// Your code goes here
$(document).ready(function() {
$('#taskForm').submit(function(e) {
    // Prevents default submit + reload (we only want the submit part)
    e.preventDefault();

    var taskName = $('#addTask').val();

    // Send the POST request
    $.post('addTask', { taskName: taskName }, postCallback);
  });
});
