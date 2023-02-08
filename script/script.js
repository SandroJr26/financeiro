let saida = document.querySelector(".js-saida .saida").innerHTML;
let saldoAtual = document.querySelector(".saldoAtual span").innerHTML;

function adicionarEntrada() {
  let valorEntrada = document.getElementById("entrada").value;
  let totalEntrada = document.querySelector(".js-entrada .entrada").innerHTML;
  let valorEntradaTotal = parseFloat(valorEntrada) + parseFloat(totalEntrada);
  let valorFormatado = valorEntradaTotal.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  document.querySelector(".js-entrada .entrada").innerHTML = valorFormatado;
}
1;
