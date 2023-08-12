/* eslint-disable */

import { departmentsInfoList } from "../../../config/app-config/AppConfig";
import Card from "../../shared/card-component/Card";
import "./Departments.css";

const Departments = () => {
  return (
    <div className="departments-section">
      {departmentsInfoList.map((department, index) => (
        <Card
          cardContent={{ title: department }}
          clickable={true}
          key={department + index}
        />
      ))}
    </div>
  );
};

export default Departments;
