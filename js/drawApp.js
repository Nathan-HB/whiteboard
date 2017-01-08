var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var radius = 10;
var moving = false;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.lineWidth = radius*2;

var drawDot = function(e){
    if (moving){
        c.lineTo(e.clientX, e.clientY);
        c.stroke();
        c.beginPath();
        c.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI);
        c.fill();
        c.beginPath();
        c.moveTo(e.clientX, e.clientY);

}
};

/* var drawDot_ = function(e){
        c.beginPath();
        c.arc((e.clientX), (e.clientY), radius, 0, 2*Math.PI);
        c.fill();
}; */

// instead of using a new function omitting the "moving if" statement, call drawDot function on engage.
var engage = function(e){
    moving = true;
        drawDot(e);
};
var disengage = function(){
    moving = false;
        c.beginPath();
};


canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', drawDot);
//canvas.addEventListener('mousedown', drawDot_);
canvas.addEventListener('mouseup', disengage);


