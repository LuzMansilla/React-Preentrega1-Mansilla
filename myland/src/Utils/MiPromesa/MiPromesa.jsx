    let cuadros = [
        {id:'1', nombre: 'Dos Personas', categoria: 'Acrilico', precio: 5000, tamaño: '35 X 60', stock: 5, foto:'/Acrilico 1.jpg'},
        {id:'2', nombre: 'Una Persona', categoria: 'Acrilico', precio: 10000, tamaño: '35 X 60', stock: 5, foto:'/Acrilico 2.jpg'},
        {id:'3', nombre: 'Dos Colores', categoria: 'Pasteles', precio: 4000, tamaño: '45 X 60', stock: 5, foto:'/Pastel 1.jpg'},
        {id:'4', nombre: 'Mas Colores', categoria: 'Pasteles', precio: 12000, tamaño: '45 X 60', stock: 5, foto:'/Pastel 2.jpg'},
        {id:'5', nombre: 'Cuerpo Completo', categoria: 'Lapiz', precio: 25000, tamaño: '30 X 40', stock: 5, foto:'/Lapiz 1.jpg'},
        {id:'6', nombre: 'Rostro', categoria: 'Lapiz', precio: 15000, tamaño: '30 X 40', stock: 5, foto:'/Lapiz 2.jpg'}
    ]
const miPromesa = (id) => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(!id ? cuadros : cuadros.find( cuadro =>cuadro.id === id))
        }, 1000);
    })
}
export default miPromesa
