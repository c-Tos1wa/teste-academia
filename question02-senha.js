// A função minimumSize recebe uma string password
// e retorna a quantidade de caracteres que falta para completar
//o tamanho mínimo de 6 caracteres

function minimunSize(password) {
  let size = password.length

  if(password.match(/[A-Za-z0-9!@#$%^&*()-+]+/)){
    if(size >=1 && size < 6) {
      missing = 6 - size
      console.log(missing)
    } else if(size === 0) {
      console.log('Sua senha deve ter pelo menos 1 caracter')
    } else {
      console.log('Senha inválida')
    }
  } 
}
    

minimunSize('Ya3')




