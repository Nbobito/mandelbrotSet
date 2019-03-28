/*
created by Nathan Galley. v0.1 finished on 3/27/2019
under a GNU general public licence. There is no waranty.
*/
//MandleBrott function is z = z^2 + c
var canvas = document.getElementById("c")
var c = canvas.getContext("2d")
var hex
var zx
var zy
var cx
var cy
var xt
var i
var e
var scaleZoom = 150
var xmin = -2
var ymin = -2
var px
var py
//color convertion
function componentConv(con) {
    hex = con.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}
function colorconv(blue) {
    return "#0000" + componentConv(blue)
}
function drawPoint(x, y, blue) {
    c.fillStyle = colorconv(blue)
    c.fillRect(x, y, 1, 1)
}
function mandleBrott() {
    for (x = 0; x <= 900; x++) {
        for (y = 0; y <= 700; y++) {
            cx = xmin + x / scaleZoom
            cy = ymin + y / scaleZoom
            zx = 0
            zy = 0
            i = 0
            do {
                xt = zx * zy
                zx = zx * zx - zy * zy + cx
                zy = 2 * xt + cy
                ++i
            }
            while (i <= 225 && (Math.abs(zx * zx + zy * zy)) <= 4)
            drawPoint(x, y, i)
        }
    }
}
/*function zoom(x, y) {
    scaleZoom = scaleZoom + 1
    px = 900 - x
    py = 700 - y
    c.transform(scaleZoom, 0, 0, scaleZoom, px / -2, py / -2)
    mandleBrott()
}*/
function zoom(x, y) {
    px = 900 - x
    py = 700 - y
    xmin = xmin + Math.floor(x / 4) / scaleZoom
    ymin = -Math.floor(y / 4) / scaleZoom + -350 / scaleZoom
    scaleZoom = scaleZoom * 2
    mandleBrott()
}
function handler(e) {
    e = e || window.event;
    var pageX = e.pageX;
    var pageY = e.pageY;
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    pageX = pageX - canvas.offsetLeft
    pageY = pageY - canvas.offsetTop
    zoom(pageX, pageY)
}

if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);
mandleBrott()
/*
Notes:
C=a+bi
where i=sqrt(-1)
a=x
b=y
mandlebrott: Z=Z^2+C
*/