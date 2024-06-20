import { useState } from "react";
import StepComponent from "./StepComponent";

const addDaysToDate = (days, date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  let msg = "";
  if (days === 0) msg += "Today is ";
  if (days > 0) msg += `${days} days from today is `;
  if (days < 0) msg += `${Math.abs(days)} days ago was `;

  msg += `${weekDays[newDate.getDay()]} ${
    months[newDate.getMonth()]
  } ${newDate.getDate()}, ${newDate.getFullYear()}`;
  return msg;
};

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <input
              type="range"
              name="step"
              id="step"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(+e.target.value)}
            />
            <span>{step}</span>
          </div>
          <div>
            <button
              onClick={() => setCounter((prevCounter) => prevCounter - step)}
              className="border-2 border-blue-400 bg-blue-400 px-2"
            >
              -
            </button>
            <input
              className="border-2 border-blue-400 outline-none"
              type="number"
              name="counter"
              id="counter"
              value={counter}
              onChange={(e) => {
                console.log(e.target.value);
                setCounter((prevCounter) => {
                  if (isNaN(e.target.value)) return prevCounter;

                  return +e.target.value;
                });
              }}
            />
            <button
              onClick={() => setCounter((prevCounter) => prevCounter + step)}
              className="border-2 border-blue-400 bg-blue-400 px-2"
            >
              +
            </button>
          </div>
        </div>

        <p className=" font-bold mb-4">{addDaysToDate(counter, Date.now())}</p>
        {(step !== 1 || counter !== 0) && (
          <button
            onClick={() => {
              setStep(1);
              setCounter(0);
            }}
            className="px-6 py-2 bg-blue-400 rounded-md"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
export default App;
