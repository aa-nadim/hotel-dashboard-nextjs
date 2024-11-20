## Overview

This repository contains Next.js code for a vacation rental website. The code fetches data from a RESTful API at `http://localhost:5000`, displaying dynamic information and handling various functionalities, including user interaction options, guest management, an image gallery, sharing features, and more.

## Technologies

• React and Next.js

• TypeScript


## Installation

### Step 1: Clone the Repository(back-end)

```bash
git clone https://github.com/aa-nadim/express-hotel-api.git

cd express-hotel-api

npm i

npm run dev
```

back-end run in ===> `http://localhost:5000`

### Step 2: Clone the Repository(front-end)

```bash
git clone https://github.com/aa-nadim/hotel-dashboard-nextjs.git

cd hotel-dashboard-nextjs

npm i

npm run dev
```

front-end run in ===> `http://localhost:3000/`


## Features

### Landing Page 

Show all Hotels' Card in ===>  `http://localhost:3000/`

### Specific Hotel Page

If you click on a card on the Landing Page (http://localhost:3000/), it will take you to http://localhost:3000/hotel-details/{slug}/{hotel-id} else it will take you (http://localhost:3000/404)

Example ==> (http://localhost:3000/hotel-details/radisson-blu/1280e3ba-143a-43f7-84ae-c4c34d9e12fc)

### Image Gallery

Displays dynamic images with an option to view each image in fullscreen mode.

### Region & Currency: 

Allows users to select their region, and automatically adjusts the currency according to the selected region.

### Guest Management: 

Allows users to specify the number of adults and children.

### Sharing Options 

Provides options for sharing the listing via a link or copying the link to the clipboard.

### Heart Button 

Allows users to favorite a listing with a heart icon, which persists across sessions using local storage.

## Testing
```bash
npm test
```
