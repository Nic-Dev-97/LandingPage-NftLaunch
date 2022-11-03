import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/utils";
import { Body } from "./style.js";



export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <Body>
      <div>
        <span>{String(timeLeft.days).padStart(2, "0")}</span>
        <p>Days</p>
      </div>

      <div>
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
        <p>Hours</p>
      </div>

      <div>
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <p>Minutes</p>
      </div>

      <div>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <p>Seconds</p>
      </div>
    </Body>
  );
};
