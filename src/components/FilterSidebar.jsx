function FilterSidebar({
  filters,
  setFilters,
}) {

  // Handle Input Changes
  const handleChange = (e) => {

    setFilters({
      ...filters,

      [e.target.name]: e.target.value,
    });

  };

  return (
    <div className="card p-3 shadow">

      <h4 className="mb-3">
        Filters
      </h4>

      {/* City */}
      <div className="mb-3">

        <label className="form-label">
          City
        </label>

        <input
          type="text"
          name="city"
          className="form-control"
          placeholder="Enter city"

          value={filters.city}

          onChange={handleChange}
        />

      </div>

      {/* Min Price */}
      <div className="mb-3">

        <label className="form-label">
          Min Price
        </label>

        <input
          type="number"
          name="minPrice"
          className="form-control"
          placeholder="Minimum price"

          value={filters.minPrice}

          onChange={handleChange}
        />

      </div>

      {/* Max Price */}
      <div className="mb-3">

        <label className="form-label">
          Max Price
        </label>

        <input
          type="number"
          name="maxPrice"
          className="form-control"
          placeholder="Maximum price"

          value={filters.maxPrice}

          onChange={handleChange}
        />

      </div>

      {/* Property Type */}
      <div className="mb-3">

        <label className="form-label">
          Property Type
        </label>

        <select
          name="propertyType"
          className="form-select"

          value={filters.propertyType}

          onChange={handleChange}
        >

          <option value="">
            Select Type
          </option>

          <option value="Apartment">
            Apartment
          </option>

          <option value="Villa">
            Villa
          </option>

          <option value="House">
            House
          </option>

        </select>

      </div>

    </div>
  );
}

export default FilterSidebar;