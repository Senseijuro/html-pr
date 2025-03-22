// Script spécifique à la page d'accueil (index.html)
document.addEventListener("DOMContentLoaded", () => {
  // Testimonials slider avec autoplay
  const testimonialSlider = document.getElementById("testimonials-slider")

  if (testimonialSlider) {
    const slides = testimonialSlider.querySelectorAll(".testimonial-slide")
    const dots = testimonialSlider.querySelectorAll(".dot")
    const prevBtn = testimonialSlider.querySelector(".prev")
    const nextBtn = testimonialSlider.querySelector(".next")
    let currentIndex = 0
    let isAnimating = false
    let autoplayInterval

    // Initialize slider
    function showSlide(index) {
      if (isAnimating) return
      isAnimating = true

      // Hide current slide
      slides[currentIndex].classList.remove("active")
      dots[currentIndex].classList.remove("active")

      // Show new slide
      currentIndex = index
      slides[currentIndex].classList.add("active")
      dots[currentIndex].classList.add("active")

      setTimeout(() => {
        isAnimating = false
      }, 600)
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
        resetAutoplay() // Réinitialiser l'autoplay après un clic
      })
    })

    // Event listeners for arrows
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let newIndex = currentIndex - 1
        if (newIndex < 0) newIndex = slides.length - 1
        showSlide(newIndex)
        resetAutoplay() // Réinitialiser l'autoplay après un clic
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let newIndex = currentIndex + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
        resetAutoplay() // Réinitialiser l'autoplay après un clic
      })
    }

    // Autoplay function
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        let newIndex = currentIndex + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
      }, 5000) // Change slide every 5 seconds
    }

    // Reset autoplay
    function resetAutoplay() {
      clearInterval(autoplayInterval)
      startAutoplay()
    }

    // Start autoplay on page load
    startAutoplay()

    // Pause autoplay when hovering over the slider
    testimonialSlider.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval)
    })

    // Resume autoplay when mouse leaves the slider
    testimonialSlider.addEventListener("mouseleave", () => {
      startAutoplay()
    })
  }

  // Nouveau slider pour la Halle des Grésillons
  const fullWidthSlider = document.getElementById("full-width-slider")

  if (fullWidthSlider) {
    const slides = fullWidthSlider.querySelectorAll(".full-width-slide")
    const slidesContainer = fullWidthSlider.querySelector(".full-width-slides")
    const dots = document.querySelectorAll(".full-width-dot")
    const prevBtn = fullWidthSlider.querySelector(".prev")
    const nextBtn = fullWidthSlider.querySelector(".next")
    let currentIndex = 0
    let isAnimating = false
    let autoplayInterval

    // Initialize slider
    function showSlide(index) {
      if (isAnimating) return
      isAnimating = true

      // Update current index
      currentIndex = index

      // Update slides position
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`

      // Update dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })

      setTimeout(() => {
        isAnimating = false
      }, 500)
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
        resetAutoplay()
      })
    })

    // Event listeners for arrows
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let newIndex = currentIndex - 1
        if (newIndex < 0) newIndex = slides.length - 1
        showSlide(newIndex)
        resetAutoplay()
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let newIndex = currentIndex + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
        resetAutoplay()
      })
    }

    // Autoplay function
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        let newIndex = currentIndex + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
      }, 4000) // Change slide every 4 seconds
    }

    // Reset autoplay
    function resetAutoplay() {
      clearInterval(autoplayInterval)
      startAutoplay()
    }

    // Start autoplay on page load
    startAutoplay()

    // Pause autoplay when hovering over the slider
    fullWidthSlider.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval)
    })

    // Resume autoplay when mouse leaves the slider
    fullWidthSlider.addEventListener("mouseleave", () => {
      startAutoplay()
    })
  }
})

