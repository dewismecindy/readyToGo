import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="App">
      <Header />

      <main>
        <div className="button-list">
          <div>
            <button
              className={switch1 === true ? "active" : "inactive"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </button>
            <button
              className={switch1 === false ? "active" : "inactive"}
              onClick={() => {
                setSwitch1(false);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch2 === true ? "active" : "inactive"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              ON
            </button>
            <button
              className={switch2 === false ? "active" : "inactive"}
              onClick={() => {
                setSwitch2(false);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch3 === true ? "active" : "inactive"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              ON
            </button>
            <button
              className={switch3 === false ? "active" : "inactive"}
              onClick={() => {
                setSwitch3(false);
              }}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="instruction">
          {switch1 === true && switch2 === true && switch3 === true ? (
            <p className="departure">Go !</p>
          ) : (
            <p className="refused">No way !</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
