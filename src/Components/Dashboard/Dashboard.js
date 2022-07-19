import { Navigate } from "react-router-dom";

import { data } from "../../data/data";
import { useSetTitle } from "../../hooks/use-set-title";

import Logout from "../Logout/Logout";
import Chart from "../Chart/Chart";

import "./Dashboard.css";

function Dashboard() {
  useSetTitle("Dashboard");
  const isAuth = localStorage.getItem("token");

  return (
    !isAuth 
      ? <Navigate to="/login" /> 
      : <div className="dashboard-wrap">
          <div className="dashboard">
            <div className="dashboard-top space-between">
              Сводка
              <Logout />
            </div>
            <div className="chart">
            {
              data.map((data, key) => (
                <Chart 
                  data={data} 
                  key={key} 
                />
              ))
            }
            </div>
          </div>
        </div>
  );
}

export default Dashboard;