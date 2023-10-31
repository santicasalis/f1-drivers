import { useState } from "react";
import axios from "axios";
import style from "../Form/form.module.css";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    nationality: "",
    dob: "",
    teams: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    nationality: "",
    dob: "",
    teams: "",
    image: "",
    description: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:3001/drivers", form)

      .then((res) => alert(res))
      // .then(
      //   setForm({
      //     name: "",
      //     surname: "",
      //     nationality: "",
      //     dob: "",
      //     teams: "",
      //     image: "",
      //   })
      .catch((error) => console.log(error));
  };

  const validate = (form) => {
    if (form.name != 5) {
      setErrors({ ...errors, name: "" });
    } else {
      setErrors({ ...errors, name: "hay un error" });
    }
    if (form.name === "") setErrors({ ...errors, name: "name empty" });
  };

  return (
    <>
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              value={form.surname}
              onChange={changeHandler}
              name="surname"
            />
          </div>
          <div>
            <label htmlFor="">Nationality</label>
            <input
              type="text"
              value={form.nationality}
              onChange={changeHandler}
              name="nationality"
            />
          </div>
          <div>
            <label htmlFor="">Day of birth</label>
            <input
              type="text"
              value={form.dob}
              onChange={changeHandler}
              name="dob"
            />
          </div>
          <div>
            <label htmlFor="">Teams</label>
            <input
              type="text"
              value={form.teams}
              onChange={changeHandler}
              name="teams"
            />
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
            />
          </div>
          <div>
            <label htmlFor="">description</label>
            <input
              type="text"
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
