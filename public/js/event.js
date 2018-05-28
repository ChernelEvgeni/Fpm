var user = 'Real_Madrid';


function setLikeOnPost(id) {
    let post = postsFunction.getPhotoPost(id);
    post.like.push(user);
    console.log(post.like);
  //  saveDataToLocalStorage();
}
function removeLike(id) {
    let post = postsFunction.getPhotoPost(id);
    let pos = post.like.indexOf(user);
    post.like.splice(pos, 1);
    console.log(post.like);
   // saveDataToLocalStorage();
}
function isLikeInPost(id) {
    var post = postsFunction.getPhotoPost(id);
    var likeUser = post.like.find(function (whoLiked) {
        return whoLiked === user;
    });
    if(likeUser){
        return true;
    }
    return false;
}

function like(e) {
    if (e.target.getAttribute("isLike") === '0') {
        e.target.setAttribute("isLike", "1");
        e.target.src = "img/redlike.png";
        setLikeOnPost(e.target.getAttribute('value'));
    }
    else {
        e.target.setAttribute("isLike", "0");
        e.target.src = "img/like.png";
        removeLike(e.target.getAttribute('value'));
    }
}


document.body.addEventListener("click", function(event
) {
    console.log(event.target.className);
    let id = event.target.getAttribute('value');
    if (event.target.className === 'edit') {
        moduleDom.setEditPost(id);
        btnEditPost(id);
    }
    else if (event.target.className === 'delete') {
        moduleDom.setIsDelete();
        let btnYes = document.getElementById('yesDelete');
        btnYes.setAttribute('value', id);
        let btnNo = document.getElementById('noDelete');
        btnNo.addEventListener("click", function () {
            moduleDom.hideIsDelete();
        });
        btnYes.addEventListener("click", function () {
            moduleDom.removePost(btnYes.getAttribute('value'));
            moduleDom.hideIsDelete();
        })
    }
    else if(event.target.className === 'like') {
        like(event);
        saveDataToLocalStorage();
    }
});
function btnEditPost(id) {
    let btnEditPost = document.getElementById('btnEdit');
    btnEditPost.addEventListener('click', function () {
        var hashtagsStr = document.getElementById('hashtagsFieldsEditPost').value;
        var post = {
            descriprion: document.getElementById('descriptionFieldsEditPost').value,
            photoLink: document.getElementById('urlFieldsEditPost').value,
            hashTags: postsFunction.makeArrayHashtagsFromString(hashtagsStr),
        };
        postsFunction.editPhotoPost(id, post);
        moduleDom.showPosts(0, 10);
    });
}

btnAddPost();
var addPhoto = document.getElementById("buttonAdd");
addPhoto.addEventListener("click", function () {
    console.log("1");
    moduleDom.createPhotoPost();
    document.getElementById('urlFieldsEditPost').value = '';
    console.log("2");

});
function btnAddPost() {
    console.log("3");
    let btnAddPost = document.getElementById('btnAdd');
    btnAddPost.addEventListener("click", function () {
        let url = document.getElementById('urlFieldsEditPost').value;
        let hashtags = document.getElementById('hashtagsFieldsEditPost').value;
        let descriprion = document.getElementById('descriptionFieldsEditPost').value;
        var id = moduleDom.getSizePost();
        id++;
        let post = {
            id: Number( id).toString(),
            descriprion: descriprion,
            createdAt: new Date(),
            author: moduleDom.getUser(),
            photoLink: url,
            hashTags: postsFunction.makeArrayHashtagsFromString(hashtags),
            like: [],
        };
        postsFunction.addPhotoPost(post);
        moduleDom.showPosts(0, 10);
    });
}
btnDownloadMore();
function btnDownloadMore() {
    let downloadMore = document.getElementById('buttonDownload');
    downloadMore.addEventListener('click',function (e) {
        e.preventDefault();
        moduleDom.showPosts(0,moduleDom.getShowedPosts()+10,'lastConfig');
    });
}













