export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export const updateAddress = (address) => ({
 type: UPDATE_ADDRESS,
 payload: address,
});

export const updateAmount = (amount) => ({
 type: UPDATE_AMOUNT,
 payload: amount,
});