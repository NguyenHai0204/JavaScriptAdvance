/** Call back can be understand as a funtion is a argument to another funtion */

let callback = (message, data) => {
  console.log(`${message}: ${data}`);
};

let showData = (callback) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = xhttp.responseText;
      callback("Data is", data);
    }
    if (this.readyState == 4 && this.status != 200) {
      callback("Something wrong", "Data undefine");
    }
  };

  /**
   * Method Type
   * Url
   * asycn
   */
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();
};

showData(callback);
