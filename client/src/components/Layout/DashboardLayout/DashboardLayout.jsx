import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, Sidebar } from "../../../components";

import "./dashboardLayout.scss";

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <AdminHeader />
            <main className="dashboard">
                <Sidebar />
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default DashboardLayout;
