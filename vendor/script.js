$("#slider").on('slide.bs.carousel', function(evt) {

	   var step = $(evt.relatedTarget).index();

	   $('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
	   		$('#caption-'+step).fadeIn();
	   });

	});

var video = document.querySelector("#webcamVideo");
 
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(err0r) {
    console.log("Something went wrong!");
  });
}

function expandTextarea(id) {
          document.getElementById(id).addEventListener('keyup', function() {
              this.style.overflow = 'hidden';
              this.style.height = 0;
              this.style.height = this.scrollHeight + 'px';
          }, false);
      }

      expandTextarea('supportTextarea');
      expandTextarea('suCompany');
      expandTextarea('suPosition');
      expandTextarea('suPurpose');