const formClima = document.getElementById('clima-form');
const formCidade = document.getElementById('cidade-input');


async function buscarClima(e){
  e.preventDefault();

const resultadoClima = document.getElementById('resultado-clima');
  const valorDigitado = formCidade.value

  const API_KEY = 'e632fd47561d8044379f05669f674c85'
  try{

    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorDigitado}&appid=${API_KEY}&units=metric&lang=pt_br`)

    //se a requisiçao falhar (ex: status 404, 500) o throw força o erro
    if(!resposta.ok){
      throw new Error('falha ao buscar dados...' + resposta.statusText)
    }

    const dados = await resposta.json()
        console.log("DADOS BRUTOS RECEBIDOS DA API:", dados);
    let emojiClima = '❓'

    const condicao = dados.weather[0].description.toLowerCase()

    if(condicao.includes('céu limpo') || condicao.includes('clear')){
      emojiClima = '☀️'
    }else if (condicao.includes('clound') || condicao.includes('nublado')){
      emojiClima = '☁️'
    }else if(condicao.includes('rain') || condicao.includes('chuva')){
      emojiClima = '🌧️'
    }
    console.log('dados encontrados.')

    resultadoClima.innerHTML = `<h3> cidade: ${dados.name}</h3>
    <p>Condição: ${dados.weather[0].description.charAt(0).toUpperCase() + dados.weather[0].description.slice(1)} ${emojiClima} </p>
    <p> Temperatura: ${dados.main.temp}° 🌡️</p>
    <p>Umidade: ${dados.main.humidity}💧 </p>`

    console.log('dados exibidos com sucesso...')
    formCidade.value = '';
  }catch(error){
    console.log('erro na requisiçao', error)
    resultadoClima.textContent ='erro ao carregar dados'
  }
}

formClima.addEventListener('submit', buscarClima)
