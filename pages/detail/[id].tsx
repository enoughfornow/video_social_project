import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../utils';

const Detail = () => {
  return <div></div>;
};

export const getServerSideProps = async({
  params: { id },
}) => {
  const {data} = await axios.get(`${BASE_URL}/api/post/${id}`)
}

export default Detail;
