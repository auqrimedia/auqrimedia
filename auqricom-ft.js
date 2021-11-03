//<![CDATA[
// disqus
(function() {
var bloggerjs = document.createElement(&#39;script&#39;);
bloggerjs.type = &#39;text/javascript&#39;;
bloggerjs.async = true;
/*bloggerjs.src = &#39;//&#39; + disqus_shortname + &#39;.disqus.com/blogger_index.js&#39;;*/
(document.getElementsByTagName(&#39;head&#39;)[0] || document.getElementsByTagName(&#39;body&#39;)[0]).appendChild(bloggerjs);
})();
	
// ads sticky bot
$(document).ready(function() {$(&#39;img#closed&#39;).click(function(){$(&#39;#btm_banner&#39;).hide(90);});});

// load egen
function loadScript(d){var l=document.createElement("script");l.src=d,document.body.appendChild(l)}function loadCSS(d){var l=document.createElement("link");l.rel="stylesheet",l.href=d,document.body.appendChild(l)}function downloadJSAtOnload(){loadScript("data:text/javascript;base64,ZnVuY3Rpb24gbGF6eUxvYWQoKXtmb3IodmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgibGF6eSIpLHQ9MDt0PGUubGVuZ3RoO3QrKylpc0luVmlld3BvcnQoZVt0XSkmJihlW3RdLnNyYz1lW3RdLmdldEF0dHJpYnV0ZSgiZGF0YS1zcmMiKSxlW3RdLmNsYXNzTGlzdC5yZW1vdmUoImxhenkiKSl9ZnVuY3Rpb24gaXNJblZpZXdwb3J0KGUpe3ZhciB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHQuYm90dG9tPj0wJiZ0LnJpZ2h0Pj0wJiZ0LnRvcDw9KHdpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkmJnQubGVmdDw9KHdpbmRvdy5pbm5lcldpZHRofHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpfWZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIoZSx0KXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLHQpOndpbmRvdy5hdHRhY2hFdmVudCgib24iK2UsdCl9cmVnaXN0ZXJMaXN0ZW5lcigibG9hZCIsbGF6eUxvYWQpLHJlZ2lzdGVyTGlzdGVuZXIoInNjcm9sbCIsbGF6eUxvYWQpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Zvcih2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJhIiksdD1lLmxlbmd0aCxuPS9maXJlZm94fHRyaWRlbnQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudDpkb2N1bWVudC5ib2R5LGk9ZnVuY3Rpb24oZSx0LG4saSl7cmV0dXJuKGUvPWkvMik8MT9uLzIqZSplKmUrdDpuLzIqKChlLT0yKSplKmUrMikrdH07dC0tOyllLml0ZW0odCkuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLGZ1bmN0aW9uKGUpe3ZhciB0LG89bi5zY3JvbGxUb3Ascj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgvW14jXSskLy5leGVjKHRoaXMuaHJlZilbMF0pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxkPW4uc2Nyb2xsSGVpZ2h0LXdpbmRvdy5pbm5lckhlaWdodCxjPWQ+bytyP3I6ZC1vLGE9ZnVuY3Rpb24oZSl7dmFyIHI9ZS0odD10fHxlKSxkPWkocixvLGMsOTAwKTtuLnNjcm9sbFRvcD1kLDkwMD5yJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYSl9O3JlcXVlc3RBbmltYXRpb25GcmFtZShhKSxlLnByZXZlbnREZWZhdWx0KCl9KX0pOw==")}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;function toggleClass(e,a,l){var s=new RegExp("(?:^|\\s)"+a+"(?!\\S)","g"),t=arguments.length>2?l:null==e.className.match(s);e.className=e.className.replace(s,""),t&&(e.className+=" "+a)}function toggle(e){var a=document.getElementById("auqri");"headon"==e&&toggleClass(a,"active",!0),"srchon"==e&&toggleClass(a,"active"),"headoff"==e&&toggleClass(a,"active",!1)}

// Select code - Double click 
var pres = document.querySelectorAll('code');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
	var copy = document.execCommand("copy");
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}

// Cookies
jQuery.cookie=function(e,n,o){if(arguments.length>1&&"[object Object]"!==String(n)){if(o=jQuery.extend({},o),(null===n||void 0===n)&&(o.expires=-1),"number"==typeof o.expires){var t=o.expires,r=o.expires=new Date;r.setDate(r.getDate()+t)}return n=String(n),document.cookie=[encodeURIComponent(e),"=",o.raw?n:encodeURIComponent(n),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=n||{};var i,c=o.raw?function(e){return e}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(i[1]):null};nt.cookie))?c(i[1]):null};

//LazyLoad Image
function loadScript(d){var o=document.createElement("script");o.src=d,document.body.appendChild(o)}function downloadJSAtOnload(){loadScript("https://rawgit.com/mastamvan/backup/master/lazyload.js")}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
//]]>

var tanggallengkap = new String();
    var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    var tgl = new Date();
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun;
