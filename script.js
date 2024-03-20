$(function () {
    $(document).on("click", ".saveBtn", function () {
      var userInput = $(this).siblings(".description").val();
      var timeBlockId = $(this).closest(".time-block").attr("id");
      localStorage.setItem(timeBlockId, userInput);
    });
  
    function updateHourlyBlocks() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past").removeClass("present future");
        } else if (blockHour === currentHour) {
          $(this).addClass("present").removeClass("past future");
        } else {
          $(this).addClass("future").removeClass("past present");
        }
      });
    }
  
    updateHourlyBlocks();
  
    function displaySavedInput() {
      $(".time-block").each(function () {
        var blockId = $(this).attr("id");
        var userInput = localStorage.getItem(blockId);
        $(this).find(".description").val(userInput);
      });
    }
  
    displaySavedInput();
  
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
    $("#clearData").on("click", function () {
      localStorage.clear();
      location.reload();
    });
  });
  