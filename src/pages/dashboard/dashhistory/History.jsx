import React, { useEffect } from "react";
import { useDashboard } from "../../../contexts/dashboardContext";

function History() {
  const { active, activeTab } = useDashboard();

  useEffect(() => {
    if (active === 1) {
      activeTab(4);
    }
  }, []);

  return <div>History</div>;
}

export default History;
