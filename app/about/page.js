import React from "react";
import Card from "@/src/components/card";

function page() {
  return (
    <div>
      <div className="w-2/6">
        <Card
          key={1}
          name={"Cat Man Hat"}
          image={
            "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          username={"Ara moment"}
          avatar={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
}

export default page;
