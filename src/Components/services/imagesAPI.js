import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const KEY = "17198919-7cedd3f99d379df98db4093df";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
