var bird = require('../models/bird');
// List of all birds
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
// for a specific bird.
// for a specific bird.
// for a specific bird.
exports.bird_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await bird.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };


// Handle bird create on POST.
exports.bird_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bird();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bird_type":"goat", "cost":12, "size":"large"}
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
// Handle bird delete form on DELETE.
exports.bird_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};

// Handle bird update form on PUT.

 
// VIEWS
// Handle a show all view
exports.bird_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    theGadgets = await bird.find();
    console.log(thebird)
    res.render('birds', { title: 'Search Results - bird', results: thebird });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}

// Handle bird update form on PUT.
exports.bird_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await bird.findById( req.params.id)
 // Do updates of properties
 if(req.body.bird_name)
 toUpdate.bird_name = req.body.bird_name;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.speed) toUpdate.speed = req.body.speed;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
