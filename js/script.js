const iconLightOrDark = document.querySelector('#light');
const icon = document.querySelector('.ph');
const html = document.documentElement;
const pixelBoxes = document.querySelectorAll(".pixel-box");
const pixelContent0 = document.querySelector('#pixel0');
const pixelContent1 = document.querySelector('#pixel1');
// const pixelMedia = document.querySelector('pixel-media')


iconLightOrDark.addEventListener('click', function(){
    iconLightOrDark.classList.toggle('active')
    if(iconLightOrDark.classList.contains('active')){
        icon.classList.remove('ph-sun')
        icon.classList.add('ph-moon')
        html.classList.toggle('dark')
    }else{
        icon.classList.remove('ph-moon')
        icon.classList.add('ph-sun')
        html.classList.toggle('dark')
    }

});


pixelBoxes.forEach((box, index) => {
  box.addEventListener("click", function() {
    // exemplo: alternar o conteúdo correspondente
    const content = document.querySelector(`#pixel${index}`);
    content.classList.toggle("hidden");
  });
});
