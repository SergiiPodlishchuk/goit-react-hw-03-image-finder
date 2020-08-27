import React, { Component } from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import imagesAPI from "./services/imagesAPI";
import Searchbar from "./Searchbar/Searchbar";
import Notification from "./Notification/Notification";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

import style from "./style.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    arrayImages: [],
    error: null,
    loading: false,
    isClick: false,
    BigImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesAPI
      .fetchImagesWithQuery(searchQuery, page)
      .then((arrayImages) =>
        this.setState((prevState) => ({
          arrayImages: [...prevState.arrayImages, ...arrayImages],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, arrayImages: [] });
  };

  onClickModal = ({ target }) => {
    this.setState({ isClick: true, BigImage: target.srcset });
  };

  clickExitModal = ({ target }) => {
    if (target.className === "Overlay") {
      this.setState({ isClick: false });
    }
  };

  render() {
    const { arrayImages, loading, error, isClick, BigImage } = this.state;

    return (
      <div className={style.App} onClick={this.clickExitModal}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <Notification message={`Whoops ${error.message}`} />}
        <ImageGallery
          arrayImages={arrayImages}
          onClickModal={this.onClickModal}
        />
        {loading && (
          <Loader
            type="ThreeDots"
            color="#f5f505"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {isClick && <Modal BigImage={BigImage} />}
        {arrayImages.length > 0 && !loading && (
          <Button onClick={this.fetchImages} />
        )}
      </div>
    );
  }
}
