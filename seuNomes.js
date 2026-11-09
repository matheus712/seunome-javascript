
let corPulseira = "amarela"; 
let idadePaciente = 65;      
let gestante = false;         

switch (corPulseira.toLowerCase()) {
  case "vermelha":
    console.log("Atendimento de Emergência: Sala de trauma imediata");
    break;

  case "amarela":
    if (idadePaciente >= 60 || gestante) {
      console.log("Atendimento Urgente: Prioridade Especial Preferencial");
    } else {
      console.log("Atendimento Urgente: Fila padrão amarela");
    }
    break;

  case "verde":

  let mensagemVerde = (idadePaciente < 12) 
      ? "Encaminhar para Pediatria" 
      : "Encaminhar para Clínica Geral";
    console.log(mensagemVerde);
    break;

  default:
    console.log("Alerta: Código de cor desconhecido ou inválido.");
    break;
}