
/* Handles toggling the navigation menu for small screens */

( function() {
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = document.getElementById( 'menu' );

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/* Sets or removes .focus class on an element. */

	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

} )();
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

<!DOCTYPE html>
<!-- saved from url=(0037)http://demo.awarethemes.com/showcase/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>OMO.onl</title>
    <meta name="description" content="">

    <link href="./fonts.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    
    
</head>

<body>

    <header id= "navbar" class="site-header">

        <div class="container-xl">

            <nav id="site-navigation" class="main-navigation" aria-label="">

              

                    <div class="fixed">
                    <a class="nav-brand" href="http://demo.awarethemes.com/showcase" rel="home">OMO.onl</a>
					<br><p>Watch Old Movies Online</p>
                
               
                <button class="menu-toggle" aria-controls="menu" aria-expanded="false" aria-label="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <title>
    Menu
  </title>
  <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="100" d="M4 7h22M4 15h22M4 23h22"></path>
</svg>
                </button>
            </div>
                <ul id="menu" class="nav nav-menu" aria-expanded="false">

                    
                        <li class="nav-item is-active">
                            <a class="nav-link" href="http://demo.awarethemes.com/about">Action</a>
                        </li>

                    
                        <li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/about">Adventure</a>
                        </li>

                    
                        <li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/blog">Comedy</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Documentary</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Drama</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Fantasy</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Family</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Fantasy</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Romance</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Sci-Fi</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Terror</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Thriller</a>
                        </li>

						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">War</a>
                        </li>
						
						<li class="nav-item">
                            <a class="nav-link" href="http://demo.awarethemes.com/showcase/styles">Western</a>
                        </li>
                    
                </ul>


            </nav>
           
        </div>

    </header>

    <div id="content" class="site-content">

<main class="site-main">

    <div class="container-xl">

        <div class="grid">

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/food">

                                                            <img class="card-image" src="../assets/japanese-food-600x600.jpg" alt="Thumbnail for Food">
                            
                            <div class="card-body">
                                <div class="card-title">Halloween 1978 Online</div>
                            </div>
                        </a>
                    </div>

                </div>

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/cats">

                                                            <img class="card-image" src="../assets/cat-01-600x600.jpg" alt="Thumbnail for Cats">
                            
                            <div class="card-body">
                                <div class="card-title">Cats</div>
                            </div>
                        </a>
                    </div>

                </div>

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/people">

                                                            <img class="card-image" src="../assets/man-600x600.jpg" alt="Thumbnail for People">
                            
                            <div class="card-body">
                                <div class="card-title">People</div>
                            </div>
                        </a>
                    </div>

                </div>

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/nature">

                                                            <img class="card-image" src="../assets/seagull-600x600.jpg" alt="Thumbnail for Nature">
                            
                            <div class="card-body">
                                <div class="card-title">Nature</div>
                            </div>
                        </a>
                    </div>

                </div>

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/computer">

                                                            <img class="card-image" src="../assets/laptop-600x600.jpg" alt="Thumbnail for Computer">
                            
                            <div class="card-body">
                                <div class="card-title">Computer</div>
                            </div>
                        </a>
                    </div>

                </div>

            
                <div class="col">

                    <div class="card">
                        <a href="http://demo.awarethemes.com/showcase/work/space">

                                                            <img class="card-image" src="../assets/moon-600x600.jpg" alt="Thumbnail for Space">
                            
                            <div class="card-body">
                                <div class="card-title">Space</div>
                            </div>
                        </a>
                    </div>

                </div>   
        </div>

    </div>

</main>

</div><!-- #content -->

<footer class="site-footer">

    <div class="container-xl">
        <p>Showcase by <a href="https://awarethemes.com/">Aware Themes</a></p>    </div>

</footer>

<script src="./app.js"></script>


</body></html>

