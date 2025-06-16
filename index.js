// Portfolio Simple et Élégant
class Portfolio {
  constructor() {
    this.currentPage = "home"
    this.isMenuOpen = false
    this.projectsData = this.getProjectsData()
    this.init()
  }

  init() {
    this.setupNavigation()
    this.setupAnimations()
    this.setupContactForm()
    this.setupMobileMenu()
    this.setupScrollEffects()
    this.setupScrollAnimations()
    this.setupProjectsModal()
  }

  // Données des projets
  getProjectsData() {
    return {
      0: {
        title: "Trésors de Banlieue",
        tech: ["HTML", "CSS", "JavaScript"],
        description:
          "Concevoir un site web attractif, accessible et informatif pour mettre en valeur les richesses culturelles et humaines des quartiers populaires.",
        details: `
        <h3>Trésors de Banlieue</h3>
        <p><strong>Contexte :</strong> Réalisé dans le cadre d'une SAE, ce projet consistait à créer un site vitrine mettant en valeur les richesses culturelles et humaines des quartiers populaires.</p>
        <p><strong>Objectif :</strong> Concevoir un site web attractif, accessible et informatif sur les initiatives locales.</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Mise en page responsive</li>
          <li>Intégration d'animations CSS/JS</li>
          <li>Respect des normes d'accessibilité</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Site responsive</li>
          <li>Formulaire de contact</li>
          <li>Animations douces</li>
          <li>Optimisation SEO de base</li>
        </ul>
        <p><strong>Résultat :</strong> Un site fonctionnel, respectant le cahier des charges, avec une navigation fluide et une présentation claire des contenus.</p>
      `,
      },
      1: {
        title: "Recueil de Besoins",
        tech: ["Analyse", "Questionnaire", "Documentation"],
        description:
          "Identifier les besoins et attentes des étudiants de Sorbonne Paris Nord pour proposer des pistes concrètes d'amélioration du cadre universitaire.",
        details: `
        <h3>Recueil de Besoins</h3>
        <p><strong>Contexte :</strong> Projet visant à interroger les étudiants de Sorbonne Paris Nord pour améliorer leur cadre universitaire.</p>
        <p><strong>Objectif :</strong> Identifier les besoins et attentes des étudiants pour proposer des pistes concrètes d'amélioration.</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Rédaction de questionnaires pertinents</li>
          <li>Analyse et synthèse des retours</li>
          <li>Restitution claire des résultats</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Formulaire en ligne ou papier</li>
          <li>Traitement et catégorisation des réponses</li>
          <li>Présentation visuelle des résultats</li>
        </ul>
        <p><strong>Résultat :</strong> Un rapport structuré avec des propositions d'amélioration réalistes et adaptées aux retours étudiants.</p>
      `,
      },
      2: {
        title: "Installation de Poste",
        tech: ["Linux", "Configuration", "Réseau"],
        description:
          "Mettre en service un poste de travail fonctionnel sous Linux avec les logiciels et configurations nécessaires à l'environnement pédagogique.",
        details: `
        <h3>Installation de Poste</h3>
        <p><strong>Contexte :</strong> Projet pratique visant à installer et configurer un poste de travail sous Linux.</p>
        <p><strong>Objectif :</strong> Mettre en service un poste fonctionnel avec les logiciels et configurations nécessaires.</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Choix et installation du système d'exploitation</li>
          <li>Paramétrage réseau et utilisateurs</li>
          <li>Installation des logiciels requis</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Poste prêt à l'emploi</li>
          <li>Comptes utilisateurs configurés</li>
          <li>Outils réseau et bureautique installés</li>
        </ul>
        <p><strong>Résultat :</strong> Un poste complet, stable et conforme aux exigences pédagogiques du projet.</p>
      `,
      },
      3: {
        title: "Jeu d'Échecs",
        tech: ["Java", "POO", "Interface"],
        description:
          "Appliquer les notions de classes, d'héritage et de logique de jeu en développant un jeu d'échecs simplifié en Java.",
        details: `
        <h3>Jeu d'Échecs</h3>
        <p><strong>Contexte :</strong> Réalisation d'un jeu d'échecs simplifié en Java, dans le cadre d'un apprentissage de la POO.</p>
        <p><strong>Objectif :</strong> Appliquer les notions de classes, d'héritage et de logique de jeu.</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Gestion du plateau et des pièces</li>
          <li>Respect des règles de déplacement</li>
          <li>Interface utilisateur simple</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Déplacement des pièces sur une grille</li>
          <li>Détection des coups valides</li>
          <li>Tour par tour entre deux joueurs</li>
        </ul>
        <p><strong>Résultat :</strong> Une application Java fonctionnelle avec une architecture claire et un jeu jouable en local.</p>
      `,
      },
      4: {
        title: "Implémentation Python",
        tech: ["Python", "Algorithmes", "Scripts"],
        description:
          "Approfondir les bases de Python et comprendre la logique algorithmique en développant des scripts pour résoudre des problèmes simples.",
        details: `
        <h3>Implémentation Python</h3>
        <p><strong>Contexte :</strong> Projet visant à développer des scripts Python pour résoudre des problèmes simples (tri, manipulation de fichiers, etc.).</p>
        <p><strong>Objectif :</strong> Approfondir les bases de Python et comprendre la logique algorithmique.</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Utilisation des fonctions et structures de données</li>
          <li>Respect des bonnes pratiques</li>
          <li>Modularité du code</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Scripts réutilisables</li>
          <li>Fonctions claires et commentées</li>
          <li>Résultats lisibles en console</li>
        </ul>
        <p><strong>Résultat :</strong> Une série de programmes fonctionnels, bien structurés et respectant les consignes du sujet.</p>
      `,
      },
      5: {
        title: "Gestion de Projet",
        tech: ["Gantt", "Planning", "Management"],
        description:
          "Maîtriser les étapes clés de la gestion de projet (planification, répartition, suivi) à travers un cas pratique en équipe.",
        details: `
        <h3>Gestion de Projet</h3>
        <p><strong>Contexte :</strong> Apprentissage des bases de la gestion de projet à travers un cas pratique en équipe.</p>
        <p><strong>Objectif :</strong> Maîtriser les étapes clés de la gestion (planification, répartition, suivi).</p>
        <p><strong>Défis techniques :</strong></p>
        <ul>
          <li>Élaboration d'un planning (Gantt)</li>
          <li>Répartition des rôles</li>
          <li>Suivi des livrables</li>
        </ul>
        <p><strong>Fonctionnalités :</strong></p>
        <ul>
          <li>Cahier des charges</li>
          <li>Planning de projet</li>
          <li>Tableau de suivi des tâches</li>
        </ul>
        <p><strong>Résultat :</strong> Un projet mené à bien avec une documentation complète (charte, planning, bilans), respectant les délais et les objectifs.</p>
      `,
      },
    }
  }

