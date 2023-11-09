var bird = require('../models/bird');
// List of all Costumes
exports.bird_list = async function(req, res) {
    try{
        thebirds = await bird.find();
        res.send(thebirds);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// for a specific Costume.
exports.bird_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.bird_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bird();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.bird_name = req.bird_name;
    document.color = req.body.color;
    document.speed = req.body.speed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle Costume delete form on DELETE.
exports.bird_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.bird_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
 
// VIEWS
// Handle a show all view
exports.bird_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    theGadgets = await bird.find();
    console.log(thebirds)
    res.render('birds', { title: 'Search Results - birds', results: thebirds });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}