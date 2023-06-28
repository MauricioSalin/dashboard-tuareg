import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdOutlineSchedule,
  MdPeopleAlt,
  MdDashboard,
  MdAttachMoney,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";
import DataTables from "pages/admin/data-tables";

// Auth Imports
import SignInCentered from "pages/auth/sign-in";
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Responsáveis",
    layout: "/admin",
    path: "/responsaveis",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
  {
    name: "Clientes",
    layout: "/admin",
    path: "/clientes",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
  {
    name: "Agendamentos",
    layout: "/admin",
    icon: (
      <Icon as={MdOutlineSchedule} width="20px" height="20px" color="inherit" />
    ),
    path: "/agendamentos",
    component: DataTables,
  },
  {
    name: "Mensalidades",
    layout: "/admin",
    path: "/mensalidades",
    icon: (
      <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />
    ),
    component: DataTables,
  },
  {
    name: "Tarefas",
    layout: "/admin",
    path: "/tarefas",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
