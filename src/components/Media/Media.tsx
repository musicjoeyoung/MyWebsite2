import "./Media.scss"

import { useEffect } from "react";

const Media = () => {
    useEffect(() => {
        // Load Twitter widget script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div className="media" id="media">
            <h2>Media</h2>
            <div className="media__grid">
                <div className="media__item">
                    <img src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1763043345/Power-Military-Music_aigfoi.jpg" alt="Power of Military Music Podcast Cover" />
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnyc/#file=/audio/json/1111057/&share=1"></iframe>
                    <a href="https://www.wnyc.org/story/power-military-music/"> WNYC Studios - Power of Military Music</a>
                </div>
                <div className="media__item">
                    <img src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1763043345/Big-Bang-In-Jazz-History_fkvk2n.jpg" alt="Notes from America Podcast Cover" />
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1110593/&share=1"></iframe>
                    <a href="https://www.wnycstudios.org/podcasts/anxiety/episodes/big-bang-in-jazz-history">Notes from America with Kai Wright - Big Bang in Jazz History</a>
                </div>
                <div className="media__item">
                    <img src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1763043345/Open-Ears-Project_wfxsxn.jpg" alt="Open Ears Project Podcast Cover" />
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/963005/&share=1"></iframe>
                    <a href="https://www.wnycstudios.org/podcasts/open-ears-project/episodes/joe-young-on-how-we-listen">Open Ears Project - Joe Young on How We Listen</a>
                </div>
                <div className="media__item">
                    <img src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1763043348/Goodbye-Old-Morning-Edition-Theme_ratyqr.jpg" alt="Goodbye Old Morning Edition Theme Podcast Cover" />
                    <iframe frameBorder="0" scrolling="no" height="130" width="100%" src="https://www.wnyc.org/widgets/ondemand_player/wnyc/#file=/audio/json/933493/&share=1"></iframe>
                    <a href="https://www.wnyc.org/story/goodbye-old-morning-edition-theme/">WNYC Studios - Goodbye Old Morning Edition Theme</a>
                </div>
                {/*            <div className="media__item">
                    <blockquote className="twitter-tweet" data-theme="dark">
                        <a href="https://twitter.com/musicjoeyoung/status/1234969300529745921"></a>
                    </blockquote>
                    <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A784583071&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                        <a href="https://soundcloud.com/musicjoeyoung" title="musicjoeyoung" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>musicjoeyoung</a> · <a href="https://soundcloud.com/musicjoeyoung/wash-your-hands" title="Wash Your Hands!" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Wash Your Hands!</a>
                    </div>
                </div> */}
            </div>

        </div>
    )
}
export default Media