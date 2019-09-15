<!DOCTYPE html>
<html>
	<head>
	    <title>Profileforce</title>
	    <script>
	    	window.onload = function(){
	    		document.getElementById("profileforce").src = "https://sf-devs-developer-edition.ap15.force.com/profileforce" + location.pathname + location.search; 
	    	}
		</script>
	</head>
	<body style="margin:0;">
  		<iframe id="profileforce" src="" style="height:100vh;width:100vw;overflow:visible;border:none;"/>
  	</body> 
</html>
