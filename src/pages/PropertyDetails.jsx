import { useEffect, useState } from "react";

import GoogleMap from "../components/GoogleMap";

import InquiryForm from "../components/InquiryForm";

import VirtualTour from "../components/VirtualTour";

import { useParams } from "react-router-dom";

import API from "../services/api";


function PropertyDetails() {

    const { id } = useParams();

    const [property, setProperty] =
        useState(null);


    // Fetch Single Property
    const getProperty = async () => {

        try {

            const response = await API.get(
                `/properties/${id}`
            );

            setProperty(
                response.data.property
            );

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        getProperty();

    }, []);


    // Loading
    if (!property) {

        return (
            <h2 className="text-center mt-5">
                Loading...
            </h2>
        );

    }


    return (
        <div className="container mt-5">

            <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-7">

                    {/* Main Image */}
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="img-fluid rounded shadow"
                        style={{
                            width: "100%",
                            height: "450px",
                            objectFit: "cover",
                        }}
                    />

                    {/* Image Gallery */}
                    <div className="row mt-3">

                        {property.images.map(
                            (image, index) => (

                                <div
                                    className="col-md-3 mb-3"
                                    key={index}
                                >

                                    <img
                                        src={image}
                                        alt="property"
                                        className="img-fluid rounded shadow-sm"
                                        style={{
                                            height: "100px",
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    />

                                </div>

                            )
                        )}
<hr></hr>

<VirtualTour
image = "https://pannellum.org/images/alma.jpg"
//   image={property.virtualTourUrl}
/>
                    </div>

                    

                </div>


                {/* RIGHT SIDE */}
                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2>
                            {property.title}
                        </h2>

                        <h3 className="text-primary mt-3">
                            ₹ {property.price}
                        </h3>

                        <p>
                            👁 Views:
                            {" "}
                            {property.views}
                        </p>

                        <p className="mt-3">
                            📍 {property.city}
                        </p>

                        <p>
                            {property.address}
                        </p>

                        <hr />

                        <h5>Description</h5>

                        <p>
                            {property.description}
                        </p>



                        <hr />

                        <p>
                            🛏 Bedrooms:
                            {" "}
                            {property.bedrooms}
                        </p>

                        <p>
                            🛁 Bathrooms:
                            {" "}
                            {property.bathrooms}
                        </p>

                        <p>
                            🏠 Type:
                            {" "}
                            {property.propertyType}
                        </p>

                        <InquiryForm
  propertyId={property._id}
/>

                        {/* Google Map */}
                        <GoogleMap
  latitude={property.latitude}
  longitude={property.longitude}
/>

                        {/* Contact Button */}
                        <button
                            className="btn btn-primary w-100 mt-3"
                        >
                            Contact Agent
                        </button>


                        

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PropertyDetails;