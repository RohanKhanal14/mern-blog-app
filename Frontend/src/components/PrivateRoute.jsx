import React from "react";
import { UseSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const currentUser = UseSelector((state) => state.user.currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}
