import Search from "./Search";
import React,{useEffect,useState} from "react";
import axios from "axios";
import Card from "../commons/Card";
import CardActor from "../commons/CardActor"
import "../Style/Home.css"
import { useSearchParams } from "react-router-dom";


const Home = ({ }) => {
  
  const [searchParams] = useSearchParams();
  const media = searchParams.get("media") || "movie" ; 
  const categoria = searchParams.get("categoria");
  
  const [populars, setPopulars] = useState([]);
  useEffect(() => {

    axios.get(
      `https://api.themoviedb.org/3/${media}/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
    )
      .then(res => setPopulars(res.data.results))

  }, [media,categoria]);

  return (
    <>
    <Search media={media} />
    <div className="contenedor-home">
      <div className="contenedor-titulo"><h1>{media.charAt(0).toUpperCase()+ media.slice(1).toLowerCase() } {categoria === null ? "Populars" : categoria.charAt(0).toUpperCase()+ categoria.slice(1).toLowerCase() } </h1></div>
      <div className="contenedor-film">
        {populars.map((data) => (
          media==="person"?  <CardActor data={data} key={data.id}/> : <Card data={data} media={media} key={data.id} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Home;
