# YouTube Playlist Downloader

A simple Node.js script to download a YouTube playlist as MP3 files using `yt-dlp`.

## Features

- Download all videos in a playlist
- Convert videos to MP3
- Resume interrupted downloads
- Avoid overwriting existing files

## Requirements

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [ffmpeg](https://ffmpeg.org/) (automatically handled via `ffmpeg-static`)
- `yt-dlp` installed via npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/youtube-playlist-downloader.git
cd youtube-playlist-downloader
```
2. Install dependencies:
```bash
npm install
```
## Usage 
```bash
node index.js <playlist_url>
```
All downloaded MP3 files will be saved in the downloads folder.

## License
MIT License