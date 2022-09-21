//console.log("hello");

//click to scroll
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
});

document.getElementById('btn-map').addEventListener('click',function(){
    document.getElementById('map').scrollIntoView({behavior: 'smooth'});
});