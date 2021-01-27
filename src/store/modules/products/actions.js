export function createRequest(data) {
  return {
    type: '@products/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(item) {
  return {
    type: '@products/CREATE_SUCCESS',
    payload: { item },
  };
}

export function createFailure() {
  return {
    type: '@products/CREATE_FAILURE',
  };
}