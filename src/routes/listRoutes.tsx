import Dashboard from "../pages/dashboard";
import Expense from "../pages/expense";
import CreateExpense from "../pages/expense/CreateExpense";
import Income from "../pages/income";
import CreateIncome from "../pages/income/CreateIncome";
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
  {
    path: "/expense-create",
    component: <CreateExpense />,
  },
  {
    path: "/income",
    component: <Income />,
  },
  {
    path: "/income-create",
    component: <CreateIncome />,
  },
];

export default listRoutes;
