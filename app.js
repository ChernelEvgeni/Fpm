var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const functional = require('E:/YP/Site/server/functionsServer.js');
const way = 'E:/YP/Site/server/data/posts.json';
app.use('/', express.static('public'));
app.use(bodyParser.json());


app.get('/getPost', (req, res) => {
    let post = functional.getPhotoPost(req.query.id.toString());
    console.log(post);
    if (post) {
        res.send(post).end();
    } else {
        res.send(404).end();
    }
});

app.delete('/removePhotoPost', (req, res) => {
    let post = functional.removePhotoPost(req.query.id.toString());
    console.log(post);
    if(post === true){
        fs.writeFileSync(way,JSON.stringify(functional.getAllPosts()));
        res.send('post with id = ' + req.query.id + ' is deleted').end(200);
    }
    else{
        res.send(404).end("Post not found");
    }
});
app.post('/addPhotoPost', (req, res) => {
    let addPost = functional.addPhotoPost(req.body);
    if(addPost){
        fs.writeFileSync(way,JSON.stringify(functional.getAllPosts()));
        res.send(req.body).end();
    }
    else{
        res.sendStatus(404).end();
    }
});

app.put('/editPhotoPost',(req,res)=>{
    let idPost = req.query.id;
    let newPost = req.body;
    let isEdit = functional.editPhotoPost(idPost,newPost);
    if(isEdit){
        fs.writeFileSync(way,JSON.stringify(functional.getAllPosts()));
        res.send("edited post with id = " + idPost).end(200);
    }
    else{
        res.send(404).end();
    }
});
app.post('/getPhotoPosts', (req, res) => {
    let postFiltering = functional.getPhotoPosts(req.query.skip,req.query.top,req.body);
    if(postFiltering && postFiltering.length!==0){
        res.send(postFiltering).end();
    }
    else if(req.query.skip > req.query.top){
        res.send(404).end();
    }
});



app.listen(3000, function () {
    console.log('listen 3000 port');
});