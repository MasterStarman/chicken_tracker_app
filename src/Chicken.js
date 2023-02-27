import React from "react";

export default function chicken({ chicken }) {
  const chickenObject = {
    chickenName: "Joseph",
    chickenIdNumber: 12,
    dateHatched: "1/23/23",
    breed: "Big One",
  };
  return (
    <>
      <div>
        <label>{chicken.name}</label>
      </div>
    </>
  );
}
