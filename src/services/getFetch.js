// Defino array con los diferentes productos
const items = [
    {id: 1, marca: "Ford", modelo: "Fiesta", año:"2014", precio: "$1.000.000", imagen:"https://www.km77.com/images/medium/7/7/3/5/100.307735.jpg"},
    {id: 2, marca: "Ford", modelo: "Focus", año:"2020", precio: "$2.000.000", imagen:"https://www.ukcarline.co.uk/uploads/pages/Ford%20Focus%20Header.png"},
    {id: 3, marca: "Volkswagen", modelo: "Golf", año:"2003", precio: "$1.200.000", imagen:"https://volkswagen.carone.com.ar/wp-content/uploads/sites/3/2018/03/NUEVO-GOLF-1.jpg"},
    {id: 4, marca: "Volkswagen", modelo: "Fox", año:"2004", precio: "$950.000", imagen:"https://pictures.topspeed.com/IMG/crop/201611/volkswagen-e-golf-un-3_800x0w.jpg"},
    {id: 5, marca: "Renault", modelo: "Clio", año:"2011", precio: "$800.000", imagen:"http://cdn.motori.net/auto/wp-content/uploads/2017/10/31001_1_big.jpg"},
    {id: 6, marca: "Renault", modelo: "Megane", año:"2010", precio: "$900.000", imagen:"https://s.libertaddigital.com/2014/01/02/800/400/RenaultMegane.jpg?d1e8d852-6d19-4acd-965e-3be097591f55"}    
]

// Cargo los valores del array
export const getFetch = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(items)
    },2000)                 //Quiero que tarde 2 segundos
})