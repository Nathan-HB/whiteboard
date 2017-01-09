/**
 * Created by Nathan on 08-Jan-17.
 */

//create an array of all classes of name 'colorFrame'
var swatch = document.getElementsByClassName('colorFrame');

//on click, cycle through array and call function setPalette on that target
for (var i= 0, n=swatch.length;i<n;i++){
    swatch[i].addEventListener('click', setPalette);
}
//function to target point and call setColor function with background color of target. change className to ' active'
function setPalette(e){
    //ID which colorFrame is being clicked
    var swatch = e.target;
        //Set the fill/strokeStyle to the background color of the colorFrame that has been clicked
        setColor(swatch.style.backgroundColor);
            //Change the class of the colorFrame that has been clicked to colorFrame active
            swatch.className += ' active'
}
//function to set color of fill/stroke. color being the output of swatch.style.backgroundColor
function setColor(color){
    //dot color
    c.fillStyle = color;
        //line color
        c.strokeStyle = color;
            //change any previous "active" className to colorFrame
            var active = document.getElementsByClassName('active')[0];
            if(active){
                active.className = 'colorFrame'
            }
}
