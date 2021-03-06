import { useQuery } from "@apollo/client";
import React from "react";

import testimonials from "../queries/testimoniales";

function Testimonials() {
  const { data, loading } = useQuery(testimonials);

  const items = data?.allVideos?.items;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="testimonials">
      <div>
        <h3>TESTIMONIALS</h3>{" "}
      </div>
      <div className="container">
      {items.map((video) => (
        <ul>
          <li>
            <div className="card" key={video.id}>
              {" "}
              {video.name}{" "}
            </div>
          </li>
        </ul>
      ))}
      </div>
    </div>
  );
}

export default Testimonials;
