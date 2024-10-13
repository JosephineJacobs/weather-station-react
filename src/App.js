import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was created by{" "}
        <a
          href="https://www.shecodes.io/graduates/83802-josephine-lu-ching-jacobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josephine Jacobs
        </a>{" "}
        and is open-source on{" "}
        <a
          href="https://github.com/JosephineJacobs/weather-station-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        , published on{" "}
        <a
          href="hhttps://weatherstationreact.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        .
      </footer>
    </div>
  );
}
