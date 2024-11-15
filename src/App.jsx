/* eslint-disable react/no-children-prop */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AreaChart from "./components/charts/areaChart/AreaChart";
import Cancel from "./components/shared/plans/components/Cancel.jsx";
import Success from "./components/shared/plans/components/Success.jsx";
import AllRestRooms from "./pages/buildings/allRestRooms/AllRestRooms.jsx";
import Buildings from "./pages/buildings/Buildings";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import BuildingFloors from "./pages/dashboard/components/buildingFloors";
import AllFloorList from "./pages/dashboard/components/buildingFloors/AllFloorList.jsx";
import EditBuilding from "./pages/dashboard/components/buildingFloors/EditBuilding.jsx";
import Dashboard from "./pages/dashboard/components/dashboard";
import Floor from "./pages/dashboard/components/floors.jsx";
import Plans from "./pages/plans/Plans.jsx";
import Register from "./pages/auth/Register.jsx";
import InspectorReporting from "./pages/reporting/InspectorReporting.jsx";
import UserReporting from "./pages/reporting/UserReporting.jsx";
import Sensors from "./pages/sensors/Sensors";
import ViewSensor from "./pages/sensors/ViewSensor.jsx";
import ChangePassword from "./pages/settings/components/ChangePassword.jsx";
import Subscription from "./pages/settings/components/Subscription.jsx";
import Settings from "./pages/settings/Settings";
import Signin from "./pages/auth/Signin.jsx";
import Home from "./components/layout/index.jsx";
import InspectionHome from "./inspection/layout/index.jsx";
import InspectionDashboard from "./inspection/pages/dashboard/InspectionDashboard.jsx";
import InspectionProfile from "./inspection/pages/settings/components/Profile.jsx";
import InspectionChangePassword from "./inspection/pages/settings/components/ChangePassword.jsx";
import Inspections from "./inspection/pages/inspection/Inspections.jsx";
import Configuration from "./pages/settings/Configuration.jsx";
import ReportsList from "./pages/downloadReport/ReportsList.jsx";
import Reports from "./pages/downloadReport/Reports.jsx";
import Admin from "./pages/admin/layout/index.jsx";
import AdminProfile from "./pages/admin/settings/components/Profile.jsx";
import AdminChangePassword from "./pages/admin/settings/components/ChangePassword.jsx";
import AddBuildingStepper from './pages/buildings/addBuildingStepper/AddBuildingStepper.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useGetMyProfileQuery } from "./services/auth/authApi.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./services/auth/authSlice.js";

const App = () => {
  const dispatch = useDispatch()
  const {data, error, isLoading} = useGetMyProfileQuery();

  useEffect(() => {
    if (data && data?.success) {
        dispatch(loginSuccess(data?.data));
        console.log('User authenticated');
    } else if (error) {
        dispatch(logout());
    }
}, [data, error, dispatch]);


  if (isLoading) return <div>Loading...</div>
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Register />} />

      {/* Main application routes */}
      <Route path="/" element={<ProtectedRoute children={<Home />} />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="building-floor" element={<BuildingFloors />} />
        <Route path="update-building/:id" element={<EditBuilding />} />
        <Route path="floor/:buildingId/:floorId" element={<Floor />} />
        <Route path="building" element={<Buildings />} />
        <Route path="add-building" element={<AddBuildingStepper />} />
        <Route path="sensor" element={<Sensors />} />
        <Route path="view-sensor" element={<ViewSensor />} />
        <Route path="setting" element={<Settings />} />
        <Route path="reporting" element={<UserReporting />} />
        <Route path="plan" element={<Plans />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="all-floors" element={<AllFloorList />} />
        <Route path="configuration" element={<Configuration />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="/inspection" element={<InspectionHome />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<InspectionDashboard />} />
        <Route path="history" element={<InspectorReporting />} />
        <Route path="all-inspections" element={<Inspections />} />
        <Route path="all-restrooms" element={<AllRestRooms />} />
        <Route path="profile" element={<InspectionProfile />} />
        <Route path="change-password" element={<InspectionChangePassword />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="change-password" element={<AdminChangePassword />} />
      </Route>

      {/* Redirect all other routes to /home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
