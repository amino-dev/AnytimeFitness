const multer = require('multer')
const path = require('path')


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/photos')
    },
    filename:function(req,file,cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
  cb(null,file.fieldname+'-'+Date.now()+ext)
  
    }
})
const store = multer({storage:storage}) 
module.exports = store