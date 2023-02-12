// let saida = document.querySelector(".js-saida .saida").innerHTML;
// let saldoAtual = document.querySelector(".saldoAtual span").innerHTML;

// function adicionarEntrada() {
//   let valorEntrada = document.getElementById("entrada").value;
//   let totalEntrada = document.querySelector(".js-entrada .entrada").innerHTML;
//   let valorEntradaTotal =
//     Number(valorEntrada.replace(",", ".")) +
//     Number(totalEntrada.replace(",", "."));
//   let valorFormatado = valorEntradaTotal.toLocaleString("pt-BR", {
//     minimumFractionDigits: 2,
//   });
//   document.querySelector(".js-entrada .entrada").innerHTML = valorFormatado;
//   console.log("valorEntrada", valorEntrada);
//   console.log("totalEntrada", totalEntrada);
//   console.log("valorEntradaTotal", valorEntradaTotal);
//   console.log("valorFormatado", valorFormatado);
// }

let totalEntrada = 0;
let totalSaida = 0;
let totalSaldo = 0;

function adicionarEntrada() {
  const valorEntrada = document.getElementById("entrada").value;
  totalEntrada += Number(valorEntrada);
  valorEntradaFormatado = totalEntrada.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.querySelector(".js-entrada .entrada").innerHTML =
    valorEntradaFormatado;
  atualizaSaldo();
}

function adicionarSaida() {
  const valorSaida = document.getElementById("saida").value;
  totalSaida += Number(valorSaida);
  valorSaidaFormatado = totalSaida.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.querySelector(".js-saida .saida").innerHTML = valorSaidaFormatado;
  atualizaSaldo();
}

function atualizaSaldo() {
  totalSaldo = totalEntrada - totalSaida;
  totalSaldoFormatado = totalSaldo.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.querySelector(".valorAtual").innerHTML = totalSaldoFormatado;
}
