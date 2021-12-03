import react from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestlocation } from "../thunks/allthunk";

const Location = () => {
  const location = useSelector((state) => state.locationreducer.location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestlocation());
  }, []);
  return (
    <>
      <div>
        <li>
          {location.map((el) => (
            <p>{el.name}</p>
          ))}
        </li>
      </div>
    </>
  );
};
export default Location;
