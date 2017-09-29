	//console.log($('button').attr('data-pl'));
	var sekDefault = 59;
	var timer;
	var pauza;
	var play = false;
	var current = 2;
	var currentBreak = 1;
	function start(){
		timer = setInterval(count,1000);
	}
	
	function pause(){
		pauza = setInterval(pauziraj,1000);
	}
	
	function pauziraj(){
		console.log('PAUZA');
		//Uzimanje trenutnih vrednosti minuta i vremena
		var sekundb = $('.sekb').text();
		var minutb = $('.minb').text();
		
		//ako su minut i sekund 0 pozovi pauzu da odbrojava
		if(minutb == 0 && sekundb == 0){
			//pozovi pauzu;
			clearInterval(pauza);
			console.log('PUSTI OPET ');
			 play = true;
			 
			  $('.break').slideUp(300,function(){
				  
				$('.card').animate({ backgroundColor: "#00BCD4",  borderBottomColor: '#0097A7' },400);
				$('.krug').animate({borderColor:'#0097A7'},300);
				 $('.up, .down').animate({color:'#00838F'},300);
				 //$('.krug').removeClass('braon');
				 $('.timer').slideDown(300);
				
			 });
			 
			 $('h2').slideUp(300, function(){
				  $('h1').slideDown(300);
			 });
			 $('.minb').text(currentBreak);
			start();
			
		}else if(minutb > 0 && sekundb <= 1){ //Ako je minut veci od 0 a sekund manji od 1, smanji minut a sekundu postavi za 59
			minutb -=1;
			sekundb = sekDefault;
			$('.sekb').text(sekundb);
			$('.minb').text(minutb);
		}else if(sekundb <= 10){
			sekundb-=1;
			$('.sekb').text('0'+sekundb);
		}else{
			sekundb-=1;
			$('.sekb').text(sekundb);
		}
	}
		
	function count(){
		//Uzimanje trenutnih vrednosti minuta i vremena
		var sekund = $('.sek').text();
		var minut = $('.min').text();
		
		//ako su minut i sekund 0 pozovi pauzu da odbrojava
		if(minut == 0 && sekund == 0){
			//pozovi pauzu;
			console.log('0 0 0 0 0 0 0 0 0 0 0 0 ');
			clearInterval(timer);
			 play = false;
			 
			 $('.timer').slideUp(300,function(){
				 $('.krug').animate({borderColor:'#795548'},300);
				 $('.up, .down').animate({color:'#4E342E'},300);
				 $('.card').animate({ backgroundColor: "#A1887F",  borderBottomColor: '#4E342E' },400);
				$('.break').slideDown(300);
				 
			 });
			 
			 $('h1').slideUp(300, function(){
				  $('h2').slideDown(300);
			 });
			$('.min').text(current);
			pause();
		}else if(minut > 0 && sekund <= 1){ //Ako je minut veci od 0 a sekund manji od 1, smanji minut a sekundu postavi za 59
			minut -=1;
			sekund = sekDefault;
			$('.sek').text(sekund);
			$('.min').text(minut);
		}else if(sekund <= 10){
			sekund-=1;
			$('.sek').text('0'+sekund);
		}else{
			sekund-=1;
			$('.sek').text(sekund);
		}
	}
	/*
	function count(){
		var minut = $('.val').text();
		var sekund = 59
		$('.val').text(time - 1);	
	}
	*/
	
	$('.pl').click(function(){
    play = true;
		start();
		$(this).hide(300, function(){
			$('.ps').removeClass('none').show(300);
		});
	});
	
	
	$('.ps').click(function(){
    play = false;
		clearInterval(timer);
		$(this).hide(300, function(){
			$('.pl').show(300);
		});
	});

$('.up').click(function(){
		if(play === false){
			var time = parseInt($('.min').text());
			$('.min').text(time + 1);
			$('.sek').text('00');
			current = time+1;
			console.log(current);
		}
	});
	
$('.down').click(function(){
		if(play === false){
			var time = parseInt($('.min').text());
			$('.sek').text('00');
			if(time > 0){
				$('.min').text(time- 1);
				current = time-1;
			}
			console.log(current);
		}
	});
	
$('.u').click(function(){
		if(play === false){
			var time = parseInt($('.breakMin').text());
			$('.breakMin').text(time + 1);
			currentBreak = time+1;
			$('.minb').text(currentBreak);
			
		}
	});
	
$('.d').click(function(){
		if(play === false){
			var time = parseInt($('.breakMin').text());
			
			if(time > 0){
				$('.breakMin').text(time- 1);
				currentBreak = time-1;
				$('.minb').text(currentBreak);
			}
			
		}
	});