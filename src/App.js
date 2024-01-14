import React from "react";

const user = {
    name: "Lady Lamarr",
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}


export default function Profile() {
  return (
      <>
          <h1>{user.name}</h1>
          <img className = "avatar"
               src={user.imageUrl}
               alt={"photo of " + user.name}
               style={{width: user.imageSize, height: user.imageSize}}
          />
      </>
  )
}