// name: "",
// surname: "",
// nationality: "",
// dob: "",
// teams: "",
// image: "",
// description: "",

export function validateInput(form) {
  let errors = {};

  if (!form.name) {
    errors.name = "The name cannot be empty";
  }
  if (!/^[a-zA-Z\s]+$/u.test(form.name)) {
    errors.name = " The name cannot have special characters or numbers";
  }

  if (form.name.length > 20) {
    errors.name = "The name cannot contain more than 20 characters.";
  }
  if (!form.surname) {
    errors.surname = "The surname cannot be empty";
  }
  if (!/^[a-zA-Z\s]+$/u.test(form.surname)) {
    errors.surname = " The surname cannot have special characters or numbers";
  }

  if (form.surname.length > 20) {
    errors.surname = "The surname cannot contain more than 20 characters.";
  }
  if (!form.nationality) {
    errors.nationality = "The nationality cannot be empty";
  }
  if (!/^[a-zA-Z]+$/u.test(form.nationality)) {
    errors.nationality =
      "the nationality may not contain spaces, special characters or numbers";
  }

  if (!form.image) {
    errors.image = "the image cannot be empty";
  }
  if (
    !/^(https?|www):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(form.image)
  ) {
    errors.image = "the image must be a url";
  }

  if (form.description.length < 20) {
    errors.description = "the description must be longer than 20 characters";
  }

  if (!form.teams) {
    errors.teams = "the teams cannot be empty";
  }
  if (!/^[a-zA-Z\s]+$/u.test(form.teams)) {
    errors.teams = " The teams cannot have special characters or numbers";
  }
}
