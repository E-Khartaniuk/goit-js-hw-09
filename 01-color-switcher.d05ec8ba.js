!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=setInterval(a,1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));var n=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.d05ec8ba.js.map
