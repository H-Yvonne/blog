/**
 * @author H.Yvonne
 * @create 2016.4.2
 */

var downBtn1 = document.getElementById('down1');
downBtn1.addEventListener('click', function () {
	scrollTop(this);
});

var downBtn2 = document.getElementById('down2');
downBtn2.addEventListener('click', function () {
	scrollTop(this);
});

var downBtn3 = document.getElementById('down3');

downBtn3.addEventListener('click', function () {
	scrollTop(this);
});

function scrollTop (_self) {
	var id = _self.getAttribute('data-id'), hei = document.body.clientHeight;
	window.scrollTo(0,hei*id);
}


