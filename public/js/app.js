//This is the get articles event that builds the article list when the page loads. 
//This is not my first choice but I've spent too much time on this assignment now. 
// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});
//NOTE!!!: These are the various on-click events I couldn't get to work with handlebars!

//1. Handle Scrape button

// $("#scrape").on("click", function() {
//     $.ajax({
//         method: "GET",
//         url: "/scrape",
//     }).done(function(data) {
//         console.log(data)
//         window.location = "/"
//     })
// });

// //2. Set clicked nav option to active

// $(".navbar-nav li").click(function() {
//   $(".navbar-nav li").removeClass("active");
//   $(this).addClass("active");
// });

// //3. Handle Save Article button

// $(".save").on("click", function() {
//   var thisId = $(this).attr("data-id");
//   $.ajax({
//       method: "POST",
//       url: "/articles/save/" + thisId
//   }).done(function(data) {
//       window.location = "/"
//   })
// });


// //4. Handle Delete Article button

// $(".delete").on("click", function() {
//   var thisId = $(this).attr("data-id");
//   $.ajax({
//       method: "POST",
//       url: "/articles/delete/" + thisId
//   }).done(function(data) {
//       window.location = "/saved"
//   })
// });


// //5. Handle Save Note button

// $(".saveNote").on("click", function() {
//   var thisId = $(this).attr("data-id");
//   if (!$("#noteText" + thisId).val()) {
//       alert("please enter a note to save")
//   }else {
//     $.ajax({
//           method: "POST",
//           url: "/notes/save/" + thisId,
//           data: {
//             text: $("#noteText" + thisId).val()
//           }
//         }).done(function(data) {
//             // Log the response
//             console.log(data);
//             // Empty the notes section
//             $("#noteText" + thisId).val("");
//             $(".modalNote").modal("hide");
//             window.location = "/saved"
//         });
//   }
// });


// //6. Handle Delete Note button

// $(".deleteNote").on("click", function() {
//   var noteId = $(this).attr("data-note-id");
//   var articleId = $(this).attr("data-article-id");
//   $.ajax({
//       method: "DELETE",
//       url: "/notes/delete/" + noteId + "/" + articleId
//   }).done(function(data) {
//       console.log(data)
//       $(".modalNote").modal("hide");
//       window.location = "/saved"
//   })
// });




