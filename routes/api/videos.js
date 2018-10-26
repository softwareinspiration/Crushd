const Video = require("../../models/Video");
const validateVideoUpload = require("../../validations/create-video");

exports.upload = function(req, res) {

  const newVideo = new Video({
    user_id: req.body.user_id,
    videoURL: req.body.videoURL
  });
  const { errors, isValid } = validateVideoUpload(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  };

  Video.findOne({user_id: req.body.user_id}).then(video => {
    if (video) {
      Video.update({ user_id: req.body.user_id },
        { $set: { videoURL: req.body.videoURL } }).then(video => {
          res.json({
            user_id: req.body.user_id,
            videoURL: req.body.videoURL
          });
        });
    } else {
      newVideo.save().then(video => {
        res.json({
          user_id: req.body.user_id,
          videoURL: req.body.videoURL
        });
      });
    }
  })
  
};
