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

//SLIDER
        let items = document.querySelectorAll('.item');
        let currentItem = 0;
        let isEnabled = true;

        function changeCurrentItem(n) {
            currentItem = ( n  + items.length ) % items.length;
        }

        function hideItem(direction) {
            isEnabled = false;
            items[currentItem].classList.add(direction);
            items[currentItem].addEventListener('animationend', function() {
                this.classList.remove('activated', direction);
            });
        }
        
        function showItem(direction) {
            items[currentItem].classList.add('next', direction);
            items[currentItem].addEventListener('animationend', function() {
                this.classList.remove('next', direction);
                this.classList.add('activated');
                isEnabled = true;
            });
        }

        function previousItem(n) {
            hideItem('to-right');
            changeCurrentItem(n - 1);
            showItem('from-left');
            changeBackgroundColor();
        }

        function nextItem(n) {
            hideItem('to-left');
            changeCurrentItem(n + 1);
            showItem('from-right');
            changeBackgroundColor();
        }
       
         function changeBackgroundColor() {
            if(document.querySelector('.item').classList.contains('activated')) {
                let slider = document.querySelector('.slider');
                slider.style.backgroundColor = '#648bf0';
            } else {
            	let slider = document.querySelector('.slider');
                slider.style.backgroundColor = '#f06c64';
            }
        }

        document.querySelector('.arrow.arrow-left').addEventListener('click', function() {
            if (isEnabled) {
                previousItem(currentItem);
            } 
            });

        document.querySelector('.arrow.arrow-right').addEventListener('click', function() {
            if (isEnabled) {
                nextItem(currentItem);
            }
        });

// screen off phone
       const verticalIphoneArea = document.querySelector('.vertical-screen');
       const verticalblackScreen = document.querySelector('.iphonev-black');
       const horizontalIphoneArea = document.querySelector('.horizontal-screen');
       const horizontalblackScreen = document.querySelector('.iphoneh-black');

       verticalIphoneArea.addEventListener('click', () => {
       verticalblackScreen.classList.toggle('visible-screen');
       });

       horizontalIphoneArea.addEventListener('click', () => {
       horizontalblackScreen.classList.toggle('visible-screen');
       });
//SLIDER

//MENU
    const $nav = document.querySelector('.navigation');
    $nav.addEventListener('click', event => {
        if( event.target.classList.contains('header__menu_link') ) {
            $nav.querySelectorAll('.header__menu__item .header__menu_link').forEach(item => item.classList.remove('header__menu_active'));
            event.target.classList.add('header__menu_active');
        }
    });
//MENU

//PORTFOLIO
	const $portfolioNav = document.querySelector('.portfolio__menu');
    const $portfolioItem = document.querySelectorAll('.portfolio__item');
    $portfolioNav.addEventListener('click', event => {
        if( event.target.classList.contains('portfolio__nav') ) {
            $portfolioNav.querySelectorAll('.portfolio__nav').forEach(item => item.classList.remove('portfolio__nav-active'));
            event.target.classList.add('portfolio__nav-active');
            const portfolioNavData = event.target.dataset.portfolioNav;
            if( portfolioNavData === 'all' ) {
                $portfolioItem.forEach(item => item.removeAttribute('style'));
            } else {
                $portfolioItem.forEach(item => item.removeAttribute('style'));
                document.querySelectorAll(`.portfolio__item[data-portfolio-pic = ${portfolioNavData}]`).forEach((item, index) => item.style.order = `-${index}`)
            }
        }
    });

    const $portfolioContent = document.querySelector('.portfolio__projects');
    $portfolioContent.addEventListener('click', event => {
       if(event.target.classList.contains('portfolio__img')) {
           $portfolioItem.forEach(item => item.classList.remove('portfolio__item-active'));
           event.target.parentNode.classList.toggle('portfolio__item-active')
       }
    });
//PORTFOLIO
