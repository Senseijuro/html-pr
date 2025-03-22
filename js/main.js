// DOM Elements communs à toutes les pages
const navbar = document.getElementById("navbar")
const navbarToggle = document.getElementById("navbar-toggle")
const navbarMenu = document.getElementById("navbar-menu")
const currentYearElement = document.getElementById("current-year")

// Set current year in footer
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear()
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarMenu.classList.contains("active")) {
      navbarMenu.classList.remove("active")
    }
  })
})

// Scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
})

// Parallax effect for hero sections
window.addEventListener("scroll", () => {
  const heroElements = document.querySelectorAll(".hero-bg")
  const scrolled = window.scrollY

  heroElements.forEach((element) => {
    element.style.transform = `translateY(${scrolled * 0.3}px)`
  })
})

