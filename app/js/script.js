const register_form = document.forms[0]
const login_form = document.forms[1]

function register_user() {
	console.log(document.forms[0].name.value)
	const data = {}
	if (register_form.name.value) data.name = register_form.name.value
	if (register_form.email.value) data.email = register_form.email.value
	if (register_form.classYear.value) data.classYear = register_form.classYear.value
	if (register_form.address.value) data.address = register_form.address.value
	if (register_form.password.value) data.password = register_form.password.value
	if (register_form.confirm.value) data.confirm = register_form.confirm.value
	
	console.log(data)
	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function (res) {
		if(!res.ok) {
			res.text()
			.then(function(message) {
				alert(message)
			})
		}
		res.json()
		.then(function(user){
			window.location = '/items'
			alert(JSON.stringify(user))
		})
	}).catch(function (err) {
		console.log(err)
	})
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function login_user() {
	const data = {}
	if (login_form.email.value) data.email = login_form.email.value
	if (login_form.password.value) data.password = login_form.password.value

	fetch('/login', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function (res) {
		if(!res.ok) {
			res.text()
			.then(function(message) {
				alert(message)
			})
		}
		res.json()
		.then(function(data){
			alert(JSON.stringify(data))
			localStorage.token = data.token
			window.location = '/items'
		})
	}).catch(function (err) {
		console.log(err)
	})
}














