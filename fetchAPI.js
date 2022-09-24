//Like XMLHttpRequest
// Only method get

let getData = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(`Have error: ${error}`);
    });
};

getData(2);
