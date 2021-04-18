import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    return (
        <div className="container-fluid ">
           
            <ManageServices></ManageServices>
       </div>
    );
};

export default Dashboard;