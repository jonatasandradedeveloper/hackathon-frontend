export function createRequest(data) {
  return {
    type: '@categories/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(category) {
  return {
    type: '@categories/CREATE_SUCCESS',
    payload: { category },
  };
}

export function createFailure() {
  return {
    type: '@categories/CREATE_FAILURE',
  };
}