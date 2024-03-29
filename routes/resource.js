var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bird_controller = require('../controllers/bird');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/bird', bird_controller.bird_create_post);
// DELETE request to delete Costume.
router.delete('/bird/:id', bird_controller.bird_delete);
// PUT request to update Costume.
router.put('/bird/:id', bird_controller.bird_update_put);
// GET request for one Costume.
router.get('/bird/:id', bird_controller.bird_detail);
// GET request for list of all Costume items.
router.get('/bird', bird_controller.bird_list);
module.exports = router;