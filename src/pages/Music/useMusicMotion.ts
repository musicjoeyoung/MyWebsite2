import { RefObject, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, CustomEase)
CustomEase.create("music-flow", "0.625, 0.05, 0, 1")

const useMusicMotion = (pageRef: RefObject<HTMLDivElement>) => {
    useLayoutEffect(() => {
        const page = pageRef.current
        if (!page) return

        const media = gsap.matchMedia()
        let disposed = false
        const refresh = () => {
            if (!disposed) ScrollTrigger.refresh()
        }

        media.add("(prefers-reduced-motion: no-preference)", () => {
            const hero = page.querySelector<HTMLElement>(".music-hero")
            const entrance = gsap.timeline({ defaults: { ease: "music-flow", duration: 1.1 } })
            entrance.from(".music-hero__line > span", { yPercent: 115, rotate: 3, stagger: 0.12 })
                .from("[data-hero-reveal]", { opacity: 0, y: 24, stagger: 0.1, duration: 0.8 }, "-=0.6")
                .from(".music-hero__visual", { clipPath: "inset(8% 5% 8% 5%)", duration: 1.4 }, 0)

            gsap.to(".music-hero__image", {
                yPercent: 16,
                scale: 1.08,
                ease: "none",
                scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
            })

            gsap.fromTo(".music-instruments__track", { xPercent: -12 }, {
                xPercent: -35,
                ease: "none",
                scrollTrigger: { trigger: ".music-instruments", start: "top bottom", end: "bottom top", scrub: 0.7 }
            })

            const stories = gsap.utils.toArray<HTMLElement>(".music-story", page)
            stories.forEach((story, index) => {
                gsap.fromTo(story.querySelector(".music-story__image"), { yPercent: -6, scale: 1.12 }, {
                    yPercent: 6,
                    ease: "none",
                    scrollTrigger: { trigger: story, start: "top bottom", end: "bottom top", scrub: true }
                })
                const nextStory = stories[index + 1]
                if (nextStory) {
                    gsap.to(story.querySelector(".music-story__surface"), {
                        scale: 0.94,
                        rotation: index % 2 === 0 ? -2 : 2,
                        filter: "brightness(0.6)",
                        ease: "none",
                        scrollTrigger: { trigger: nextStory, start: "top 85%", end: "top 18%", scrub: true }
                    })
                }
            })

            page.querySelectorAll<HTMLElement>("[data-music-section]").forEach(section => {
                const targets = section.querySelectorAll("[data-music-reveal], h2, .bio__img, .bio__paragraph, .works__list h4, .media__item")
                targets.forEach(target => {
                    gsap.from(target, {
                        y: 36,
                        opacity: 0,
                        duration: 0.85,
                        ease: "music-flow",
                        scrollTrigger: { trigger: target, start: "top 94%", once: true }
                    })
                })
                gsap.from(section, {
                    "--music-rule-scale": 0,
                    duration: 1.2,
                    ease: "music-flow",
                    scrollTrigger: { trigger: section, start: "top 90%", once: true }
                })
            })
        }, page)

        const images = Array.from(page.querySelectorAll("img"))
        images.forEach(image => image.addEventListener("load", refresh))
        document.fonts.ready.then(refresh)
        window.addEventListener("load", refresh)

        return () => {
            disposed = true
            images.forEach(image => image.removeEventListener("load", refresh))
            window.removeEventListener("load", refresh)
            media.revert()
        }
    }, [pageRef])
}

export default useMusicMotion