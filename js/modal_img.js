var modalButtons = document.querySelectorAll('.openModalButton');

modalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('modalImage');
        var captionText = document.getElementById('caption');
        
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';

}