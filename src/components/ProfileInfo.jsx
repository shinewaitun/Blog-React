import React from "react";

function ProfileInfo({ user }) {
  return (
    <div className="py-4 my-4 shadow d-flex flex-row justify-content-evenly align-items-center">
      <div className="d-flex flex-column justify-content-start align-items-start">
        <div className="py-4">
          <img
            className="rounded-circle"
            width={80}
            height={80}
            src={user.img}
            alt="profile_image"
          />
        </div>
        <div>USERNAME : {user.name}</div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-start align-self-end gap-4">
        <div>
          Status : <span className="text-success">ACTIVE</span>
        </div>
        <div>EMAIL : jessica@gmail.com</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
