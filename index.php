<!DOCTYPE html>
<html>
	<head>
	    <title>Profileforce</title>
	    <script>
	    	window.onload = function(){
	    		let h = window.innerHeight;
  				let w = window.innerWidth;
  				let iframe = document.getElementsByTagName("iframe")[0];
				iframe.style.height = h + "px";
				iframe.style.width = w + "px";
	    		iframe.src = "https://sf-devs-developer-edition.ap15.force.com/profileforce" + location.pathname + location.search; 
	    	}
		</script>
	</head>
	<body style="margin:0px;padding:0px;overflow:hidden">
	    <iframe src="" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
	</body>
</html>
