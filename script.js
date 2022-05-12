function multi (){

    let tabela = []
   
    for (let i = 0; i <= 10; i++){
        tabela[i] = []
   
        for (let j = 0; j <= 10; j++){
   
           tabela[i][j] = i * j
       } 
        
    }
    console.table(tabela)
   }
   console.log(multi( ))