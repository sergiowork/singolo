//FORM
var overlay = document.getElementById('overlay');

function closeModal(){
	overlay.classList.add("is-hidden");
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('subject').value = '';
	document.getElementById('description').value = '';
}

const form = document.querySelector('.form-contact');
        form.addEventListener('submit', (e) => {
		e.preventDefault();

var inputName2 = document.getElementById("name").value;
var inputEmail2 = document.getElementById("email").value;

		if (inputName2 === '' && inputEmail2 === ''){
			alert('Please fill all required fields!');
		} else {

var inputSubject = document.getElementById("subject").value;
var inputDescription = document.getElementById("description").value;

	if (inputSubject != '') {
        document.getElementById('subject2').innerHTML = 'Subject: ' + inputSubject;
    } else {
        document.getElementById('subject2').innerHTML = 'No subject ';
    }
            
    if (inputDescription != '') {
        document.getElementById('description2').innerHTML = 'Description: ' + inputDescription;
    } else {
         document.getElementById('description2').innerHTML = 'No description';
     }

	}


	overlay.classList.remove("is-hidden");
	
	});
//END FORM
