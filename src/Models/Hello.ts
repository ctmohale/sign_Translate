import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const HelloGesture = new GestureDescription('Hello');

// Thumb
HelloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.1);
HelloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
HelloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

