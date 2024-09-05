import moment from "moment";
import React, { useEffect, useState } from "react";

function TimeAndLocation() {
  const [hour, setHour] = useState(moment().format("HH"));
  const [minute, setMinute] = useState(moment().format("mm"));

  const tick = () => {
    setHour(moment().format("HH"));
    setMinute(moment().format("mm"));
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-blue-400 text-4xl">{hour && hour}</p>
      <p className="text-blue-400 text-4xl">{minute && minute}</p>
    </div>
  );
}

export default TimeAndLocation;
