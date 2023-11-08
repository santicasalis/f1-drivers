export function validateInput(form) {
  let errors = {};

  if (form.name.length == 0) {
    errors.name = "The name cannot be empty";
  }
  if (!/^[a-zA-Z\s]+$/u.test(form.name)) {
    errors.name = " The name cannot have special characters or numbers";
  }

  if (form.name.length > 20) {
    errors.name = "The name cannot contain more than 20 characters.";
  }
  if (form.nationality.length >= 1) {
    if (!form.lastname) {
      errors.lastname = "The surname cannot be empty";
    }
    if (!/^[a-zA-Z\s]+$/u.test(form.lastname)) {
      errors.lastname =
        " The surname cannot have special characters or numbers";
    }
    if (form.lastname.length > 20) {
      errors.lastname = "The surname cannot contain more than 20 characters.";
    }
  }

  if (form.nationality.length >= 1) {
    if (!form.nationality) {
      errors.nationality = "The nationality cannot be empty";
    }
    if (!/^[a-zA-Z]+$/u.test(form.nationality)) {
      errors.nationality =
        "the nationality may not contain spaces, special characters or numbers";
    }
  }

  if (form.image.length >= 1) {
    if (
      !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|www\.[^\s/$.?#].[^\s]*\.com$\.(jpg|jpeg)$/.test(
        form.image
      )
    ) {
      errors.image = "must be a url ending in .jpg  or .jpeg";
    }
  }

  if (form.description.length >= 1) {
    if (form.description.length < 20) {
      errors.description = "the description must be longer than 20 characters";
    }
  }
  if (!form.teams.length) {
    errors.teams = "you must select at least one team";
  }

  if (form.dob.length >= 1) {
    if (
      !/^(?:202[0-2]|20[0-1]\d|19\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(
        form.dob
      )
    ) {
      errors.dob = "Incorrect date format: YYYY-MM-DD";
    }
  }
  return errors;
}
