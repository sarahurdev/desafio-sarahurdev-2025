// Rex	cão	RATO, BOLA
// Mimi	gato	BOLA, LASER
// Fofo	gato	BOLA, RATO, LASER
// Zero	gato	RATO, BOLA
// Bola	cão	CAIXA, NOVELO
// Bebe	cão	LASER, RATO, BOLA
// Loco	jabuti	SKATE, RATO

import { OrdemBrinquedo } from "./VO/ordemBrinquedos.js";

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

    const pessoa1 = brinquedosPessoa1.split(",")
    const pessoa2 = brinquedosPessoa2.split(",")
    const ordem = ordemAnimais.split(",")


    const resultado = [];
    const adotadosPorPessoa = { 1: [], 2: [] };

    const p1 = new OrdemBrinquedo()
    const p2 = new OrdemBrinquedo()

    for (let nome of ordem) {
      if (!animais[nome]) {
        resultado.push("Animal inválido")
        const res = resultado[0]
        return { erro: res }
      }

      const { especie, brinquedos } = animais[nome];

      const pessoa1IsOk = p1.ordem(pessoa1, brinquedos, especie);
      const pessoa2IsOk = p2.ordem(pessoa2, brinquedos, especie)

      let destino = "abrigo";

      if (especie === "jabuti") {
        if (pessoa1IsOk && adotadosPorPessoa[1].length > 0 && adotadosPorPessoa[1].length < 3) {
          destino = "pessoa 1";
          adotadosPorPessoa[1].push(nome);

        }
        else if (pessoa2IsOk && adotadosPorPessoa[2].length > 0 && adotadosPorPessoa[2].length < 3) {
          destino = "pessoa 2";
          adotadosPorPessoa[2].push(nome);
        }
      }
      else {
        if (pessoa1IsOk && pessoa2IsOk) {
          destino = "abrigo";
        } else if (pessoa1IsOk && adotadosPorPessoa[1].length < 3) {
          destino = "pessoa 1";
          adotadosPorPessoa[1].push(nome);
        } else if (pessoa2IsOk && adotadosPorPessoa[2].length < 3) {
          destino = "pessoa 2";
          adotadosPorPessoa[2].push(nome);
        }
      }

      resultado.push(`${nome} - ${destino}`);
    }
    const res = resultado.sort((a, b) => a.localeCompare(b))

    return { lista: res };
  }


}

export { AbrigoAnimais as AbrigoAnimais };
