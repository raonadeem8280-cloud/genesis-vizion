# Lumina Worlds

Build a COMPLETE, PRODUCTION-QUALITY, HIGH-END GAMING STUDIO PORTFOLIO WEBSITE in ONE GENERATION.

IMPORTANT:
Do not create a generic agency template.
Do not create a basic SaaS landing page.
Do not imitate Riot Games or VALORANT pixel-for-pixel.
Instead, study the visual philosophy of premium AAA gaming websites such as Riot Games and VALORANT:

cinematic full-screen presentation

oversized editorial typography

layered game artwork

character-focused sections

atmospheric video

interactive motion

strong game-project storytelling

immersive transitions

premium dark visual design

Create an ORIGINAL gaming studio identity using those principles.

The result should already feel polished enough to show a client without requiring multiple redesign prompts.

PRIMARY GOAL

The website represents a premium game development and creative studio offering:

Game Development

Game UI/UX Design

3D Characters

3D Environments

3D Props and Weapons

Game Art

Marketing Creatives

App Store / Play Store ASO Creatives

Game Trailers

Cinematic Art

Unity Development

Mobile Game Development

PC Game Development

The website must simultaneously work as:

company website

gaming portfolio

interactive showcase

game-art portfolio

UI/UX portfolio

3D portfolio

video showreel

lead-generation website

DESIGN DIRECTION

Overall feeling:

AAA GAMING
CINEMATIC
FUTURISTIC
EDITORIAL
INTERACTIVE
HIGH-END
DARK
MINIMAL
POWERFUL

Avoid:

generic rounded SaaS cards

excessive glassmorphism

childish gradients

startup illustrations

emoji

template-looking layouts

excessive pill buttons

excessive rounded corners

cartoon website icons

repetitive card grids

Use:

Background:
#08090B
#0D0F12
#111318

Primary text:
#F2F0E9

Secondary:
#9A9DA3

Accent:
#FF4655

Secondary accent:
#19D3C5

The visual identity should use approximately:

75% charcoal/black
15% off-white
7% red
3% cyan

Use accents selectively.

TYPOGRAPHY

Use a powerful condensed display font for large headings.

Suggested combinations:

Display:
Anton
Bebas Neue
Barlow Condensed
Oswald

Body:
Inter
Manrope

Large typography should sometimes extend partially behind characters.

Hero heading should feel approximately:

WE
BUILD
WORLDS

not like a traditional small agency heading.

GLOBAL LAYOUT

Create:

/
Home

/work
Portfolio

/work/[project]
Project Case Study

/services
Services

/about
About

/contact
Contact

Everything must be fully responsive.

NAVIGATION

Create a transparent fixed navigation.

LEFT:
Studio logo / wordmark placeholder

CENTER:
WORK
SERVICES
STUDIO
ABOUT

RIGHT:
START A PROJECT

While scrolling:
navigation transitions into a dark semi-transparent compact header.

Include a minimal mobile hamburger navigation.

CUSTOM CURSOR

Desktop only.

Use a subtle circular custom cursor.

Default:
small circle

Portfolio hover:
VIEW

Video hover:
PLAY

3D object:
DRAG

CTA:
GO

Disable custom cursor on touch/mobile devices.

HOMEPAGE — SECTION 01
CINEMATIC HERO

Hero must occupy approximately 100vh.

Use cinematic video background.

Use this temporary YouTube video:

https://www.youtube.com/watch?v=AnGdzz-XWcE

For embedded playback use an iframe or responsive modal player using:

https://www.youtube-nocookie.com/embed/AnGdzz-XWcE

For hero background, do NOT rely on YouTube autoplay if browser restrictions make the visual unreliable.

Create a fallback cinematic background using a large high-quality generated gaming artwork or poster frame.

Overlay:

small eyebrow:
INDEPENDENT GAME DEVELOPMENT & CREATIVE STUDIO

huge heading:

WE
BUILD
WORLDS.

Supporting copy:

Games, characters, interfaces and campaigns built to make players stop, look and play.

Primary CTA:
EXPLORE OUR WORK

Secondary:
PLAY SHOWREEL

Hero visual:

Create / source a premium dummy AAA-style 3D-rendered fictional game character.

Character requirements:

