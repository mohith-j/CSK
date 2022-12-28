import React from "react";
import AdminLayout from "../../hoc/adminlayout";

const Dashboard=(props)=>{
    console.log(props)
    return(
        <AdminLayout>
           <div className="user_dashboard">
                <div>
                    This is your dashboard
                </div>
           </div>
        </AdminLayout> 
    )
}

export default Dashboard;
