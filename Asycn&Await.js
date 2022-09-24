let getData = async (id) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  let data = await response.json();
  return data;
};

getData(1)
  .then((data) => {
    console.log(data);
    return getData(2);
  })
  .then((data2) => {
    console.log(data2);
  });
