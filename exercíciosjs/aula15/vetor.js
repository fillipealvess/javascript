let valores = [5, 8, 2, 9 , 3]

/*
for(let i = 0; i < valores.length; i++){
    console.log(`Na posição ${i} tem o valor ${valores[i]}`)
}*/
for (let i in valores) {
    console.log(`Na posição ${i} tem o valor ${valores[i]}`)
}
