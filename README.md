# Jack's Corner

## Overview

Jack's Corner is a personal website created using Adobe Dreamweaver, hosted on a Raspberry Pi 4 using Apache. The site is kept up-to-date with an automated GitHub pull script running every five minutes. The domain is registered through Namecheap, and the website files are stored in a GitHub repository. Raw image links from GitHub are used to save bandwidth.

## Features

- **Created with Adobe Dreamweaver**: This site was designed and developed using Adobe Dreamweaver, ensuring a smooth and efficient web development experience.
- **Hosted on Raspberry Pi 4**: The site is hosted locally on a Raspberry Pi 4, making use of its capabilities to run a full-fledged web server.
- **Apache Web Server**: Apache is used as the web server, configured to serve the site on HTTPS.
- **Auto-sync with GitHub**: A script runs every five minutes on the Raspberry Pi to pull the latest changes from the GitHub repository, ensuring the website is always up-to-date.
- **Namecheap Domain**: The domain `jackpercy.com` is registered through Namecheap, with DNS settings configured for optimal performance.
- **Bandwidth Optimization**: Images and other media files are served directly from GitHub using raw image links, reducing the load on the local server and saving bandwidth.

### Usage
- **Access the Website**:
  - Publicly: `https://jackpercy.com`

- **Update Content**:
  - Push updates to the GitHub repository.
  - The auto-pull script will automatically update the content on the Raspberry Pi.