original fictional character

adult

futuristic tactical game hero

premium AAA videogame render

full body or 3/4 body

highly detailed clothing

armor fabric materials

layered equipment

subtle futuristic technology

realistic PBR materials

sophisticated silhouette

cinematic rim lighting

red and cyan accent lights

dark studio atmosphere

photorealistic Unreal Engine style presentation

isolated enough to layer over background

absolutely no recognizable VALORANT character

no Riot logos

no copyrighted costume

no text on artwork

Position character on RIGHT side.

Allow heading to partially overlap behind the character using layered z-index composition.

Add subtle parallax movement based on pointer position.

Add animated vertical line / scroll indicator.

HOMEPAGE — SECTION 02
STUDIO INTRODUCTION

Create an editorial transition.

Left:

WE DON'T JUST
MAKE GAMES.

Right:

WE BUILD EXPERIENCES
PEOPLE REMEMBER.

Supporting paragraph describing a studio working across game development, game art, UI/UX, trailers, marketing and publishing visuals.

Add animated thin geometric lines.

Use scroll reveal.

SECTION 03
SELECTED WORLDS

Title:

SELECTED
WORLDS

Create 4 large fictional portfolio projects.

Avoid small cards.

Each project should occupy most of the viewport.

PROJECT 01

PROJECT:
NEON REQUIEM

CATEGORY:
Tactical Action / PC

Visual:

Generate or use a premium fictional AAA 3D render featuring:

futuristic urban battlefield

original tactical protagonist

rain-wet architecture

red emergency lighting

cyan holographic accents

cinematic smoke

high-quality Unreal Engine style

dramatic perspective

16:9

no logos

no text

no copyrighted game characters

Text overlay:

NEON REQUIEM
TACTICAL ACTION

VIEW PROJECT →

PROJECT 02

PROJECT:
DUSTLINE

CATEGORY:
Open World / PC + Console

Visual:

Premium open-world cinematic scene:

desert megacity

modified off-road vehicle

original game protagonist

atmospheric dust

bright directional sunlight

realistic gaming environment

huge scale

high-detail PBR surfaces

cinematic videogame promotional art

PROJECT 03

PROJECT:
VOIDRUNNER

CATEGORY:
Sci-Fi Adventure

Visual:

futuristic astronaut/explorer

alien planet

monumental sci-fi structure

strong silhouette

volumetric fog

premium Unreal Engine cinematic quality

blue/cyan lighting

highly realistic game render

PROJECT 04

PROJECT:
IRON DISTRICT

CATEGORY:
Urban Action

Visual:

original urban action hero

modern city

motorcycle

industrial architecture

cinematic golden-hour light

AAA open-world game presentation

realistic materials

strong depth

PROJECT INTERACTION

Desktop:

mouse movement creates subtle image parallax.

Hover:

image scales approximately 1.04
overlay shifts
VIEW PROJECT appears
project number animates

Use smooth transitions.

Mobile:

replace hover effects with scroll reveal.

SECTION 04
INTERACTIVE 3D LAB

Create a dark experimental showcase section.

Heading:

BUILT
IN EVERY
DIMENSION.

Subheading:

Characters. Props. Weapons. Worlds.

Create a large interactive 3D object placeholder in the center.

The final implementation should support:

Spline iframe

OR

Sketchfab iframe

OR

React Three Fiber GLB model.

Create reusable component:

InteractiveModel.tsx

Component should accept:

modelUrl
poster
title
description

For now create a polished fallback representation using a high-quality 3D weapon/prop render.

Generate an ORIGINAL futuristic sci-fi weapon:

no recognizable real gun

no copyrighted weapon

hard-surface modeling

matte graphite metal

brushed steel

glowing cyan energy chamber

tiny red status lights

realistic PBR materials

studio product lighting

game-ready asset presentation

isolated dark background

extreme detail

4K-look presentation

Add interface hints:

DRAG TO ROTATE
SCROLL TO ZOOM

Add small hotspots:

01 MODELING
02 TEXTURING
03 MATERIALS
04 GAME READY

When actual Spline or Sketchfab URL is later supplied, replacing the placeholder must require changing only one variable.

SECTION 05
CHARACTER SHOWCASE

