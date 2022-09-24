//Promise example
let promiseExample = () => {
  return new Promise((resolve, reject) => {
    //resolve(`Get some data`)
    reject(`Something wrong`);
  });
};

// promiseExample()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// CallBaclk => Promise

let getData = (id) => {
  let request = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = request.responseText;
        resolve(data);
      }
      if (this.onreadystatechange == 4 && this.status != 200) {
        reject(`Can't get data from server`);
      }
    };

    request.open(
      "GET",
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      true
    );
    request.send();
  });
};

getData(1)
  .then((data) => {
    console.log(data);
    return getData(2);// chaining promises replace callback hell 
  })
  .then((data2) => { // Channing promises
    console.log(data2);
  })
  .catch((error) => {
    console.log(error);
  });
