const burger = document.getElementById('burger')
const navLinks = document.getElementById('nav-links')
const links = navLinks.querySelectorAll('a') // Select all links in the navigation

burger.addEventListener('click', () => {
	navLinks.classList.toggle('active') // Toggle active class for navigation
	burger.classList.toggle('active') // Toggle active class for burger
})

// Close the hamburger menu when a navigation link is clicked
links.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('active') // Remove active class from navigation
		burger.classList.remove('active') // Remove active class from burger
	})
})

// Adding scroll animation for header
let lastScrollTop = 0
const header = document.querySelector('header')

window.addEventListener('scroll', function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop

	if (scrollTop > lastScrollTop) {
		header.style.transform = 'translateY(-100%)'
	} else {
		header.style.transform = 'translateY(0)'
	}
	lastScrollTop = scrollTop
})

// Modal functionality
const modal = document.getElementById('application-modal')
const openModalBtn = document.querySelector('.apply-button')
const closeModalBtn = document.getElementById('close-modal')
const successMessage = document.getElementById('success-message')
const form = document.getElementById('application-form')

openModalBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})

form.addEventListener('submit', event => {
	event.preventDefault()

	successMessage.style.display = 'block'

	setTimeout(() => {
		modal.style.display = 'none'
		successMessage.style.display = 'none'
		form.reset()
	}, 2000)
})
