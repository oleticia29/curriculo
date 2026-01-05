function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function mudarFonte(fonte, peso = 'normal') {
  document.body.style.fontFamily = `'${fonte}', sans-serif`;
  document.body.style.fontWeight = peso;
}

const imagens = [
  {
      src: "imagem/projeto1.jpg",
      titulo: "Cutscene The Charles",
      descricao: "Realizado para um Trabalho de conclusão de curso, ilustração referente á um dos quadros de cutscenes.",
      data: " Março(2025) - Dezembro(2025)",
      plataforma: "Produzido no site Pixilart",
      largura: "50%",
      altura: "auto"
  },
  {
      src: "imagem/projeto2.png",
      titulo: "Logo The Charles",
      descricao: "Realizado para um Trabalho de conclusão de curso, ilustração referente á Logo do jogo.",
      data: " Março(2025) - Dezembro(2025)",
      plataforma: "Produzido no site Pixilart",
      largura: "50%",
      altura: "auto"
  },
  {
      src: "imagem/projeto3.png",
      titulo: "Cutscene The Charles",
      descricao: "Realizado para um Trabalho de conclusão de curso, ilustração referente á um dos quadros de cutscenes.",
      data: " Março(2025) - Dezembro(2025)",
      plataforma: "Produzido no site Pixilart",
      largura: "50%",
      altura: "auto"
  },

  {
      src: "imagem/projeto4.png",
      titulo: "Parque Gomm",
      descricao: "Recriação do parque Gomm(Curitiba), que faz parte do projeto “Jardins de mel”, que visa proteger e conscientizar a população da cidade no intuito de preservar as abelhas sem ferrão.",
      data: "2023",
      plataforma: "Produzido no Blender ",
      largura: "50%",
      altura: "auto"
  },

  {
    src: "imagem/projeto5.png",
    titulo: "Robert Dream",
    descricao: "Jogo produzido em grupo, na qual o objetivo é ajudar robertt, uma raposa que precisa se preparar para o inverno rigoroso que esta por vir",
    data: "2025",
    plataforma: "Produzido no Blender ",
    largura: "50%",
    altura: "auto"
}
];

let indiceAtual = 0;
const imagensPorTela = 3;

function exibirImagens() {
  const container = document.getElementById("carrossel-imagens");
  container.innerHTML = "";

  for (let i = 0; i < imagensPorTela; i++) {
    const index = (indiceAtual + i) % imagens.length;
    const imagemInfo = imagens[index];
    const img = document.createElement("img");

    img.src = imagemInfo.src;
    img.alt = imagemInfo.titulo;
    img.title = imagemInfo.descricao;

    // Imagem clicável com pop-up
    img.onclick = function () {
      const popup = window.open("", `popup${index}`, "width=850,height=700,resizable=yes,scrollbars=yes");

      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <title>${imagemInfo.titulo}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
                img {
                  width: ${imagemInfo.largura};
                  height: ${imagemInfo.altura};
                  border-radius: 8px;
                  display: block;
                  margin-bottom: 15px;
                }
                h1 {
                  margin-top: 0;
                }
                .info {
                  margin-bottom: 10px;
                }
              </style>
            </head>
            <body>
              <h1>${imagemInfo.titulo}</h1>
              <div class="info"><strong>Data de criação:</strong> ${imagemInfo.data}</div>
              <img src="${imagemInfo.src}" alt="${imagemInfo.titulo}">
              <p><strong>Descrição:</strong> ${imagemInfo.descricao}</p>
            </body>
          </html>
        `);
        popup.document.close();
        popup.focus();
      } else {
        alert("Por favor, permita pop-ups para visualizar as informações.");
      }
    };

    container.appendChild(img);
  }
}

function mudarImagens(direcao) {
  indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
  exibirImagens();
}

document.addEventListener("DOMContentLoaded", exibirImagens);
