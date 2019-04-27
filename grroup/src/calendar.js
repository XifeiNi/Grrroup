
var setName = function(name) {
	var spaceIndex = 0;
    for (var i = 0; i < name.length; i++) {
    	if (name[i] == " ") {
    		spaceIndex = i;
    		break;
    	}
    }
    document.getElementById("calendar-name").innerHTML = name.slice(0, spaceIndex);
    document.getElementById("calender-surname").innerHTML = name.slice(spaceIndex+1);

};

var addTask = function(task) {
	var list = document.createElement('li');
	list.className = 'bdB peers ai-c jc-sb fxw-nw';
	var a = document.createElement('a');
	a.className = 'td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900';
	a.href = 'javascript:void(0);';
	// data toggle?


	var div = document.createElement("div");
	div.className = "peer mR-15";
	var li = document.createElement("li");
	li.className = "fa fa-fw fa-clock-o c-red-500";
	div.appendChild(li);

	var secondDiv = document.createElement("div");
	secondDiv.className = "peer";
	var span = document.createElement("span");
	span.className = "fw-600";
	span.innerHTML = task.name;

	var thirdDiv = document.createElement("div");
	thirdDiv.className = "c-grey-600";
	var spanInsideThirdDiv = document.createElement("span");
	spanInsideThirdDiv.className = "c-grey-700";
	thirdDiv.appendChild(spanInsideThirdDiv);

	secondDiv.appendChild(span);
	secondDiv.appendChild(thirdDiv);

	var i = document.createElement("i");
	i.innerHTML = task.description;
	thirdDiv.appendChild(i);

	a.appendChild(div);
	a.appendChild(secondDiv);
	list.appendChild(a);

	var anotherlistdiv = document.createElement("div");
	anotherlistdiv.className = "peers mR-15";

	var innnerDiv = document.createElement("div");
	innnerDiv.className = "peer";

	var anotherA = document.createElement("a");
	anotherA.className = "td-n c-deep-purple-500 cH-blue-500 fsz-md p-5";

	var anotherI = document.createElement("i");
	anotherI.className = "ti-pencil";

	anotherA.appendChild(anotherI);
	innnerDiv.appendChild(anotherA);

	anotherlistdiv.appendChild(innnerDiv);

	var sinnnerDiv = document.createElement("div");
	sinnnerDiv.className = "peer";

	var sanotherA = document.createElement("a");
	sanotherA.className = "td-n c-red-500 cH-blue-500 fsz-md p-5";

	var sanotherI = document.createElement("i");
	sanotherI.className = "ti-trash";

	sanotherA.appendChild(sanotherI);
	sinnnerDiv.appendChild(sanotherA);

	anotherlistdiv.appendChild(sinnnerDiv);

	list.appendChild(anotherlistdiv);

	document.getElementById("task-list").appendChild(list);
};


var fetchTask = function(id) {
	fetch('http://web.cse.unsw.edu.au/~z5205060/grrroup/api/get/task/1')
		.then(res => {
			return res.json();
		})
		.then((out) => {
        console.log('Output: ', out);
	}).catch(err => console.error("ERROR"));

};

fetch('http://web.cse.unsw.edu.au/~z5205060/grrroup/api/list/users')
    .then(res => {
    	return res.json()
    })
    .then(out => {
			out.forEach(function(entry) {
				if (entry.id == window.localStorage.id) {
					setName(entry.name);
					// fetchTask(out[0].assigned_tasks[0]);
				}
			})

    	var text = '{"id": 1, "name": "Complete Grrroup", "description": "Let us get this Hackathon done!", "assignee": 1, "status": "exists", "color": "0000ff"}';
    	var obj = JSON.parse(text);
    	addTask(obj);
        console.log('Output: ', out[0].assigned_tasks);
}).catch(err => console.error(err));


//fetch('http://web.cse.unsw.edu.au/~z5205060/grrroup/api/get/users/1')

//http://web.cse.unsw.edu.au/~z5205060/grrroup/api/get/task/1
