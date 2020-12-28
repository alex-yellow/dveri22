/*
Scripts writed by Denis Leonov only for dveri22veka.ru.
*/

function openWindow(window_width, window_height, includeFile) {
	$('#popup_window_inner').width(window_width); 
	$('#popup_window_inner').height(window_height); 
	$('#popup_window_overlay').fadeIn('fast',function(){
		$('#popup_window_iframe').attr('src','/templates/dveri22veka.ru/php/'+includeFile+'.php');
		$('#popup_window').show();
		var window_left = Math.round(($('#popup_window_overlay').width() - $('#popup_window').width()) /2);
		var window_top = Math.round(($('#popup_window_overlay').height() - $('#popup_window').height()) /2); 
		$('#popup_window').css('left',window_left);
		$('#popup_window').css('top',window_top);
	});
	$('#popup_window_close').click(function(){
		$('#popup_window_iframe').attr('src','');
		$('#popup_window').hide();
		$('#popup_window_overlay').fadeOut('fast');  
	});
}


// Добавить в Избранное 
function add_favorite(a) { 
  var title=document.title; 
  var url=document.location; 
  try { 
    // Internet Explorer 
    window.external.AddFavorite(url, title); 
  } 
  catch (e) { 
    try { 
      // Mozilla 
      window.sidebar.addPanel(title, url, ""); 
    } 
    catch (e) { 
      // Opera 
      if (typeof(opera)=="object") { 
        a.rel="sidebar"; 
        a.title=title; 
        a.url=url; 
        return true; 
      } 
      else { 
        // Unknown 
        alert('Нажмите Ctrl-D чтобы добавить страницу в закладки'); 
      } 
    } 
  } 
  return false; 
}


$(document).ready(function() { 
	
	//$("a[rel^='lightbox']").slimbox();
 
	$('#header_contacts_callorder a').click(function(){
		openWindow(350, 310, 'call_order');
		return false;
	})

	$('#sidebar_callorder a').click(function(){
		openWindow(350, 310, 'call_order');
		return false;
	})
	
	$('#feedback a, .feedback_open').click(function(){
		openWindow(630, 280, 'feedback');
		return false;
	})
  
	$('#header_bookmark a').click(function(){
		add_favorite(this);
		return false;
	})
    
    //$('a[title]').tooltip();
	
/*	$('a[title]').tooltip({
		track: true,
		delay: 0,
		showURL: false,
		fade: 200,
		top: 0,
		left: 20
	});*/
	
	$('#roi-id-counter img').unwrap(); // убиваем ссылку в блоке про скидку 10%
    
    $('.catalog-full-params-1').after('<div class="clear"></div>');
	
	
 /*Выпадающее меню*/	
	
/*	$("div.dropdown ul li").hover(function(){
		$(this).addClass("hover");
		$('ul:first',this).slideDown();
	}, function(){
		$(this).removeClass("hover");
		//$('ul:first',this).slideUp();
		$('ul:first',this).hide();
	});

	$("div.dropdown ul li ul li:has(ul)").find("a:first").append(" &raquo; ");*/
	
 /*/Выпадающее меню*/	

}); 