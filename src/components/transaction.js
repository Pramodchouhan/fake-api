import react from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requesttransaction } from "../thunks/allthunk";

const Transaction = () => {
  const transaction = useSelector(
    (state) => state.transactionreducer.transaction
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requesttransaction());
  }, []);
  return (
    <>
      <div>
        <li>
          {transaction.map((el) => (
            <p>{el.name}</p>
          ))}
        </li>
      </div>
    </>
  );
};
export default Transaction;
