var page = {
  init: function(){
    page.initEvent();
    page.initStyling();
  },

  initStyling: function () {
    console.log('initStyling');
  },

  initEvent: function (){
    console.log('initEvent');
  },
    config: {
      baseURL:'https://api.instagram.com/v1/',
      clientId:'ab3dc7ccd22944a0868e9268d7f46675',
      userId: '12587048',

       //token goes here

  },

getMYPhotos: function () {
  $.ajax({
    url: page.config.baseURL + 'users/' + page.config.userId + '/media/recent/?client_id=' + page.config.clientId,
    type:'GET',
    dataType: 'JSONP',
    success: function(data) {
      console.log(data);
      data.data.forEach(function(item, index, array){
        $('section').append('<img src="' + item.images.standard_resolution.url + '">');
      });
    },

    error: function (error) {
      console.log(error);

    }
  });
},

getInfo: function () {
  $.ajax({
    url: page.config.baseURL + 'users/' + page.config.userId + '/?client_id=' + page.config.clientId,
    type:'GET',
    dataType: 'JSONP',
    success: function(data) {
      console.log(data);
        $('section').append(
          '<h1>' +
          data.data.full_name +
          '</h1>' +
          '<h2>' +
          data.data.bio +
          '</h2>' +
          '<p><b>Followers:</b>' +
          data.data.counts.followed_by +
          '</p>' +
          '<img src="' + data.data.profile_picture + '">'
        );
    },

    error: function (error) {
      console.log(error);

      }
    });
  }
};

$(document).ready(function(){
  page.init();

});
