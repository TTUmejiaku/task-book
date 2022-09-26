import React from "react";
import "./successBoard.scss";
import { BsThreeDots } from "react-icons/bs";

const SuccessBoard = () => {
  return (
    <>
      <div className="successBoard">
        <div className="title">
          <p>Success for the week</p>
          <BsThreeDots className="icon" />
        </div>
        <div className="progress-wrapper">
          <div className="progress">
            <small>Created</small>
            <div className="progress__circle">
              <p>113</p>
              <small>tasks</small>
            </div>
          </div>
          <div className="progress">
            <small>Completed</small>
            <div className="progress__circle">
              <p>113</p>
              <small>tasks</small>
            </div>
          </div>
          <div className="progress">
            <small>Removed</small>
            <div className="progress__circle">
              <p>113</p>
              <small>tasks</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessBoard;
