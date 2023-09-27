// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const thankYouGesture = new GestureDescription('Thank You');

// Thumb
thankYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thankYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight , 0.25);
thankYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);

// Index
thankYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
thankYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.25);
thankYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.25);

// Pinky
thankYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
thankYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.25);
thankYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.25);

// Middle
thankYouGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
thankYouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.25);
thankYouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.25);

// Ring
thankYouGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
thankYouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.25);
thankYouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.25);

for (let finger of [Finger.Middle, Finger.Ring]) {
  thankYouGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  thankYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
