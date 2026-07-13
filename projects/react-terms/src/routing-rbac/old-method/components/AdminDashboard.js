import React from "react";
import { permissions } from "../../authData";
import withAuthentication from "../utils/withAuthentication";

const AdminDashboard = () => {
  return <div>AdminDashboard</div>;
};

export default withAuthentication(AdminDashboard, permissions.VIEW_DASHBOARD);
