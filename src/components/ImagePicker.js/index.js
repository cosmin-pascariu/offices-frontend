import React, { Component } from 'react';
import { ImgContainer, ImgHolder } from './ImgePickerElements';
import AddBuildingImage from '../../assets/images/addImg.png';

// https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png

export class ImagePicker extends Component {
  state = {
    profileImg: AddBuildingImage,
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
        <label htmlFor='input' />
        <ImgHolder>
          <img src={profileImg} alt='' />
        </ImgHolder>
        <input
          type={'file'}
          accept='image/*'
          name='image-upload'
          id='input'
          onChange={this.imageHandler}
        ></input>
      </ImgContainer>
    );
  }
}

export default ImagePicker;
