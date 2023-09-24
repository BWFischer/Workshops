/*
        Both methods can be used to handle click events, 
        .click() is simpler and suitable for handling events on existing elements, whereas 
        .on() is more versatile, allows event delegation, 
        and is better for handling events on dynamically added elements. 
        Depending on your specific needs and performance considerations, you may choose one over the other.
      */

// Pesticide, https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi

function startUp() {
  wireUpHandlers();
}

function wireUpHandlers() {
  // click events
  $("li").click(listItemHandler);
  $(".targetDiv").click(demoDivHandler);
  $("#btnClick").click(btnClickHandler);
  // .on("click") handlers
  $("#addDynamic").on("click", addDynamicHandler);
  $(".para").on("mouseover mouseout", paraHandler);

  $(".container-that-holds-stuff").on("click", ".item", changeCardColor);
}

var listItemHandler = function () {
  console.log("The Paragraph Element <p> was Clicked");
};

var demoDivHandler = function () {
  console.log("demoDivHandler was Clicked");
};

var btnClickHandler = function () {
  console.log("btnClickHandler was Clicked");
  alert("Button with ID btnClick was Clicked");
};

var addDynamicHandler = function () {
  console.log("addDynamicHandler was Clicked");
  $(".targetDiv").html(`<button class="btn btn-danger">Changed!</button> <h4 class="headerFour">This is now a dynamically changed button and paragraph.</h4>`);
};

var paraHandler = function () {
  console.log("paraHandler was Clicked");
};

var changeCardColor = function () {
  $(this).closest(".card").toggleClass("colorChange");
  console.log("changeCardColor clicked");
};
