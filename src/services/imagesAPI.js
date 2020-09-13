import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com";
const API_KEY = "17198919-7cedd3f99d379df98db4093df";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
