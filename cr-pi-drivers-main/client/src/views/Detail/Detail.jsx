/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriver } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDriver(id));
  }, [id]);
  const driver = useSelector((state) => state.driver);

  return (
    <>
      <h1>{driver.name}</h1>
    </>
  );
};

export default Detail;
