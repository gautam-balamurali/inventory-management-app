/* eslint-disable */

import { dashboardInfoList } from "../../../config/app-config/AppConfig";
import { useInventory } from "../../../core/contexts/InventoryContext";
import { totalSum } from "../../../utils/helper-functions/HelperFunctions";
import Card from "../../shared/card-component/Card";
import "./Home.css";

const Home = () => {
  const { inventoryData } = useInventory();
  const dashboardInfoListCount = [];

  dashboardInfoListCount.push(totalSum(inventoryData, "stock"));
  dashboardInfoListCount.push(totalSum(inventoryData, "delivered"));
  dashboardInfoListCount.push(
    inventoryData.reduce(
      (acc, curr) => (curr["stock"] <= 10 ? acc + 1 : acc),
      0
    )
  );

  return (
    <div className="dashboard-section">
      {dashboardInfoList.map((info, index) => (
        <Card
          cardContent={{ title: info, count: dashboardInfoListCount[index] }}
          key={info + index}
        />
      ))}
    </div>
  );
};

export default Home;
