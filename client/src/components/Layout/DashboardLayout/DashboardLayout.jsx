import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, Sidebar } from "../../../components";

import "./dashboardLayout.scss";

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <AdminHeader />
            <div className="dashboard">
                <Sidebar />
                <Outlet />
            </div>
        </React.Fragment>
    );
};

export default DashboardLayout;
