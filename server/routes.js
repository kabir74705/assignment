const {Router} = require("express");
const multer = require("multer")
const controller = require("./controller")
const router = Router();
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  return cb(null, './uploads')
	},
	filename: function (req, file, cb) {
	  return cb(null, `${req.body.fileName}-${Date.now()}-${file.originalname}`)
	}
  })
  const upload = multer({ storage: storage })

router.post("/upload" ,upload.single("image") ,controller.handleUpload)
router.post('/search',controller.searchImage)
router.get("/getallimages",controller.getAllImages)

module.exports = router;