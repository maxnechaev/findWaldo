var arr = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {
  arr.forEach(function(name) {
    if (name === "Waldo") {
      var waldoIndex = arr.indexOf("Waldo");
      console.log("Found Waldo at index " + waldoIndex + "!");
    }
    found(waldoIndex); // execute callback
  })
}

function actionWhenFound() {
  var waldoIndex = arr.indexOf("Waldo");

}

findWaldo(arr, actionWhenFound);
