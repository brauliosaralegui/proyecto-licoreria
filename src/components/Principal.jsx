
import { collection, getDocs,getFirestore } from "firebase/firestore"
import { useEffect } from "react"
import Producto from "./Producto"

function Principal() {

  useEffect(() => {
    const db=getFirestore();
    const itemCollection = collection (db,"mercaderia")
    getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>console.log(docu.data())))


  },[])

  return (
    <div>

        <h2>Principal</h2>
        <Producto/>
    </div>


  )
}

export default Principal
