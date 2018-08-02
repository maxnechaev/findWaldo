var arr = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var waldoIndex = arr.indexOf("Waldo");
      console.log("Found Waldo at index " + waldoIndex + "!");
      found(waldoIndex); // execute callback
    }
  }
}

function actionWhenFound() {
  var waldoIndex = arr.indexOf("Waldo");

}

findWaldo(arr, actionWhenFound);
