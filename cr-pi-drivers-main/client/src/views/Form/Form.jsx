import { useState } from "react";
import axios from "axios";
import { validateInput } from "./validations";
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

    setErrors(validateInput({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:3001/drivers", form)

      .then((res) => alert(res))

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
      .catch((error) => console.log(error));
  };
  const isFormValid = () => {
    const allFieldsAreFilled = Object.values(form).every(
      (field) => field !== ""
    );
    const noErrorsPresent = Object.values(errors).every((error) => !error);
    return noErrorsPresent && allFieldsAreFilled;
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
            <input
              type="text"
              value={form.teams}
              onChange={changeHandler}
              name="teams"
            />
            <div className={style.errorMessage}>{errors?.teams}</div>
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
            <label htmlFor="description">description</label>
            <textarea
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
            <div className={style.errorMessage}>{errors?.description}</div>
          </div>

          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
