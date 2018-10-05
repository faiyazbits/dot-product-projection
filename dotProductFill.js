/**
 * Created by faiyaz on 10/8/2015.
 */
function Point(x,y){
    this.x=x;
    this.y=y;
}

Point.prototype.dot = function(x1,y1){
    return ((this.x*x1)+(this.y*y1));
};

//normalizing a point
function norm (x,y){
    var mag = Math.sqrt((x*x)+(y*y));
    return {x : (x/mag),y:(y/mag)}
}

function scale(x,y,value){
    return {x : (x*value), y : y*value};
}














