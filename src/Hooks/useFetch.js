import * as React from 'react';

function useFetch(url, condition) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (condition === true) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((resData) => setData(resData))
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, [url, condition]);

  return data;
}

export default useFetch;
