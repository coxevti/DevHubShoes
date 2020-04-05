export function addToCartRequest(member) {
  return {
    type: '@cart/ADD_REQUEST',
    member,
  };
}

export function addToCartSuccess(members) {
  return {
    type: '@cart/ADD_SUCCESS',
    members,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
