function calculaNota(ex, p1, p2) {
  const media = (p1 + p2 + ex) / 3
  console.log(media) 
  if( media > 9) {
    return "A" 
    } 
   else if (media < 9  >= 7.5) {
    return "B" 
   }
   else if (media < 7.5  >= 6) {
    return "C"
   }
   else if (media <= 6) {
     return "D"
  }

}

//nao consegui identificar meu erro pois nao era executado quando pedia pra executar. :(