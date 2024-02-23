$(document).ready(function (){
    var classCycle=['image-1','image-2','image-3','image-4','image-5','image-6'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    $('body').addClass(classToAdd);
});
