import React, { useEffect, useState } from "react";
import { getFavorites,getWatched,getWatchLater,getUsuario } from "../API/listHandler";

import CardProfile from "./CardProfile";
import "../Style/Profile.css";
import { ClipLoader } from 'react-spinners'; 

const Profile = () => {
  const user=getUsuario();
  const [favorito, setFavorito] = useState([]);
  const [verDespues, setVerDespues] = useState([]);
  const [vistas, setVistas] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    
    const fetchList = async () => {
      setLoading(true);
      try {
      setFavorito(await getFavorites());
      setVerDespues(await getWatchLater());
      setVistas(await getWatched());
    
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false); 
  }
    };
    fetchList();
  }, []);
  if (loading) {
    return (
      <div className="loader-contenedor-profile">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }
  return (

    <div className="contenedor-profile">
      <div className="user"> 
        <p>Profile {user.name} {user.lastname}</p>
      </div>
      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">Favorites</h1>
        <div className="contenedor-card-profile">
          {favorito.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">To Watch </h1>
        <div className="contenedor-card-profile">
          {verDespues.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="contenedor-all-card">
        <h1 className="titulo-card-profile">Views</h1>
        <div className="contenedor-card-profile">
          {vistas.map((data, i) => (
            <CardProfile data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
