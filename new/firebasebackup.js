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
    
    
    
    firebase.database().ref().once('value').then(
      function(snapshot) {
        
        //console.log(snapshot.val().wigets.length); 배열크기
        
        var sideitems = snapshot.val();
        
        for(var i = 0; i < sideitems.wigets.length; i++)
        {
          var divs = $('<div/>', {
      	    class : "items"
      			}).attr({
      			  "data-url" : sideitems.wigets[i].src,
      			  "data-width" : sideitems.wigets[i].wid,
      			  "data-height" : sideitems.wigets[i].hei,
      			  "data-resizable" : sideitems.wigets[i].resize,
      			  "data-category" : sideitems.wigets[i].category
      			});
      		
  
          var img = $('<img/>', {
      	    src : "https://dummyimage.com/64x64/7f7f7f/ffffff.jpg"
      			}).appendTo(divs);
      		
      		var title = $('<h3/>', {
      		  text : sideitems.wigets[i].title
      		}).appendTo(divs);
      			
      		var info = $('<p/>', {
      		  text : sideitems.wigets[i].info
      		}).appendTo(divs);
      		
      		$(divs).appendTo('#contents-area');
        }
        //firebase.database().goOffline();
});


$("#search").keypress(function(e) {

    if (e.keyCode == 13){z
        //firebase.database().goOnline();
        //alert($(this).val());
        firebase.database().ref().orderByChild('title').equalTo($(this).val()).limitToFirst(10).once('value').then(
      function(snapshot) {
        
        console.log(snapshot.val());
        
        var sideitems = snapshot.val();
      });

    }
});


