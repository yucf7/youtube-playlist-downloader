const fs = require('fs');
const path = require('path');
const ytdlp = require('yt-dlp-exec');

// Get playlist URL from command line arguments
const PLAYLIST_URL = process.argv[2];
if (!PLAYLIST_URL) {
  console.error('❌ Please provide the playlist URL as an argument.');
  console.error('Example: node index.js <playlist_url>');
  process.exit(1);
}

const DOWNLOAD_DIR = path.join(__dirname, 'downloads');

if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

async function downloadPlaylist() {
  try {
    console.log('📥 Starting playlist download...');
    await ytdlp(PLAYLIST_URL, {
      extractAudio: true,
      audioFormat: 'mp3',
      yesPlaylist: true,
      output: path.join(DOWNLOAD_DIR, '%(playlist_index)s - %(title)s.%(ext)s'),
      noOverwrites: true,
      continue: true,
      ffmpegLocation: require('ffmpeg-static'),
      quiet: false,
    });
    console.log('🎉 All files have been successfully downloaded as MP3!');
  } catch (e) {
    console.error('Error:', e.message);
  }
}

downloadPlaylist();
