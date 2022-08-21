export const updateLocalNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const getLocalNotes = () => {
  return JSON.parse(localStorage.getItem("notes"));
};
