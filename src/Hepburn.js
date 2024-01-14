import React from "react";

const user = {
  name: "Audrey Hepburn",
  imageUrl:"https://i.pinimg.com/474x/a9/b2/13/a9b213f0d5a0f25768b2a73f5d7deb40.jpg",
  imageSize: 308,
  description: "Actress, model, and humanitarian."
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.description}</p>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={"photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}