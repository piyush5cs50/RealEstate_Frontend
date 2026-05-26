function GoogleMap({
  latitude,
  longitude,
}) {

  return (
    <div className="mt-4">

      <h4 className="mb-3">
        Property Location
      </h4>

      <iframe
        title="google-map"

        width="100%"
        height="350"

        style={{
          border: 0,
          borderRadius: "10px",
        }}

        loading="lazy"

        allowFullScreen

        src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
      ></iframe>

    </div>
  );
}

export default GoogleMap;