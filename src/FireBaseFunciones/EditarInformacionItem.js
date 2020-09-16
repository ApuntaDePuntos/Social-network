const db = firebase.firestore();

export const editarInfoItem = async () => {
    let id = localStorage.getItem('itemId')
    
      const docRef = db.collection("objetos").doc(id);
    
      return docRef.get().then(function(doc) {
    
        if (doc.exists) {
            console.log("Document data:", doc.data());
    
            const infoCadaObjeto = doc.data();
    
            let viewItem = `
            <section class = 'objetoE' id= '${id}'>
            <div class='botonesE'>
            <img src="./Imagenes/pruebaImagen.jpg" class='imagenObjetoE'>
            </div>
            <div class='botonesE'>
            <img type = "button" src="./Imagenes/Garbage.svg" class="botonBasurero">
            <img type = "button" src="./Imagenes/Pencil.svg" class="botonEditar">
            </div>
            <p class='editarNombreObjeto'> ${infoCadaObjeto.nombreNuevoItem} </p>
            <p class='editarDescripcionObjeto'> ${infoCadaObjeto.descripcionNuevoItem}  </p>
            </section>
              
              `
                //ya esta la vista hay que pintarla 
                return viewItem
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
      let viewItem = ` <p> Error! objeto no encontrado </p> `
    return viewItem
    });
    }

