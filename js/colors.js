var swatch = document.getElementsByClassName('colorFrame');

for (var i= 0, n=swatch.length;i<n;i++){
    swatch[i].addEventListener('click', setPalette);
}

function setColor(color){
    c.fillSytle = color;
    c.strokeStyle = color;
    var active = document.getElementsByClassName('colorFrame active')[0];
        if(active){
            active.classname = 'colorFrame'
        }
}

function setPalette(e){
    //ID which colorFrame is being clicked
    var swatch = e.target;
    //Set the fill/strokeStyle to the background color of the colorFrame that has been clicked
    setColor(colorFrame.style.backgroundColor);
    //Change the class of the colorFrame that has been clicked to colorFrame active
    colorFrame.Classname += ' active'
}
