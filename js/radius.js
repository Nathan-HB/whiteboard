var minRad = 5,
    maxRad = 50,
    interval = 5;

var setRadius = function(newRadius){
    if (newRadius < minRad)
        newRadius = minRad;
    else if(newRadius > maxRad)
        newRadius = maxRad;
    radius = newRadius;
    c.lineWidth = radius*2;
        radval.innerText = radius;
};

decrad.addEventListener('click', function(){
    setRadius(radius-interval)
});
incrad.addEventListener('click', function(){
    setRadius((radius+interval))
});
