process.env.DISPLAY = ':0';

const { spawn } = require('child_process');
const fs = require('fs');

const imagePath = '/home/pi/fusion-tasty-tv/media/overload-fries.jpg';
//const imagePath = '/home/pi/fusionTasty/media/overload-wraps.jpg';
//const imagePath = '/home/pi/fusionTasty/media/overload-fries.jpg';

// Check if the image file exists
if (fs.existsSync(imagePath)) {
  console.log('Image found, waiting 10 seconds to start...');

  // Wait 10 seconds to make sure desktop is fully loaded
  setTimeout(() => {
    console.log('Displaying image now...');
    spawn('feh', ['--fullscreen', '--hide-pointer', '--auto-zoom', imagePath], {
      detached: true,
      stdio: 'ignore'
    }).unref();
  }); // 10 seconds
} else {
  console.error('Image not found at:', imagePath);
}
