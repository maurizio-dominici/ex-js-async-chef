async function getChefBirthday(id) {
  const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await ricettaResponse.json();
  //   console.log("Ricetta", ricetta);
  const userId = ricetta.userId;
  const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await userResponse.json();
  //   console.log("User :", user);
  const birthDate = user.birthDate;
  return birthDate;
}

(async () => {
  try {
    const birthDate = await getChefBirthday(1);
    console.log("Chef birth date :", birthDate);
  } catch (error) {
    console.error("Errore: ", error.message);
  } finally {
    console.log("Fine codice");
  }
})();
