import React, { Component } from "react";
import { ImgContainer, ImgHolder } from "./ImgePickerElements";
import BgImage from "../../assets/images/image-picker.png";

export class ImagePicker extends Component {
  state = {
    profileImg: BgImage,
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;

    return (
      <ImgContainer>
        <label htmlFor="input" />
        <ImgHolder>
          <img src={profileImg} alt="" />
        </ImgHolder>
        <input
          type={"file"}
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={this.imageHandler}
        ></input>
      </ImgContainer>
    );
  }
}

export default ImagePicker;