  // Navigation
  setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link")
    const buttons = document.querySelectorAll(".btn[data-page]")

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetPage = link.getAttribute("data-page")
        this.showPage(targetPage)
        this.setActiveNavLink(link)

        if (this.isMenuOpen) {
          this.toggleMobileMenu()
        }
      })
    })

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetPage = btn.getAttribute("data-page")
        if (targetPage) {
          this.showPage(targetPage)
          const targetLink = document.querySelector(`[data-page="${targetPage}"]`)
          this.setActiveNavLink(targetLink)
        }
      })
    })

    // Navigation au clavier
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.nextPage()
      }
      if (e.key === "ArrowLeft") {
        this.prevPage()
      }
      if (e.key === "Escape" && this.isMenuOpen) {
        this.toggleMobileMenu()
      }
    })
  }

  showPage(pageId) {
    const pages = document.querySelectorAll(".page")
    const targetPage = document.getElementById(pageId)

    // Masquer toutes les pages
    pages.forEach((page) => {
      if (page.classList.contains("active")) {
        page.style.opacity = "0"
        page.style.transform = "translateY(20px)"

        setTimeout(() => {
          page.classList.remove("active")
        }, 300)
      }
    })

    // Afficher la page cible
    setTimeout(() => {
      targetPage.classList.add("active")
      setTimeout(() => {
        targetPage.style.opacity = "1"
        targetPage.style.transform = "translateY(0)"
        this.triggerPageAnimations(pageId)
      }, 50)
    }, 350)

    this.currentPage = pageId
    history.pushState(null, null, `#${pageId}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  setActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => link.classList.remove("active"))
    activeLink.classList.add("active")
  }

  nextPage() {
    const pages = ["home", "about", "projets", "contact"]
    const currentIndex = pages.indexOf(this.currentPage)
    const nextIndex = (currentIndex + 1) % pages.length
    const nextPage = pages[nextIndex]

    this.showPage(nextPage)
    const nextLink = document.querySelector(`[data-page="${nextPage}"]`)
    this.setActiveNavLink(nextLink)
  }

  prevPage() {
    const pages = ["home", "about", "projets", "contact"]
    const currentIndex = pages.indexOf(this.currentPage)
    const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1
    const prevPage = pages[prevIndex]

    this.showPage(prevPage)
    const prevLink = document.querySelector(`[data-page="${prevPage}"]`)
    this.setActiveNavLink(prevLink)
  }

  // Animations spécifiques aux pages
  triggerPageAnimations(pageId) {
    switch (pageId) {
      case "home":
        this.animateStats()
        break
      case "about":
        this.animateSkillBars()
        break
      case "projets":
        this.animateProjectCards()
        break
      case "contact":
        this.animateContactItems()
        break
    }
  }

  // Animation des statistiques
  animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number")

    statNumbers.forEach((stat) => {
      const content = stat.textContent.trim()

      // Si c'est un symbole/emoji, on l'anime différemment
      if (content === "∞" || content === "🚀" || content === "💡" || content === "☕") {
        // Animation de pulsation pour les symboles
        stat.style.transform = "scale(0.8)"
        stat.style.opacity = "0.5"

        setTimeout(() => {
          stat.style.transition = "all 0.6s ease"
          stat.style.transform = "scale(1.1)"
          stat.style.opacity = "1"

          setTimeout(() => {
            stat.style.transform = "scale(1)"
          }, 300)
        }, Math.random() * 500)
      } else {
        // Animation normale pour les vrais nombres (si il y en a)
        const target = Number.parseInt(stat.getAttribute("data-target"))
        if (!isNaN(target)) {
          let current = 0
          const increment = target / 50

          const updateStat = () => {
            if (current < target) {
              current += increment
              stat.textContent = Math.floor(current)
              requestAnimationFrame(updateStat)
            } else {
              stat.textContent = target
            }
          }

          setTimeout(updateStat, Math.random() * 500)
        }
      }
    })
  }

  // Animation des barres de compétences
  animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress")

    skillBars.forEach((bar, index) => {
      const progress = bar.getAttribute("data-progress")

      setTimeout(() => {
        bar.style.width = progress + "%"
      }, index * 200)
    })
  }

  // Animation des cartes de projets
  animateProjectCards() {
    const projectCards = document.querySelectorAll(".project-card")

    projectCards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"

      setTimeout(() => {
        card.style.transition = "all 0.6s ease"
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 150)
    })
  }

  // Animation des éléments de contact
  animateContactItems() {
    const contactItems = document.querySelectorAll(".contact-item")

    contactItems.forEach((item, index) => {
      item.style.opacity = "0"
      item.style.transform = "translateX(-30px)"

      setTimeout(() => {
        item.style.transition = "all 0.5s ease"
        item.style.opacity = "1"
        item.style.transform = "translateX(0)"
      }, index * 150)
    })
  }

  // Menu mobile
  setupMobileMenu() {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        this.toggleMobileMenu()
      })
    }
  }

  toggleMobileMenu() {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")
    const bars = hamburger.querySelectorAll(".bar")

    this.isMenuOpen = !this.isMenuOpen

    if (this.isMenuOpen) {
      navMenu.classList.add("active")
      bars[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      bars[1].style.opacity = "0"
      bars[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      navMenu.classList.remove("active")
      bars[0].style.transform = "none"
      bars[1].style.opacity = "1"
      bars[2].style.transform = "none"
    }
  }

  // Modal des projets
  setupProjectsModal() {
    const detailsBtns = document.querySelectorAll(".project-details-btn")
    const modal = document.getElementById("project-modal")
    const modalClose = document.getElementById("modal-close")
    const modalBody = document.getElementById("modal-body")
    const modalOverlay = document.querySelector(".modal-overlay")

    // Ouvrir les détails
    detailsBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        const projectId = btn.getAttribute("data-project")
        const projectData = this.projectsData[projectId]

        if (projectData) {
          modalBody.innerHTML = projectData.details
          modal.classList.add("active")
          document.body.style.overflow = "hidden"

          // Focus sur le bouton de fermeture pour l'accessibilité
          setTimeout(() => {
            modalClose.focus()
          }, 100)
        }
      })
    })

    // Fermer la modal
    const closeModal = () => {
      modal.classList.remove("active")
      document.body.style.overflow = "auto"
    }

    modalClose.addEventListener("click", closeModal)
    modalOverlay.addEventListener("click", closeModal)

    // Fermer avec la touche Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal()
      }
    })
  }

  // Formulaire de contact
  setupContactForm() {
    const form = document.getElementById("contactForm")
    if (!form) return

    const submitBtn = form.querySelector('button[type="submit"]')

    form.addEventListener("submit", async (e) => {
      e.preventDefault()

      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...'
      submitBtn.disabled = true

      // Simulation d'envoi
      await this.simulateEmailSend(new FormData(form))

      // Animation de succès
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !'
      submitBtn.style.backgroundColor = "#10b981"

      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.style.backgroundColor = ""
        submitBtn.disabled = false
        form.reset()

        // Reset des labels
        const labels = form.querySelectorAll("label")
        labels.forEach((label) => {
          label.style.top = "1rem"
          label.style.fontSize = "1rem"
          label.style.color = "#6b7280"
        })
      }, 3000)
    })
  }

  async simulateEmailSend(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Message envoyé:", {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          projectType: formData.get("projectType"),
          message: formData.get("message"),
        })
        resolve()
      }, 2000)
    })
  }

  // Effets de scroll
  setupScrollEffects() {
    let ticking = false

    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset

      // Parallax léger sur l'image de profil
      const profileImg = document.querySelector(".profile-img")
      if (profileImg && scrolled < window.innerHeight) {
        profileImg.style.transform = `translateY(${scrolled * 0.1}px)`
      }

      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects)
        ticking = true
      }
    })
  }

  // Animations générales
  setupAnimations() {
    // Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observer les éléments à animer
    const animatedElements = document.querySelectorAll(".text-block, .timeline-item, .skill-category, .contact-item")

    animatedElements.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = `all 0.6s ease ${index * 0.1}s`
      observer.observe(el)
    })
  }

  // Animation des éléments au scroll
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"

          // Animation spéciale pour les cartes de service
          if (entry.target.classList.contains("service-card")) {
            entry.target.style.transform = "translateY(0) scale(1)"
          }

          // Animation spéciale pour les items tech
          if (entry.target.classList.contains("tech-item")) {
            entry.target.style.transform = "translateY(0) rotateY(0deg)"
          }
        }
      })
    }, observerOptions)

    // Observer les nouveaux éléments
    const animatedElements = document.querySelectorAll(".service-card, .tech-item, .cert-item, .interest-item")

    animatedElements.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.transition = `all 0.6s ease ${index * 0.1}s`

      if (el.classList.contains("service-card")) {
        el.style.transform = "translateY(30px) scale(0.9)"
      } else if (el.classList.contains("tech-item")) {
        el.style.transform = "translateY(20px) rotateY(45deg)"
      } else {
        el.style.transform = "translateY(20px)"
      }

      observer.observe(el)
    })
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  const portfolio = new Portfolio()

  // Gestion de l'historique
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1) || "home"
    portfolio.showPage(hash)
    const link = document.querySelector(`[data-page="${hash}"]`)
    if (link) portfolio.setActiveNavLink(link)
  })

  // Page initiale
  const initialPage = window.location.hash.substring(1) || "home"
  portfolio.showPage(initialPage)

  console.log("Portfolio chargé avec succès")
})

// Gestion des erreurs
window.addEventListener("error", (e) => {
  console.error("Erreur détectée:", e.error)
})

// Resize handler
window.addEventListener("resize", () => {
  // Ajustements responsive si nécessaire
  console.log("Fenêtre redimensionnée")
})
