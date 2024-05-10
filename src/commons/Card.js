import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorites, addToWatchLater, isFavorite, addToVistas, removeToWatchLater, removeToVistas, removeToFavorites, inWatchLater, inVistas } from "../dbSimulator"
import "../Style/Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faEyeSlash, faList, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import filmNotAvaible from "../assets/filmNotAvaible.png"

const Card = ({ data,media }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  const [favorito, setFavorito] = useState(false);
  const [vistas, setVistas] = useState(false);
  const [verDespues, setVer] = useState(false);

  useEffect(() => {
    if (user) {
      setFavorito(isFavorite(user.id, data.id));
      setVer(inWatchLater(user.id, data.id))
      setVistas(inVistas(user.id, data.id))
    }

  }, [data.id]); // Actualiza cuando cambia el ID de la película

  const toggleFavorite = () => {
    setFavorito(!favorito);
    favorito ? addFavorites(data, user.id) : removeToFavorites(data, user.id)

  };

  const toggleVerDespues = () => {
    setVer(!verDespues);
    verDespues ? addToWatchLater(data, user.id) : removeToWatchLater(data, user.id)

  };

  const toggleVistas = () => {
    setVistas(!vistas);
    vistas ? addToVistas(data, user.id) : removeToVistas(data, user.id)

  };


  return (

    <div className="contenedor-card" key={data.id}>
      <div className="card ">
      <Link to={`/${media}/${data.id}`}> 

          {
            data.poster_path ? <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              className="card-img-top"
              alt="..."
            /> :
              <img
                src={filmNotAvaible}
                className="card-img-top"
                alt="..."
              />
          }
        </Link>
        <div className="card-body">
          <h5 className="card-title">{media === "tv" ? data.name:data.title}</h5>
          <p className="card-text">{data.overview.slice(0, 80) + "..."}</p>
        </div>


        <>
        { user ? (
          <div className="opcion-lista">
            <div className="opcion" onClick={toggleFavorite}>
              {!favorito ? (
                <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
              ) : (
                <FontAwesomeIcon icon={faHeart} style={{ color: '#ef6161' }} />
              )}</div>
            <div className="opcion" onClick={toggleVistas}>

              {!vistas ? (
                <FontAwesomeIcon icon={faEye} style={{ color: "#000000" }} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#000000" }} />
              )}

            </div>
            <div className="opcion" onClick={toggleVerDespues}>

              {!verDespues ? (
                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#000000" }} />
              ) : (
                <FontAwesomeIcon icon={faList} style={{ color: "#000000", }} />
              )}

            </div>
          </div>
          ):("")}
        </>


      </div>
    </div>
  );
};

export default Card;
