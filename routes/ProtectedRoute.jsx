import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ensure the path is correct
import Spinner from "./Spinner";

export const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Spinner />; // Or any loading spinner
  }

  return currentUser ? <Navigate to="/dashboard" replace /> : children;
};