Create a character-selection presentation inspired by AAA game character websites but completely original.

Heading:

MEET THE
WORLDS WE CREATE.

Create 3 dummy fictional characters.

CHARACTER 01:
KIRA VOSS

Role:
Recon Specialist

Generate visual:

adult female futuristic game hero

fully practical tactical outfit

premium AAA 3D character

detailed jacket

technology harness

boots

gloves

subtle armored pieces

sophisticated facial rendering

realistic hair

cinematic lighting

charcoal + red styling

transparent/isolated appearance

full body

original IP

CHARACTER 02:
AXEL RYNE

Role:
Heavy Assault

Visual:

adult male

futuristic industrial armor

muscular but believable proportions

premium game-ready look

mechanical arm elements

realistic materials

cinematic orange/red rim lighting

original character

CHARACTER 03:
SOREN

Role:
Tech Operative

Visual:

adult

sleek futuristic operative

lightweight armor

holographic equipment

cyan accents

premium AAA render

original character

Character selector should show:

name
role
number
short description

Clicking different characters should:

fade current character
slide/fade next character
change ambient accent lighting
change background decorative geometry
update text

Do not reload the page.

SECTION 06
GAME UI / UX SHOWCASE

Heading:

INTERFACES
BUILT TO PLAY.

Create a sophisticated UI/UX showcase.

Instead of static tiny cards, display:

a large monitor/device frame
with an interactive fictional game interface inside.

Create tabs:

MAIN MENU
HUD
STORE
INVENTORY
LEVEL SELECT

Switching tabs changes screen.

Use realistic game UI mockup visuals.

Style:

premium sci-fi/action game
dark interface
strong hierarchy
small red accents
clear typography

Surround the main interface with partially visible secondary screens floating behind it.

Use perspective and depth.

SECTION 07
SHOWREEL

Full-width cinematic section.

Heading:

OUR WORK
IN MOTION.

Background:
dark cinematic poster image.

Large centered PLAY button.

On click open responsive fullscreen/lightbox video modal.

Temporary embed:

https://www.youtube-nocookie.com/embed/AnGdzz-XWcE

Use:

title="Studio Showreel"

allow:
accelerometer;
autoplay;
clipboard-write;
encrypted-media;
gyroscope;
picture-in-picture

allowFullScreen

Do not load iframe until the visitor presses PLAY if possible.

This improves initial performance.

Close video with:
X button
Escape key
background click

SECTION 08
SERVICES

Heading:

WHAT
WE CREATE.

Use 6 full-width editorial service rows.

01
GAME DEVELOPMENT

Description:
Mobile, PC and console experiences from prototype to production.

02
GAME ART & 3D

Characters, props, vehicles, weapons and environments.

03
GAME UI / UX

Menus, HUDs, onboarding, stores and complete player flows.

04
TRAILERS & CINEMATICS

Gameplay trailers, launch videos and visual storytelling.

05
MARKETING CREATIVES

Performance ads, key art, social campaigns and promotional assets.

06
ASO & STORE DESIGN

Icons, screenshots, feature graphics and conversion-focused store creatives.

Each service row should have a large related image revealed on hover or scroll.

SECTION 09
ART LAB / VISUAL WALL

Heading:

FROM
SKETCH
TO SCREEN.

Create an asymmetric masonry/editorial gallery.

Show:

character renders
environment renders
weapon render
vehicle render
UI screenshot
game icon
cinematic frame

Do NOT use random stock corporate images.

Use gaming-oriented placeholder imagery only.

Images should have varying dimensions.

On hover:
subtle zoom
project category appears
cursor becomes VIEW

SECTION 10
PROCESS

Heading:

HOW WE
BUILD.

Create four horizontal stages:

01
DISCOVER

02
DESIGN

03
BUILD

04
SHIP

Use animated line connecting stages.

Keep section minimal.

SECTION 11
STATEMENT

Create giant editorial typography:

ART
MEETS
TECHNOLOGY.

Place a 3D-rendered game object or character partially in front of typography.

Add subtle animated noise/grain.

SECTION 12
FINAL CTA

Near-black background.

Huge text:

LET'S BUILD
THE NEXT
WORLD.

Small paragraph:

Have a game, prototype or campaign in mind?
Let's make it unforgettable.

