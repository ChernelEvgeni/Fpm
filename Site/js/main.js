(function() {
    var photoPosts = [
        {
            id: '1',
            descriprion: 'Real Betis 3-5 Real Madrid ⚽ 50\' @SergioRamos 📞',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Mr.Snow',
            photoLink: 'img/Sergio_Ramos.jpg',
            hashTags: ['#Real-Betis', '#@SergioRamos'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '2',
            descriprion: ' Another special Champions League night at the Bernabéu!\n' + '¡Noche de Champions mágica en el Bernabéu!',
            createdAt: new Date('2018-02-20T19:40:00'),
            author: 'Real_Madrid',
            photoLink: 'img/Real-madrid-logo.jpg',
            hashTags: ['#APorLa13', '#Marcelo', '#Zidan'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '3',
            descriprion: ' Real Madrid 3-1 Paris Saint-Germain',
            createdAt: new Date('2018-02-04T10:23:11'),
            author: 'Real_Madrid',
            photoLink: 'img/3-1.jpg',
            hashTags: ['#Emirates', '#RMUCL'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '4',
            descriprion: ' Best moments of 2017:\n' + 'LaLiga 🏆',
            createdAt: new Date('2018-02-20T17:00:10'),
            author: 'Mr.Snow',
            photoLink: 'img/winner.jpg',
            hashTags: ['#HalaMadrid', '#Winner'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '5',
            descriprion: 'Real Madrid 5-2 Real Sociedad',
            createdAt: new Date('2018-01-07T22:45:00'),
            author: 'Real_Madrid',
            photoLink: 'img/ronaldo.jpg',
            hashTags: ['#HalaMadrid', '#Ronaldo', 'CR7'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '6',
            descriprion: 'Leganés 0-1 Real Madrid ⚽ 89 MarcoAsensio10',
            createdAt: new Date('2018-02-20T23:30:17'),
            author: 'Real_Madrid',
            photoLink: 'img/Asensio.jpg',
            hashTags: ['#RMCopa', '#HalaMadrid', '#Asensio'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '7',
            descriprion: 'seven',
            createdAt: new Date('2018-02-19T07:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/seven',
            hashTags: ['#seven'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '8',
            descriprion: 'eight',
            createdAt: new Date('2018-02-22T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/seven',
            hashTags: ['#eight'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '9',
            descriprion: 'nine',
            createdAt: new Date('2018-01-20T21:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/nine',
            hashTags: ['#nine','#CR7'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '10',
            descriprion: 'ten',
            createdAt: new Date('2017-11-20T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/ten',
            hashTags: ['#ten'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '11',
            descriprion: 'eleven',
            createdAt: new Date('2017-11-20T02:11:17'),
            author: 'Real_Madrid',
            photoLink: 'img/eleven',
            hashTags: ['#eleven'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '12',
            descriprion: 'twelwe',
            createdAt: new Date('2017-11-20T09:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/twelwe',
            hashTags: ['#twelwe'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '13',
            descriprion: 'thirteenth',
            createdAt: new Date('2016-11-20T04:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/thirteenth',
            hashTags: ['#CR7','#thirteenth'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '14',
            descriprion: 'tourteen',
            createdAt: new Date('2017-11-24T02:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/tourteen',
            hashTags: ['#tourteen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '15',
            descriprion: 'fifteen',
            createdAt: new Date('2017-11-24T12:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/fifteen',
            hashTags: ['#fifteen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '16',
            descriprion: 'sixteen',
            createdAt: new Date('2016-11-20T02:11:17'),
            author: 'Real_Madrid',
            photoLink: 'img/sixteen',
            hashTags: ['#sixteen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '17',
            descriprion: 'seventeen',
            createdAt: new Date('2017-11-20T12:13:17'),
            author: 'Real_Madrid',
            photoLink: 'img/seventeen',
            hashTags: ['#seventeen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '18',
            descriprion: 'eihgtteen',
            createdAt: new Date('2017-06-20T22:10:17'),
            author: 'Real_Madrid',
            photoLink: 'img/eihgtteen',
            hashTags: ['#eihgtteen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '19',
            descriprion: 'nineteen',
            createdAt: new Date('2017-07-20T07:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/nineteen',
            hashTags: ['#nineteen'],
            like: ["Evgeni", "Alex"],
        },
        {
            id: '20',
            descriprion: 'twenty',
            createdAt: new Date('2017-12-20T12:10:17'),
            author: 'Mr.Snow',
            photoLink: 'img/twenty',
            hashTags: ['#twenty','#CR7'],
            like: ["Evgeni", "Alex"],
        },
    ];

    function validatePhotoPost(photoPost){
        if (typeof  photoPost.id === 'string' && typeof photoPost.descriprion === 'string' && photoPost.createdAt instanceof Date && typeof photoPost.author === 'string')
        {
                if (photoPost.descriprion.length < 200 && photoPost.author.length && photoPost.photoLink.length)
                {
                    return true;
                }
                else{
                    return false;
                }
            }
            return false;
    }
    function addPhotoPost(photoPost){
        if(validatePhotoPost(photoPost)){
             photoPosts.push(photoPost);
             return true;
        }
            return false;
    }

    function getPhotoPost(id){
        return found = photoPosts.find(function(element){
           return element.id === id;
       });
    }

    function editPhotoPost(string, photopost){
        var  bufferPhotopost = getPhotoPost(string);

       if(!photopost.descriprion && !photopost.photoLink && !photopost.hashTags ) {
           return false;
       }
       else{
           if (photopost.descriprion && photopost.photoLink && photopost.hashTags) {
               if (photopost.descriprion.length < 200 && photopost.photoLink.length && photopost.hashTags.length) {
                   bufferPhotopost.photoLink = photopost.photoLink;
                   bufferPhotopost.descriprion = photopost.descriprion;
                   bufferPhotopost.hashTags = photopost.hashTags
                   return true;
               }
               else return false;
           }

           if (photopost.photoLink && photopost.descriprion && !photopost.hashTags) {
               if (photopost.photoLink.length && photopost.descriprion.length < 200) {
                   bufferPhotopost.photoLink = photopost.photoLink;
                   bufferPhotopost.descriprion = photopost.descriprion;
                   return true;
               }
               else
                   return false;
           }

           if (photopost.photoLink && !photopost.descriprion && photopost.hashTags) {
               if (photopost.photoLink.length && photopost.hashTags.length) {
                   bufferPhotopost.photoLink = photopost.photoLink;
                   bufferPhotopost.hashTags = photopost.hashTags;
                   return true;
               }
               else
                   return false;
           }

           if (!photopost.photoLink && photopost.descriprion && photopost.hashTags) {
               if (photopost.descriprion.length < 200 && photopost.hashTags.length) {
                   bufferPhotopost.descriprion = photopost.descriprion;
                   bufferPhotopost.hashTags = photopost.hashTags;
                   return true;
               }
               else
                   return false;
           }

           if (photopost.photoLink) {
               if (photopost.photoLink.length) {
                   bufferPhotopost.photoLink = photopost.photoLink;
                   return true;
               }
               else
                   return false;
           }

           if (photopost.descriprion) {
               if (photopost.descriprion.length < 200) {
                   bufferPhotopost.descriprion = photopost.descriprion;
                   return true;
               }
               else
                   return false;
           }
           else if (photopost.hashTags && photopost.hashTags.length) {
               bufferPhotopost.hashTags = photopost.hashTags;
               return true;
           }
       }

    }
        function сompareCreatedAt(a, b){
           return(a.createdAt) - (b.createdAt);
           }

    function removePhotoPost(string){
        if(string-1 > photoPosts.length)
            console.log('нет такого id '+ string);
        else
            photoPosts.splice(string-1,1);
    }

    function getPhotoPosts(skip,top,filterConfig) {

       skip = skip||0;
       top = top||10;

        if (filterConfig) {
            var bufferArray = photoPosts;

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

        return bufferArray.sort(CompareCreatedAt).splice(skip,top);
    }

    function print(array) {
        for(var i=0; i<array.length;i++) {
            console.log(" id: " + array[i].id + " descriprion: " + array[i].descriprion + " createdAt: " + array[i].createdAt + " author: " + array[i].author + " photoLink: " +
                array[i].photoLink+ " hashtags: " + array[i].hashTags + " like:" +array[i].like + '\n');
        }
    }


    return {
        validatePhotoPost:validatePhotoPost,
        print:print,
        сompareCreatedAt:сompareCreatedAt,
        getPhotoPosts: getPhotoPosts,
        addPhotoPost: addPhotoPost,
        getPhotoPost: getPhotoPost,
        editPhotoPost: editPhotoPost,
    }

    // console.log(getPhotoPost('2'));
    /*  if(validatePhotoPost(photoPosts[0]))
          console.log('est ');
      else
          console.log('no ');
          */


    //editPhotoPost

    /* print(photoPosts);
     editPhotoPost('6',{descriprion:'rrrrrrrrrrrrrr', photoLink: 'oooo', hashTags:[] });
     Print(photoPosts);*/
    /* print(photoPosts);
    editPhotoPost('6',{descriprion:'', photoLink: 'oooo', hashTags:[] });
    Print(photoPosts);*/
    /* print(photoPosts);
   editPhotoPost('6',{descriprion:'Uefa', photoLink: 'uuuirfn', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
   Print(photoPosts);*/
    /* print(photoPosts);
  editPhotoPost('6',{descriprion:'Uefa', hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
  Print(photoPosts);*/
    /* print(photoPosts);
 editPhotoPost('6',{hashTags: ['#APorLa13', '#Marcelo', '#Zidan'] });
 Print(photoPosts);*/


    //getPhotoPosts

    /* var array = new Array();
    array = getPhotoPosts(0,10,{author:'Mr.Snow', hashTags:'#CR7'});
    Print(array);*/
    /* var array = new Array();
    array = getPhotoPosts(0,10,{author:'Mr.Snow'});
    Print(array);*/
    /* var array = new Array();
   array = getPhotoPosts(0,10,{author:'', hashTags:'#CR7'});
   Print(array);*/

    //removePhotoPost('4');
    // Print(photoPosts);
})();



