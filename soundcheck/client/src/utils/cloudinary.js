import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

cloudinary.v2.uploader.upload(file, options, callback);

var widget = cloudinary.createUploadWidget({ 
  cloudName: "my-cloud-name", uploadPreset: "preset1" }, (error, result) => { });
widget.open();
