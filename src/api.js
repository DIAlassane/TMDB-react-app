export const API_URL = "https://api.themoviedb.org/3/movie/top_rated";
export const API_KEY ='ceb50c2809a3dc3e85025e306e2a2';
// export const API_KEY =process.env.API_KEY; 
//pour recuperer la valeur de la variable d'environnement et l'exporter en toute securiter

export const apiOptions = {
    method: "GET",
    headers: {
      "X-API-Key": API_KEY,
      // l'Api distant permet de s'identifier
    },
  };
  