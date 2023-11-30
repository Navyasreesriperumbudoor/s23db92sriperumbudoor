var express = require('express');
const bird_controlers= require('../controllers/bird');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
}
/* GET birds */
router.get('/', bird_controlers.bird_view_all_Page );
router.get('/detail', secured, bird_controlers.bird_view_one_Page);

/* GET create bird page */
router.get('/create', secured, bird_controlers.bird_create_Page);


/* GET create update page */
router.get('/update', secured, bird_controlers.bird_update_Page);

/* GET delete bird page */
router.get('/delete', secured, bird_controlers.bird_delete_Page)

module.exports = router;