import React, { useState, useEffect } from "react";
import './Api.css'

function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://lionsdistrict324d.com/wp-json/custom-api/v1/login"
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="api">
      {data ? (
        <pre>{JSON.stringify(data)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Api;

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//  <pre>{JSON.stringify(data, null, 2)}</pre>
