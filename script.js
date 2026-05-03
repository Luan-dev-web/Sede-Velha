/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXXXX  ABAIXO MENU-TOGGLE   XXXXXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.links-do-menu');
    const links = document.querySelectorAll('.links');

    if (!toggle || !menu) {
        console.log("Elemento não encontrado");
        return;
    }

    toggle.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('ativo');
        });
    });
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXXX  ABAIXO BOTÃO MENU/INICIO   XXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

const botao = document.querySelector(".botao-de-contato-do-menu");
const botaoDois = document.querySelector(".botao-de-contato-dois");
const img = document.querySelector(".imagem-do-whats-menu");
const imgDois = document.querySelector(".imagem-do-whats-dois");

botao.addEventListener("mouseenter", () => {
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = "assets/logo-whats-preta.png";
    img.style.opacity = "1";
  }, 150); // metade do tempo da transition
});

botao.addEventListener("mouseleave", () => {
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = "assets/logo-whats.png";
    img.style.opacity = "1";
  }, 150);
});


botaoDois.addEventListener("mouseenter", () => {
  imgDois.style.opacity = "0";

  setTimeout(() => {
    imgDois.src = "assets/logo-whats-preta.png";
    imgDois.style.opacity = "1";
  }, 150); // metade do tempo da transition
});

