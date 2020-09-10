export const entrarItem = async (e, informacion) => {

        const indicator = e.informacion.id ;
    


 }



export const AbrirPorId = async () => {
    const querySnapshot = await obtenerObjetos();
    querySnapshot.forEach(doc => {
        const infoCadaObjeto = doc.data()
        const boton = document.getElementById(`${infoCadaObjeto.id}`);
        boton.addEventListener("click", (e) => entrarItem(e, infoCadaObjeto));
    })
}
