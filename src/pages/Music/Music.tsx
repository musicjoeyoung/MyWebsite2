import "./Music.scss"

import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import Bio from "../../components/Bio/Bio"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import { Link } from "../../types/link"
import Media from "../../components/Media/Media"
import Navbar from "../../components/Navbar/Navbar"
import Scores from "../../components/Scores/Scores"
import Works from "../../components/Works/Works"
import useMusicMotion from "./useMusicMotion"

const musicImages = {
    guitar: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=2000&q=85",
    studio: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=85",
    microphone: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85"
}

const musicStories = [
    { number: "01", title: "On the page.", category: "Composition", image: musicImages.studio, alt: "Music studio with instruments and recording equipment", href: "#scores", link: "Explore the scores" },
    { number: "02", title: "In the sound.", category: "Original music", image: musicImages.guitar, alt: "A close-up of an acoustic guitar", href: "#works", link: "Discover the works" },
    { number: "03", title: "In conversation.", category: "Interviews & broadcasts", image: musicImages.microphone, alt: "A microphone ready for a performance", href: "#media", link: "Listen & explore" }
]

const Music = () => {
    const pageRef = useRef<HTMLDivElement>(null)
    useMusicMotion(pageRef)

    const musicLinks: Link[] = [
        { label: "Home", url: "/music" },
        { label: "About", url: "#about" },
        { label: "Scores", url: "#scores" },
        { label: "Works", url: "#works" },
        //{ label: "Videos", url: "#video" },
        { label: "Media", "url": "#media" },
        { label: "Contact", url: "#contact" }
    ]

    const bio = <>
        A composer and performer, I grew up in Indianapolis, Indiana, surrounded by bluegrass, jazz, and classical music that shaped my passion for music. Now based in New York City, I create original music that blends these influences with inspiration from both classical and contemporary artists. My work has taken me across the United States, Canada, and Europe, sharing my music with audiences far and wide and performing on guitar, trumpet, banjo, and mandolin.

    </>
    return (
        <div className="music-page" ref={pageRef}>
            <Navbar links={musicLinks} backgroundColor="black" />
            <main>
                <section className="music-hero" aria-labelledby="music-title">
                    <div className="music-hero__visual">
                        <img className="music-hero__image" src={musicImages.guitar} alt="Acoustic guitar" loading="eager" />
                    </div>
                    <div className="music-hero__content">
                        <p className="music-eyebrow" data-hero-reveal>Composer / Performer</p>
                        <h1 id="music-title" className="music-hero__title">
                            <span className="music-hero__line"><span>Joseph</span></span>
                            <span className="music-hero__line"><span>Young<span className="music-hero__period">.</span></span></span>
                        </h1>
                        <div className="music-hero__bottom" data-hero-reveal>
                            <p>Rooted in tradition.<br />Always finding a new sound.</p>
                            <a className="music-link" href="#works">Explore the music <ArrowDown size={20} aria-hidden="true" /></a>
                            <span className="music-hero__location">New York City</span>
                        </div>
                    </div>
                </section>

                <div className="music-instruments" aria-label="Guitar, trumpet, banjo, and mandolin">
                    <div className="music-instruments__track" aria-hidden="true">
                        {[0, 1, 2].map(repeat => <span key={repeat}>Guitar <i /> Trumpet <i /> Banjo <i /> Mandolin <i /></span>)}
                    </div>
                </div>

                <div className="music-section music-section--bio" data-music-section>
                    <span className="music-section__label" data-music-reveal>01 / The musician</span>
                    <Bio bio={bio} backgroundColor="transparent" />
                </div>

                <section className="music-stories" aria-labelledby="music-stories-title">
                    <div className="music-stories__intro" data-music-section>
                        <p className="music-eyebrow" data-music-reveal>A life in music</p>
                        <h2 id="music-stories-title" data-music-reveal>Many influences.<br /><span>One voice.</span></h2>
                    </div>
                    <div className="music-stories__stack">
                        {musicStories.map(story => (
                            <article className="music-story" key={story.number}>
                                <div className="music-story__surface">
                                    <img className="music-story__image" src={story.image} alt={story.alt} loading="lazy" width={1600} height={1000} />
                                    <div className="music-story__top"><span>{story.category}</span><span>{story.number} / 03</span></div>
                                    <div className="music-story__bottom">
                                        <h3>{story.title}</h3>
                                        <a href={story.href} className="music-link">{story.link}<ArrowUpRight size={24} aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <div className="music-section" data-music-section>
                    <span className="music-section__label" data-music-reveal>02 / On the page</span>
                    <Scores />
                </div>
                <div className="music-section music-section--works" data-music-section>
                    <span className="music-section__label" data-music-reveal>03 / Original music</span>
                    <Works />
                </div>
                <div className="music-section" data-music-section>
                    <span className="music-section__label" data-music-reveal>04 / In conversation</span>
                    <Media />
                </div>
                <div className="music-section music-section--contact" data-music-section>
                    <span className="music-section__label" data-music-reveal>05 / Get in touch</span>
                    <Contact backgroundColor="transparent" />
                </div>
            </main>
            <Footer backgroundColor="black" />
        </div>
    )
}
export default Music