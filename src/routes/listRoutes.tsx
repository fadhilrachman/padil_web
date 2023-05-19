import Dashboard from "../pages/dashboard";
import Expense from "../pages/expense";
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
  {
    path: "/expense",
    component: <Expense />,
  },
];

export default listRoutes;
