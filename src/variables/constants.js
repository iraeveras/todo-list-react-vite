const date = new Date()

let dia = date.getDate();
let mes = date.getMonth() + 1;
let ano = date.getFullYear();

dia = dia < 10 ? dia = `0${dia}` : dia
mes = mes < 10 ? dia = `0${mes}` : mes

export const dateAtual = `${dia}/${mes}/${ano}`

