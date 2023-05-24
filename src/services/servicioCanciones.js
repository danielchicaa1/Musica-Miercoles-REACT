export async function consultarCanciones() {

      //RECETA PARA CONSUMIR APIS CON JS

      //1. PARA DONDE VAS ?
      //URL + EP DEL SERVICIO
      const IDARTISTA = "7okwEbXzyT2VffBmyQBWLz"
      const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
      const TOKEN = "Bearer BQBrFpv9V8Car9JGVWqxzCGQpoU1RvMFcQIYw4pX0zhIrIa7ifcxDh6DzPTZz7Lmz6eAOYJF7BmckDSYAgYsp-ydihr3ePlr7EXMjZHHJOcrdjKclk8"

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