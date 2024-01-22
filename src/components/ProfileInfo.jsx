import React from "react";

function ProfileInfo({ user }) {
  return (
    <div className="py-4 my-4 shadow d-flex flex-row justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-start align-items-start w-50 ps-5">
        <div className="py-4">
          <img
            className="rounded-circle"
            width={80}
            height={80}
            src={user.img}
            alt="profile_image"
          />
        </div>
        <div className="w-100 d-flex justify-content-center">
          <span className="w-50">USERNAME</span>
          <span className="w-50">: Jessica Everest</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-start align-self-end w-50 gap-4">
        <div className="w-100 d-flex justify-content-center">
          <span className="w-50">STATUS</span>
          <span className="text-success w-50">: ACTIVE</span>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <span className="w-50">EMAIL</span>
          <span className="w-50">: jessica@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
