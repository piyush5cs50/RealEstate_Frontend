import { useEffect, useState } from "react";

import API from "../services/api";

import PropertyCard from "../components/PropertyCard";

import FilterSidebar from "../components/FilterSidebar";



function Properties() {

const [filters, setFilters] =
  useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
  });

  const [properties, setProperties] =
    useState([]);

  // Fetch properties
  const getProperties = async () => {
  try {

    const response = await API.get(
      "/properties/search",
      {
        params: filters,
      }
    );

    setProperties(
      response.data.properties
    );

  } catch (error) {

    console.log(error);

  }
};

  // Run when page loads
useEffect(() => {

  getProperties();

}, [filters]);

  return (
  <div className="container mt-5">

    <div className="row">

      {/* Sidebar */}
      <div className="col-md-3">

        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
        />

      </div>

      {/* Property Cards */}
      <div className="col-md-9">

        <div className="row">

          {properties.map((property) => (

            <PropertyCard
              key={property._id}
              property={property}
            />

          ))}

        </div>

      </div>

    </div>

  </div>
);
}

export default Properties;