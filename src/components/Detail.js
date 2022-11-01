import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=98b0a57ebbd979bd65dbc8d64644699a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div>
        <p>test</p>
      </div>
    </>
  );
};

export default Detail;
