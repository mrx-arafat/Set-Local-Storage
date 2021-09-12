const addToLocalStorage = () => {
  const strorageID = document.getElementById("storage-id");
  const id = strorageID.value;

  const strorageValue = document.getElementById("storage-value");
  const value = strorageValue.value;

  // id && value ture .. if we put empty string it will be flase

  if (id && value) {
    localStorage.setItem(id, value);
  }

  strorageID.value = "";
  strorageValue.value = "";

  /// if we want to add an array then we will think about JSON stringify

  localStorage.setItem(
    "Arafat GF List",
    JSON.stringify(["Emma Watson", "Tasnim The Great", " Ivanka Trump"])
  );
};
