//  A função AsteriskScale recebe um número n
// e retorna uma variável de nome scale que desenha na tela 
// uma escada de asterisco

function AsteriskScale (n) {
  for(let row = 1; row < n; row++){
    let scale = ''.padStart(n - row, ' ').concat(''.padStart(row, '*'))
    console.log(scale)
  }
}

AsteriskScale(6)
