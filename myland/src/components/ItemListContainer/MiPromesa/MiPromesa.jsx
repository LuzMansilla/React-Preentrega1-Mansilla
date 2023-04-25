    let cuadros = [
        {id:'1', nombre: 'Cuadro 1', categoria: 'Acrilico', precio: 5000, foto:'/public/Acrilico 1.jpg'},
        {id:'2', nombre: 'Cuadro 2', categoria: 'Acrilico', precio: 10000, foto:'/public/Acrilico 2.jpg'},
        {id:'3', nombre: 'Cuadro 3', categoria: 'Pasteles', precio: 6000, foto:'/public/Pastel 1.jpg'},
        {id:'4', nombre: 'Cuadro 4', categoria: 'Pasteles', precio: 4000, foto:'/public/Pastel 2.jpg'},
        {id:'5', nombre: 'Cuadro 5', categoria: 'Lapiz', precio: 7000, foto:'/public/Lapiz 1.jpg'},
        {id:'6', nombre: 'Cuadro 6', categoria: 'Lapiz', precio: 5000, foto:'/public/Lapiz 2.jpg'}
    ]
const miPromesa = (id) => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(!id ? cuadros : cuadros.find( cuadro =>cuadro.id === id))
        }, 1000);
    })
}
export default miPromesa
