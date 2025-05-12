import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <ul>
        <Link to="profile">Profile</Link>
      </ul>
      <ul>
        <Link to="settings">Settings</Link>
      </ul>
      This is a Dashboard
      <Outlet />
    </div>
  );
}
