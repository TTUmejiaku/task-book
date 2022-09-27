import React from "react";
import "./dashboard.scss";
import { SuccessBoard, SidebarRight, Charts } from "../../components";
import { BsThreeDots } from "react-icons/bs";

const Dashboard = ({ tasksList, taskCount, activeCount, completedCount }) => {
  return (
    <>
      <main className="dashboard container ">
        <div className="col">
          <SuccessBoard
            taskCount={taskCount}
            activeCount={activeCount}
            completedCount={completedCount}
          />
          <div className="tasks-wrapper">
            <div className="title">
              <h3>Active</h3>
              <BsThreeDots className="icon threeDots" />
            </div>
            {tasksList.activeTasksList}
            <div className="title">
              <h3>Completed</h3>
            </div>
            {tasksList.completedTasksList}
          </div>
        </div>
        <div className="col mt-10">
          <SidebarRight />
          <Charts />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
