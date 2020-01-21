import axios from "axios";
const BASEURL = "api.giphy.com/v1/gifs/search?=";
const APIKEY =
    "&api_key=3QGN2O8Bws9dO6cv6z5FmzS3twWYL4ZZ&limit=10&offset=0&rating=PG-13&lang=en";
export default {
    searchGiphy: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
