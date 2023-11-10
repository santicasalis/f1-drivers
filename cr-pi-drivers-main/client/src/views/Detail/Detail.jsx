/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { cleanDriverDetail, getDriver } from "../../redux/actions/actions";

import style from "../Detail/detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const driver = useSelector((state) => state.driver);
  useEffect(() => {
    dispatch(getDriver(id));

    return () => dispatch(cleanDriverDetail());
  }, [id]);

  return (
    <>
      <div className={style.detailContainer}>
        {" "}
        <>
          <h2>
            {driver.name} {driver.lastname}
          </h2>
          <div className={style.detailContainerData}>
            <img src={driver.image} alt={driver.name} />
            <div className={style.detailData}>
              <div className={style.infoExtra}>
                <div> Nationality:</div>
                <div> {driver.nationality}</div>
              </div>
              <div className={style.infoExtra}>
                <div> Day of Birth :</div>
                <div>{driver.dob}</div>
              </div>
              <div className={style.infoExtra}>
                <div>Teams :</div>
                <ul className={style.teamList}>
                  {driver.Teams?.map((team) => (
                    <li key={team.id}>{team.name}</li>
                  ))}
                  {driver.teams?.split(",").map((team) => (
                    <li key={team}>{team}</li>
                  ))}
                </ul>
              </div>

              <div className={style.infoExtra}>
                <div> Description:</div>
                <div>{driver.description}</div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Detail;
