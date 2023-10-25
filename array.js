const estadosCidades=require('./modulo/estados_cidades')

/*const getListaDeEstados= function (){
    let SiglasJson={}
    let SiglasArray=[]
    let counter = 0;
    while(counter < estadosCidades.estadosCidades.estados.length){

        SiglasArray.push(estadosCidades.estadosCidades.estados[counter].sigla)
        counter++ 
    }
    SiglasJson.uf=SiglasArray
    SiglasJson.quantidade=SiglasArray.length
    return SiglasJson
}
console.log(getListaDeEstados())*/

/*const getDadosEstados=function(){
    let DadosJSON={}
    let Estados='SP'
    let counter=0;
    loop: while(true){
        
       if(  Estados==estadosCidades.estadosCidades.estados[counter].sigla){
            DadosJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
            DadosJSON.descricao=estadosCidades.estadosCidades.estados[counter].nome
            DadosJSON.capital=estadosCidades.estadosCidades.estados[counter].capital
            DadosJSON.regiao=estadosCidades.estadosCidades.estados[counter].regiao
            break loop
        }
        counter++
     }
     return DadosJSON
}
console.log(getDadosEstados())*/


/*const getCapitalEstado =function(){
    let CapitalJSON={}
    let Estados='AC'
    let counter=0;
    loop: while(true){
        
       if(  Estados==estadosCidades.estadosCidades.estados[counter].sigla){
            CapitalJSON.uf=estadosCidades.estadosCidades.estados[counter].sigla
            CapitalJSON.descricao=estadosCidades.estadosCidades.estados[counter].nome
            CapitalJSON.capital=estadosCidades.estadosCidades.estados[counter].capital
            break loop
        }
        counter++
     }
     return CapitalJSON
}
console.log(getCapitalEstado())*/

const getEstadosRegiao =function(regiao){
    
    let RegiaoARRAY=[]
    let JSONEstados ={}

    // RegiaoARRAY.regiao = estadosCidades.estadosCidades.estados[counter].regiao
    // RegiaoARRAY.estados = estadosCidades.estadosCidades.estados[counter].estado

    for(let cont = 0; cont < estadosCidades.estadosCidades.estados.length; cont++){
        
        if(regiao==estadosCidades.estadosCidades.estados[cont].regiao){
        let RegiaoJSON={}
        RegiaoJSON.uf=estadosCidades.estadosCidades.estados[cont].sigla
        RegiaoJSON.nome=estadosCidades.estadosCidades.estados[cont].nome
        RegiaoARRAY.push(RegiaoJSON)
        JSONEstados.regiao = estadosCidades.estadosCidades.estados[cont].regiao
        }
       
     }
     JSONEstados.estados = RegiaoARRAY
     return JSONEstados
    
    }

console.log(getEstadosRegiao('Sul'))


