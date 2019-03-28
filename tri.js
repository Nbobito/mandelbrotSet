var canvas = document.getElementById("c")
var c = canvas.getContext("2d")
function drawTriangle(p0, p1, p2) {
    c.beginPath()
    c.moveTo(p0, p1)
    c.lineTo(p1, p2)
    c.lineTo(p2, p0)
    c.lineTo(p0, p1)
    c.stroke()
}
var i
var x
var colori
var colorx
var colorxi
var xi
function tri(axi, ayi, iStepy, xStepy) {
    for (i = 0; i < ayi; i = i + iStepy) {
        for (x = 0; x < axi; x = x + xStepy) {
            colori = i.toString(16)
            colorx = x.toString(16)
            xi = x + i
            colorxi = xi.toString(16)
            c.strokeStyle = "#" + colori + colorx + colorxi
            drawTriangle(i, x, xi)
        }
    }
}
var val1
var val2
var incxv
var incyv
function gen() {
    val1 = document.getElementById("axi").value
    val2 = document.getElementById("ayi").value
    incxv = parseInt(document.getElementById("ix").value)
    incyv = parseInt(document.getElementById("iy").value)
    tri(val1, val2, incyv, incxv)
}
