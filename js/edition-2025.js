// Script spécifique pour le slider de la page édition 2025
document.addEventListener("DOMContentLoaded", () => {
  // Éléments du slider
  const sliderContainer = document.querySelector(".slider")
  const sliderList = document.querySelector(".slider .list")
  const sliderItems = document.querySelectorAll(".slider .list .item")
  const thumbnailItems = document.querySelectorAll(".slider .thumbnail .item")
  const prevBtn = document.getElementById("prev")
  const nextBtn = document.getElementById("next")
  const thumbnailContainer = document.querySelector(".slider .thumbnail")
  const arrowsContainer = document.querySelector(".slider .arrows")

  // Ajouter la 11ème thématique manquante
  function addMissingTheme() {
    // Créer le 11ème élément pour la liste principale
    const newItem = document.createElement("div")
    newItem.className = "item"
    newItem.innerHTML = `
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1146674-tresors-de-banlieues-2025-nos-photos-tresors-banlieues-2-fotor-2025021485942.jpg-BOc4zAYT7wOftP6INyo6pA7oSCVljj.jpeg">
      <div class="content">
        <p>Thème</p>
        <h2>Avenir des banlieues</h2>
        <p>Réflexions et projections sur le futur des quartiers périphériques et leur développement durable.</p>
      </div>
    `
    sliderList.appendChild(newItem)
  }

  // Repositionner les flèches de navigation
  function repositionArrows() {
    // Créer un style pour repositionner les flèches
    const style = document.createElement("style")
    style.textContent = `
      .slider .arrows {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 100;
        flex-direction: row;
      }
      
      .slider .arrows button {
        background-color: var(--red-primary);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 0.3s;
        opacity: 0.7;
      }
      
      .slider .arrows button:hover {
        opacity: 1;
        transform: scale(1.1);
      }
      
      .slider .arrows button#prev:before {
        content: "‹";
      }
      
      .slider .arrows button#next:before {
        content: "›";
      }
    `
    document.head.appendChild(style)
  }

  // Ajouter les miniatures manquantes
  function addMissingThumbnails() {
    // Vérifier si nous avons besoin d'ajouter la 11ème thématique
    if (sliderItems.length === 10) {
      addMissingTheme()
    }

    // Mettre à jour la liste des slides après l'ajout
    const updatedSliderItems = document.querySelectorAll(".slider .list .item")

    // Vérifier si nous avons besoin d'ajouter des miniatures
    if (thumbnailItems.length < updatedSliderItems.length) {
      // Créer les miniatures manquantes
      for (let i = thumbnailItems.length; i < updatedSliderItems.length; i++) {
        // Obtenir le contenu du slide correspondant
        const slideContent = updatedSliderItems[i].querySelector(".content h2").textContent

        // Créer une nouvelle miniature
        const newThumbnail = document.createElement("div")
        newThumbnail.className = "item"
        newThumbnail.innerHTML = `
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1146674-tresors-de-banlieues-2025-nos-photos-tresors-banlieues-2-fotor-2025021485942.jpg-BOc4zAYT7wOftP6INyo6pA7oSCVljj.jpeg">
          <div class="content">${slideContent}</div>
        `

        // Ajouter l'événement de clic
        newThumbnail.addEventListener("click", () => {
          goToSlide(i)
        })

        // Ajouter la miniature au conteneur
        thumbnailContainer.appendChild(newThumbnail)
      }
    }
  }

  // Variables
  let activeIndex = 0
  let autoplayInterval
  let totalItems

  // Initialisation
  function initSlider() {
    // Repositionner les flèches
    repositionArrows()

    // Ajouter les miniatures manquantes
    addMissingThumbnails()

    // Mettre à jour la liste des slides et miniatures après l'ajout
    const updatedSliderItems = document.querySelectorAll(".slider .list .item")
    const updatedThumbnailItems = document.querySelectorAll(".slider .thumbnail .item")

    // Mettre à jour le nombre total d'éléments
    totalItems = updatedSliderItems.length

    // Ajouter les événements aux miniatures
    updatedThumbnailItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        goToSlide(index)
        resetAutoplay()
        return false
      })
    })

    // Ajouter les événements aux boutons
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault()
        goToPrevSlide()
        resetAutoplay()
        return false
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault()
        goToNextSlide()
        resetAutoplay()
        return false
      })
    }

    // Ajouter les événements clavier
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevSlide()
        resetAutoplay()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goToNextSlide()
        resetAutoplay()
      }
    })

    // Démarrer l'autoplay
    startAutoplay()

    // Pause de l'autoplay au survol du slider
    sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval)
    })

    // Reprise de l'autoplay quand la souris quitte le slider
    sliderContainer.addEventListener("mouseleave", () => {
      startAutoplay()
    })

    // Afficher le premier slide
    showSlide(activeIndex)
  }

  // Démarrer l'autoplay
  function startAutoplay() {
    clearInterval(autoplayInterval)
    autoplayInterval = setInterval(() => {
      goToNextSlide()
    }, 30000) // 30 secondes
  }

  // Réinitialiser l'autoplay
  function resetAutoplay() {
    clearInterval(autoplayInterval)
    startAutoplay()
  }

  // Afficher un slide spécifique
  function showSlide(index) {
    // Mettre à jour la liste des slides et miniatures
    const updatedSliderItems = document.querySelectorAll(".slider .list .item")
    const updatedThumbnailItems = document.querySelectorAll(".slider .thumbnail .item")

    // Masquer tous les slides
    updatedSliderItems.forEach((item) => {
      item.classList.remove("active")
    })

    // Désactiver toutes les miniatures
    updatedThumbnailItems.forEach((item) => {
      item.classList.remove("active")
    })

    // Afficher le slide actif
    updatedSliderItems[index].classList.add("active")
    updatedThumbnailItems[index].classList.add("active")

    // Faire défiler les miniatures pour que l'élément actif soit visible
    // Utiliser scrollLeft au lieu de scrollIntoView pour éviter le défilement de la page
    const thumbnailWidth = updatedThumbnailItems[0].offsetWidth
    const scrollPosition = index * (thumbnailWidth + 10) - thumbnailContainer.offsetWidth / 2 + thumbnailWidth / 2

    thumbnailContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    })

    // Mettre à jour l'index actif
    activeIndex = index
  }

  // Aller à un slide spécifique
  function goToSlide(index) {
    showSlide(index)
  }

  // Aller au slide précédent
  function goToPrevSlide() {
    let newIndex = activeIndex - 1
    if (newIndex < 0) {
      newIndex = totalItems - 1
    }
    showSlide(newIndex)
  }

  // Aller au slide suivant
  function goToNextSlide() {
    let newIndex = activeIndex + 1
    if (newIndex >= totalItems) {
      newIndex = 0
    }
    showSlide(newIndex)
  }

  // Initialiser le slider
  initSlider()
})

// Fonctions communes du site
document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  const navbarToggle = document.getElementById("navbar-toggle")
  const navbarMenu = document.getElementById("navbar-menu")
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarMenu && navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active")
      }
    })
  })

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Scroll animations
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

  // Parallax effect for hero sections
  const heroElements = document.querySelectorAll(".hero-bg")
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    heroElements.forEach((element) => {
      element.style.transform = `translateY(${scrolled * 0.3}px)`
    })
  })
})

