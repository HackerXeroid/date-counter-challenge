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
        <div className="mb-4">
          <StepComponent
            label="Step"
            counter={step}
            onIncrement={() => setStep((step) => step + 1)}
            onDecrement={() => setStep((step) => step - 1)}
          />

          <StepComponent
            label="Count"
            counter={counter}
            onIncrement={() => setCounter((counter) => counter + step)}
            onDecrement={() => setCounter((counter) => counter - step)}
          />
        </div>

        <p className=" font-bold">{addDaysToDate(counter, Date.now())}</p>
      </div>
    </div>
  );
}
export default App;
