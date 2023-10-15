// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect, useContext } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./Detect.css";
import { drawHand } from "../utilities";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "../victory.png";
import thumbs_up from "../thumbs_up.png";
import { loveYouGesture } from "../Models/Love";
import { thankYouGesture } from "../Models/Thankyou";
import { NoGesture } from "../Models/No";
import { YesGesture } from "../Models/Yes";
import { HelloGesture } from "../Models/Hello";

import TestMainData from "../context/textData";
import { CreateGestureInput, CreateGestureMutation } from "../API";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../graphql/mutations";
import LoginData from "../context/login";
///////// NEW STUFF IMPORTS

function Detect() {
  const webcamRef: any = useRef(null);
  const canvasRef: any = useRef(null);
  const [textData, setTextData]: any = useState("hello");
  const { transData, setTransData }: any = useContext(TestMainData);
  const [highestScore, setHighestScore] = useState(-Infinity);
  const { loginUser, setLoginUser }: any = useContext(LoginData);
  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };

  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net)
    }, 10);
  };

  const detect = async (net: any) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      //console.log(hand);
      let highestScore = -Infinity;
      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          loveYouGesture,
          thankYouGesture,
          NoGesture,
          YesGesture,
          HelloGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          gesture.gestures.forEach((data_element: any) => {
            if (data_element && data_element.score) {
              const score = data_element.score;
              if (score > highestScore) {
                // If a higher score is found, update the state
                setTranslateFunction(data_element.name);
                setTransData(data_element.name);
              }
            }
          });

          const confidence = gesture.gestures.map(
            (prediction: any) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          //console.log(gesture.gestures[maxConfidence].name);
          // setEmoji(gesture.gestures[maxConfidence].name);

          setTextData("Test");
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  function setTranslateFunction(data: any) {

    addTranslateData(data);
    return true;
  }

  async function addTranslateData(sign: any) {
    if (loginUser.id && sign) {
      const todoDetails: CreateGestureInput = {
        sign_language: sign,
        user_id: loginUser.id,
      };

      const newTodo = await API.graphql<GraphQLQuery<CreateGestureMutation>>({
        query: mutations.createGesture,
        variables: { input: todoDetails },
      });
    }
  }

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "3%",
            borderRadius: "20px",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "3%",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        />

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

export default Detect;