Button:

START A PROJECT

Include large animated arrow.

FOOTER

Studio name placeholder

Navigation:
WORK
SERVICES
ABOUT
CONTACT

Social:
BEHANCE
LINKEDIN
YOUTUBE
ARTSTATION

Footer text:
© 2026 Studio. All rights reserved.

PORTFOLIO PAGE

Create /work.

Hero:

OUR
WORLDS.

Filters:

ALL
GAMES
3D ART
UI/UX
MARKETING
CINEMATICS

Use the four fictional projects already created.

Cards should be large cinematic blocks.

Add staggered reveal animation.

PROJECT CASE STUDY TEMPLATE

Route:

/work/:slug

Create one complete case-study layout and reuse for all dummy projects.

Example project:
NEON REQUIEM

SECTION 1:
full-screen project hero

SECTION 2:
overview

Include:
Platform
Genre
Services
Year

SECTION 3:
full-width gameplay/cinematic video

SECTION 4:
character development

SECTION 5:
environment design

SECTION 6:
interactive 3D asset

SECTION 7:
game UI

SECTION 8:
marketing artwork

SECTION 9:
gallery

SECTION 10:
next project

The case study must feel like a game launch microsite rather than a Behance page.

SERVICES PAGE

Create detailed /services page.

Hero:

FROM
IDEA
TO PLAY.

Services:

Game Development
3D Character Art
Environment Art
Prop & Weapon Art
Game UI/UX
Marketing Creatives
ASO
Trailers
Cinematics
Unity Integration

Each includes:

short overview
deliverables
related portfolio imagery

ABOUT PAGE

Hero:

PLAY
IS OUR
LANGUAGE.

Explain the studio as a multidisciplinary team working across game development, art, design and marketing.

Use large studio/gaming imagery.

Include:

Capabilities
Tools
Workflow
Industries
Platforms

Tools can include:

UNITY
UNREAL
BLENDER
3DS MAX
PHOTOSHOP
FIGMA
AFTER EFFECTS

Do NOT use fake client logos.

CONTACT PAGE

Heading:

START
A PROJECT.

Create premium project inquiry form.

Fields:

Name
Email
Company
Project Type
Budget Range
Message

Project Type options:

Game Development
Game Art
UI/UX
Marketing
ASO
Trailer
Other

Add large contact CTA.

GENERATED DUMMY ART

If image generation is available inside the environment, create premium dummy visuals for the website.

Every generated asset must look like high-end videogame promotional artwork.

QUALITY TERMS:

AAA videogame
Unreal Engine 5 look
Octane-style presentation
PBR materials
ray-traced lighting appearance
volumetric atmosphere
professional art direction
cinematic composition
high detail
4K-look
sharp subject
controlled depth of field
premium character rendering
studio-grade lighting

Never generate:

VALORANT agents
League champions
Riot logos
existing game characters
existing branded weapons
copied costumes

Create ORIGINAL fictional IP.

If direct image generation is unavailable, use elegant gradient/mesh placeholders that preserve layout dimensions, and organize image URLs in a single data file so assets can be replaced later without modifying layouts.

ASSET ARCHITECTURE

Create:

src/data/projects.ts
src/data/services.ts
src/data/characters.ts
src/data/media.ts

Do NOT hard-code project information repeatedly across components.

Example:

characters.ts

{
name: "Kira Voss",
role: "Recon Specialist",
image: "...",
accent: "#FF4655"
}

media.ts should contain:

heroPoster
showreelVideoId
showreelPoster
interactiveModelUrl

so assets can be replaced easily.

YOUTUBE COMPONENT

Create reusable:

YouTubeModal.tsx

Props:

videoId
title
poster

Use privacy-enhanced URL:

https://www.youtube-nocookie.com/embed/{videoId}

Do not immediately load every YouTube iframe.

Show poster first.

Load iframe after click.

Use responsive 16:9 ratio.

Support fullscreen.

3D COMPONENT

Create reusable:

InteractiveModel.tsx

Support future URLs from:

Spline
Sketchfab

Provide fallback poster.

Use lazy loading.

Never allow the 3D model to block the initial hero rendering.

ANIMATION SYSTEM

Animations must feel sophisticated rather than excessive.

