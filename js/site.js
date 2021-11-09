// global variable
var data;
// $.getJSON('js/books.json', function(data) {
//   // loop through all books
//   data.books.forEach(function(b) {
//     // now you can put every book in your <div>
//     $("#productList").append(`<div class='col-md-3 feature_grid1'><img src='./images/${b.imageName}.jpeg' alt='1' style='width:300px; height:300px;'/><h3><a href='#'>Legimusinm</a></h3><p>${b.title}</p><p></p>${b.author}</p><p>${b.description}</p><a href='#' class='feature_btn'>More</a> </div>`);
//   });
// });

var jqxhr = $.getJSON("js/books.json", function () {
  console.log("success");
})
  .done(function (data) {
    console.log(data);
    // loop through all books
    data.books.forEach(function (b) {
      // now you can put every book in your <div>
      //$("#productList").append(`<div class='col-md-3 feature_grid1 productimage'><img src='./images/${b.imageName}.jpeg' alt='1' class="productimage"/><h3><a href='#'>Legimusinm</a></h3><p>${b.title}</p><p></p>${b.author}</p><p>${b.description}</p><a href='#' class='feature_btn'>More</a> </div>`);
      $("#productList").append(`<div class='col-md-4 feature_grid1 productimage'><img src='./images/${b.imageName}.jpeg' alt='1'/><p>${b.title}</p><p></p>${b.author}</p><p>${b.description}</p><a href='#' class='feature_btn'>More</a> </div>`);
    });
    console.log("second success");
  })
  .fail(function () {
    console.log("error");
  })
  .always(function () {
    console.log("complete");
  });