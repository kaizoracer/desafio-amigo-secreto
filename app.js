// Declara a variável 'listaDeAmigos' e a inicializa como um array vazio, que será usado para armazenar os nomes dos amigos.
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  
  // Verifica se o nome não está vazio
  if (nome) {
    listaDeAmigos.push(nome);
    atualizarListaDeAmigos();
    input.value = '';
  }
}
// Função para atualizar a lista de amigos na tela
function atualizarListaDeAmigos() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = '';

  // Para cada amigo na lista, cria um item <li> e adiciona à lista na tela
  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

// Função para sortear um amigo da lista
function sortearAmigo() {

    // Verifica se a lista de amigos está vazia
  if (listaDeAmigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear.');
    return;
  }
  // Sorteia um amigo aleatoriamente da lista
  const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
  

  const resultadoElement = document.getElementById('resultado'); // Obtém o elemento onde o resultado será exibido
  resultadoElement.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`; // Exibe o amigo sorteado na tela
}