Use:

Framer Motion

and where appropriate:

GSAP / ScrollTrigger

Required interactions:

hero parallax
text reveal
image scale
project transitions
scroll-triggered sections
character switch
marquee movement
custom cursor
video modal
3D hover state
service image reveal

Animation durations approximately:

300–900ms

Use premium easing.

Avoid bouncing animation.

Avoid excessive spring animation.

SCROLL EXPERIENCE

Use smooth native scrolling or carefully optimized smooth scrolling.

Do NOT hijack scrolling aggressively.

Respect accessibility.

If:

prefers-reduced-motion: reduce

disable complex motion.

RESPONSIVE DESIGN

Desktop:
full cinematic experience.

Tablet:
reduce parallax and typography size.

Mobile:
prioritize performance.

On mobile:

disable custom cursor

disable mouse-based parallax

reduce 3D complexity

simplify entrance animations

optimize image size

preserve cinematic visual hierarchy

maintain proper touch targets

keep hero approximately 85–100svh

stack character/content vertically when necessary

Do not simply shrink desktop layout.

Design mobile intentionally.

PERFORMANCE

This website contains media-heavy content so performance is extremely important.

Implement:

lazy loading
responsive images
WebP/AVIF where possible
poster frames
deferred YouTube iframes
lazy-loaded 3D
code splitting where appropriate

Do NOT preload every project video.

Hero content should load first.

Below-fold content should lazy load.

Prevent cumulative layout shift by setting image aspect ratios.

ACCESSIBILITY

Include:

semantic HTML
keyboard navigation
visible focus states
alt text
aria-labels
Escape-key video closing
proper button elements
sufficient text contrast
reduced-motion behavior

SEO

Add appropriate:

page titles
meta descriptions
Open Graph fields
Twitter card metadata

Homepage title placeholder:

Premium Game Development, Art & UI/UX Studio

Description:

Game development, 3D art, game UI/UX, cinematic trailers, marketing creatives and publishing visuals for mobile, PC and console games.

CODE QUALITY

Use:

React
TypeScript
Tailwind CSS

Create reusable components.

Suggested structure:

src/
components/
Navbar.tsx
CinematicHero.tsx
SectionTitle.tsx
ProjectShowcase.tsx
CharacterShowcase.tsx
InteractiveModel.tsx
YouTubeModal.tsx
ServicesShowcase.tsx
ArtGallery.tsx
CustomCursor.tsx
Footer.tsx

pages/
Home.tsx
Work.tsx
Project.tsx
Services.tsx
About.tsx
Contact.tsx

data/
projects.ts
characters.ts
services.ts
media.ts

CRITICAL FIRST-GENERATION REQUIREMENTS

DO NOT leave sections unfinished.

DO NOT use lorem ipsum.

DO NOT leave blank image containers.

DO NOT create empty project pages.

DO NOT ask follow-up questions.

DO NOT reduce this to a simple landing page.

DO NOT create only the homepage.

DO NOT replace gaming visuals with generic office/team stock photos.

DO NOT use copyrighted Riot/VALORANT assets as permanent branding.

DO NOT copy Riot or VALORANT layouts one-to-one.

Build all requested pages, navigation, components, responsive states and dummy data in the first generation.

If some advanced functionality cannot be fully completed, create the visual interface and reusable component architecture for it instead of removing the section.

PRIORITY ORDER IF THERE ARE GENERATION LIMITS:

Homepage visual quality

Navigation/responsiveness

Project showcase

Character showcase

Video system

Services

Project case-study template

3D model architecture

About/contact

secondary animations

The first generated result should already look like a premium AAA gaming studio website suitable for showing potential international clients.

FINAL VISUAL TEST

Before considering the build complete, verify:

Does the first screen immediately communicate gaming?

Does it contain a large cinematic hero?

Does it contain at least one premium character visual?

Does it contain several game-environment visuals?

Does it contain an interactive/3D section?

Does the YouTube showreel actually open?

Does the portfolio feel immersive?

Does the site avoid looking like a SaaS template?

Does mobile remain usable?

Does every major section contain real visual content or a deliberate placeholder?

If any answer is NO, fix it before finishing.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/85c46faa-601a-48e4-a54e-415d7726c708).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
