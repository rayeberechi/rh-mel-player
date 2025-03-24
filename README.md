# Ray Melodies

Ray Melodies is a React-based web application set up to leverage Spotify API to provide users with an integration of their Spotify playlist and playback experience. It offers features to search for tracks, explore playlists, and display music information.

**Navigation**

  - [Features](#features)
  - [Live Link](#live-link)
  - [Screenshot](#screenshot)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Routing](#routing)
  - [Known Issues and Future Enhancements](#known-issues-and-future-enhancements)
  - [Deployment and Localhost Limitations](#deployment-and-localhost-limitations)
  - [Credits](#credits)


## Features

- **Spotify Authentication:** Secure user authentication via Spotify OAuth 2.0.
- **Music Search:** Find your favorite tracks with a search interface.
- **Personalized Playlists:** Explore your Spotify playlists.
- **Music Playback:** Enjoy track previews with an integrated audio player.
- **User-Friendly Interface:** Intuitive navigation and a sleek, dark-themed design.

## Live Link

  - [Live Link](https://rh-mel-player.netlify.app)

## Screenshot

![Ray Melodies App Screenshot](/public/P-Screenshot.png)


## Technologies Used

- React
- React Router DOM
- Spotify API
- Fetch API
- Local Storage
- CSS
- .env


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone [Repo link](https://github.com/rayeberechi/rh-mel-player)
   cd rh-mel-player
   ```

2. **Navigate to the project directory.**

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your Spotify Client ID, Client Secret, and Redirect URI:

     ```
     VITE_SPOTIFY_CLIENT_ID=[your_client_id]
     VITE_SPOTIFY_CLIENT_SECRET=[your_client_secret]
     VITE_SPOTIFY_REDIRECT_URI=[your_redirect_uri]
     VITE_SPOTIFY_API_URL=https://api.spotify.com/v1
     ```
5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open the application in your browser:**

   - Navigate to the address shown in your terminal.

## Project Structure

```
rh-mel-player/
├── public/
│   └── Images and Logos
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── JoinHere.jsx
│   │   ├── Login.jsx
│   │   ├── NavBar.jsx
│   │   ├── PlaylistCard.jsx
│   │   └── WeeklyTopCard.jsx
│   ├── pages/
│   │   ├── MusicList.jsx
│   │   └── MusicPlayer.jsx
│   ├── App.jsx
│   ├── Callback.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── spotify.jsx
│   ├── spotifyService.jsx
│   └── styles.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── README.md
```

## Usage

1. **Welcome/Join Page (`/`):**
   - Introduces the application and provides options to join or sign in.
   - Includes a form for user registration or login.

2. **Login Page (`/login` - Implicit):**
   - Handles Spotify authentication via OAuth 2.0.
   - Successfully redirects to the application after authentication.

3. **Weekly Top Tracks (`/weekly`):**
   - Currently displays a blank page. Functionality to be implemented in future enhancements.

4. **Playlists (`/playlist`):**
   - Displays user's Spotify playlists and loads 5 tracks per playlist.
   - Playlist track selection updates the music player interface.
   - Audio playback is unavailable due to missing preview URLs.

5. **Music List (`/musiclist`):**
   - Currently displays default page setup. New release functionality to be implemented in future enhancements

6. **Music Player (Integrated Component):**
   - Displays track information and playback controls.
   - Audio playback is unavailable due to missing preview URLs.

## Routing

- **React Router DOM** is used for client-side routing.
- Routes function as expected, but broken/incorrect links currently redirect to the homepage (404 page implementation to be added).

## Known Issues and Future Enhancements
- Audio playback is currently unavailable due to missing preview URLs from the Spotify API.
- The weekly top tracks page is currently blank and needs implementation.
- The music list page is currently displaying default setup and needs implementation.
- The application is currently only responsive on PC and needs to be made responsive for other devices.
- A 404 error page for broken/incorrect links is currently unavailable and will be implemented.
- Implement backend integration for user registration and other features.
- Investigate and resolve errors.


## Deployment and Localhost Limitations

**Note:** Ray Melodies is currently optimized for local development and experiences issues when deployed to remote environments like Netlify. Due to limitations with the Spotify API's redirect URI handling and potential configuration discrepancies, seamless functionality is best experienced when running the application on localhost. 

## Credits

-   **UI Inspiration:** Printivo Website
-   **Color Palette:** Figma Community - [Music Player Website & App (Melodies)](https://www.figma.com/design/NBW0ELGfIxzNR9nQzNcvyE/Music-Player-Website-%26-App-(Melodies)-(Community)?node-id=0-1&p=f)
-   **Spotify API:** Spotify for Developers
-   **Font Awesome:** For icons.
-   **Youtubeversity:** For educational resources.
-   **Author:** Faithy Raymond
-   **Tutor:**  Superior, Web3Bridge