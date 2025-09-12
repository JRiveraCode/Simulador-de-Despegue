let tiempo = 10;

document.addEventListener('DOMContentLoaded', () => {
    const iniciarBtn = document.getElementById('iniciarBtn');
    const timeInput = document.getElementById('time');
    const conteo = document.getElementById('conteo');
    const setup = document.getElementById('setup');
    const video = document.getElementById('videoDespegue');
    const volverBtn = document.getElementById('volverBtn');

    let intervalId = null;

    iniciarBtn.addEventListener('click', () => {
        const barraProgreso = document.getElementById('barra-progreso');
        let tiempo = parseInt(timeInput.value);
        if (isNaN(tiempo) || tiempo < 5 || tiempo > 60) {
            conteo.textContent = 'Por favor ingresa un tiempo válido (5-60 segundos)';
            conteo.style.color = '#ff5252';
            return;
        }
        
        conteo.style.color = '#fff';
        setup.style.display = 'none';
        conteo.textContent = tiempo;
        conteo.classList.add('fade-in');
        let actual = tiempo;
        intervalId = setInterval(() => {
            actual--;
            if (actual > 0) {
                conteo.textContent = actual;
                barraProgreso.style.width = ((actual / tiempo) * 100) + '%';
            } else {
                barraProgreso.style.width = '0%';
                clearInterval(intervalId);
                conteo.textContent = '¡Despegue!';
                conteo.style.color = '#1e90ff';
                setTimeout(() => {
                    conteo.style.display = 'none';
                    video.style.display = 'block';
                    video.classList.add('fade-in');
                }, 1200);
            }
        }, 1000);
    });

    volverBtn.addEventListener('click', () => {
        videoDespegue.style.display = 'none';
        conteo.style.display = 'block';
        conteo.textContent = '';
        setup.style.display = 'block';
        conteo.style.color = '#fff';

        const barraProgreso = document.getElementById('barra-progreso');
        if (barraProgreso) {
            barraProgreso.style.width = '100%';
            setTimeout(() => {
                barraProgreso.style.width = ((tiempo / tiempo) * 100) + '%';
            }, 100);
        }
    });
});