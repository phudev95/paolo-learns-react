import { routes } from "../../config/routes";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.sidebarName}</Link>
        </li>
      ))}
    </div>
  );
};
