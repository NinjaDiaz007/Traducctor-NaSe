(function(){
    let navbar = document.getElementById("navbar");

    navbar.innerHTML = `<a class="navbar-brand link-1" href="./index.html">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon link-1">
            <i class="bi bi-list h3"></i>
        </span>
    </button>

    <div class="collapse navbar-collapse ml-3" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-link link-1" href="./asercade.html">Acerca de</a>
            <a class="nav-link link-1" href="./nosotros.html">Nosotros</a>
            <!--<a class="nav-link link-1" href="#">Pricing</a>-->

            <input type="checkbox" id="switch" class="none" onchange="Switch()">
            <label for="switch" class="lbl-switch ml-4"></label>
        </div>
    </div>`
})();