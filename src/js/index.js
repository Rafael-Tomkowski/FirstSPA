import { Router } from './router.js'

const router = new Router();
router.add('/', "src/pages/home.html");
router.add("/ouniverso", "src/pages/ouniverso.html");
router.add("/exploracao", "src/pages/exploracao.html");
router.add(404, "src/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

//Button Swap
var button = document.getElementById("myButton");
var firstImage = "../svg/button_houverOFF.svg";
var secondImage = "../svg/button_houverON.svg";

button.addEventListener("mouseover", function() {
  button.style.backgroundImage = "url('" + secondImage + "')";
});
button.addEventListener("mouseout", function() {
  button.style.backgroundImage = "url('" + firstImage + "')";
});

//indicate page bold


