import * as React from 'react';

function useFetch(url, dependancy) {
  const [data, setData] = React.useState([]);
  console.log(dependancy);
  React.useEffect(() => {
    if (dependancy.length === 0) {
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
    } else {
      setData(dependancy);
    }
  }, [url]);

  return data;
}

export default useFetch;
