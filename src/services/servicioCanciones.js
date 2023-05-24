export async function consultarCanciones() {

      //RECETA PARA CONSUMIR APIS CON JS

      //1. PARA DONDE VAS ?
      //URL + EP DEL SERVICIO
      const IDARTISTA = "7okwEbXzyT2VffBmyQBWLz"
      const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
      const TOKEN = "Bearer BQDMF6i3b935iJgqTifjC8Mn4wY5sxSL7I5PNqXJR7DXgJwyTMvbyN-se31_LRxN5knerpb3-G6lGibO-PKHS2D-hfFsF1qAcO5kntF_PK1pb0Jo3pU"

      //2. QUE VAS A HACER ALLA OME..
      //CONFIGURO LA PETICION
      let peticion = {
            method: "GET",
            headers: {
                  "Authorization": TOKEN
            }
      }

      //3. PIDA EL TAXI
      //utilice la promesa FETCH para ir al back y consumir API
      let respuesta=await fetch(URI,peticion)
      let canciones=await respuesta.json()
      return canciones
}