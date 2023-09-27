// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const HelloGesture = new GestureDescription('Hello');

// Thumb
HelloGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
HelloGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight , 0.55);
HelloGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.55);

// Index
HelloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
HelloGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.55);
HelloGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.55);

// Pinky
HelloGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


// Middle
HelloGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);


// Ring
HelloGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);


for (let finger of [Finger.Middle, Finger.Ring]) {
  HelloGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  HelloGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
