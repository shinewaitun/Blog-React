import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ImageUploading from "react-images-uploading";
import { Icon } from "@iconify/react";
import { useUserMutate } from "../hooks/useUserQuery";
import { addblog } from "../services/blog.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const animatedComponents = makeAnimated();

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required!"),
  content: Yup.string().required("Contents is required!"),
});

function AddBlogForm({ selectoptions }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const maxNumber = 8;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
  };
  const options =
    selectoptions &&
    selectoptions.map((option) => {
      return { value: option._id, label: option.name };
    });

  const { mutate, data } = useUserMutate(addblog);

  const handlesubmit = (values) => {
    const idList = selectedValues.map((item) => {
      return item.value;
    });
    values = { ...values, categoryList: idList };
    if (images.length !== 0) {
      const urlList = images.map((image) => {
        return image.data_url;
      });
      values = { ...values, urlList: urlList };
      mutate(values);
      console.log(data);
      toast.success("Added successfully!");
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: handlesubmit,
  });

  return (
    <form
      className="w-100 d-flex justify-content-center gap-5 mb-5 mt-2 px-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="d-flex flex-column justify-content-start align-items-start gap-3 w-50">
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Title
          </small>
          <input
            type="text"
            className="form-control py-2 w-100"
            aria-describedby="titleLabel"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-danger">{formik.errors.title}</div>
          )}
        </div>
        <div className="form-group w-100">
          <small id="imageLabel" className="form-text text-muted">
            Images
          </small>
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
                      <img
                        src={image.data_url}
                        alt=""
                        width={130}
                        height={130}
                      />
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
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start gap-3 w-50">
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Note
          </small>
          <input
            type="text"
            className="form-control py-2 w-100 h-auto"
            aria-describedby="titleLabel"
          />
        </div>
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Category
          </small>
          <div aria-describedby="titleLabel">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              value={selectedValues}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group w-100">
          <small id="titleLabel" className="form-text text-muted">
            Contents
          </small>
          <textarea
            class="form-control py-2 w-100"
            aria-describedby="titleLabel"
            rows={10}
            style={{ resize: "none" }}
            id="content"
            name="content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
          />
          {formik.touched.content && formik.errors.content && (
            <div className="text-danger">{formik.errors.content}</div>
          )}
        </div>
        <div className="form-group w-100">
          <button className={`btn w-100 btn-primary`} type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBlogForm;
