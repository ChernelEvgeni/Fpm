var postsFunction = function() {
    var user = 'Real_Madrid';

    const fs = require('fs');

    const jsonPosts = fs.readFileSync('E:/YP/Site/server/data/posts.json');
    var photoPosts = [];
    photoPosts = JSON.parse(jsonPosts);


    function validatePhotoPost(photoPost){
        photoPost.createdAt = new Date(photoPost.createdAt);
        if (typeof  photoPost.id === 'string' && typeof photoPost.descriprion === 'string' && photoPost.createdAt instanceof Date &&
            typeof photoPost.author === 'string' && photoPost.descriprion.length < 200 && photoPost.author.length && photoPost.photoLink.length)
        {
            return true;
        }

        return false;
    }
    console.log(addPhotoPost({id:"100",descriprion:"Real Madrid 3-1 Paris Saint-Germain",createdAt:"2018-02-04T10:23:11",author:"Real_Madrid",photoLink:"img/3-1.jpg",hashTags:["#Emirates","#RMUCL"],like:["Evgeni","Alex"]}));

    function getAllPosts() {
        return photoPosts;
    }
    function addPhotoPost(photoPost){
        if(validatePhotoPost(photoPost)){
             photoPosts.push(photoPost);
             return true;
        }
            return false;
    }

    function getPhotoPost(id){
        var  found = photoPosts.find(function(element){
           return element.id === id;
       })
        return found;
    }
//console.log(editPhotoPost("7",{descriprion:'Uefa', photoLink: 'uuuirfn', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] }));

    function editPhotoPost(id, photopost){
       // photopost.createdAt = new Date(photopost.createdAt);

        var foundIndexPost = photoPosts.findIndex(i => i.id === id);

       if(foundIndexPost!==-1){
           if(photopost.descriprion.length < 200){
               photoPosts[foundIndexPost].descriprion = photopost.descriprion;
           }
           if(photopost.hashTags && photopost.hashTags.length){
               photoPosts[foundIndexPost].hashTags = [].concat(photopost.hashTags);
           }
           if(photopost.photoLink && photopost.photoLink.length){
               photoPosts[foundIndexPost].photoLink = photopost.photoLink;
           }
           return true;
       }
       else  return false;

    }
        function сompareCreatedAt(a, b){
           return(a.createdAt) - (b.createdAt);
           }

    function removePhotoPost(id){
        var foundPost = photoPosts.findIndex(i => i.id === id)
        if(foundPost == -1){
            console.log('нет такого id '+ foundPost);
            return false;
        }
    else{
            photoPosts.splice(foundPost,1);
            return true;
        }

    }


    function getPhotoPosts(skip,top,filterConfig) {

       skip = skip||0;
       top = top||10;

        var bufferArray = photoPosts.slice();
        if (filterConfig) {


            if (filterConfig.author) {
                bufferArray = bufferArray.filter(function (photoPost) {
                    return photoPost.author === filterConfig.author;
                })
            }
            if (filterConfig.createdAt) {
                bufferArray = bufferArray.filter(function (photoPost) {
                    return photoPost.createdAt === filterConfig.createdAt;
                })
            }
            if (filterConfig.hashTags) {

                bufferArray = bufferArray.filter(function (photoPost) {
                    for (var hashTag of photoPost.hashTags) {
                        for (var item of [].concat(filterConfig.hashTags)) {
                            if (hashTag === item) {
                                return true;
                            }
                        }
                    }
                });
            }

        }

            return bufferArray.sort(сompareCreatedAt).splice(skip,top);
    }


    function print(array) {
        for(var i=0; i<array.length;i++) {
            console.log(" id: " + array[i].id + " descriprion: " + array[i].descriprion + " createdAt: " + array[i].createdAt + " author: " + array[i].author + " photoLink: " +
                array[i].photoLink+ " hashtags: " + array[i].hashTags + " like:" +array[i].like + '\n');
        }
    }

    function getCountPostByAuthor() {
        var countPostByAuthor = 0;
        for(var i = 0; i < photoPosts.length;i++){
            if(photoPosts[i].author ===user){
                countPostByAuthor++;
            }
        }
        return countPostByAuthor;
    }
function unique(array) {
        var obj ={};
        for(var i = 0; i<array.length;i++){
            var str = array[i];
            obj[str] = true;
        }
        return Object.keys(obj);
}

function getAuthors() {
        var author = [];
        for(var i = 0; i < photoPosts.length; i++){
            author.push(photoPosts[i].author);
        }
    return unique(author);
}
function getHashtags() {
        var arrayHashats = [];
        for(var i = 0; i<photoPosts.length; i++){
            for( var j = 0 ;j<photoPosts[i].hashTags.length; j++){
                arrayHashats.push(photoPosts[i].hashTags[j]);
            }
        }
        return unique(arrayHashats);
}

    function SizePost() {
        return photoPosts.length;
    }

   return {
        getAllPosts,
        SizePost,
        removePhotoPost,
        photoPosts,
        getAuthors,
        getHashtags,
        unique,
        getCountPostByAuthor,
        validatePhotoPost,
        print,
        сompareCreatedAt,
        getPhotoPost,
        addPhotoPost,
        getPhotoPosts,
        editPhotoPost,
    }

}();
module.exports = postsFunction;
//console.log(postsFunction.photoPosts.length);

//console.log("array size: " + postsFunction.photoPosts.length);

/*postsFunction.addPhotoPost({
    id: '1',
    descriprion: ' Best moments of 2017:\n' + 'LaLiga 🏆',
    createdAt: new Date('2018-02-20T17:00:10'),
    author: 'Mr.Snow',
    photoLink: 'img/winner.jpg',
    hashTags: ['#7777777', '#Winner'],
    like: ["Evgeni", "Alex"]}
    );




//editPhotoPost

postsFunction.print(postsFunction.photoPosts);
postsFunction.editPhotoPost('1',{descriprion:'rrrrrrrrrrrrrr', photoLink: 'oooo', hashTags:[] });
postsFunction.print(postsFunction.photoPosts);

postsFunction.print(postsFunction.photoPosts);
postsFunction.editPhotoPost('2',{descriprion:'', photoLink: 'oooo', hashTags:[] });
postsFunction.print(postsFunction.photoPosts);

postsFunction.print(postsFunction.photoPosts);
postsFunction.editPhotoPost('3',{descriprion:'Uefa', photoLink: 'uuuirfn', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
postsFunction.print(postsFunction.photoPosts);
/*
postsFunction.print(postsFunction.photoPosts);
postsFunction.editPhotoPost('6',{descriprion:'Uefa', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
postsFunction.print(postsFunction.photoPosts);

postsFunction.print(postsFunction.photoPosts);
postsFunction.editPhotoPost('6',{hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
postsFunction.print(postsFunction.photoPosts);


//getPhotoPosts

 var array = new Array();
array = postsFunction.getPhotoPosts(0,10,{author:'Mr.Snow', hashTags:'#CR7'});
postsFunction.print(array);

 var array = new Array();
array = postsFunction.getPhotoPosts(0,10,{author:'Mr.Snow'});
postsFunction.print(array);

var array = new Array();
array = postsFunction.getPhotoPosts(0,10,{author:'Mr.Snow',hashTags:'#CR7'});
postsFunction.print(array);

postsFunction.removePhotoPost('4');
postsFunction.print(photoPosts);

*/

