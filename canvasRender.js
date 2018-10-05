/**
 * Created by faiyaz on 10/8/2015.
 */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.translate(50,50);

function drawPoint(x,y,color,label){
    context.beginPath();
    context.arc(x,y,3,0,2*Math.PI);
    context.fillText(label,x+9,y+9);
    context.strokeStyle=color;
    context.stroke();
    context.closePath();
}

function drawLine(beginx,beginy,x,y,color){
    context.beginPath();
    context.moveTo(beginx,beginy);
    context.lineTo(x,y);
    context.strokeStyle=color;
    context.stroke();
    context.closePath();

}
function apply() {
    context.clearRect(0,0,1000,1000);
    var point1X = document.getElementById("point1X").value;
    var point1Y = document.getElementById("point1Y").value;
    var point2X = document.getElementById("point2X").value;
    var point2Y = document.getElementById("point2Y").value;
    drawPoint(0, 0, "black", "origin");
    drawPoint(point1X, point1Y, "red", "p1");
    drawPoint(point2X, point2Y, "brown", "p2");
    drawLine(0, 0, point1X, point1Y, "red");
    drawLine(0, 0, point2X, point2Y, "green");

    var p1 = new Point(point1X,point1Y);
    var p2 = new Point(point2X,point2Y);

    var n = norm(p1.x,p1.y);
    var d = p2.dot(n.x,n.y);
    var s = scale(n.x, n.y,d);

    drawPoint(s.x, s.y,"yellow","projection");
    drawLine(p2.x,p2.y, s.x, s.y,"black");

}







