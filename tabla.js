const crearFile =(tabla= 2)=>{
    let outPut="";
    let result;
    
for (let i = 1; i <= 10; i++) {
   result= tabla*i  ; 
 
   outPut+=`${tabla}*${i}=${result}\n`;
}

fs.writeFile (`tabla-${tabla}.txt`,outPut,(error)=>{
    if (error) throw error;
    console.log('Archivo creado')
})
}