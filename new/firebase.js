var config = {
      apiKey: "AIzaSyAVVGvYuwh2KV298DXSmaNQ2Ohi2KrUvds",
      authDomain: "aiop-data.firebaseapp.com",
      databaseURL: "https://aiop-data.firebaseio.com",
      projectId: "aiop-data",
      storageBucket: "aiop-data.appspot.com",
      messagingSenderId: "905713835388"
    };
    firebase.initializeApp(config);
    
    //var mtitle = document.getElementById('title');
    /*var dbRef = firebase.database().ref().child('text');
    dbRef.on('value',snap => mtitle.innerText = snap.val());*/
    //var dbRef = firebase.database().ref().child('text').once('value');
    
    
firebase.database().ref().child('widgets').once('value').then(
  function(snapshot)
  {
    snapshot.forEach
    (
      function(child)
      {
        var sideitems = snapshot.child(child.key).val();
        /*console.log(child.key);
        
        console.log(snapshot.child(child.key).val());*/
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
    )
  }
);

$("#search").keypress(function(e) {

    if (e.keyCode == 13)
    {
      var categoryname = $('#dropdown-category').text();
      var token_category;
      
      switch(categoryname)
      {
        case '전체' :
          token_category = 'all';
          break;
        case '유틸리티' :
          token_category = 'util';
          break;
        case '뉴스 및 날씨' :
          token_category = 'news';
          break;
        case '시간' :
          token_category = 'clock';
          break;
        case '검색도구' :
          token_category = 'search';
          break;
        case '스포츠' :
          token_category = 'sports';
          break;
      }
      
      /*console.log();*/

      $('#contents-area').text("");
      firebase.database().ref().child('widgets').orderByChild('category').equalTo(token_category).limitToFirst(10).once('value').then
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

