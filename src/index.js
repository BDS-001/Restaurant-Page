import initialLoad from "./load-page"
import { header } from "./header";
import { menu } from "./menu";
import { about } from "./about";
import { homepage } from "./homepage";


const restaurantWebPage = (function() {
    initialLoad()

    header.menu.addEventListener('click', menu.renderMenu)
    header.about.addEventListener('click', about.renderAbout)
    header.homepage.addEventListener('click', homepage.renderHomepage)
})();