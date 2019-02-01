$('.thumbnail img').on('click', function(event){
    $('.hero').html(`<img src="${this.src}" alt="${this.alt}">`);
});



// function handleThumbnailClicks() {
//     $('.thumbnail').on('click', function(event) {
//       const heroImageSrc = $(this).find('img').attr('src');
//       const heroImageAlt = $(this).find('img').attr('alt');
  
//       $('.hero img').attr('src', heroImageSrc).attr('alt', heroImageAlt);
//     });
//   }
  
// $(handleThumbnailClicks);


// $('.thumbnail').keypress(function(event){
// 	let keycode = (event.keyCode ? event.keyCode : event.which);
//     if(keycode == '13'){
//         $('.hero').html(`<img src="${this.src}" alt="${this.alt}">`);	
//     }
// });