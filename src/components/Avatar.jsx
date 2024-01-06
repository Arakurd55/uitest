import React from "react";
import Image from "next/image";

function Avatar({ src }) {
  return (
    <div className="rounded-full  w-14 h-14">
      <Image
        className="object-cover object-center w-full h-full rounded-full"
        width={1000}
        height={1000}
        alt="logo"
        src={src}
        quality={100} // Adjust the quality as needed
      />
    </div>
  );
}

export default Avatar;
