let getData = async (id) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (response && response.status != 200) {
      throw new Error(`Have error with status ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
};

getData(1)
  .then((data) => {
    console.log(data);
    return getData("a");
  })
  .then((data2) => {
    console.log(data2);
  });
