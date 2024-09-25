import React from "react";
import withAuthentication from "../utils/withAuthentication";
import { permissions } from "../../authData";

const UserDashboard = () => {
  return <div>UserDashboard</div>;
};

export default withAuthentication(UserDashboard, permissions.VIEW_DASHBOARD);
