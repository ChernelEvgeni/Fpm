(function() {
    var photoPosts = [
        {
            id: '1',
            descriprion: 'Real Betis 3-5 Real Madrid ⚽ 50\' @SergioRamos 📞',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Mr.Snow',
            photoLink: 'img/Sergio_Ramos.jpg',
            hashTags: new Array('#Real-Betis', '#@SergioRamos')
        },
        {
            id: '2',
            descriprion: ' Another special Champions League night at the Bernabéu!\n' + '¡Noche de Champions mágica en el Bernabéu!',
            createdAt: new Date('2018-02-20T19:40:00'),
            author: 'Real_Madrid',
            photoLink: 'img/Real-madrid-logo.jpg',
            hashTags: new Array('#APorLa13', '#Marcelo', '#Zidan')
        },
        {
            id: '3',
            descriprion: ' Real Madrid 3-1 Paris Saint-Germain',
            createdAt: new Date('2018-02-04T10:23:11'),
            author: 'Real_Madrid',
            photoLink: 'img/3-1.jpg',
            hashTags: new Array('#Emirates', '#RMUCL')
        },
        {
            id: '4',
            descriprion: ' Best moments of 2017:\n' + 'LaLiga 🏆',
            createdAt: new Date('2018-02-20T17:00:10'),
            author: 'Mr.Snow',
            photoLink: 'img/winner.jpg',
            hashTags: new Array('#HalaMadrid', '#Winner')
        },
        {
            id: '5',
            descriprion: 'Real Madrid 5-2 Real Sociedad',
            createdAt: new Date('2018-01-07T22:45:00'),
            author: 'Real_Madrid',
            photoLink: 'img/ronaldo.jpg',
            hashTags: new Array('#HalaMadrid', '#Ronaldo', 'CR7')
        },
        {
            id: '6',
            descriprion: 'Leganés 0-1 Real Madrid ⚽ 89 MarcoAsensio10',
            createdAt: new Date('2018-02-20T23:30:17'),
            author: 'Real_Madrid',
            photoLink: 'img/Asensio.jpg',
            hashTags: new Array('#RMCopa', '#HalaMadrid', '#Asensio')
        },
        {
            id: '7',
            descriprion: 'seven',
            createdAt: new Date('2018-02-19T07:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/seven',
            hashTags: new Array('#seven')
        },
        {
            id: '8',
            descriprion: 'eight',
            createdAt: new Date('2018-02-22T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/seven',
            hashTags: new Array('#eight')
        },
        {
            id: '9',
            descriprion: 'nine',
            createdAt: new Date('2018-01-20T21:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/nine',
            hashTags: new Array('#nine')
        },
        {
            id: '10',
            descriprion: 'ten',
            createdAt: new Date('2017-11-20T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/ten',
            hashTags: new Array('#ten')
        },
        {
            id: '11',
            descriprion: 'eleven',
            createdAt: new Date('2017-11-20T02:11:17'),
            author: 'Real_Madrid',
            photoLink: 'img/eleven',
            hashTags: new Array('#eleven')
        },
        {
            id: '12',
            descriprion: 'twelwe',
            createdAt: new Date('2017-11-20T09:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/twelwe',
            hashTags: new Array('#twelwe')
        },
        {
            id: '13',
            descriprion: 'thirteenth',
            createdAt: new Date('2016-11-20T04:10:17'),
            author: 'Mr. Snow',
            photoLink: 'img/thirteenth',
            hashTags: new Array('#thirteenth')
        },
        {
            id: '14',
            descriprion: 'tourteen',
            createdAt: new Date('2017-11-24T02:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/tourteen',
            hashTags: new Array('#tourteen')
        },
        {
            id: '15',
            descriprion: 'fifteen',
            createdAt: new Date('2017-11-24T12:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/fifteen',
            hashTags: new Array('#fifteen')
        },
        {
            id: '16',
            descriprion: 'sixteen',
            createdAt: new Date('2016-11-20T02:11:17'),
            author: 'Real_Madrid',
            photoLink: 'img/sixteen',
            hashTags: new Array('#sixteen')
        },
        {
            id: '17',
            descriprion: 'seventeen',
            createdAt: new Date('2017-11-20T12:13:17'),
            author: 'Real_Madrid',
            photoLink: 'img/seventeen',
            hashTags: new Array('#seventeen')
        },
        {
            id: '18',
            descriprion: 'eihgtteen',
            createdAt: new Date('2017-06-20T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/eihgtteen',
            hashTags: new Array('#eihgtteen')
        },
        {
            id: '19',
            descriprion: 'nineteen',
            createdAt: new Date('2017-07-20T07:10:17'),
            author: 'Mr. Snow',
            photoLink: 'img/nineteen',
            hashTags: new Array('#nineteen')
        },
        {
            id: '20',
            descriprion: 'twenty',
            createdAt: new Date('2017-12-20T12:10:17'),
            author: 'Mr. Snow',
            photoLink: 'img/twenty',
            hashTags: new Array('#twenty')
        },
    ];

    function validatePhotoPost(photoPost){
        if (typeof  photoPost.id === 'string' && typeof photoPost.descriprion === 'string' && photoPost.createdAt instanceof Date && typeof photoPost.author === 'string') {
                if (photoPost.descriprion.length < 200 && photoPost.author.length > 0 && photoPost.photoLink.length > 0)
                    return true;
                else
                    return false;
            }
        else
            return false;
    }
    function addPhotoPost(photoPost){
        if(validatePhotoPost(photoPost)){
            photoPost.id = photoPosts.length+1;
            photoPosts[photoPosts.length] = photoPost;
            return true;
        }
        else
            return false;
    }
    //кроме id, author, createdAt

    //возвращает позицию объекта по id
    function GetPossitionObject(string) {
        for(var i = 0; i<photoPosts.length;i++){
            if(photoPosts[i].id == string)
                return i;
        }
    }
    function getPhotoPost(string){
        for(var i = 0; i<photoPosts.length;i++){
            if(photoPosts[i].id == string){
                return photoPosts[i];
            }
            else {
                console.log('Фотопоста с данным id неn!!!')
            }
        }
    }
    function CountCorrectlyFild(Object) {
        var count = 0;

        if(Object.photoLink !=undefined)
            count++;
        if(Object.descriprion !=undefined)
            count++;

        return count;
    }
    function editPhotoPost(string, Object){
        var  BufferObject = getPhotoPost(string);

        if(CountCorrectlyFild(Object)==2){
            if(Object.descriprion && Object.photoLink){
                if (Object.descriprion.length < 200 && Object.photoLink.length > 0 ){
                    BufferObject.photoLink = Object.photoLink;
                    BufferObject.descriprion = Object.descriprion;
                    return true;
                }
                else return false;
            }
            else return false;
        }
        if(CountCorrectlyFild(Object)==1){
            if(Object.photoLink !=undefined){
                if(Object.photoLink.length > 0){
                    BufferObject.photoLink = Object.photoLink;
                    return true;
                }
                else
                    return false;
            }
            else if (Object.descriprion!= undefined && Object.descriprion.length < 200) {
                BufferObject.descriprion = Object.descriprion;
                return true;
            }
            else return false;
        }
    }
function CompareCreatedAt(a, b){
        return(a.createdAt) - (b.createdAt);

}
    function removePhotoPost(string){
        if(string-1 > photoPosts.length)
            console.log('нет такого id '+ string);
        else
            photoPosts.splice(string-1,1);
    }


    function getPhotoPosts(skip,top,filterConfig) {


        if (skip == undefined)
            skip = 0;
        if (top == undefined)
            top = 10;
        if (filterConfig != undefined) {

        if (filterConfig.author != undefined) {
            var BufferArray = new Array();
            for (var i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].author == filterConfig.author)
                    BufferArray.push(photoPosts[i]);
            }
            return BufferArray.sort(CompareCreatedAt).slice(skip.top);
        }
    }

        return photoPosts.sort(CompareCreatedAt).splice(skip,top);
    }
    function Print(array) {
        for(var i=0; i<array.length;i++) {
            console.log(" id: " + array[i].id + " descriprion: " + array[i].descriprion + " createdAt: " + array[i].createdAt + " author: " + array[i].author + " photoLink: " + array[i].photoLink+'\n');
        }
    }
   //  console.log(getPhotoPost('2'));
    /*  if(validatePhotoPost(photoPosts[0]))
          console.log('est ');
      else
          console.log('no ');
          */
    //editPhotoPost('6',{descriprion:'', photoLink: 'tgtngn' });
    //Print(photoPosts);

    // var array = new Array();
    //array = getPhotoPosts(0,10,{author:'Mr. Snow'});
    //Print(array);


    //removePhotoPost('4');
   // Print(photoPosts);
})();



