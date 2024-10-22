// <let> declara a variável.
let numeroSecreto = gerarNumeroAleatorio(); //<numeroSecreto> armazena o valor retornado pela função <gerarNumeroAleatorio()>.
let tentativas = 1; // inicializa a variável <tentativas> com o valor 1, provavelmente para contar o número de tentativas no jogo.

// <function> realiza uma função específica; a forma abaixo evita repetição de código.
function exibirTextoNaTela(tag, texto) { // <tag> seletor CSS que identifica o elemento HTML; <texto> texto que será inserido no elemento identificado pelo seletor tag.
    let campo = document.querySelector(tag); // <document.querySelector() seleciona o primeiro elemento que corresponde ao seletor fornecido, no caso <tag>.
    campo.innerHTML = texto; // <.innerHTML> define conteúdo de um elemento do HTML.
}

// Aqui estão as chamadas da função acima.
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// Executa a função <exibirMensagemInicial>; exibe as mensagens na tela assim que o script é carregado.
exibirMensagemInicial();

// Captura o palpite do número secreto
function verificarChute() {
    let chute = document.querySelector('input').value; // captura o valor do campo de entrada <input> onde o usuário digita seu palpite e guarda na variável <chute>.
    
    // Verificação do palpite    
    if (chute == numeroSecreto) { // se o palpite for correto.
        exibirTextoNaTela('h1', 'Acertou!'); // executa a função <exibirTextoNaTela()>.
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // se a quantidade de tentativas for maior que 1 apresentar a palavra "tentativas", senão "tentativa".
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // <${}> template literal; a string é envolvida por crases (`). 
        exibirTextoNaTela('p', mensagemTentativas); // executa a função <exibirTextoNaTela()>.
        document.getElementById('reiniciar').removeAttribute('disabled'); // habilita o botão reiniciar; <document.getElementById()> retorna a referência do elemento através do ID; <.removeAttribute()> remove o atributo com o nome especificado do elemento.

    } else { // se o palpite for errado.
        if (chute > numeroSecreto) { // se o nº do palpite for maior que o nº secreto.
            exibirTextoNaTela('p', 'O número secreto é menor'); // executa a função <exibirTextoNaTela()>.
        } else { // se o nº do palpite for menor que o nº secreto.
            exibirTextoNaTela('p', 'O número secreto é maior'); // executa a função <exibirTextoNaTela()>.
        }

        tentativas++; // <tentativas> é a variável; <++> é um operador de incremento, quando colocado após a variável (tentativas++) ele aumenta o valor da variável em 1.
        limparCampo(); // executa a função <limparCampo()>
    }
}

// Função que gera o nº aleatório.
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // <parseInt> converte o número decimal para um número inteiro, descartando a parte fracionária; <Math.random()> gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo); <* 10 + 1> a multiplicação amplia o intervalo desejado.
    // <* 10> multiplica o número aleatório por 10, resultando em um número decimal entre 0 e 10 (não incluindo 10).
    // <* 10 + 1> Adiciona 1 ao resultado, deslocando o intervalo para entre 1 e 11 (não incluindo 11).
}

// Função para limpar o campo do palpite.
function limparCampo() {
    chute = document.querySelector('input'); // a variável <chute> é o valor informado no campo de entrada <input>
    chute.value = ''; // define o valor do campo de entrada (input) para uma string vazia, efetivamente limpando qualquer texto que estava presente no campo.
}
// Função para reinicar o jogo.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera o número secreto aleatório da rodada.
    limparCampo(); // executa a função <limparCampo()>.
    tentativas = 1; // inicializa a variável <tentativas> com o valor 1.
    exibirMensagemInicial(); // executa a função <exibirMensagemInicial()>.
    document.getElementById('reiniciar').setAttribute('disabled', true) // <.getElementById()> retorna o elemento HTML com o ID fornecido; <.setAttribute> define o valor de um atributo especificado em um elemento HTML; <disabled> é o nome do atributo que está sendo definido, este atributo é comumente usado em elementos de formulário (como botões) para desativá-los; <true> valor que está sendo atribuído ao atributo disabled, o que efetivamente desativa o elemento.
}







