const express=require('express')
const cors=require('cors')
const app= express()
const port=3001
app.use(express.json())
app.use(cors())

let usuarios=[
    {id:1,nombre:'Juana',edad:23},
    {id:2,nombre:'Maria',edad:24},
    {id:3,nombre:'Pedro',edad:26},
    {id:4,nombre:'Susana',edad:28},
    {id:5,nombre:'Jose',edad:29},
]
app.get('/usuarios',(peticion,respuesta)=>{
    respuesta.json(usuarios)
})
app.delete('/usuarios/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const indice=usuarios.findIndex(usuario=> usuario.id===id)
    console.log(indice);
    if (indice!==-1){
        usuarios.splice(indice,1)
        res.sendStatus(204)
     }else{
        res.status(404).send({mensaje:`No existe un usuario con ese id`})
    }
}
)
app.post('/usuarios',(req,res)=>{
    const newUsuario= req.body
    console.log('newUsuario', newUsuario);
    newUsuario.id=usuarios.length+1
    console.log(newUsuario.id);
    console.log('------');
    usuarios.push(newUsuario)
    res.status(201).json(newUsuario)
})
app.put('/usuarios/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const usuarioActualizado=usuarios.find(usuario=> usuario.id===id)
    if (usuarioActualizado) {
        usuarioActualizado.nombre=req.body.nombre,
        usuarioActualizado.edad=req.body.edad,
        res.json(usuarioActualizado)
    } else {
        res.status(404).json({mensaje:'Usuario no encontrado'})        
    }    
    
})


app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto http:localhost:${port}`);
})