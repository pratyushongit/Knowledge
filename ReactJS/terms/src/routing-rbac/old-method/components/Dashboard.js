import React from "react";
import withAuthentication from "../utils/withAuthentication";
import { permissions } from "../../authData";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default withAuthentication(Dashboard, permissions.VIEW_DASHBOARD);
