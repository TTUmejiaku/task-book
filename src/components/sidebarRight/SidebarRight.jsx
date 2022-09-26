import React from "react";
import "./sidebarRight.scss";
import { BsThreeDots } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { AiOutlineCalendar } from "react-icons/ai";

const SidebarRight = () => {
  const [time, setTime] = React.useState();
  const [date, setDate] = React.useState();

  React.useEffect(() => {
    const timer = setInterval(() => {
      const monthMap = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const today = new Date();
      const year = today.getFullYear();
      let month = monthMap[today.getMonth()];
      let date = today.getDate();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      date = date < 10 ? String(date).padStart(2, 0) : date;
      hours = hours < 10 ? String(hours).padStart(2, 0) : hours;
      minutes = minutes < 10 ? String(minutes).padStart(2, 0) : minutes;
      seconds = seconds < 10 ? String(seconds).padStart(2, 0) : seconds;

      setDate(`${date} ${month} ${year}`);
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="taxi-taxi">
        <div className="title">
          <h3>Taxi taxi taxi</h3>
          <BsThreeDots className="icon" />
        </div>
        <div className="time-date-wrapper">
          <div className="time-wrapper">
            <p>On our watch</p>
            <div className="time">
              <BiTimeFive className="icon" />
              <p>{time}</p>
            </div>
          </div>
          <div className="date-wrapper">
            <p>And today we have</p>
            <div className="date">
              <HiOutlineCalendar className="icon" />
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="observation">
        <div className="title">
          <h3>Observation</h3>
          <div className="text">
            <p>
              Most tasks you <Link to="#">created</Link> on Monday
            </p>
            <p>Most tasks you complete on Tuesday</p>
          </div>
        </div>
      </div>
      <div className="fact">
        <div className="title">
          <h3>Fact of the day</h3>
          <div className="text">
            <p>
              A person who wakes up at 6 am, according to statistics, closes all
              tasks by 18:00 pm.
            </p>
            <p>Let's try it too 🤔?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarRight;
