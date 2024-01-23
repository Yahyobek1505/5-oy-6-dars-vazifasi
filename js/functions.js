function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

function validation(data) {
  if (!data.Inputname.value) {
    alert("Name is empty!");
    data.Inputname.focus();
    return false;
  }
  if (data.Inputname.value.trim().length < 3) {
    alert("Name length must be more than 3 character!");
    data.Inputname.focus();
    return false;
  }
  if (!data.inputNarx.value) {
    alert("Cost is empty!");
    data.inputNarx.focus();
    return false;
  }
  if (data.inputNarx.value < 500) {
    alert("Cost is empty!");
    data.inputNarx.focus();
    return false;
  }
  if (!Number(data.inputNarx.value)) {
    alert("Cost must be number!");
    data.inputNarx.focus();
    return false;
  }
  if (!data.inputCategory.value) {
    alert("Category is empty!");
    data.inputCategory.focus();
    return false;
  }
  if (!data.img.value) {
    alert("img is empty!");
    data.img.focus();
    return false;
  }
  if (!isValidUrl(data.img.value)) {
    alert("Rasm noto'g'ri kiritildi!");
    data.img.focus();
    return false;
  }
  if (!data.color.value) {
    alert("color is empty!");
    data.color.focus();
    return false;
  }
  return true;
}

export {validation}
