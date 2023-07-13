const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;

export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listausuarios = await respuesta.json();
        const usuarioBuscado = listausuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null
            }
        }else{
            console.log('Email no existe');
            return null
        }
    }catch(error){
       console.log(error); 
    }
} 

export const obtenerListaTareas = async ()=>{
    try{
     const respuesta = fetch(URL_producto);
     const listaTareas = await respuesta.json();
     return listaTareas
    }catch{
        console.log(error)
    }
}

export const crearTarea =async (tarea)=>{
    try{
       const respuesta = await fetch(URL_producto,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tarea)
       });

     return respuesta;

    }catch(error){
        console.log(error)
    }
}

export const ceditarTarea =async (tarea, id)=>{
    try{
       const respuesta = await fetch(URL_producto + '/' + id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tarea)
       });

     return respuesta;

    }catch(error){
        console.log(error)
    }
}

export const borrarTarea =async ( id)=>{
    try{
       const respuesta = await fetch(URL_producto + '/' + id,{
        method:"DELETE",
       
       });

     return respuesta;

    }catch(error){
        console.log(error)
    }
}

export const obtenerTarea = async (id)=>{
    try{
     const respuesta = fetch(URL_producto + '/' + id);
     const tarea = await respuesta.json();
     return tarea ;
    }catch{
        console.log(error)
    }
}