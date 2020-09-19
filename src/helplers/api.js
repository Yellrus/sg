import fetch from 'isomorphic-fetch';

// Simple minimal, but recommend use axios with init Axios config
const handleServerResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(
    new Error({
      Code: response.status,
      Data: response.statusText,
    }),
  );
};

const handleDataReceived = (data) => {
  if (!data.success) {
    return Promise.reject(data);
  }
  return data;
};

export const postData = (url, data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleServerResponse)
    .then(handleDataReceived);
};

export const getData = (url, method = 'GET') => {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${url}`, requestOptions)
    .then(handleServerResponse)
    .then((data) => data);
};
