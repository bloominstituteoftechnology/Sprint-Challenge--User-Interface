<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Sprint Challenge - Home</title>

  <link href="https://fonts.googleapis.com/css?family=Roboto|Rubik" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">
<style>
	section{
		display:flex;
		justify-content:space-between;
		align-content:baseline;
	}
	
	.mailbox{
		position:relative;
		width:50%;
		padding:100px;
		min-height:400px;
		overflow:auto;
	}
	
	.mailbox img{
		height:auto;
		position:absolute;
	}
	
	.mailbox-letter{
		width:150px;
		position: absolute;
		top:42%;
		left:748px;
	    -webkit-animation: mright2 3s ; /* Safari 4.0 - 8.0 */
	    animation: mright2 3s;
	}
	

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mright2 {
  from {left: -568px;}
  to {left: 768px;}
}

@keyframes mright2 {
  from {left: -500px;}
  to {left: 768px;}
}
	
	.mailbox-top{
		width:50%;
	}
	
	.mailbox-bottom{
		top:141px;
		z-index:-2;
		margin-left:-34px;
		width:57%;
	}
	
	
	section div:last img:first{
		z-index:2;
	}
	
	
		
</style>
</head>

<body>
    <div class="container thankyou-page">
		<header>
			<nav>
				<a href="index.html"><img src="img/lambda-black.png"></a>
				<a href="index.html">Home</a>
				<a href="about.html">About</a>
				<a href="products.html">Products</a>
				<a href="blog.html">Blog</a>
				<a href="contact.html">Contact</a>
            </nav>
		</header>
		<section class="thankyou">
			<h1>Thank You <? echo $_REQUEST['firstname'].' '.$_REQUEST['lastname'];?> for your information Request
        </section>
		<img class="mailbox-letter" src="img/letter.png">
		<section>
			<div class="mailbox">
				
			</div>
			<div class="mailbox">
				<img class="mailbox-top" src="img/mailbox-top.png">
				<img class="mailbox-bottom" src="img/mailbox-bottom.png">
			</div>
			
		</section>
		<footer>
			<nav>
				<a href="index.html">Home</a>
				<a href="about.html">About</a>
				<a href="products.html">Products</a>
				<a href="blog.html">Blog</a> 
				<a href="contact.html">Contact</a>
			</nav>
		</footer>
    </div><!-- container -->        
</body>
</html>
