// // Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// // Define Gesture Description
export const YesGesture = new GestureDescription('Yes'); 

// Thumb 
YesGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.1)

// Index
YesGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)

// Middle
YesGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)

// Ring
YesGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)

// Pinky
YesGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

for(let finger of [Finger.Middle, Finger.Ring]){
    YesGesture.addCurl(finger, FingerCurl.FullCurl, .1); 
}