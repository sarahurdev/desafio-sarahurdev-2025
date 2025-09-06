// Rex	cão	RATO, BOLA
// Mimi	gato	BOLA, LASER
// Fofo	gato	BOLA, RATO, LASER
// Zero	gato	RATO, BOLA
// Bola	cão	CAIXA, NOVELO
// Bebe	cão	LASER, RATO, BOLA
// Loco	jabuti	SKATE, RATO

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    const animais = {
      Rex: { especie: "cão", brinquedos: ["RATO", "BOLA"] },
      Mimi: { especie: "gato", brinquedos: ["BOLA", "LASER"] },
      Fofo: { especie: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
      Zero: { especie: "gato", brinquedos: ["RATO", "BOLA"] },
      Bola: { especie: "cão", brinquedos: ["CAIXA", "NOVELO"] },
      Bebe: { especie: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
      Loco: { especie: "jabuti", brinquedos: ["SKATE", "RATO"] },
    };

    const todosBrinquedosValidos = [];
    for (let nomeAnimal in animais) {
      for (let brinquedo of animais[nomeAnimal].brinquedos) {
        if (!todosBrinquedosValidos.includes(brinquedo)) {
          todosBrinquedosValidos.push(brinquedo);
        }
      }
    }

    const pessoa1 = brinquedosPessoa1.split(",")
    const pessoa2 = brinquedosPessoa2.split(",")
    const ordem = ordemAnimais.split(",")
  }
}

export { AbrigoAnimais as AbrigoAnimais };
