import { collection, getDocs,getFirestore } from "firebase/firestore"
import { useEffect } from "react"



function ListadoItems() {

  useEffect(() => {
    const db=getFirestore();
    const itemCollection = collection (db,"mercaderia")
    getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>console.log(docu.data())))


  },[])


  return (
    <div>
        <h2>Listado</h2>

    </div>
  )
}

export default ListadoItems