botaoDois.addEventListener("mouseleave", () => {
  imgDois.style.opacity = "0";

  setTimeout(() => {
    imgDois.src = "assets/logo-whats.png";
    imgDois.style.opacity = "1";
  }, 150);
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXXX  ABAIXO BOTÃO FACEBOOK  XXXXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/



const botaotres = document.querySelector(".botao-da-pagina-do-facebook");
const img2 = document.querySelector(".logo-facebook-rede-social");


botaotres.addEventListener("mouseenter", () => {
  img2.style.opacity = "0";

  setTimeout(() => {
    img2.src = "assets/f-2.webp";
    img2.style.opacity = "1";
  }, 150); // metade do tempo da transition
});

botaotres.addEventListener("mouseleave", () => {
  img2.style.opacity = "0";

  setTimeout(() => {
    img2.src = "assets/f-1.webp";
    img2.style.opacity = "1";
  }, 150);
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXX  ABAIXO BOTÃO CURSO/VAQUINHA  XXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

const botaocinco = document.querySelector(".botao-do-curso");
const img4 = document.querySelector(".logo-curso-rede-social");


botaocinco.addEventListener("mouseenter", () => {
  img4.style.opacity = "0";

  setTimeout(() => {
    img4.src = "assets/preto-curso.webp";
    img4.style.opacity = "1";
  }, 150); // metade do tempo da transition
});

botaocinco.addEventListener("mouseleave", () => {
  img4.style.opacity = "0";

  setTimeout(() => {
    img4.src = "assets/branco-curso.webp";
    img4.style.opacity = "1";
  }, 150);
});


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXXXXXX  ABAIXO DESCRIÇÃO  XXXXXXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

const produtos = {
  melatonina: {
    titulo: "DESCRIÇÃO DO SUPLEMENTO MELATONINA",
    descricao: "A melatonina atua como o principal cronobiológico do organismo, sendo responsável por sinalizar ao corpo o início do período noturno e regular o ritmo circadiano para uma recuperação profunda. Mais do que um simples indutor de sono, ela funciona como um potente antioxidante celular que combate os radicais livres e otimiza o equilíbrio metabólico, garantindo que o descanso se transforme em alta performance física e mental. Em um cenário de constante exposição a estímulos digitais, sua suplementação estratégica é o investimento essencial para quem busca longevidade, controle do estresse e a máxima eficiência biológica através de um despertar revigorado e livre de efeitos residuais.",

    imagemPrincipal: "assets/Melatonina.png",

    qualidades: [
      {
        img: "assets/IMG-qualidade-MELATONINA.jpg",
        nome: "Melhora do Sono"
      },
      {
        img: "assets/IMG-qualidade-MELATONINA-2.jpg",
        nome: "Ação Anti-inflamatória"
      },
      {
        img: "assets/IMG-qualidade-MELATONINA-3.jpg",
        nome: "Saúde Cardiovascular"
      }
    ],

    usoImg: "assets/IMG-uso-SUPLEMENTOS.jpg",
    usoTexto: "1 gota"
  },

  vitaminad3: {
    titulo: "DESCRIÇÃO DO SUPLEMENTO VITAMINA D3",
    descricao: "A Vitamina D3 em gotas é um pré-hormônio essencial que funciona como o combustível para o sistema imunológico e o pilar central da saúde estrutural, garantindo a absorção eficiente de cálcio para ossos e dentes fortes. Sua apresentação líquida oferece uma biodisponibilidade superior, permitindo que o organismo absorva o nutriente de forma imediata e precisa, o que é fundamental para regular o equilíbrio metabólico, a função muscular e a vitalidade mental. Ideal para compensar a baixa exposição solar do dia a dia, essa suplementação é a estratégia de alta tecnologia para quem busca longevidade ativa, proteção celular e um desempenho biológico otimizado com a máxima praticidade.",

    imagemPrincipal: "assets/Vitaminad3.png",

    qualidades: [
      {
        img: "assets/qualidade-vitaminad3.webp",
        nome: "Fortalecimento Imunológico"
      },
      {
        img: "assets/qualidade-vitaminad3-2.webp",
        nome: "Melhora da Função Muscular"
      },
      {
        img: "assets/qualidade-vitaminad3-3.webp",
        nome: "Saúde Óssea"
      }
    ],

    usoImg: "assets/IMG-uso-SUPLEMENTOS.jpg",
    usoTexto: "12 gotas"
  },

  arginina: {
    titulo: "DESCRIÇÃO DO SUPLEMENTO ARGININA",
    descricao: "Esta formulação premium combina a potência vasodilatadora da Arginina e o suporte neuroprotetor da Taurina para otimizar o vigor físico e o foco mental, enquanto a sinergia entre Magnésio, Zinco e Vitamina B6 garante uma recuperação muscular eficiente, equilíbrio hormonal e fortalecimento do sistema imunológico. O resultado é um complexo de alta biodisponibilidade que promove máxima performance metabólica e bem-estar integral, ideal para quem busca resultados consistentes e sofisticação nutricional em uma única solução.",

    imagemPrincipal: "assets/Arginina.png",

    qualidades: [
      {
        img: "assets/qualidade-arginina-3.webp",
        nome: "Melhora o desempenho físico"
      },
      {
        img: "assets/qualidade-arginina-2.webp",
        nome: "Redução da fadiga muscular"
      },
      {
        img: "assets/qualidade-arginina.jpg",
        nome: "Saúde Cardiovascular"
      }
    ],

    usoImg: "assets/IMG-uso-SUPLEMENTOS.jpg",
    usoTexto: "17 gotas"
  },

  pelecabelounha: {
    titulo: "DESCRIÇÃO DO SUPLEMENTO VITAMINAS DO COMPLEXO B + MINERAIS",
    descricao: "Este complexo de estética avançada promove uma verdadeira renovação de dentro para fora, combinando a alta concentração de Biotina e Complexo B para acelerar o crescimento capilar e o fortalecimento das unhas através da síntese de queratina. Sua poderosa ação antioxidante, impulsionada pelas Vitaminas A, C e E, estimula a produção natural de colágeno e combate o envelhecimento precoce da pele, enquanto a sinergia dos minerais Zinco, Selênio, Cálcio e Cromo garante a integridade estrutural e a proteção celular. O resultado é uma fórmula de alta biodisponibilidade que entrega cabelos densos, unhas resistentes e uma pele visivelmente mais firme, iluminada e revitalizada.",

    imagemPrincipal: "assets/pelecabelounha.webp",

    qualidades: [
      {
        img: "assets/qualidade-pelecabelounha.webp",
        nome: "Fortalecimento de Cabelos e Unhas"
      },
      {
        img: "assets/qualidade-pelecabelounha-2.webp",
        nome: "Saúde Óssea e Muscular"
      },
      {
        img: "assets/qualidade-pelecabelounha-3.webp",
        nome: "Imunidade e Antioxidante"
      }
    ],

    usoImg: "assets/IMG-uso-pelecabelounha.jpeg",
    usoTexto: "2 capsúlas"
  },

  pacoteerva: {
    titulo: "DESCRIÇÃO DO PACOTE DE ERVA-MATE",
    descricao: "O chimarrão é uma bebida tradicional rica em compostos bioativos que promovem uma revitalização natural do organismo, combinando a alta concentração de antioxidantes e cafeína para estimular o foco, a energia e o desempenho físico ao longo do dia. Sua ação termogênica auxilia no metabolismo, contribuindo para o equilíbrio do peso corporal, enquanto os polifenóis presentes combatem os radicais livres e favorecem a saúde celular. Além disso, a presença de minerais como magnésio e potássio apoia o bom funcionamento muscular e cardiovascular. O resultado é uma infusão de alta absorção que proporciona mais disposição, resistência e bem-estar geral de forma contínua.",

    imagemPrincipal: "assets/pacote_de_erva-mate.webp",

    qualidades: [
      {
        img: "assets/emagrecimento.jpeg",
        nome: "Auxílio no Emagrecimento"
      },
      {
        img: "assets/digestao.jpeg",
        nome: "Melhora a Digestão"
      },
      {
        img: "assets/coracao.jpeg",
        nome: "Saúde Cardiovascular"
      }
    ],

    usoImg: "assets/IMG-uso-erva-mate.png",
    usoTexto: "livre"
  },

  chaerva: {
    titulo: "DESCRIÇÃO DO CHÁ DE ERVA-MATE",
    descricao: "O chá de erva-mate oferece uma combinação equilibrada de nutrientes e antioxidantes que atuam diretamente na proteção e no fortalecimento do organismo, promovendo uma sensação duradoura de energia e vitalidade sem sobrecarga. Rico em vitaminas do complexo B e compostos fenólicos, ele auxilia na melhora da digestão e no funcionamento intestinal, ao mesmo tempo em que contribui para a eliminação de toxinas. Sua ação antioxidante também favorece a saúde da pele e o sistema imunológico, enquanto os minerais presentes ajudam na manutenção do equilíbrio corporal. O resultado é uma bebida funcional que entrega leveza, foco e um organismo mais equilibrado e saudável.",

    imagemPrincipal: "assets/cha-ervamate.webp",

    qualidades: [
      {
        img: "assets/mental.jpeg",
        nome: "Ação Estimulante e Foco"
      },
      {
        img: "assets/coracao.jpeg",
        nome: "Saúde Cardiovascular"
      },
      {
        img: "assets/emagrecimento.jpeg",
        nome: "Auxílio no Emagrecimento"
      }
    ],

    usoImg: "assets/IMG-uso-erva-mate.png",
    usoTexto: "livre"
  }
};


const links = document.querySelectorAll("[data-produto]");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const idProduto = link.dataset.produto;
    abrirProduto(idProduto);
  });
});

