import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/utils";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div>
      <div>
        <span>{String(timeLeft.days).padStart(2, "0")}</span>
      </div>

      <div>
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
      </div>

      <div>
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
      </div>

      <div>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};
