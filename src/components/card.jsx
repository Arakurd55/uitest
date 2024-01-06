import React from "react";
import Avatar from "@/src/components/Avatar";
import Image from "next/image";

function card({ name, image, avatar, username }) {
  return (
    <article className="flex flex-col flex-shrink-0 gap-2 scale-100 flex-0">
      <Image
        className="object-cover w-full rounded-xl h-96"
        alt="dog image"
        src={image}
        width={1000}
        height={1000}
      />

      <h1 className="w-4/5 text-4xl font-bold">{name}</h1>
      {/** item Image */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mt-4">
          <Avatar src={avatar} />
          <div className="flex flex-col">
            <span className="px-3 py-1 text-xs rounded-full text-[#778815] w-fit bg-[#f3ffe4]">
              founder
            </span>
            <h5 className="text-lg font-semibold text-stone-700">{username}</h5>
          </div>
        </div>
        <button className="px-4 py-4 bg-[#FF7516] text-orange-50 rounded-md">
          Claim Item
        </button>
      </div>
    </article>
  );
}

export default card;
