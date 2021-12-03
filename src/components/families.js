import react from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestfamilies } from "../thunks/allthunk";
const Families = () => {
  const families = useSelector((state) => state.familiesreducer.families);
  const dispatch = useDispatch();
  console.log(families);
  useEffect(() => {
    dispatch(requestfamilies());
  }, []);
  return (
    <>
      <div>
        <li>
          {families.map((el) => (
            <p>{el.name}</p>
          ))}
        </li>
      </div>
    </>
  );
};
export default Families;
