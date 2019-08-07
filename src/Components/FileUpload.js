import React, { useState } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FileUpload() {
const [selectedFile, setSelectedFile] = useState([]);
let [loaded, setLoaded] = useState(0);

const maxFileLimit = 3;

const handleChange = event => {
    var files = event.target.files;
    if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
    setSelectedFile(files);
    setLoaded(0);
    }
};

const onClickHandler = () => {
    const data = new FormData();
    for (let x = 0; x < selectedFile.length; x++) {
    data.append("file", selectedFile[x]);
    }
    axios
    .post("http://localhost:8000/upload", data, {
        // receive two parameter endpoint url ,form data
        onUploadProgress: ProgressEvent => {
        setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
        }
    })
    .then(res => {
        console.log(res.statusText);
    })
    .then(res => {
        toast.success("upload success");
    })
    .catch(err => {
        toast.error("upload fail");
    });
};

const maxSelectFile = event => {
    let files = event.target.files; //create file object
    if (files.length > maxFileLimit) {
    const msg = "Only 3 images can be upload at a time";
    event.target.value = null; // discard selected files
    toast.warn(msg);

    return false;
    }
    return true;
};

// Checking valid mime type
const checkMimeType = event => {
    let files = event.target.files;
    // defining message container
    let err = [];

    // List allow mime type https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
    const types = [
    "image/png",
    "image/jpeg",
    "image/gif",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    // loop access array
    for (let x = 0; x < files.length; x++) {
    // compare file type find doesn't match
    if (types.every(type => files[x].type !== type)) {
        // create error massage and assign to container
        err[x] =
        files[x].type + " is not supported format or files do not match";
    }
    }
    for (let z = 0; z < err.length; z++) {
    event.target.value = null;
    toast.error(err[z]);
    }
    // Error using alert box
    // if (err !== '') { // if message same that mean has error
    //   event.target.value = null // discard files
    //   alert(err)
    //     return false;
    // }
    return true;
};

// Check if file is too large
const checkFileSize = event => {
    let files = event.target.files;
    let maxFileSize = 20000000;
    let err = [];
    for (let x = 0; x < files.length; x++) {
    if (files[x].size > maxFileSize) {
        err[x] = files[x].type + " is too large, please pick a smaller file";
    }
    }
    for (let z = 0; z < err.length; z++) {
    toast.error(err[z]);
    event.target.value = null;
    }
    return true;
};

return (
    <>
    <div className="form-group">
        <ToastContainer />
    </div>
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            {/* Add Single File */}
            <form method="post" action="#" id="#">
            <div className="form-group files">
                <label>Upload One File </label>
                <input
                type="file"
                className="form-control"
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Progress max="100" color="success" value={loaded}>
                {Math.round(loaded)}%
                </Progress>
            </div>
            <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onClickHandler}
            >
                Upload
            </button>
            </form>
        </div>
        <div className="col-md-6">
            {/* Add multiple files */}
            <form method="post" action="#" id="#">
            <div className="form-group files color">
                <label>Upload 3 Files at a time</label>
                <input
                type="file"
                className="form-control"
                multiple
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <Progress max="100" color="success" value={loaded}>
                {Math.round(loaded)}%
                </Progress>
            </div>
            <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onClickHandler}
            >
                Upload
            </button>
            </form>
        </div>
        </div>
    </div>
    </>
);
}

export default FileUpload;
