<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Sprint Challenge - Home</title>

  <link href="https://fonts.googleapis.com/css?family=Roboto|Rubik" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">

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
			<h1>Thank You <? echo $_Request['firstname'].' '.$_Request['lastname'];?> for your information Request
        
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