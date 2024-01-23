import React from "react";
import ImageUploading from "react-images-uploading";
import { Icon } from "@iconify/react";

function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    console.log(images);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={["jpg", "png", "jpeg"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          <button
            type="button"
            style={isDragging ? { color: "red" } : null}
            className="btn btn-primary"
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            type="button"
            onClick={onImageRemoveAll}
          >
            Remove all
          </button>
          <div className="d-flex flex-row flex-wrap gap-3 mt-2">
            {imageList.map((image, index) => (
              <div key={index}>
                <img src={image.data_url} alt="" width={130} height={130} />
                <div className="image-item__btn-wrapper mt-1 d-flex gap-1">
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    onClick={() => onImageUpdate(index)}
                  >
                    <Icon fontSize={20} icon="mdi:pencil" />
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={() => onImageRemove(index)}
                  >
                    <Icon fontSize={20} icon="mdi:trash-can" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUpload;
