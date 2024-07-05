# Augmentour

## Overview

**Augmentour** is an Augmented Reality (AR) web app designed to help tourists explore new places. By marking Points of Interest (POIs) with 3D AR markers and providing real-time AR navigation, Augmentour offers an engaging and informative way to experience a city or location. The app uses AR.js and A-Frame for AR functionalities and integrates OpenStreetMap and the Mapbox API for navigation and mapping.

## Features

- **3D AR Markers for POIs:** Interactive 3D markers highlight points of interest. Users can click on these markers to summon a virtual tour guide for more information.
- **Real-Time AR Navigation:** 3D arrow markers provide real-time navigation, guiding users to their desired destinations.
- **Virtual Tour Guide:** Detailed information about each POI is available through an engaging virtual tour guide.
- **Map Integration:** Utilizes OpenStreetMap and Mapbox API for accurate mapping and navigation.

## Technologies Used

- **AR.js:** A library for creating AR experiences on the web.
- **A-Frame:** A framework for building virtual reality (VR) experiences.
- **OpenStreetMap:** A collaborative project to create a free editable map of the world.
- **Mapbox API:** Provides mapping and navigation services.
- **Vercel:** Platform for deploying and hosting the web application.

## Getting Started

To run Augmentour locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Akshay-L-B/Akshay-L-B.github.io.git
   
2. **Install dependencies:**
    ```bash
    Copy code
    npm install
3. **Start the development server:**
    ```bash
      Copy code
      npm start
4. **Open 'http://localhost:3000' in your web browser to view the app.**

### Configuration
Update the config.js file with your Mapbox API key and any other configuration settings specific to your deployment environment.
Deployment
To deploy the app, push the code to your repository and connect it to Vercel for automatic deployments. Ensure that Vercel is configured with the appropriate environment variables, including your Mapbox API key.

### Usage

1. Open the [Augmentour](augmentour.vercel.app) app in your browser.
2. Explore the AR space: Move your device to find 3D markers for POIs.
3. Interact with POIs: Click on the markers to see details from the virtual tour guide.
4. Navigate: Follow the 3D arrows for real-time navigation to your destination.

### Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request. For detailed guidelines, please refer to the CONTRIBUTING.md file.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

1. [AR.js](https://ar-js-org.github.io/AR.js-Docs/) and A-Frame for the AR and VR frameworks.
2. [OpenStreetMap](https://www.openstreetmap.org/#map=5/21.843/82.795) and [Mapbox](https://www.mapbox.com/) for the mapping and navigation services.
3. [Vercel](https://vercel.com/) for hosting the application.


