# SovereignSearch

SovereignSearch is a desktop Electron app for browsing DERO / TELA websites and applications, managing SCIDs and nodes with live tabs, bookmarks, and a start page.

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Open a Pull Request