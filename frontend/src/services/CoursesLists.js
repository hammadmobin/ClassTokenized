import React from 'react';
import axios from 'axios';
import Course from '../components/Course';
import MediaCard from'../components/Shared/CardComponent'
import { toast } from 'react-toastify';

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.response.use(undefined, error => {
    
  // catch some server errors
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network error - make sure API works');
  }

  const { status } = error.response;

  if (status === 404) {
    toast.error('Client error - not found!');
  }

  if (status === 500) {
    toast.error('Server error - check the terminal for more info!');
  }

  throw error.response;
});

const responseBody = (response) => response.data;

// const Contract = {
//   tokenBalance: (address) => axios.get(`/contract/token-balance/${address}`).then(responseBody),
// }

const File = {
  list: () => axios.get(`/courses`).then(responseBody),
  details: (id) => axios.get(`/courses/${id}`).then(responseBody),
}

export default {
  File
}
