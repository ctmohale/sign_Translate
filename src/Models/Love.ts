import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const loveYouGesture = new GestureDescription('I love You');

// Thumb
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// Middle
loveYouGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
loveYouGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// Ring
loveYouGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
loveYouGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);