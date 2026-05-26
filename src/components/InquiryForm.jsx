import { useState } from "react";

import API from "../services/api";


function InquiryForm({
  propertyId,
}) {

  // Form State
  const [formData, setFormData] =
    useState({

      buyerName: "",

      buyerEmail: "",

      message: "",
    });


  // Handle Input Change
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });

  };


  // Submit Form
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/inquiries",
          {

            propertyId,

            ...formData,
          }
        );


      alert(
        response.data.message
      );


      // Clear form
      setFormData({

        buyerName: "",

        buyerEmail: "",

        message: "",
      });

    } catch (error) {

      console.log(error);

      alert(
        "Failed to submit inquiry"
      );

    }

  };


  return (
    <div className="card p-4 mt-4">

      <h3 className="mb-4">
        Contact Seller
      </h3>

      <form
        onSubmit={handleSubmit}
      >

        {/* Name */}
        <div className="mb-3">

          <label className="form-label">
            Name
          </label>

          <input
            type="text"

            name="buyerName"

            className="form-control"

            placeholder="Enter your name"

            value={
              formData.buyerName
            }

            onChange={handleChange}

            required
          />

        </div>


        {/* Email */}
        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"

            name="buyerEmail"

            className="form-control"

            placeholder="Enter your email"

            value={
              formData.buyerEmail
            }

            onChange={handleChange}

            required
          />

        </div>


        {/* Message */}
        <div className="mb-3">

          <label className="form-label">
            Message
          </label>

          <textarea
            name="message"

            rows="4"

            className="form-control"

            placeholder="Write your message"

            value={
              formData.message
            }

            onChange={handleChange}

            required
          ></textarea>

        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Send Inquiry
        </button>

      </form>

    </div>
  );
}

export default InquiryForm;