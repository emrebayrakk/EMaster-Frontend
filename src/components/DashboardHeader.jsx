import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";

const DashboardHeader = () => {
  const user = useSelector(selectCurrentUser);
  console.log("usr", user);
  return (
    <div className="dashboard-header mb-4">
      <h2>
        Welcome, {user?.firstName} {user?.lastName}
      </h2>
    </div>
  );
};

export default DashboardHeader;
