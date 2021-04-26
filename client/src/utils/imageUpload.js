// const cloudinary = require('cloudinary');

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
// });

// cloudinary.v2.uploader.upload(file, options, callback);

// var widget = cloudinary.createUploadWidget({ 
//   cloudName: "bebrucato", uploadPreset: "whhpami4" }, (error, result) => { });
// widget.open();

import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
   }
  showWidget = () => {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `bebrucato`,
       uploadPreset: `ml_default`}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      console.log(result.info.url); 
    }});
    widget.open()
  }
  render() {
    return (<div>
           <button onClick={this.showWidget}> Upload Image </button>
           </div>
    );
  }
}
export default ImageUpload;
