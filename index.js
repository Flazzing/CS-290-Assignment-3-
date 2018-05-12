var horncreatebtn = document.getElementById('create-twit-button');

var modal = document.getElementById('create-twit-modal');
var backgroundmodal = document.getElementById('modal-backdrop');

var cancelbutton = document.getElementsByClassName('modal-cancel-button')[0];
var xclosebutton = document.getElementsByClassName("modal-close-button")[0];
var createbutton = document.getElementsByClassName("modal-accept-button")[0];


var inputtwit = document.getElementById("twit-text-input");
var inputauthor = document.getElementById("twit-attribution-input");

var searchinput = document.getElementById('navbar-search-input');
var searchbtn = document.getElementById('navbar-search-button');

function toggleModal(event) {
    if (modal.classList.contains("hidden")) {
        inputtwit.value = "";
        inputauthor.value = "";
        modal.classList.remove('hidden');
        backgroundmodal.classList.remove('hidden');
    }
    else{
        modal.classList.add('hidden');
        backgroundmodal.classList.add('hidden');
    }
}


function addTwit(event) {
  if ((inputtwit.value == "") || (inputauthor.value == "")) {
    alert("Please enter a string.")
    return;
  }

  var icon = document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add('fa-bullhorn');

  var twitIcon = document.createElement('div');
  twitIcon.classList.add('twit-icon');
  twitIcon.appendChild(icon);

  var text = document.createElement('p');
  text.classList.add('twit-text');
  text.textContent = inputtwit.value;

  var author = document.createElement('a');
  author.href = '#';
  author.textContent = inputauthor.value;

  var attribution = document.createElement('p');
  attribution.classList.add('twit-attribution');
  attribution.appendChild(author);

  var twitContent = document.createElement('div');
  twitContent.classList.add("twit-content");
  twitContent.appendChild(text);
  twitContent.appendChild(attribution);


  var twit = document.createElement('article');
  twit.classList.add('twit');
  twit.appendChild(twitIcon);
  twit.appendChild(twitContent);
  
  var body = document.getElementsByClassName('twit-container')[0];
  body.appendChild(twit);

  toggleModal();
}

function search(event) {
    var twits = document.getElementsByClassName('twit');
    for (i = 0; i < 8; i++) {
		if ((twits[i].childNodes[3].childNodes[1].textContent.includes(searchinput.value)) || (twits[i].childNodes[3].childNodes[3].textContent.includes(searchinput.value))) {
			twits[i].classList.remove('hidden');
			continue;
		}
		else {
			twits[i].classList.add('hidden');
		}
	}
    
    console.log(twits[0].childNodes[1].childNodes[0].textContent);
    
    if( twits.length > 8) {
            for(i=8 ; i < twits.length; i++) {
                    if ((twits[i].childNodes[1].childNodes[0].textContent.includes(searchinput.value)) || (twits[i].childNodes[1].childNodes[1].textContent.includes(searchinput.value))) {
                        twits[i].classList.remove('hidden');
                        continue;
                    }
                else {
                    twits[i].classList.add('hidden');
                }
            }
    }    
} // end function 
         

horncreatebtn.addEventListener('click', toggleModal);
createbutton.addEventListener('click', addTwit);
searchbtn.addEventListener('click', search);
searchinput.addEventListener('keyup', search);
cancelbutton.addEventListener('click', toggleModal);
xclosebutton.addEventListener('click', toggleModal);





