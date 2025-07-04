'use client'

import { useEffect } from 'react'

export function useMainScripts() {
  useEffect(() => {
    const toggleScrolled = () => {
      const body = document.body
      const header = document.querySelector('#header')
      if (!header) return
      if (
        !header.classList.contains('scroll-up-sticky') &&
        !header.classList.contains('sticky-top') &&
        !header.classList.contains('fixed-top')
      )
        return

      body.classList.toggle('scrolled', window.scrollY > 100)
    }

    const toggleScrollTop = () => {
      const scrollTop = document.querySelector('.scroll-top')
      if (scrollTop) {
        scrollTop.classList.toggle('active', window.scrollY > 100)
      }
    }

    const handleMobileToggle = () => {
      document.body.classList.toggle('mobile-nav-active')
      const btn = document.querySelector('.mobile-nav-toggle')
      btn?.classList.toggle('bi-list')
      btn?.classList.toggle('bi-x')
    }

    const initAOS = () => {
      if (typeof window !== 'undefined' && 'AOS' in window) {
        // @ts-ignore
        AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false })
      }
    }

    const initSwiper = () => {
      if (typeof window !== 'undefined' && 'Swiper' in window) {
        document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
          const configElement = swiperElement.querySelector('.swiper-config')
          if (!configElement) return
          const config = JSON.parse(configElement.innerHTML.trim())
          // @ts-ignore
          new Swiper(swiperElement as HTMLElement, config)
        })
      }
    }

    const initGLightbox = () => {
      if (typeof window !== 'undefined' && 'GLightbox' in window) {
        // @ts-ignore
        GLightbox({ selector: '.glightbox' })
      }
    }

    const initIsotope = () => {
      document.querySelectorAll('.isotope-layout').forEach((item) => {
        const layout = item.getAttribute('data-layout') ?? 'masonry'
        const filter = item.getAttribute('data-default-filter') ?? '*'
        const sort = item.getAttribute('data-sort') ?? 'original-order'
        const container = item.querySelector('.isotope-container')
        if (!container) return

        // @ts-ignore
        imagesLoaded(container, () => {
          // @ts-ignore
          const iso = new Isotope(container as HTMLElement, {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter,
            sortBy: sort,
          })

          item.querySelectorAll('.isotope-filters li').forEach((el) => {
            el.addEventListener('click', function () {
              item.querySelector('.filter-active')?.classList.remove('filter-active')
              this.classList.add('filter-active')
              iso.arrange({ filter: this.getAttribute('data-filter') })
              initAOS()
            })
          })
        })
      })
    }

    const initEvents = () => {
      document.querySelectorAll('#navmenu a').forEach((el) =>
        el.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) handleMobileToggle()
        })
      )

      document.querySelectorAll('.navmenu .toggle-dropdown').forEach((el) =>
        el.addEventListener('click', function (e) {
          e.preventDefault()
          this.parentElement?.classList.toggle('active')
          this.parentElement?.nextElementSibling?.classList.toggle('dropdown-active')
          e.stopImmediatePropagation()
        })
      )

      document.querySelector('.mobile-nav-toggle')?.addEventListener('click', () => {
        handleMobileToggle()
        const contactBtn = document.querySelector('#contact-cad')
        if (contactBtn) {
          contactBtn.setAttribute('style', 'display: none')
          setTimeout(() => contactBtn.setAttribute('style', 'display: block'), 10)
        }
      })

      document.querySelector('.scroll-top')?.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

      document.getElementById('info-btn')?.addEventListener('click', () => {
        console.log('Botão info clicado')
      })
    }

    const removePreloader = () => {
      document.querySelector('#preloader')?.remove()
    }

    window.addEventListener('load', removePreloader)
    window.addEventListener('load', toggleScrolled)
    window.addEventListener('load', toggleScrollTop)
    window.addEventListener('load', initAOS)
    window.addEventListener('load', initGLightbox)
    window.addEventListener('load', initSwiper)
    window.addEventListener('load', initIsotope)

    document.addEventListener('scroll', toggleScrolled)
    document.addEventListener('scroll', toggleScrollTop)

    initEvents()

    return () => {
      window.removeEventListener('load', removePreloader)
    }
  }, [])
}
