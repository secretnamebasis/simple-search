# SovereignSearch

SovereignSearch is a desktop Electron application for browsing DERO / TELA websites and decentralized applications, managing SCIDs and nodes with live tabs, bookmarks, and a search page.

The Electron based application should work on Windows, Linux and MacOS.

**This software is alpha stage software, use only for testing and evaluation purposes.**
## Features

- Multiple tabs with SCID pages or blank/start page
- Node and SCID bookmarks
- Sidebar for quick navigation
- Live tab title updates
- Modal for saving bookmarks
## Requirements

- Node.js >= 18.x
- npm or yarn
- Electron (installed via `npm install`)
## Installation

1. Clone the repository:
```
git clone https://github.com/ArcaneSphere/SovereignSearch.git
```

```
cd SovereignSearch
```

2. Install dependencies:
```
npm install
```
3. Run tela-server in a terminal
```
./tela-server
```
4. Run the app in another terminal:
```
npm start
```

## Usage

- Use the top bar to input Node & SCID
- Press "Load Tela" to open SCID in a new tab
- Click ⭐ to save bookmarks
- Toggle sidebar for quick access to saved nodes/SCIDs
- New blank tab opens the Start Page

## To-Do's

### Core
[ ] Only index.html pages will load (most dApps ar good), considering a solution to this, but yeah many options..
[ ] Sidebar collapse when pointer leaves, closes onClick somewhere outside sidebar
[ ] Gnomon settings menu + Gnomon alive/ready indicator
[ ] Autostart tela-server and Gnomon 

### Search
[ ] Ratings filter

### User experience
[ ] Special characters in the SCID and Node entry won't bookmark, no need for but yeah UX
[ ] Not all dApps align good in the browserview, it works but need perfection
[ ] Re-write color schemes so that dark/light/system mode works 
[ ] With really big dApps there isn't a instant page view (I mean more than 3/4 sec) UX solution is showing what is going on in the background or an animation.
[ ] Consistent interface

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Open a Pull Request
5. Make the world a better place