const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books").then((responseObj) => {
    console.log(responseObj);
    if (responseObj.ok) {
      return responseObj.json();
    }
  });
};
