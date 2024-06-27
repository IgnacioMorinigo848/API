import axios from "axios";

export const getUsuario = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:3000/user/", {
      headers: { "x-acces-token": token },
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

////////////FAVORITES //////////////////////
export const addFavorites = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3000/lists/favorites",
      data,
      { headers: { "x-acces-token": token } }
    );
    return response.data;
  } catch (e) {
    console.log(e.response.data.errors);
  }
};

export const getFavorites = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("http://localhost:3000/lists/favorites", {
    headers: { "x-acces-token": token },
  });

  return response.data;
};

export const isFavorite = async (filmId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `http://localhost:3000/lists/favorites/${filmId}`,
    { headers: { "x-acces-token": token } }
  );
  return response.data;
};

export const removeToFavorites = async (itemId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      "http://localhost:3000/lists/favorites",
      {
        data: { _id: itemId },
        headers: { "x-acces-token": token },
      }
    );
    return response.data;
  } catch (e) {
    alert(e.response);
  }
};

////////////WATCH LATER //////////////////////
export const addWatchLater = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3000/lists/watchLater",
      data,
      { headers: { "x-acces-token": token } }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getWatchLater = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("http://localhost:3000/lists/watchLater", {
    headers: { "x-acces-token": token },
  });

  return response.data;
};

export const inWatchLater = async (filmId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `http://localhost:3000/lists/watchLater/${filmId}`,
    { headers: { "x-acces-token": token } }
  );
  return response.data;
};

export const removeToWatchLater = async (itemId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      "http://localhost:3000/lists/watchLater",
      {
        data: { _id: itemId },
        headers: { "x-acces-token": token },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

////////////WATCHED //////////////////////
export const addWatched = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:3000/lists/watched",
      data,
      { headers: { "x-acces-token": token } }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getWatched = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:3000/lists/watched", {
    headers: { "x-acces-token": token },
  });
  return response.data;
};

export const isWatched = async (filmId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `http://localhost:3000/lists/watched/${filmId}`,
    { headers: { "x-acces-token": token } }
  );
  return response.data;
};

export const removeToWatched = async (itemId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      "http://localhost:3000/lists/watched",
      {
        data: { _id: itemId },
        headers: { "x-acces-token": token },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
