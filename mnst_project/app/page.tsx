"use client";
import "./globals.css";

import { useState } from "react";

import { useRef } from "react";

export default function Home() {


  const canvasRef = useRef(null);
  

  return (
    <div className="container">
      <div className="container-name">
        <div style={{ fontWeight: "bold" }}>DRAW HERE</div>
        <div style={{ height: "60vh", border: "5px solid black" }}>
          <canvas
            ref={canvasRef}
            className="pointer"
            style={{
              height: "100%",
              width: "100%",
              border: "solid #aa9898",
            }}
          ></canvas>
        </div>
        <div style={{ padding: "10px" }} className="container">
          <button> Reset </button>
          <button> Upload </button>
        </div>
      </div>
      <div className="container-name">
        <div style={{ fontWeight: "bold" }}>THE NUMBER THE MODEL GUESSED:</div>
        <div style={{ height: "60vh", border: "5px solid black" }}></div>
      </div>
    </div>
  );
}
