import react from "react";
import { Form,Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import  {setuser }  from "../actions/action";
import { requestadduser } from "../thunks/userregister";

const Registration = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.registrationreducer.userregister)
    const token  =useSelector(state=>state.registrationreducer.token)
    const {email,password}=user;
   
    const onInputChange = e => {
      dispatch(setuser(  {...user,[e.target.name]: e.target.value }));
    };
    const onSubmit = e => {
      e.preventDefault();
      dispatch(requestadduser(user)) 
      e.target.reset();   
    };
    const funktoken=()=>{
        localStorage.setItem('token',JSON.stringify(token))
        const acesstoken = JSON.parse(localStorage.getItem('token')||'[]')
        const final = localStorage.setItem('token',JSON.stringify(acesstoken))
        console.log(final)
       }
       funktoken()
    


    return (
        <>
          <div  className="container" >
            <Form className="container" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' value={email} onChange={e=>onInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={password} onChange={e=>onInputChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Rgister
                </Button><hr/>
            </Form>
          </div>
        </>
    )
};
export default Registration;

