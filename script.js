var default_content="";

$(document).ready(function(){

	checkURL();
	$('div ul li a').click(function (e){
			checkURL(this.hash);
	});

	//filling in the default content
	default_content = $('#pageContent').html();


	setInterval("checkURL()",250);

});

var lasturl="";

function checkURL(hash)
{
	if(!hash) hash=window.location.hash;

	if(hash != lasturl)
	{
		lasturl=hash;
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		if(hash=="")
		$('#pageContent').html(default_content);

		else{
		   loadPage(hash);
		}
	}
}

function loadPage(url)  //the function that loads pages via AJAX
{
    url=url.replace('#page','');    //strip the #page part of the hash and leave only the page number

    $('#loading').css('visibility','visible');  //show the rotating gif animation

    $.ajax({    //create an ajax request to load_page.php
        type: "POST",
        url: "load_page.php",
        data: 'page='+url,  //with the page number as a parameter
        dataType: "html",   //expect html to be returned
        success: function(msg){

            if(parseInt(msg)!=0)    //if no errors
            {
                $('#pageContent').html(msg);    //load the returned html into pageContet
                $('#loading').css('visibility','hidden');   //and hide the rotating gif
            }
        }

    });

}

