async function getChefBirthday(id) {
  let ricetta;
  try {
    const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    ricetta = await ricettaResponse.json();
    //   console.log("Ricetta", ricetta);
  } catch (error) {
    throw new Error(`Non recupero la ricetta id ${id}`);
  }
  if (!ricetta) {
    throw new Error(`Ricetta id ${id} non trovata`);
  }
  let user;
  try {
    const userId = ricetta.userId;
    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    user = await userResponse.json();
    //   console.log("User :", user);
  } catch (error) {
    throw new Error(`Non recupero lo user id ${userId}`);
  }
  if (!user) {
    throw new Error(`User id ${userId} non trovato`);
  }
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
