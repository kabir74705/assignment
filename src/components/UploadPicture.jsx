import { useEffect, useRef, useState } from "react"
import { FiUpload, FiSearch } from "react-icons/fi"
import IconBtn from "./IconBtn"
import { apiConnector } from "../services/apiconnector"
export default function UploadPicture() {
  const BASE_URL = "http://localhost:4000";
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [searchFileName, setSearchFileName] = useState("");
  const [searchedImages, setSearchedImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [previewSource, setPreviewSource] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  }
  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  const handleFileUpload = async () => {
    try {
      const formData = new FormData()
      formData.append("fileName", fileName)
      formData.append("image", imageFile);
      console.log("formdata", formData)
      setFileName("")
      const response = await apiConnector(
        "POST",
        BASE_URL + "/upload",
        formData, {
        "Content-Type": "multipart/form-data",
      }
      );
      setPreviewSource("https://betachon.com/wp-content/uploads/2019/03/upload-your-logo-here-21052-p.png")

    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }
  const handleSearch = async () => {
    try {
      setAllImages([]);
      console.log("s-" + searchFileName)
      const response = await apiConnector(
        "post",
        BASE_URL + "/search",
        { searchFileName: searchFileName, }
      );
      setSearchedImages(response.data.result.rows);
      setSearchFileName("");

    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }
  const handleGetAllImages = async()=>{
    setSearchedImages([]);
    const response = await apiConnector(
      "get",
      BASE_URL + "/getallimages",
    );
    setAllImages(response.data.result.rows);
  }
 

  return (
    <> 
      <div className="flex items-center justify-between rounded-md border-[1px] mt-[30px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        
        <div className="flex items-center gap-x-4">
          <img
            src={previewSource ? previewSource : "https://betachon.com/wp-content/uploads/2019/03/upload-your-logo-here-21052-p.png"}
            className="aspect-square w-[140px] rounded-full object-cover"
          />
          <div className="space-y-2">
            <input type="text" value={fileName} onChange={(e) => { setFileName(e.target.value) }} placeholder="File Name" className="text-richblack-800 w-[350px] bg-slate-300 px-1" />
            <div className="flex flex-row gap-3">

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <IconBtn
                text={"Upload"}
                onclick={handleFileUpload}
              >
                {(
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>

            </div>
          </div>
        </div>
      </div>
     
      <div className="flex mt-6 gap-11">
        <div className="flex gap-2">
        <input type="text" value={searchFileName} onChange={(e) => { setSearchFileName(e.target.value) }} placeholder="Search using file name" className="text-richblack-800 w-[410px] rounded-md bg-slate-300 px-1" />
        <IconBtn
          text={"Search"}
          onclick={handleSearch}
        >
          {(
            <FiSearch className="text-lg text-richblack-900" />
          )}
        </IconBtn>
        </div>
        <IconBtn
          text={"All_images"}
          onclick={handleGetAllImages}
        >

        </IconBtn>
       
      </div>
      <div className="min-h-[350px] flex flex-col mx-auto items-center py-4 mt-6 flex-wrap border-yellow-25 border-[1px] border-dashed">
        {searchedImages.length?searchedImages.map((image) => (
          <div key={image.id} className="h-[810px] w-[810px] mb-4 rounded-md ">

            <img src={`../../server/uploads/${image.filepath}`} className="h-[810px] w-[810px]" />
          </div>
        )):<div className="text-white"></div>}
        {allImages.length?allImages.map((image) => (
          <div key={image.id} className="h-[810px] w-[810px] mb-4 rounded-md ">

            <img src={`../../server/uploads/${image.filepath}`} className="h-[810px] w-[810px]" />
          </div>
        )):<div></div>}
      </div>

    </>
  )
}
