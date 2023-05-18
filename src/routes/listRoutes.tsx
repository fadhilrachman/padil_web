import Dashboard from "../pages/dashboard";

interface ListRouter {
  path: string;
  component: any;
}

const listRoutes: ListRouter[] = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/",
    component: <Dashboard />,
  },
];

export default listRoutes;
