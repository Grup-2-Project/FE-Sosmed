import Layout from "@/components/layout";
import Index from "@/pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import DetailStory from "@/pages/story/detail-story";
import Profile from "@/pages/user";
import Settings from "@/pages/user/Settings";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/user",
        element: <Profile />,
      },
      {
        path: "user/settings",
        element: <Settings />,
      },
      {
        path: "story/:id",
        element: <DetailStory />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