function abrirProduto(nomeProduto) {
  const produto = produtos[nomeProduto];
  if (!produto) return;

  // conteúdo
  document.getElementById("imagem-descricao-PRODUTO").src = produto.imagemPrincipal;
  document.querySelector(".titulo-descricao").innerText = produto.titulo;
  document.getElementById("descricao-JS").innerText = produto.descricao;

  const imagens = document.querySelectorAll(".imagens-de-qualidade");
  const nomes = document.querySelectorAll(".nome-da-qualidade");

  produto.qualidades.forEach((q, index) => {
    if (imagens[index]) {
      imagens[index].src = q.img;
      nomes[index].innerText = q.nome;
    }
  });

  document.getElementById("img-uso").src = produto.usoImg;
  document.querySelector(".rendimento span").innerText = produto.usoTexto;

  // ✅ MOSTRAR OS DOIS
  document.getElementById("fundo-da-descricao").style.display = "block";
  document.querySelector(".borda").style.display = "flex";
}

document.getElementById("fundo-da-descricao").onclick = () => {
  document.querySelector(".borda").style.display = "none";
};

/*XXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXX DIV FECHAR XXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXX*/
function fechar() {
  document.getElementById("fundo-da-descricao").style.display = "none";
  document.querySelector(".borda").style.display = "none";
}

document.getElementById("div-FECHAR").onclick = fechar;
document.getElementById("fundo-da-descricao").onclick = fechar;
/*XXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXX DIV FECHAR XXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXX*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*XXXXXXXXX  ACIMA DESCRIÇÃO  XXXXXXXXX*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/