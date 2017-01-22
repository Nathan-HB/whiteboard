/**
 * Created by Nathan on 22/01/2017.
 */

var resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function(){
    c.clearRect(0, 0, canvas.width, canvas.height);
});

var saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function(){
    c.clearRect(0, 0, canvas.width, canvas.height);
});
