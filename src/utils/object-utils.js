export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

export const deleteItem = (id, arrOfObj) => {
  arrOfObj.splice(
    arrOfObj.findIndex((item) => item.id === id),
    1
  );
};
