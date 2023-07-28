const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_q9ayknq';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        alert('Correo enviado exitosamente');
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });

const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');
const totalImages = 20;
let currentImageIndex = 1;

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages || totalImages;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages || 1;
  showImage(currentImageIndex);
});

function showImage(index) {
  for (let i = 1; i <= totalImages; i++) {
    const image = document.querySelector(`#image${i}`);
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  }
}