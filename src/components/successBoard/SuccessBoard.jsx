import React from "react";
import "./successBoard.scss";
import { BsThreeDots } from "react-icons/bs";

const SuccessBoard = ({ taskCount, activeCount, completedCount }) => {
  return (
    <>
      <div className="successBoard">
        <div className="title">
          <p>Success for the week</p>
          <BsThreeDots className="icon" />
        </div>
        <div className="progress-wrapper">
          <div className="progress">
            <small>All</small>
            <div className="progress__circle">
              <p>{taskCount}</p>
              <small>tasks</small>
            </div>
          </div>
          <div className="progress">
            <small>Completed</small>
            <div className="progress__circle">
              <p>{completedCount}</p>
              <small>tasks</small>
            </div>
          </div>
          <div className="progress">
            <small>Active</small>
            <div className="progress__circle">
              <p>{activeCount}</p>
              <small>tasks</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessBoard;
