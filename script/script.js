let saida = document.querySelector(".js-saida .saida").innerHTML;
let saldoAtual = document.querySelector(".saldoAtual span").innerHTML;

function adicionarEntrada() {
  let valorEntrada = document.getElementById("entrada").value;
  let totalEntrada = document.querySelector(".js-entrada .entrada").innerHTML;
  let valorEntradaTotal =
    Number(valorEntrada.replace(",", ".")) +
    Number(totalEntrada.replace(",", "."));
  let valorFormatado = valorEntradaTotal.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  document.querySelector(".js-entrada .entrada").innerHTML = valorFormatado;
  console.log("valorEntrada", valorEntrada);
  console.log("totalEntrada", totalEntrada);
  console.log("valorEntradaTotal", valorEntradaTotal);
  console.log("valorFormatado", valorFormatado);
}
