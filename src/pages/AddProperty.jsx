import { useState } from "react";
import API from "../services/api";

function AddProperty() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    address: "",
    propertyType: "Apartment",
    bedrooms: "",
    bathrooms: "",
    virtualTourUrl: "",
    latitude: "",
    longitude: "",
  });

  // Store Images
  const [images, setImages] =
    useState([]);

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Handle Image Change
  const handleImageChange =
    (e) => {

      setImages(e.target.files);

    };

  // Submit Form
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        // JWT Token
        const token =
          localStorage.getItem("token");


        // =====================
        // Create FormData
        // =====================

        const propertyData =
          new FormData();


        // Add All Text Fields
        for (let key in formData) {

          propertyData.append(
            key,
            formData[key]
          );
        }


        // Add Images
        for (
          let i = 0;
          i < images.length;
          i++
        ) {

          propertyData.append(
            "images",
            images[i]
          );
        }


        // Send Request
        const response =
          await API.post(

            "/properties",

            propertyData,

            {
              headers: {

                Authorization:
                  `Bearer ${token}`,

                "Content-Type":
                  "multipart/form-data",
              },
            }
          );


        alert(
          response.data.message
        );

        console.log(
          response.data
        );

      } catch (error) {

        console.log(error);

        alert(

          error.response?.data?.message ||

          "Property upload failed"
        );
      }
    };

  return (

    <div className="container mt-5 mb-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Add Property
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Title */}
              <div className="mb-3">

                <label className="form-label">
                  Property Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Description */}
              <div className="mb-3">

                <label className="form-label">
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* Price */}
              <div className="mb-3">

                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="price"
                  onChange={handleChange}
                  required
                />

              </div>


              {/* City */}
              <div className="mb-3">

                <label className="form-label">
                  City
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="city"
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Address */}
              <div className="mb-3">

                <label className="form-label">
                  Address
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="address"
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Property Type */}
              <div className="mb-3">

                <label className="form-label">
                  Property Type
                </label>

                <select
                  className="form-select"
                  name="propertyType"
                  onChange={handleChange}
                >

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>

                </select>

              </div>


              {/* Bedrooms */}
              <div className="mb-3">

                <label className="form-label">
                  Bedrooms
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="bedrooms"
                  onChange={handleChange}
                />

              </div>


              {/* Bathrooms */}
              <div className="mb-3">

                <label className="form-label">
                  Bathrooms
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="bathrooms"
                  onChange={handleChange}
                />

              </div>


              {/* Virtual Tour URL */}
              <div className="mb-3">

                <label className="form-label">
                  Virtual Tour URL
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="virtualTourUrl"
                  onChange={handleChange}
                />

              </div>


              {/* Latitude */}
              <div className="mb-3">

                <label className="form-label">
                  Latitude
                </label>

                <input
                  type="number"
                  step="any"
                  className="form-control"
                  name="latitude"
                  onChange={handleChange}
                />

              </div>


              {/* Longitude */}
              <div className="mb-3">

                <label className="form-label">
                  Longitude
                </label>

                <input
                  type="number"
                  step="any"
                  className="form-control"
                  name="longitude"
                  onChange={handleChange}
                />

              </div>


              {/* IMAGE UPLOAD */}
              <div className="mb-3">

                <label className="form-label">
                  Property Images
                </label>

                <input
                  type="file"

                  className="form-control"

                  multiple

                  accept="image/*"

                  onChange={
                    handleImageChange
                  }
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-100"
              >

                Add Property

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddProperty;