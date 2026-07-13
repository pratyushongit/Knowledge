import React from "react";
import withAuthentication from "../utils/withAuthentication";
import { permissions } from "../../authData";

const Profile = () => {
  return <div>Profile</div>;
};

export default withAuthentication(Profile, permissions.VIEW_PROFILE);
