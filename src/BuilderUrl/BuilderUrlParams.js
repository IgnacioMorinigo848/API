export function BuildUrl(media, categoria, value,actorId) {
    let url = "";
    const apiKey = "425c2d87b8b9c812c4101db1f80fd9e5";
    const baseUrl = "https://api.themoviedb.org/3";
  
    if (media === "movie" && value) {
      url = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
    } else if (media === "tv" && value) {
      url = `${baseUrl}/search/tv?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
    } else if (media === "person" && value) {
      url = `${baseUrl}/search/person?api_key=${apiKey}&language=en-US&query=${value}&include_adult=false`;
    } else if (media === "person" && actorId) {
        url =   `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
    } else if (media && categoria) {
      url = `${baseUrl}/${media}/${categoria}?api_key=${apiKey}&language=en-US&page=1`;
    } else if (media && !categoria) {
      url = `${baseUrl}/${media}/popular?api_key=${apiKey}&language=en-US&page=1`;
    }
    
    return url;
}
