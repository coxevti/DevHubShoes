import { put, all, select, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addTocart({ member }) {
  const memberExist = yield select((state) =>
    state.cart.find((m) => m.id === member.id),
  );
  const currentAmount = memberExist ? memberExist.amount : 0;
  const amount = currentAmount + 1;
  if (memberExist) {
    const { id } = memberExist;
    yield put(updateAmountSuccess(id, amount));
  } else {
    yield put(addToCartSuccess({ ...member, amount: 1 }));
  }
}

function* updateAmount({ id, amount }) {
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addTocart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
