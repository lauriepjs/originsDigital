import { useQuery } from "@apollo/client";
import React from "react";

import testimonials from "../queries/testimoniales"

function Testimonials() {
  const { data, loading } = useQuery(testimonials);

  const items = data?.allVideos?.items;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="card">
      <h3>TESTIMONIALS</h3> 
      {items.map((video) => (
        <div key={video.id}> {video.name} </div>
      ))}
    </div>
  );
}

export default Testimonials;
