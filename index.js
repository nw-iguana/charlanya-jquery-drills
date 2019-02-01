$('.thumbnails').on("click", "img", function(event){
    $('.hero').html(`<img src="${this.src}" alt="${this.alt}">`);
});


$('.thumbnails').keypress(function(event){
	let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('.hero').html(`<img src="${this.src}" alt="${this.alt}">`);	
    }
});