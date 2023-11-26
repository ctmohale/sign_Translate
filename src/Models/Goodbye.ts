import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const Goodbye = new GestureDescription('Good Bye');

// Thumb
Goodbye.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.0);
Goodbye.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index
Goodbye.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Goodbye.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle
Goodbye.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Goodbye.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring
Goodbye.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Goodbye.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// Pinky
Goodbye.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
Goodbye.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);