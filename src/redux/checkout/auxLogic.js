export const decrementItemLogic = (checkoutCollection, id) => {
  const existingItem = checkoutCollection.find((item) => item.id === id);
  if (existingItem.quantity === 1)
    return checkoutCollection.filter((item) => item.id !== id);
  else
    return checkoutCollection.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
};

export const incrementItemLogic = (checkoutCollection, id) => {
  return checkoutCollection.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const addItemLogic = (checkoutCollection, itemToAdd) => {
  const existingItem = checkoutCollection.find(
    (item) => item.id === itemToAdd.id
  );
  if (existingItem) {
    return incrementItemLogic(checkoutCollection, itemToAdd.id);
  } else {
    return [...checkoutCollection, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItemLogic = (checkoutCollection, id) => {
  return checkoutCollection.filter((item) => item.id !== id);
};
