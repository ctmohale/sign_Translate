// // Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// // Define Gesture Description
export const NoGesture = new GestureDescription('No'); 

// Thumb 
NoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.25)
NoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
NoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
NoGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
NoGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.55);
NoGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.55);

// Middle
NoGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
NoGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.55);
NoGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.55);

// Ring
NoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NoGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.25);

// Pinky
NoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
NoGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    NoGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    NoGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}