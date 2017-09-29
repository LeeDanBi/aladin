(function($){
 // 추천도서, 신간도서_______ btn_book_____
 //추천도서__
 (function(){
  var boxRecommend = $('.box_recommend');
  var reco_ul = boxRecommend.find('.list_book');
  var reco_btn_l = boxRecommend.find('.bnt_left_');
  var reco_btn_r = boxRecommend.find('.bnt_right_');

  reco_btn_l.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
 })();
  //신간도서
(function(){
  var boxNew = $('.box_new');
  var reco_ul = boxNew.find('.list_book');
  var reco_btn_l = boxNew.find('.bnt_left_');
  var reco_btn_r = boxNew.find('.bnt_right_');

  reco_btn_l.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
})();//즉시실행함수


})(this.jQuery);