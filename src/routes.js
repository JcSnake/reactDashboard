import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Mi perfil",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Lista de pacientes",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Citas",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Reportes",
    icon: "pe-7s-graph1",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Inbox",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
