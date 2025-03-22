// Script spécifique pour la page équipe
document.addEventListener("DOMContentLoaded", () => {
  // Configuration du slider
  const slider = document.getElementById("team-slider")
  const prevBtn = document.getElementById("team-prev")
  const nextBtn = document.getElementById("team-next")
  const dotsContainer = document.getElementById("team-dots")

  if (!slider || !prevBtn || !nextBtn || !dotsContainer) return

  const cards = slider.querySelectorAll(".team-card")
  const cardCount = cards.length
  let currentPosition = 0
  let slidesToShow = getSlidesToShow()
  let maxPosition = Math.max(0, cardCount - slidesToShow)

  // Initialisation
  function init() {
    // Créer les points de navigation
    createDots()

    // Mettre à jour l'affichage initial
    updateSlider()

    // Ajouter les écouteurs d'événements
    prevBtn.addEventListener("click", goToPrev)
    nextBtn.addEventListener("click", goToNext)

    // Écouteur pour le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize)
  }

  // Créer les points de navigation
  function createDots() {
    dotsContainer.innerHTML = ""
    const totalDots = Math.ceil(cardCount / slidesToShow)

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("button")
      dot.classList.add("team-slider-dot")
      if (i === 0) dot.classList.add("active")
      dot.setAttribute("aria-label", `Groupe ${i + 1}`)
      dot.dataset.index = i

      dot.addEventListener("click", () => {
        goToSlide(i * slidesToShow)
      })

      dotsContainer.appendChild(dot)
    }
  }

  // Obtenir le nombre de slides à afficher en fonction de la largeur de l'écran
  function getSlidesToShow() {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  }

  // Gérer le redimensionnement de la fenêtre
  function handleResize() {
    const newSlidesToShow = getSlidesToShow()

    if (newSlidesToShow !== slidesToShow) {
      slidesToShow = newSlidesToShow
      maxPosition = Math.max(0, cardCount - slidesToShow)

      // Ajuster la position actuelle si nécessaire
      if (currentPosition > maxPosition) {
        currentPosition = maxPosition
      }

      // Recréer les points de navigation
      createDots()

      // Mettre à jour l'affichage
      updateSlider()
    }
  }

  // Mettre à jour l'affichage du slider
  function updateSlider() {
    // Calculer le pourcentage de déplacement
    const translateValue = -(currentPosition * (100 / slidesToShow))
    slider.style.transform = `translateX(${translateValue}%)`

    // Mettre à jour l'état des boutons
    prevBtn.disabled = currentPosition <= 0
    nextBtn.disabled = currentPosition >= maxPosition

    // Mettre à jour les points actifs
    updateDots()
  }

  // Mettre à jour les points de navigation
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".team-slider-dot")
    const activeDotIndex = Math.floor(currentPosition / slidesToShow)

    dots.forEach((dot, index) => {
      if (index === activeDotIndex) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  // Aller au slide précédent
  function goToPrev() {
    if (currentPosition > 0) {
      currentPosition--
      updateSlider()
    }
  }

  // Aller au slide suivant
  function goToNext() {
    if (currentPosition < maxPosition) {
      currentPosition++
      updateSlider()
    }
  }

  // Aller à un slide spécifique
  function goToSlide(position) {
    currentPosition = Math.max(0, Math.min(position, maxPosition))
    updateSlider()
  }

  // Effet d'agrandissement au survol
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Réduire légèrement les autres cartes
      cards.forEach((c) => {
        if (c !== card) {
          c.style.transform = "scale(0.95)"
          c.style.opacity = "0.8"
        }
      })
    })

    card.addEventListener("mouseleave", () => {
      // Restaurer toutes les cartes
      cards.forEach((c) => {
        c.style.transform = ""
        c.style.opacity = ""
      })
    })
  })

  // Initialiser le slider
  init()

  // Animation des cartes d'équipe au scroll
  const teamCards = document.querySelectorAll(".team-card")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  teamCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    observer.observe(card)
  })

  // Effet de survol amélioré pour les cartes
  teamCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Ajouter un effet de lumière plus prononcé
      const imageOverlay = card.querySelector(".team-card-image::before")
      if (imageOverlay) {
        imageOverlay.style.opacity = "1"
      }
    })

    card.addEventListener("mouseleave", () => {
      // Réduire l'effet de lumière
      const imageOverlay = card.querySelector(".team-card-image::before")
      if (imageOverlay) {
        imageOverlay.style.opacity = "0.7"
      }
    })
  })

  // Animation des icônes de valeurs
  const valueIcons = document.querySelectorAll(".value-icon")

  valueIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.1) rotate(5deg)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0deg)"
    })
  })
})

