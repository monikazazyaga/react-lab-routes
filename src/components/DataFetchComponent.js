import React, { useState, useEffect } from 'react';

const DataFetchComponent = ({ userId }) => {
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
      const userDataResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      const postData = await postResponse.json();
      const userData = await userDataResponse.json();

      setPostData(postData);
      setUserData(userData);
      setLoading(false);
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!postData || !userData) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <h2>Title: {postData.title}</h2>
      <p>Body: {postData.body}</p>
      <p>User Name: {userData.name}</p>
      <p>User Email: {userData.email}</p>
    </div>
  );
};

export default DataFetchComponent;