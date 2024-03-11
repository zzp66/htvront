//千面万页活动mark point
/*
obj: {
  id: string
  userEmail: string
  pageName: string
}
*/

function thousandMarkPoint(obj){
    var id = obj.id;
    var userEmail = obj.userEmail;
    var pageName = obj.pageName;
    // console.log(pageName);
    $.ajax({
        type:'GET',
        dataType:'jsonp',
        jsonp :'callback',
        url: 'https://qn.htvront.com/htvront-thousands-page-entity/page',
        data: {userEmail: userEmail,pageName: pageName,productId:id}
    });
}