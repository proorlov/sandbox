var uri = "https://api.mongolab.com/api/1/databases/codepr-test/collections/tasks?apiKey=bmRDuUZXTJgyTUdlihwv6BHq44J8u9J5";

var todoData = [];

function buildTodoListHtml() {
    todoData.forEach(function(el) {
    	//console.log(el);
    	$("#todo-list").append("<tr><td>"+el.id+"</td><td>"+el.title+"</td><td>"+el.color+"</td><td>"+el.checked+"</td><td></td></tr>");
    });
}

$.ajax(uri)
    .done(function(data) {
        //console.log(data);
        todoData = data;
        buildTodoListHtml();
    })
    .fail(function() {
        console.log('fail');
    })
    .always(function() {
        console.log('complete');
    });
