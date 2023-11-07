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
    if (!form.image) {
      errors.image = "the image cannot be empty";
    }
    if (
      !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|www\.[^\s/$.?#].[^\s]*\.com$/.test(
        form.image
      )
    ) {
      errors.image = "the image must be a url";
    }
  }

  if (form.description.length >= 1) {
    if (form.description.length < 20) {
      errors.description = "the description must be longer than 20 characters";
    }
  }
  if (form.teams.length >= 1) {
    if (!form.teams) {
      errors.teams = "the teams cannot be empty";
    }
    // if (!/^[a-zA-Z\s]+$/u.test(form.teams)) {
    //   errors.teams = " The teams cannot have special characters or numbers";
    // }
  }
  if (form.dob.length >= 1) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(form.dob)) {
      errors.dob = "Fecha invalida YYYY-MM-DD";
    }
  }
  return errors;
}
