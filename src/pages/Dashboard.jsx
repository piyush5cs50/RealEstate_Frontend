import { useEffect, useState }
from "react";

import API from "../services/api";


function Dashboard() {

  // Dashboard State
  const [stats, setStats] =
    useState({

      totalProperties: 0,

      approvedProperties: 0,

      totalInquiries: 0,

      totalViews: 0,
    });


  // Fetch Dashboard Data
  const fetchDashboardData =
    async () => {

      try {

        // Get properties
        const propertyResponse =
          await API.get(
            "/admin/properties"
          );


        // Get inquiries
        const inquiryResponse =
          await API.get(
            "/admin/inquiries"
          );


        const properties =
          propertyResponse.data.properties;

        const inquiries =
          inquiryResponse.data.inquiries;


        // Total properties
        const totalProperties =
          properties.length;


        // Approved properties
        const approvedProperties =
          properties.filter(
            (property) =>
              property.isApproved
          ).length;


        // Total inquiries
        const totalInquiries =
          inquiries.length;


        // Total property views
        const totalViews =
          properties.reduce(

            (total, property) =>

              total + property.views,

            0
          );


        // Save stats
        setStats({

          totalProperties,

          approvedProperties,

          totalInquiries,

          totalViews,
        });

      } catch (error) {

        console.log(error);

      }

    };


  // Run on page load
  useEffect(() => {

    fetchDashboardData();

  }, []);


  return (
    <div className="container mt-5 card bg-primary text-white">

      <h2 className="mb-4">
        Analytics Dashboard
      </h2>

      <div className="row">

        {/* Total Properties */}
        <div className="col-md-3 mb-4">

          <div className="card text-center p-4 shadow">

            <h5>
              Total Properties
            </h5>

            <h2>
              {stats.totalProperties}
            </h2>

          </div>

        </div>


        {/* Approved Properties */}
        <div className="col-md-3 mb-4">

          <div className="card text-center p-4 shadow">

            <h5>
              Approved Properties
            </h5>

            <h2>
              {stats.approvedProperties}
            </h2>

          </div>

        </div>


        {/* Total Inquiries */}
        <div className="col-md-3 mb-4">

          <div className="card text-center p-4 shadow">

            <h5>
              Total Inquiries
            </h5>

            <h2>
              {stats.totalInquiries}
            </h2>

          </div>

        </div>


        {/* Total Views */}
        <div className="col-md-3 mb-4">

          <div className="card text-center p-4 shadow">

            <h5>
              Total Views
            </h5>

            <h2>
              {stats.totalViews}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;