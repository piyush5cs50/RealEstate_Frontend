import { Link } from "react-router-dom";

function PropertyCard({ property }) {

  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        {/* Property Image */}
        <img
          src={
            property.images?.length > 0
              ? property.images[0]
              : "https://via.placeholder.com/400x250"
          }
          alt={property.title}
          className="card-img-top"
          style={{
            height: "250px",
            objectFit: "cover",
          }}
        />

        {/* Card Body */}
        <div className="card-body">

          <h5 className="card-title">
            {property.title}
          </h5>

          <p className="card-text text-muted">
            {property.city}
          </p>

          <p className="card-text">
            {property.description.slice(0, 80)}...
          </p>

          <h6 className="text-primary">
            ₹ {property.price}
          </h6>

<Link
  to={`/property/${property._id}`}
  className="btn btn-primary w-100"
>
  View Details
</Link>

          <p>
            🛏 {property.bedrooms} Bedrooms
          </p>

          <p>
            🛁 {property.bathrooms} Bathrooms
          </p>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;