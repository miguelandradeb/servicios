// arrays
let producto = []
let cliente = []
let proveedor = []
// id solicitados
const user = document.getElementById('user')
const password = document.getElementById('password')
const ingresar = document.getElementById('ingresar')
const menu = document.getElementById('menu')
const ingresos  = document.getElementById('ingresos')
const consultas = document.getElementById('consultas')
let consultarProducto = `
    <tr>
        <td>${productos.nombre}</td>
        <td>${productos.descripcion}</td>
        <td>${productos.cantidad}</td>
        <td>${productos.valor}</td>
    </tr>
`

// datos quemados
let usuario = 'admin'
let contraseña = 'admin'
// variables creadas
let nombre = document.createElement('input')
nombre.placeholder = 'nombre'
let nombre2 = document.createElement('input')
nombre2.placeholder = 'nombre'
let nombre3 = document.createElement('input')
nombre3.placeholder = 'nombre'
let descripcion = document.createElement('input')
descripcion.placeholder = 'descripcion'
let valor = document.createElement('input')
valor.placeholder = 'valor'
let cantidad = document.createElement('input')
cantidad.placeholder = 'cantidad'
let nit = document.createElement('input')
nit.placeholder = 'nit'
let direccion = document.createElement('input')
direccion.placeholder = 'direccion'
let direccion2 = document.createElement('input')
direccion2.placeholder = 'direccion'
let telefono = document.createElement('input')
telefono.placeholder = 'telefono'
let correo = document.createElement('input')
correo.placeholder = 'correo'
let boton = document.createElement('button')
boton.type = 'button'
boton.textContent = 'enviar'
let boton2 = document.createElement('button')
boton2.type = 'button'
boton2.textContent = 'enviar'
let boton3 = document.createElement('button')
boton3.type = 'button'
boton3.textContent = 'enviar'
boton3.textContent = 'enviar'  
boton.addEventListener('click', botom)
boton2.addEventListener('click',botom2)
boton3.addEventListener('click',botom3)
// objetos
function productos(nombre, descripcion, cantidad, valor){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.cantidad = cantidad,
    this.valor = valor
} 
function clientes(nombre2, telefono, direccion, correo){
    this.nombre = nombre2,
    this.telefono = telefono,
    this.direccion = direccion,
    this.correo = correo
}
function proveedores(nombre3, nit, direccion2, telefono){
    this.nombre = nombre3,
    this.nit = nit,
    this.direccion = direccion2,
    this.telefono = telefono
}
// funciones
function botom(){
    var registrarProducto = new productos(nombre.value, descripcion.value, cantidad.value, valor.value)
    producto.push(registrarProducto)
    console.log(producto)
}
function botom2(){
    var registrarProveedor = new proveedores(nombre2.value, nit.value, direccion.value, telefono.value)
    proveedor.push(registrarProveedor)
    console.log(proveedor)
}
function botom3(){
    var registrarCliente = new clientes(nombre3.value, telefono.value, direccion2.value, correo.value)
    cliente.push(registrarCliente)
    console.log(cliente)
}
function iniciar(){
    if((user.value === usuario)&&(password.value === contraseña)){
       window.location.href = 'menu.html'
    }
    else{
        alert('datos incorrectos')
    }
}
function ingresoProducto(){
    ingresos.append(nombre,descripcion,valor,cantidad,boton)
}
function ingresoProveedor(){
    ingresos.append(nombre2,nit,direccion,telefono,boton2)
}
function ingresoCliente(){
    ingresos.append(nombre3,telefono,direccion2,correo,boton3)
}
function mostarProducto(){
    consultas.innerHTML +=  `
    <tr>
        <td>${productos.nombre}</td>
        <td>${productos.descripcion}</td>
        <td>${productos.cantidad}</td>
        <td>${productos.valor}</td>
    </tr>
`
}
