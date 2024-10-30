function addUserToViews(req, res, next) {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
}

module.exports = addUserToViews;

//لعرض الصور في ملف assets في ملف views في ملف 

function addImagesToViews(req, res, next) {
  res.locals.images = req.session.images ? req.session.images : null;
  next();
}


module.exports = addImagesToViews;

