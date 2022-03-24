import { loadingViewRef } from '@/components/LoadingView/LoadingView';
import { strings } from '@/localization';
import { headers, parentUrl } from '@/networking/config';
import { isNull } from '@/utils/helper';
import apisauce from 'apisauce';
import { call, put } from 'redux-saga/effects';

export const apiConfig = () =>
  apisauce.create({
    baseURL: parentUrl,
    timeout: 10000,
    headers,
  });

export function* apiCall(api, payload, onSuccess, onFailure) {
  const response = yield call(api, payload);

  yield* handleResponse(response, (data) => onSuccess(data), onFailure);
}

export function* handleResponse(response, onSuccess, onFailure) {
  loadingViewRef.current.hide();

  if (response?.status >= 200 && response?.status < 300) {
    yield put(onSuccess(response.data));
  } else {
    const error = yield call(getError, response);

    yield put(onFailure(error));
  }
}

export function* handleErrorResponse(response, failureAction) {
  loadingViewRef.current.hide();

  const error = yield call(getError, response);

  yield put(failureAction(error));
}

export function getError(response) {
  if (response?.problem === 'CLIENT_ERROR') {
    return handleClientError(response);
  }

  if (response?.problem === 'NETWORK_ERROR') {
    return getErrorMessage(response, strings.common.serverError);
  }

  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return getErrorMessage(response, strings.common.serverError);
  }

  return strings.common.somethingWentWrong;
}

export const handleClientError = (response) => {
  return getErrorMessage(response, strings.common.somethingWentWrong);
};

export const getErrorMessage = (response, defaultError) => {
  let errorMessage;

  if (!isNull(response.data?.message)) {
    errorMessage = response.data?.message;
  } else if (!isNull(response.data?.error_description)) {
    errorMessage = response.data?.error_description;
  } else if (!isNull(response.data?.error)) {
    errorMessage = response.data?.error;
  } else {
    errorMessage = defaultError;
  }

  return errorMessage;
};
