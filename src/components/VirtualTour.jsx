import { useEffect } from "react";


function VirtualTour({
  image,
}) {

  useEffect(() => {

    if (window.pannellum) {

      window.pannellum.viewer(
        "panorama-viewer",
        {
          type: "equirectangular",

          panorama: image,

          autoLoad: true,

          showZoomCtrl: true,
        }
      );

    }

  }, [image]);


  return (
    <div className="mt-4">

      <h4 className="mb-3">
        360° Virtual Tour
      </h4>

      <div
        id="panorama-viewer"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
        }}
      ></div>

    </div>
  );
}

export default VirtualTour;