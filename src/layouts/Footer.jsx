import React from "react";

export default function Footer() {
  return (
    <div className="w-100 h-75 bg-black">
      <marquee>
        <h4 className="text-warp p-1 text-white pb-5">
          DIGITAL PRODUCT DESIGN REMOTE WORK UX DESIGN DESTRIBUTED TEAMS
          CREATIVITY STRATEGY SUSPENSE GROWTH
        </h4>
      </marquee>
      <h1 className="text-white text-center pt-5 pb-2">NORDIC ROSE</h1>
      <p className="w-50 mx-auto text-white text-center pb-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
        illum, quibusdam minus impedit beatae consectetur vitae, pariatur
        obcaecati possimus voluptas eveniet accusantium quidem autem, numquam
        quasi alias optio cupiditate.
      </p>
      <div className="w-50 mx-auto d-flex justify-content-center gap-5 pb-5">
        <p className="text-white border-bottom border-white">Twitter</p>
        <p className="text-white border-bottom border-white">LinkedIn</p>
        <p className="text-white border-bottom border-white">RSS</p>
      </div>
      <p className="text-white text-center pt-5">
        © 2012-2020 Nordic Rose Co. All rights reserved.
      </p>
    </div>
  );
}
