import { useQuery } from "@apollo/client";
import React from "react";

import funzone from "../queries/funzone";

function Funzone() {
  const { data, loading } = useQuery(funzone);

  const items = data?.funzone?.items;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {items.map((video) => (
        <div key={video.id}> {video.name} </div>
      ))}
    </div>
  );
}

export default Funzone;
