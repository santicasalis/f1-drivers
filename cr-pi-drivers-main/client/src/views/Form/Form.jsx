import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { validateInput } from "./validations";

import { getTeams } from "../../redux/actions/actions";

import style from "../Form/form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    lastname: "",
    nationality: "",
    dob: "",
    teams: [],
    image: "",
    description: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "teams") {
      setErrors(validateInput({ ...form, [property]: value }));
      setForm({ ...form, [property]: [...form.teams, value] });
    } else {
      setErrors(validateInput({ ...form, [property]: value }));
      setForm({ ...form, [property]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/drivers", form)

      .then(() => alert("Driver created"))

      .then(
        setForm({
          name: "",
          lastname: "",
          nationality: "",
          dob: "",
          teams: [],
          image: "",
          description: "",
        })
      )
      .catch((error) => alert(error.response.data.error));
  };
  const isFormValid = () => {
    let formValid = false;

    if (
      form.name === "" ||
      form.lastname === "" ||
      form.nationality === "" ||
      form.dob === "" ||
      !form.teams ||
      form.description === "" ||
      Object.keys(errors).length !== 0
    ) {
      formValid = true;
    }

    return !formValid;
  };

  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const deleteTeam = (teamName) => {
    const updatedTeams = form.teams.filter((team) => team !== teamName);
    setForm({ ...form, teams: updatedTeams });
  };
  return (
    <>
      <div className={style.formViewContainer}>
        <form className={style.formContainer} onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            <div className={style.errorMessage}>{errors?.name}</div>
          </div>

          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              value={form.lastname}
              onChange={changeHandler}
              name="lastname"
            />
            <div className={style.errorMessage}>{errors?.lastname}</div>
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              value={form.nationality}
              onChange={changeHandler}
              name="nationality"
            />
            <div className={style.errorMessage}>{errors?.nationality}</div>
          </div>
          <div>
            <label htmlFor="dob">Day of birth</label>
            <input
              type="text"
              value={form.dob}
              onChange={changeHandler}
              name="dob"
              placeholder="YYYY-MM-DD"
            />
            <div className={style.errorMessage}>{errors?.dob}</div>
          </div>
          <div>
            <label htmlFor="teams">Teams</label>
            <select name="teams" onChange={changeHandler} id="">
              {allTeams?.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>

            <div className={style.errorMessage}>{errors?.teams}</div>
            <div className={style.selectedTeams}>
              {form.teams?.map((team, index) => (
                <div key={index}>
                  {team}{" "}
                  <button
                    type="button"
                    onClick={() => deleteTeam(team)}
                    className={style.deleteButton}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
            />
            <div className={style.errorMessage}>{errors?.image}</div>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
            <div className={style.errorMessage}>{errors?.description}</div>
          </div>

          <button
            className={style.submitButton}
            type="submit"
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
