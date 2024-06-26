import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../Style/Search.css"

const SearchUser = () => {
  const [inputUser, setImputUser] = useState("");
  const navigate = useNavigate();

/*   const { user, setUser } = useContext(UserContext); ASI SE TRAE PARA SETEAR Y CONSUMIR USER*/
const {setUser}= useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/users/${inputUser}`)
      .then((res) => setUser(res.data[0]));
    navigate("/users");
  };

  const handleSearch = (e) => {
    setImputUser(e.target.value);
  };

  return (
    <>
      {" "}
      <form className="d-flex ms-5 me-5" role="search" onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="search"
            placeholder="Search User"
            aria-label="Search"
            onChange={handleSearch}
          />
        </div>
      </form>
    </>
  );
};

export default SearchUser;
