import { useParams } from "react-router-dom"
import data from "./data.json"


console.log(data);
function ElectronProduct() {
//idlerimizi gotururk 
const {id} =useParams()

 const currentProduct= data.find(item=>item.id==id);
  return (
    <div>
      Electron Product {currentProduct.name} 
    </div>
  )
}

export default ElectronProduct
