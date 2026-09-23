This is the 4th iteration of my website.

## Music animations

The `/music` route uses GSAP and ScrollTrigger for the hero entrance, scroll-linked
photography, instrument strip, sticky image stack, and section reveals. Animation
setup and cleanup live in `src/pages/Music/useMusicMotion.ts`; styling is scoped to
`.music-page`. Native scrolling and existing score, recording, and contact features
are preserved. Reduced-motion preferences disable the GSAP sequences and sticky stack.

The `musicImages` object in `src/pages/Music/Music.tsx` contains three temporary
Unsplash images: guitar (`photo-1510915361894-db8b60106cb1`), studio
(`photo-1511379938547-c1f69419868d`), and microphone
(`photo-1516280440614-37939bbacd81`). These are stock illustrations, not photographs
of Joseph or his work. Replace the URLs with your own imported assets or public
paths, and update the corresponding alt text. The hero and second panel share the
guitar image. Images have reserved layout dimensions; no stock video or autoplay
audio is added.

Run `bun run dev` and open `/music`. Validate with `bunx tsc -b`,
`bunx eslint src/pages/Music/Music.tsx src/pages/Music/useMusicMotion.ts`, and
`bun run build`. Check desktop/mobile layouts, section links, reduced motion, and
switching between developer and music views.
