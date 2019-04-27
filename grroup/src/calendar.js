
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
	
};


var fetchTask = function(id) {
	fetch('http://127.0.0.1:5000/api/get/task/1')
		.then(res => {
			return res.json()
		})
		.then((out) => {
        console.log('Output: ', out);
	}).catch(err => console.error("ERROR"));

};

fetch('http://127.0.0.1:5000/api/list/users')
    .then(res => {
    	return res.json() 
    })
    .then((out) => {
    	setName(out[0].name);
    	fetchTask(out[0].assigned_tasks[0]);
        console.log('Output: ', out[0].assigned_tasks);
}).catch(err => console.error("ERROR"));


//fetch('http://web.cse.unsw.edu.au/~z5205060/grrroup/api/get/users/1')

//http://web.cse.unsw.edu.au/~z5205060/grrroup/api/get/task/1