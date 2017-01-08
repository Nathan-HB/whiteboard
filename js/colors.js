/**
 * Created by Nathan on 08-Jan-17.
 */
var swatch = document.getElementsByClassName('colorFrame');

for (var i= 0, n=swatch.length;i<n;i++){
    swatch[i].addEventListener('click', setPalette);
}

function setColor(color){
    c.fillStyle = color;
    c.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
        if(active){
            active.className = 'colorFrame'
        }
}

function setPalette(e){
    //ID which colorFrame is being clicked
    var swatch = e.target;
    //Set the fill/strokeStyle to the background color of the colorFrame that has been clicked
    setColor(swatch.style.backgroundColor);
    //Change the class of the colorFrame that has been clicked to colorFrame active
    swatch.className += ' active'
}
