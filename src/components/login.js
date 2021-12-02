import react from "react";
import { Form,Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { userlogin } from "../actions/action";
import { requestlogin } from "../thunks/loginthunk";

const Userlogin = () => {
    const login = useSelector(state => state.loginreducer.userlogin)
    const dispatch = useDispatch();
    const {email,password} = login;
    const onInputChange = e => {
      dispatch(userlogin(  {...login,[e.target.name]: e.target.value }));
    };
    const onSubmit = e => {
      
      e.preventDefault(); 
      dispatch(requestlogin(login))
    
    };

    return (
        <>
          <div  className="container" >
            <Form className="container" onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='email' value={email} onChange={e=>onInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={password} onChange={e=>onInputChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    login
                </Button>
            </Form>
          </div>
        </>
    )
};
export default Userlogin;
