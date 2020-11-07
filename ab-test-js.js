
//<script type="text/javascript">

function reDirectFuction(){

    var url4protoA = "protoA.html";
    var url4protoB = "protoB.html";
    var url;
   
    
    var y =Math.random(); 
if(y<0.5)
	{ y =Math.floor(y) ;
	  url=url4protoA;
	} 
else
	{ y= Math.ceil(y) ;
	 url=url4protoB;
	} 


    if(typeof IE_fix != "undefined") // IE8 and lower fix to pass the http referer
    {
        document.write("redirecting..."); // Don't remove this line or appendChild() will fail because it is called before document.onload to make the redirect as fast as possible. Nobody will see this text, it is only a tech fix.
        var referLink = document.createElement("a");
        referLink.href = url;
        document.body.appendChild(referLink);
        referLink.click();
    }
    else { window.location.replace(url); } // All other browsers
    
    };
    
    
    
//</script>
