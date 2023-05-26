import { consultarCanciones } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
import { ObtenerToken } from "../services/servicioCanciones"
export function Music(){

      const [canciones,setCanciones] = useState(null)
      const[estacargando,setEstacargando]=useState(true)
      const[token,setToken]= useState(null)

      

      useEffect(function(){
            ObtenerToken().then(respuesta=>{
                  setToken(respuesta.access_token)
            })
      },[])


      useEffect(function(){
            if(token){
                  consultarCanciones(token).then(function(respuesta){
                        console.log(respuesta);
                        setCanciones(respuesta.tracks);
                        setEstacargando(false)
                  })
            }
            
      },[token]);

      if (estacargando){
            return(
                  <>
                  <h1>ESTA CARGANDO EL CONTENIDO</h1>
                  </>
            )
            
      }else{
            return(
                  <>
                  {
                        canciones.map(function(cancion){
                              return(
                                    <div className="tamaño" style={{
                                          backgroundImage:`url("${cancion.album.images[0].url}")`,
                                          backgroundRepeat:"no-repeat"
                                    }}>
                                    <audio controls src={cancion.preview_url}></audio>
                                    <h1>{ cancion.popularity} </h1>
                                    </div>
                              )
                        })
                  }
                  </>
            )
      }

      
}