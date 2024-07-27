const pool = require("./db");
const handleUpload = (req,res)=> {
    console.log("uploading");
    console.log(req.file);
    const filename= req.file.filename.split("-")[0];
    const timestamp = req.file.filename.split("-")[1];
    const filepath = req.file.filename;
    pool.query("INSERT INTO metadata (filename, filepath, timestamp) VALUES ($1, $2, $3)",[filename,filepath,timestamp],(error,result)=>{
        if (error) console.log(error.message);
        res.status(200).json({success:true,
            result:result
        });
    })

}
const searchImage=(req,res)=>{
    const { searchFileName } = req.body
    console.log(searchFileName)
    pool.query("SELECT * FROM metadata WHERE filename = $1",[req.body.searchFileName],(error,result)=>{
        if (error) console.log(error.message);
        console.log(result.rows)
        return res.status(200).json({
            result:result,
        });
    })
}
const getAllImages = (req,res)=>{
    pool.query("SELECT * FROM metadata",(error,result)=>{
        if (error) console.log(error.message);
        console.log(result.rows)
        return res.status(200).json({
            result:result,
        });
    })

}
module.exports = {
    handleUpload,
    searchImage,
    getAllImages
}