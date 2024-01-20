import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import { createScene } from "./scene";
import {
  browserHasImmersiveArCompatibility,
  displayIntroductionMessage,
  displayUnsupportedBrowserMessage,
} from "./domUtils";
import domUtils from "./domUtils";
interface Location {
  longitude: number;
  latitude: number;
};

interface Intersection {
  admin_index: number;
  bearings: number[];
  entry: boolean[];
  geometry_index: number;
  is_urban: boolean;
  location: number[];
  mapbox_streets_v8: {
    class: string;
  };
  out: number;
};

interface Maneuver {
  bearing_after: number;
  bearing_before: number;
  instruction: string;
  location: number[];
  type: string;
};

interface DetailedRouteStep {
  instruction: string;
  distance: number;
  duration: number;
  location: Location;
  maneuver: Maneuver;
  geometry: string;
  intersections: Intersection[];
  travel_mode: string;
  maneuver_type: string;
  step_index: number;
};
interface RouteDataPayload {
  startLocation:Location;
  endLocation: Location;
  detailedRouteDetails: DetailedRouteStep[];
}
window.addEventListener('message', (event) => {
  const data = event.data;
  if (data && data.type === 'routeData') {
    handleRouteData(data.payload);
  }
});

function handleRouteData(payload: RouteDataPayload) {
  const startLocation = payload.startLocation;
  const endLocation = payload.endLocation;
  const detailedRouteDetails = payload.detailedRouteDetails;

  // Log start and end locations
  console.log("Start Location:", startLocation);
  console.log("End Location:", endLocation);

  // Log detailedRouteDetails
  detailedRouteDetails.forEach((step, index) => {
    console.log(`Detailed Route Step ${index + 1}:`);
    console.log("Instruction:", step.instruction);
    console.log("Distance:", step.distance);
    console.log("Duration:", step.duration);
    console.log("Intersections:");
    step.intersections.forEach((intersection, intersectionIndex) => {
      console.log(`  Intersection ${intersectionIndex + 1}:`);
      console.log("  Location:", {
        latitude: intersection.location[1],
        longitude: intersection.location[0],
      });
    });

    console.log("------------------------------");
  });
  console.table(detailedRouteDetails);
}


function initializeXRApp() {
  const { devicePixelRatio, innerHeight, innerWidth } = window;

  // Create a new WebGL renderer and set the size + pixel ratio.
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);

  // Enable XR functionality on the renderer.
  renderer.xr.enabled = true;

  // Add it to the DOM.
  document.body.appendChild(renderer.domElement);

  // Create the AR button element, configure our XR session, and append it to the DOM.
  document.body.appendChild(
    ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] })
  );
  // Pass the renderer to the createScene-function.
  createScene(renderer);

  // Display a welcome message to the user.
  displayIntroductionMessage();
}

async function start() {
  // Check if browser supports WebXR with "immersive-ar".
  const immersiveArSupported = await domUtils.browserHasImmersiveArCompatibility();

  // Initialize app if supported.
  if (immersiveArSupported) {

      initializeXRApp();
  } else {
    domUtils.displayUnsupportedBrowserMessage();
  }
}

start();
