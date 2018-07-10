const farenheit = document.getElementById('farenheit')
const celsius = document.getElementById('celsius')

const leerGrados = (e) => {
    if(e.target.id === 'celsius'){
        let valorCelsius = e.target.value
        let resulFarenheit = (9/5 * valorCelsius) + 32
        farenheit.value = resulFarenheit.toFixed(2)
    }
    if (e.target.id === 'farenheit') {
        let valorFarenheit = e.target.value
        let resulCelsius = (valorFarenheit - 32) * 5/9
        celsius.value = resulCelsius.toFixed(2)
    }
}

farenheit.addEventListener('keyup', (e) => leerGrados (e))
celsius.addEventListener('keyup', (e) => leerGrados(e))
