var moduleDom=(function() {
    'use strict';

    var user = 'Real_Madrid';
    var countPrintPost = postsFunction.SizePost();

    function showPhotoPost(photoPost){
        var isUser = (user === photoPost.author);
        var headPost = document.createElement('div');
        headPost.className = 'headPost';

        if(isUser) {
            var buttonDelete = document.createElement('button');
            buttonDelete.className = 'sizeButton';
            buttonDelete.innerHTML = "<img src=\"img/waste.png\"  alt=\"delete\" class=\"delete\">";

            var buttonEdit = document.createElement('button');
            buttonEdit.className = 'sizeButton';
            buttonEdit.innerHTML = "<img src=\"img/edit.jpg\"  alt=\"edit\" class=\"edit\">";

            headPost.appendChild(buttonDelete);
            headPost.appendChild(buttonEdit);

        }

        var blockNameDate = document.createElement('div');
        blockNameDate.className = 'blockNameDate';

        var nicknamePost = document.createElement('div');
        nicknamePost.className = 'nicknamePost';
        nicknamePost.innerHTML = photoPost.author;
        var datePhoto = document.createElement('div');
        datePhoto.className = 'datePhoto';
        datePhoto.innerHTML = getFormatDate(photoPost)+" (" +getFormatTime(photoPost)+")";
        blockNameDate.appendChild(nicknamePost);
        blockNameDate.appendChild(datePhoto);

        var imgUser = document.createElement('img');
        imgUser.className = 'round';
        imgUser.setAttribute('src','img/Real-madrid-logo.jpg');
        headPost.appendChild(imgUser);
        headPost.appendChild(blockNameDate);
        console.log(headPost);

        var photo = document.createElement('img');
        photo.className = 'photoPlace';
        photo.setAttribute('src',photoPost.photoLink);

        var hashtag = document.createElement('div');
        hashtag.className = 'hashtag';
        hashtag.innerHTML = photoPost.hashTags;

        var buttonLike = document.createElement('button');
        buttonLike.className = 'sizeButton';
        buttonLike.innerHTML = "<img src=\"img/like.png\"  alt=\"like\" class=\"like\">";

        var commit = document.createElement('div');
        commit.className = 'text';
        commit.innerHTML = photoPost.descriprion;

        var post = document.createElement('arcicle');
        post.className = 'post';
        post.appendChild(headPost);
        post.appendChild(photo);
        post.appendChild(hashtag);
        post.appendChild(buttonLike);
        post.appendChild(commit);


        var posts = document.getElementById('posts');
        posts.appendChild(post);

    }

    function addButtonSign() {
        var buttonExit = document.createElement('button');
        buttonExit.className = 'buttonSign';
        buttonExit.innerHTML = 'Войти';

        var infoPart = document.getElementById('infoPart');
        infoPart.appendChild(buttonExit);

    }
    function deleteButtonAddExit() {

        var infoPart = document.getElementById('infoPart');
        var infoUser = document.getElementById('infoUser');
        var button = document.getElementById('button');

        infoPart.removeChild(infoUser);
        infoPart.removeChild(button);
    }
    function SetLogotipUser() {

        var logotipUser = document.getElementById('userLog');
        logotipUser.className = 'photoLogotip';
        logotipUser.setAttribute('src','img/Real-madrid-logo.jpg');

    }
    
    function setNickName() {
        var nickName = document.getElementById('textHeader');
        nickName.innerText = user;
    }
    function setCountPostByAutor() {
        var countPostByAutor = document.getElementById('textInfo');
        countPostByAutor.innerText = 'Публикаций: '+ postsFunction.getCountPostByAuthor() ;

    }
    function setButtonDownload(){
        if(postsFunction.SizePost() > 10){
            var main = document.getElementById('backgroundColorPost');
            var download = document.createElement('div');
            download.className = 'download';

            var button = document.createElement('button');
            button.className = 'buttonAdd';
            button.innerHTML =  'Загрузить ещё';

            download.appendChild(button);
            main.appendChild(download);
        }
    }


    function showPosts(skip, top, filterConfig) {
        var photoPost = postsFunction.getPhotoPosts(skip, top, filterConfig);
        for (var i = 0; i < photoPost.length; i++)
            showPhotoPost(photoPost[i], i);
    }

    function addPost(post) {
        postsFunction.addPhotoPost(post);
        setCountPostByAutor();
        countPrintPost++;
    }

    function removePost(id) {
        postsFunction.removePhotoPost(id);
        setCountPostByAutor();
        countPrintPost--;
    }

    function editPost(id,post) {
        postsFunction.editPhotoPost(id, post);
        setCountPostByAutor();
    }
    function checkUser() {
        if(user){
           setNickName();
            setCountPostByAutor();
            SetLogotipUser();
        }
        else{
            deleteButtonAddExit();
            addButtonSign();
        }
    }
    checkUser();
    function getFormatDate(post) {
        var date = post.createdAt;
        var day = date.getDate();
        if (day < 10) day = "0" + day;
        var month = date.getMonth() + 1;
        if (month < 10) month = "0" + month;
        var year = date.getFullYear();
        return day + "." + month + "." + year;
    }

    function getFormatTime(post) {
        var date = post.createdAt;
        var hours = date.getHours();
        if (hours < 10)
            hours = "0" + hours;
        var minutes = date.getMinutes();
        if (minutes < 10)
            minutes = "0" + minutes;
        return hours + ":" + minutes;
    }

    function addFilterAuthors() {

        var filterAuthor = document.getElementById('authorList');
        var arrayAuthors = postsFunction.getAuthors();
        for(var i = 0; i < arrayAuthors.length ;i++){
            var tagStringAuthors = document.createElement('option');
            tagStringAuthors.innerHTML = arrayAuthors[i];
            filterAuthor.appendChild(tagStringAuthors);
        }
    }
    function addFilterHashtags() {
        var filterHashtags = document.getElementById('suggestions');
        var arrayHashatgs = postsFunction.getHashtags();
        for(var i = 0; i < arrayHashatgs.length ;i++){
            var tagStringHashtags = document.createElement('option');
            tagStringHashtags.innerHTML = arrayHashatgs[i];
            filterHashtags.appendChild(tagStringHashtags);
        }
    }


    function getCountPost() {
        return countPrintPost;
    }
    return {
        setButtonDownload:setButtonDownload,
        getCountPost:getCountPost,
        addFilterAuthors: addFilterAuthors,
        addFilterHashtags:addFilterHashtags,
        checkUser: checkUser,
        setNickNam: setNickName,
        showPhotoPost: showPhotoPost,
        showPosts: showPosts,
        addPost: addPost,
        removePost: removePost,
        editPost: editPost,
    }





})();
console.log(moduleDom.addPost( {
    id: '5',
    descriprion: 'Real Betis 3-5 Real Madrid ⚽ 50\' @SergioRamos 📞',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Mr.Snow',
    photoLink: 'img/Sergio_Ramos.jpg',
    hashTags: ['#Real-Betis', '#@SergioRamos'],
    like: ["Evgeni", "Alex"],
}));
console.log(moduleDom.addPost( {
    id: '2',
    descriprion: ' Another special Champions League night at the Bernabéu!\n' + '¡Noche de Champions mágica en el Bernabéu!',
    createdAt: new Date('2018-02-20T19:40:00'),
    author: 'Real_Madrid',
    photoLink: 'img/Real-madrid-logo.jpg',
    hashTags: ['#APorLa13', '#Marcelo', '#Zidan'],
    like: ["Evgeni", "Alex"],
}));
console.log(moduleDom.addPost( {
    id: '7',
    descriprion: ' Real Madrid 3-1 Paris Saint-Germain',
    createdAt: new Date('2018-02-04T10:23:11'),
    author: 'Real_Madrid',
    photoLink: 'img/3-1.jpg',
    hashTags: ['#Emirates', '#RMUCL'],
    like: ["Evgeni", "Alex"],
}));
console.log(moduleDom.addPost( {
    id: '8',
    descriprion: ' Best moments of 2017:\n' + 'LaLiga 🏆',
    createdAt: new Date('2018-02-20T17:00:10'),
    author: 'Mr.Snow',
    photoLink: 'img/winner.jpg',
    hashTags: ['#HalaMadrid', '#Winner'],
    like: ["Evgeni", "Alex"],
}));
console.log(moduleDom.addFilterHashtags());
console.log(moduleDom.addFilterAuthors());
//console.log(moduleDom.showPosts(0,5));
//console.log(moduleDom.removePost('8'));
console.log(moduleDom.editPost('2',{descriprion:'Uefa', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] }));
/*moduleDom.addPost( {
id: '100',
descriprion: ' Real Madrid 3-1 Paris Saint-Germain',
createdAt: new Date('2018-02-04T10:23:11'),
author: 'Real_Madrid',
photoLink: 'img/3-1.jpg',
hashTags: ['#Emirates', '#RMUCL'],
like: ["Evgeni", "Alex"],
});*/
if(moduleDom.getCountPost()<10)
moduleDom.showPosts(0,moduleDom.getCountPost());
else
    moduleDom.showPosts(0,10);
moduleDom.setButtonDownload();
