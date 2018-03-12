(function() {
    'use strict';

    var user = null;

    function showPhotoPost(photoPost){
       // var isUser = (user === photoPost.author);
        var headPost = document.createElement('div');
        headPost.className = 'headPost';

        var buttonDelete = document.createElement('button');
        buttonDelete.className = 'SizeButton';
        buttonDelete.innerHTML = "<img src=\"img/waste.png\"  alt=\"delete\" class=\"delete\">";

        var buttonEdit = document.createElement('button');
        buttonEdit.className = 'SizeButton';
        buttonEdit.innerHTML = "<img src=\"img/edit.jpg\"  alt=\"edit\" class=\"edit\">";

        var imgUser = document.createElement('img');
        imgUser.className = 'round';
        imgUser.setAttribute('src','img/Real-madrid-logo.jpg');

        var blockNameDate = document.createElement('div');
        blockNameDate.className = 'blockNameDate';

        var nicknamePost = document.createElement('div');
        nicknamePost.className = 'nicknamePost';
        nicknamePost.innerHTML = 'photoPost.author';
        var datePhoto = document.createElement('div');
        datePhoto.className = 'datePhoto';
        datePhoto.innerHTML = 'photoPost.createdAt';

        blockNameDate.appendChild(nicknamePost);
        blockNameDate.appendChild(datePhoto);

        headPost.appendChild(buttonDelete);
        headPost.appendChild(buttonEdit);
        headPost.appendChild(imgUser);
        headPost.appendChild(blockNameDate);

        var photo = document.createElement('img');
        imgUser.className = 'photo';
        imgUser.setAttribute('src','photoPost.photoLink');

        var hashtag = document.createElement('div');
        hashtag.className = 'Hashtag';
        hashtag.innerHTML = 'photoPost.hashTags';

        var buttonLike = document.createElement('button');
        buttonEdit.className = 'SizeButton';
        buttonEdit.innerHTML = "<img src=\"img/like.png\"  alt=\"like\" class=\"like\">";

        var commit = document.createElement('div');
        commit.className = 'text';
        commit.innerHTML = 'photoPost.descriprion';

        var post = document.createElement('arcicle');
        post.className = 'post';
        post.appendChild(headPost);
        post.appendChild(photo);
        post.appendChild(hashtag);
        post.appendChild(buttonLike);
        post.appendChild(commit);


    }



    function showPosts(skip, top, filterConfig) {
     //   document.body.getElementsByClassName("Info")[0].innerHTML="";
        var photoPosts = postsFunction.getPhotoPosts(skip, top, filterConfig);
        for (var i = 0; i < photoPosts.length; i++)
            showPhotoPost(photoPosts[i], i);
    }

    function addPost(post) {
        modulePost.addPhotoPost(post);
    }

    function removePost(id) {
        modulePost.removePhotoPost(id);
    }

    function editPost(id,post) {
        modulePost.editPhotoPost(id, post);
    }


})();