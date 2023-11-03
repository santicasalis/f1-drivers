/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriver } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import style from "../Detail/detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDriver(id));
  }, [id]);
  const driver = useSelector((state) => state.driver);

  return (
    <>
      <div className={style.detailContainer}>
        <h2>
          {driver.name} {driver.lastname}
        </h2>
        <div className={style.detailContainerData}>
          <img src={driver.image} alt={driver.name} />
          <div className={style.detailData}>
            <div>Nacionality: {driver.nationality}</div>
            <div> Day of Birth : {driver.dob}</div>
            <div>Teams : {driver.teams}</div>

            <div> Description: {driver.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
