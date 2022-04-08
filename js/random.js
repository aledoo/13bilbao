$(document).ready(function (){
    var classCycle=['image-1','image-2','image-3','image-4'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    $('body').addClass(classToAdd);
});