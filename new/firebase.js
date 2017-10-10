 


var config = {
      apiKey: "AIzaSyAVVGvYuwh2KV298DXSmaNQ2Ohi2KrUvds",
      authDomain: "aiop-data.firebaseapp.com",
      databaseURL: "https://aiop-data.firebaseio.com",
      projectId: "aiop-data",
      storageBucket: "aiop-data.appspot.com",
      messagingSenderId: "905713835388"
    };
    firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log(isAnonymous +" / " + uid);
    
    var toaccess =  firebase.database().ref('user/' + uid);
    //console.log(toaccess);
    toaccess.once('value', function(snapshot){
      //console.log(snapshot);
    snapshot.forEach
    (
      function(child)
      {
        var widgetdata = snapshot.child(child.key).val();
        //console.log(child.key);
  		  var url = widgetdata.src;
		    var wid = widgetdata.width;
  			var hei = widgetdata.height;
  			var canresize = widgetdata.resize;
        var mleft = widgetdata.wleft;
        var mtop = widgetdata.wtop;
        var m_z = widgetdata.wz;
        
  			$('<iframe/>', {
  			  class : "widgets",
  				frameborder : "0",
  				src : url,
  				width : wid,
  				height : hei,
  				id : child.key
  			}).css({
  			    left :  mleft,
  			    top : mtop,
  			    "z-index" : m_z
  			}).data("resizable",canresize).appendTo('#sheet');
      }
    );
  });


  $('#save').click(
    function()
    {
  
      var toaccess =  firebase.database().ref('user/' + uid);
      
      $('.widgets').each(
        function()
        {
          var currentid = this.id;
          toaccess.child(currentid).set(
            {
                wleft :  $('#'+currentid).css("left"),
                wtop : $('#'+currentid).css("top"),
                width : $('#'+currentid).width(),
                height : $('#'+currentid).height(),
                src : $('#'+currentid).attr("src"),
                resize : $('#'+currentid).data("resizable"),
                wz : $('#'+currentid).css("z-index")
            }
          );
        }
      );
    }
  );

  $("#removeicon").click
  (
    function()
    {
      var toremove =  firebase.database().ref('user/' + uid);
      var onEdit = $('body').data('onEdit');
      
      toremove.child($(onEdit).attr('id')).remove();
      $(onEdit).remove();
      $("#resizeHandler").fadeOut(100);
    }
  );
    
  }
  else
  {
    // User is signed out.
    // ...
  }
  // ...
});


    
firebase.database().ref().child('widgets').once('value').then(
  function(snapshot)
  {
    snapshot.forEach
    (
      function(child)
      {
        var sideitems = snapshot.child(child.key).val();

        var divs = $('<div/>', {
  	    class : "items"
  			}).attr({
  			  "data-url" : sideitems.src,
  			  "data-width" : sideitems.wid,
  			  "data-height" : sideitems.hei,
  			  "data-resizable" : sideitems.resize,
  			  "data-category" : sideitems.category
  			});
  		

        var img = $('<img/>', {
    	    src : "https://dummyimage.com/64x64/7f7f7f/ffffff.jpg"
    			}).appendTo(divs);
    		
    		var title = $('<h3/>', {
    		  text : sideitems.title
    		}).appendTo(divs);
    			
    		var info = $('<p/>', {
    		  text : sideitems.info
    		}).appendTo(divs);
    		
    		var copy = $('<small/>', {
    		  text : "[개발자 이름 및 일부 위젯에는 license링크 연결 예정]"
    		}).appendTo(divs);
    		
    		$(divs).appendTo('#contents-area');
        
      }
    );
  }
);

$("#search").keypress(function(e) {

    if (e.keyCode == 13)
    {
      var categoryname = $('#dropdown-category').text();
      var token_category;
      var tosearchall =  firebase.database().ref().child('widgets');
      var firstquery;
      
      
      switch(categoryname)
      {
        case '전체' :
          firstquery = tosearchall;
          break;
        case '유틸리티' :
          firstquery = tosearchall.orderByChild('category').equalTo('util').limitToFirst(10);
          break;
        case '뉴스 및 날씨' :
          firstquery = tosearchall.orderByChild('category').equalTo('news').limitToFirst(10);
          break;
        case '시간' :
          firstquery = tosearchall.orderByChild('category').equalTo('clock').limitToFirst(10);
          break;
        case '검색도구' :
          firstquery = tosearchall.orderByChild('category').equalTo('search').limitToFirst(10);
          break;
        case '스포츠' :
          firstquery = tosearchall.orderByChild('category').equalTo('sports').limitToFirst(10);
          break;
      }
      
      /*console.log();*/

      $('#contents-area').text("");
      //firebase.database().ref().child('widgets').orderByChild('category').equalTo(token_category).limitToFirst(10).once('value').then
      firstquery.once('value').then
      (
        function(snapshot)
        {
          //console.log(snapshot.key);
          snapshot.forEach
          (
              function(child)
              {
                var sideitems = snapshot.child(child.key).val();
                /*console.log(child.key);
                
                console.log(snapshot.child(child.key).val());*/
                console.log(snapshot.child(child.key).val());
                var divs = $('<div/>', {
          	    class : "items"
          			}).attr({
          			  "data-url" : sideitems.src,
          			  "data-width" : sideitems.wid,
          			  "data-height" : sideitems.hei,
          			  "data-resizable" : sideitems.resize,
          			  "data-category" : sideitems.category
          			});
          		
          
                var img = $('<img/>', {
            	    src : "https://dummyimage.com/64x64/7f7f7f/ffffff.jpg"
            			}).appendTo(divs);
            		
            		var title = $('<h3/>', {
            		  text : sideitems.title
            		}).appendTo(divs);
            			
            		var info = $('<p/>', {
            		  text : sideitems.info
            		}).appendTo(divs);
            		
            		$(divs).appendTo('#contents-area');
              }
          );
      }
      );
  }
});

