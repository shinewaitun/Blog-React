import React from "react";

export default function JumbotronText({ img }) {
  return (
    <div className="p-3 p-md-5 d-flex flex-column gap-4 justify-content-center align-items-center">
      <img className="img-fluid" src={img} alt="image_1" />
      <h1 className="w-75 text-center fw-bold text-black">
        A few words about this blog platform, Ghost and how this site was made
      </h1>
      <div className="w-75 pb-3 pb-md-5 border-bottom border-black border-2">
        <h5 className="text-center">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h5>
      </div>
    </div>
  );
}
