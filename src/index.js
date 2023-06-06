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