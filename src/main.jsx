import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import DreamCircles from "./screens/DreamCircles.jsx";
import SingleDreamCircle from "./screens/SingleDreamCircle.jsx";
import Signin from "./screens/auth/Signin.jsx";
import Signup from "./screens/auth/Signup.jsx";
import Dashboard from "./screens/admin/Dashboard.jsx";
import MentorDashboard from "./screens/mentor/Dashboard.jsx";
import StudentDashboard from "./screens/student/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // auth routes
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  // dream circle routes
  {
    path: "/dream-circles",
    element: <DreamCircles />,
  },
  {
    path: "/dream-circles/:id",
    element: <SingleDreamCircle />,
  },
  // dashboard routes
  {
    path: "/admin-dashboard/:id",
    element: <Dashboard />,
  },
  {
    path: "/mentor-dashboard/:id",
    element: <MentorDashboard />,
  },
  {
    path: "/student-dashboard/:id",
    element: <StudentDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
