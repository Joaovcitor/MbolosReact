export const RedirectZap = (e) => {
  let enviaMsg = 'Olá, quero fazer um orçamento!'
  let link =
    "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
  window.open(link);
}