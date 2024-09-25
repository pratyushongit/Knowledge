export const roles = {
  admin: "admin",
  user: "user",
  guest: "guest",
};

export const permissions = {
  VIEW_DASHBOARD: "view dashboard",
  VIEW_PROFILE: "edit profile",
};

export const rolePermissions = {
  [roles.admin]: [permissions.VIEW_DASHBOARD, permissions.VIEW_PROFILE],
  [roles.user]: [permissions.VIEW_PROFILE],
  [roles.guest]: [],
};
