import {React, useEffect, useState} from 'react';
import {useQuery } from "@apollo/client";
import {LOAD_VIDEOS} from '../GraphQL/Queries'


const GetVideos = () => {

  const data = useQuery(LOAD_VIDEOS)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    setVideos(data.allVideos.items)
  }, [videos]) 

  return (
    <div>
      {videos.map((e) => {
        return <h1>{e.id}</h1>
      })}
    </div>
  );
};

export default GetVideos;