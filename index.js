// Import the Chordictionary library
import * as Chordictionary from 'chordictionary/build/es6/chordictionary/main.min.js';

// Create a new instance of Chordictionary
const chordictionary = new Chordictionary();

// Define the parameters for the chord (e.g., C major chord)
const chordParams = {
  frets: [3, 2, 0, 0, 1, 0], // Fret positions for each string
  fingers: [3, 2, 0, 0, 1, 0], // Fingers used for each string (optional)
  baseFret: 0, // Base fret of the chord
  mute: [false, false, true, false, false, false], // Muted strings (optional)
};

// Render the chord diagram in the console
const chordDiagram = chordictionary.renderToString(chordParams);
console.log(chordDiagram);