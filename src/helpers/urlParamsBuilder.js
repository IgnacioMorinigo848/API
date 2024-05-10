export function buildUrl(media, categoria, actorId) {
    let url = "";
    if (media && !categoria) {
      url = `https://api.themoviedb.org/3/${media}/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`;
    } else if (actorId) {
      url = `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`;
    } else if (categoria && media) {
      url = `https://api.themoviedb.org/3/${media}/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`;
    }
   
    return url;
  }
  