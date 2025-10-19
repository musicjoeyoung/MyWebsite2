import "./Works.scss"

import { useEffect, useState } from 'react';

import { Work } from '../../types/works';
import worksData from '../../assets/data/works.json';

const Works = () => {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        setWorks(worksData as Work[]);
    }, []);

    //find the appropriate link for a work title
    const getWorkLink = (title: string): string | null => {
        const work = works.find(w => {
            const cleanWorkTitle = w.title
                .replace(/[-_]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            const cleanTitle = title
                .replace(/[-_]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();

            return cleanWorkTitle.toLowerCase() === cleanTitle.toLowerCase();
        });

        if (!work) {
            console.log(`No matching work found for: "${title}"`);
            return null;
        }

        //Priority: YouTube link first, then SoundCloud link, then Bandcamp link
        const link = work.youtube_link || work.soundcloud_link || work.bandcamp_link || null;
        if (link) {
            console.log(`Found link for "${title}": ${link}`);
        }
        return link;
    };

    //render work title (with link if i have it)
    const WorkTitle = ({ title }: { title: string }) => {
        const link = getWorkLink(title);

        if (link) {
            return (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-title-link"
                >
                    {title}
                </a>
            );
        }

        return <span>{title}</span>;
    };

    return (
        <div className="works" id="works">
            <h2>Works</h2>
            <section className="works__list">
                <h3>Works</h3>
                <h4>Large ensemble</h4>
                <ul>
                    <li><WorkTitle title="Of the Troops" /></li>
                    <li><WorkTitle title="Confidence & Validation" /></li>
                </ul>
                <h4>Opera</h4>
                <ul>
                    <li><WorkTitle title="Taxi Driver" /></li>
                    <li><WorkTitle title="MarShawn" /></li>
                </ul>
                <h4>Chamber</h4>
                <ul>
                    <li><WorkTitle title="Searching For Gold" /></li>
                    <li><WorkTitle title="Kandinsky & Coffee" /></li>
                    <li><WorkTitle title="Intrusive Thoughts" /></li>
                    <li><WorkTitle title="Any Moment Now" /></li>
                    <li><WorkTitle title="What Charm You Have in Midst of Crises" /></li>
                    <li><WorkTitle title="At the First Sight of Gold" /></li>
                    <li><WorkTitle title="Anam Cara" /></li>
                    <li><WorkTitle title="Roses & Arrows" /></li>
                    <li><WorkTitle title="Her Father's Funeral" /></li>
                    <li><WorkTitle title="Journal Entries" /></li>
                    <li><WorkTitle title="Hydrogen" /></li>
                    <li><WorkTitle title="Fanfare" /></li>
                </ul>
                <h4>Duo</h4>
                <ul>
                    <li><WorkTitle title="Romans 14: 7" /></li>
                    <li><WorkTitle title="Cody" /></li>
                </ul>
                <h4>Solo</h4>
                <ul>
                    <li><WorkTitle title="Short Term Memory" /></li>
                    <li><WorkTitle title="Skipping & Stepping" /></li>
                    <li><WorkTitle title="Any Day Now" /></li>
                    <li><WorkTitle title="Majesty & Madness" /></li>
                    <li><WorkTitle title="Panic Attack" /></li>
                    <li><WorkTitle title="Consistency" /></li>
                </ul>
                <h4>Choral</h4>
                <ul>
                    <li><WorkTitle title="Anabelle" /></li>
                </ul>
                <h4>Other</h4>
                <ul>
                    <li><WorkTitle title="Isabella" /></li>
                    <li><WorkTitle title="Muliebris (no score)" /></li>
                </ul>
            </section >
            <h3>Albums</h3>
            <iframe style={{ border: 0, width: '350px', height: '470px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3145968861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://musicjoeyoung.bandcamp.com/album/my-beautiful-beautiful-concrete-fragile-little-girl-2">My Beautiful Beautiful Concrete Fragile Little Girl by Joe Young</a></iframe>

            <iframe style={{ border: 0, width: '350px', height: '470px', }} src="https://bandcamp.com/EmbeddedPlayer/album=779454858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://musicjoeyoung.bandcamp.com/album/race-the-sunset">Race the Sunset by Joe Young</a></iframe>
        </div >
    )
}
export default Works