const Productos = [
    { id: 1, nombre: "Mother MSI", precio: 300, categoria: "mother" },
    { id: 2, nombre: "Procesador Intel I3", precio: 450, categoria: "procesadores" },
    { id: 3, nombre: "Memoria DDR3", precio: 600, categoria: "memorias" },
    { id: 4, nombre: "Placa video Nvidia", precio: 750, categoria: "video" },
    { id: 5, nombre: "Placa video Palit", precio: 900, categoria: "video" },
    { id: 6, nombre: "Mother Gigabyte", precio: 1050, categoria: "mother" },
    { id: 7, nombre: "Memoria DDR4", precio: 1300, categoria: "memorias" },
    { id: 8, nombre: "Placa video Asus", precio: 1450, categoria: "video" },
    { id: 9, nombre: "Mother Asus", precio: 1700, categoria: "mother" },
    { id: 10, nombre: "Pocesador Intel I5", precio: 1900, categoria: "procesadores" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = Productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}