const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    console.log('hello there');
    img.src = src;
    
}
const imgOptions = {
    threshold: 1,
    rootmargin: "0px 0px 500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            console.log('General Kenobi');
        }
    });

}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});