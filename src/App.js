import React from "react";

// const user = {
//     name: "Lady Lamarr",
//     imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// }


// export default function Profile() {
//   return (
//       <>
//           <h1>{user.name}</h1>
//           <img className = "avatar"
//                src={user.imageUrl}
//                alt={"photo of " + user.name}
//                style={{width: user.imageSize, height: user.imageSize}}
//           />
//       </>
//   )
// }

//HOMEWORK 1

const fruits = {
  name: "Mandarins",
  imageUrl:"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT4Kba74-lWBSCRcNYuLqKdaPGu_tVoERDd2wI8X3fWa8V1mu4ypeoM6Z9ai_F5SmJA",
  imageSize: 90,
};

export default function MandarinOrange() {
  return (
      <>
          <h1>{fruits.name}</h1>
          <img 
               className="avatar"
               src={fruits.imageUrl}
               alt={"photo of" + fruits.name}
               style={{width: fruits.imageSize, height: fruits.imageSize}}
          />
      </>
  )
}