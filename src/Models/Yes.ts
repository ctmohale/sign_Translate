// // Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// // Define Gesture Description
export const YesGesture = new GestureDescription('Yes'); 

// Thumb 
YesGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.25)
YesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
YesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
YesGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
YesGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.55);
YesGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.55);

// Middle
YesGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
YesGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.55);
YesGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.55);

// Ring
YesGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YesGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.25);

// Pinky
YesGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
YesGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);

for(let finger of [Finger.Middle, Finger.Ring]){
    YesGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    YesGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}