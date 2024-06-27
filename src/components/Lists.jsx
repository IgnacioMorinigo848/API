
import React, { useEffect, useState } from "react";
import { getFavorites, getWatchLater,getWatched } from "../API/listHandler";
import Card from "../commons/Card";
import "../Style/Lists.css"
import { ClipLoader } from 'react-spinners'; 

const List = ({ type, title }) => {
  const [lists, setList] = useState([]);
  const token = localStorage.getItem("token");
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try{
      if (type === "Favorites") {
         setList(await getFavorites());
      } else if (type === "VerDespues"){
         setList(await getWatchLater());
      }else if (type==="Vistas"){
        setList(await getWatched());
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
    };

    fetchList();
  },[type, token]);

  if (loading) {
    return (
      <div className="loader-contenedor-home">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <>
      {lists.length === 0 ? 
      <div className="contenedor-lists-oculto">
        <div className="contenedor-titulo"><h1>{title} </h1></div>
        <div className="contenedor-film-oculto">

        <p>List is empty</p>
       </div>
      </div>
      :
      <div className="contenedor-lists">
        <div className="contenedor-titulo"><h1>{title} </h1></div>
        <div className="contenedor-film">
      {lists.map((data, i) => (
      <Card data={data} media = {data.media} key={data.id} />
      
    ))}
      </div>
    </div> }
    </>
  );
};

export default List;
