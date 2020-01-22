import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY =
    "&api_key=3QGN2O8Bws9dO6cv6z5FmzS3twWYL4ZZ&limit=10&offset=0&rating=PG-13&lang=en";
export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
