const respostasCorretas = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultado = document.querySelector('.resultado');
form.addEventListener('submit', e => {
    e.preventDefault();
    
    let pontuacao = 0;
    const respostaUsuario = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // verificar respostas
    respostaUsuario.forEach((respostas,index) =>{
        if(respostas === respostasCorretas[index]){
            pontuacao += 25;
        }
    }); 
    // mostrar resultado na página
    scrollTo(0, 0);
    resultado.classList.remove('d-none');
    let placar = 0;
    let timer = setInterval(() => {
        resultado.querySelector('span').textContent = (`${placar}%`);
        if(placar === pontuacao){
            clearInterval(timer);
        }else{
            placar++;
        }
    }, 10);
    
});


