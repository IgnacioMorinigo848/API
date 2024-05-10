import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../commons/Card";
import "../Style/Home.css"

const ActorDetail = ({ }) => {
    const { actorId } = useParams();
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
            )
            .then((res) => setFilms(res.data.cast));
    }, []);

    return (
        <>
            <div className="contenedor-home">
                <div className="contenedor-titulo">
                    <h1>Film</h1>
                </div>
                <div className="contenedor-film">
                    {films.map((data) => (
                        <Card data={data} media={"movie"} key={data.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ActorDetail;
