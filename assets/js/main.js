/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')  
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is hiigher than 350 vh, add show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')


const calculateBmi = (e) =>{
    e.preventDefault();

    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // show message
        calculateMessage.textContent = 'Fill in height and weight';

        // Remove message after 3 seconds
        setTimeout(() =>{
            calculateMessage.textContent = '';
        }, 3000)
    }
    else{
        // BMI formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm*cm));

        // Show your health status
        if(bmi < 18.5){
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
        }
        else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 👍`
        }
        else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 🤯`
        }

        // To clear input field
        calculateCm.value = ''
        calculateKg.value = ''

        // // Remove message after 4 seconds
        setTimeout(() =>{
            calculateMessage.textContent = '';
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e)=>{
    e.preventDefault();

    // Add and remove color
    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red');
    

        // show message
        contactMessage.textContent = 'You must enter your email 👆🏻'
        
        // Remove message after 3 seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    }
    else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_zd1xx88', 'template_j2lfdra', '#contact-form', '58Ypm1AnitK61hmb1')
            .then(() =>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 💪🏻'
            
        
            // Remove message after 3 seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 3000)

        }, (error) =>{

        // Mail sending error
        alert('OOPS! Something has failed...', error)

        })

        contactUser.value = '';

    }
}

contactForm.addEventListener('submit', sendEmail)