var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
     console.log(xhttp.responseText);
  }
};

/**
 * Method Type
 * Url
 * asycn
 */
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
