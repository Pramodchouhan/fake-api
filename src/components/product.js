import react from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestproduct } from "../thunks/allthunk";
const Product=()=>{
    const product = useSelector(state=>state.productreducer.product)
    const dispatch = useDispatch()
    console.log(product)
    useEffect(() => {
        dispatch(requestproduct())
    }, [])
    return(
       <>
        <div>
            <li>
                {product.map(el=>(
                    <p>{el.name}</p>
                ))}
            </li>
        </div>
       </>
   )   
}
export default Product;