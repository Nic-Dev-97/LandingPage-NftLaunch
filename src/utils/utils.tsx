export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateTimeLeft = () => {
  
  // Get future "date mon day year hourminute:second"
  const  newYears = "07 25 2023 10:00:00";
  
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const difference = newYearDate.getTime() - currentDate.getTime();


  let timeLeft: TimeLeft = {} as TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};