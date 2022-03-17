import { useQuery } from "@apollo/client";
import React from "react";

import funzone from "../queries/funzone";

function Funzone() {
  const { data, loading } = useQuery(funzone);

  const items = data?.allVideos?.items;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <div>
        <h3>FUNZONE</h3>{" "}
      </div>
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
  );
}

export default Funzone;
