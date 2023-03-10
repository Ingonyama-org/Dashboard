import React, { useCallback } from "react";
import "../assets/css/Upload.css";
import TopBar from "../components/TopBar";
import InputDiv from "../components/InputDiv";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDropzone } from "react-dropzone";

export default function Upload() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => alert("file reading was aborted");
      reader.onerror = () => alert("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        alert(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload">
      <TopBar />

      <h2>New Lion Identification</h2>
      <div className="upload_inputs">
        <InputDiv
          label="Name of the lion"
          placeholder="None if no name"
          type={"text"}
        />
        <InputDiv
          label="Approximate Age"
          placeholder="Lion's age"
          type={"number"}
        />
        <InputDiv
          label="Location of the lion"
          placeholder="Name of this lion's area"
          type={"text"}
        />
        <InputDiv
          label="Description"
          placeholder="Any descriptive info of the lion (max 40 words)"
          type={"text"}
        />

        <div className="conset_div">
          <input type="checkbox" />
          <p>I consent Ingonyama to process all data I upload.</p>
        </div>
      </div>

      <div className="select_file_div">
        <CloudUploadIcon className="upload_icon" />
        <div className="file_desc">
          <p>Select a file or drag and drop here</p>
          <p>ZIP, TAR or 7Z, file size no more than 50MB</p>
        </div>

        <div className="select_file_btn" {...getRootProps()}>
          <input {...getInputProps()} type="file" />
          {isDragActive ? (
            <>
              <p>SELECT FILE</p>
              <p>Dropping the files...</p>
            </>
          ) : (
            <>
              <p>SELECT FILE</p>
              <p>or</p>
              <p>Drag and drop</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
