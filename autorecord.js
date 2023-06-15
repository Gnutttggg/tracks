audioPlayer.addEventListener("play", function () {
  if (autoRecordCheckbox.checked) {
    startAutoRecording();
  }
});

function startAutoRecording() {
  let chunks = [];
  
  
  toggleRecording();


}

// Function to show the custom notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(function() {
    notification.remove();
  }, 2000); // Delay for the notification to be displayed

  // Apply custom CSS styles to the notification
  notification.style.backgroundColor = "black";
notification.style.fontSize = "26px";
notification.style.fontWeight = "bold";
notification.style.fontStyle = "italic";
  notification.style.color = "#1E90FF";
  notification.style.padding = "45px";
  notification.style.position = "fixed";
  notification.style.top = "20%";
  notification.style.left = "50%";
  notification.style.transform = "translate(-50%, -50%)";
  notification.style.zIndex = "9999";
}

const threshold = 120; // Adjust the threshold value as needed

window.addEventListener("scroll", function() {
  const showStarredContainer = starredOverlay.querySelector(".show-starred-container");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > threshold) {
    // Change the position to fixed
    starredOverlay.style.position = "fixed";


    starredOverlay.style.top = "4px"; // Adjust the top value as needed
  } else {
    // Change the position back to absolute
    starredOverlay.style.position = "absolute";


    starredOverlay.style.top = "155px"; // Adjust the top value as needed
  }
});





let textBox = null;

bookmarkDemoButton.addEventListener("mouseover", function() {
  textBox = document.createElement("div");
  textBox.textContent = "Play from bookmarked position";
  textBox.classList.add("tooltip");

  setTimeout(function() {
    bookmarkDemoButton.appendChild(textBox);
  }, 500);
});

bookmarkDemoButton.addEventListener("mouseout", function() {
  if (textBox) {
    textBox.remove();
    textBox = null;
  }
});

bookmarkDemoButton.addEventListener("click", function() {
  if (textBox) {
    textBox.remove();
    textBox = null;
  }
});


let bookmarkTextBox = null;

bookmarkButton.addEventListener("mouseover", function() {
  bookmarkTextBox = document.createElement("div");
  bookmarkTextBox.textContent = "Bookmark";
  bookmarkTextBox.classList.add("bookmarkTooltip");

  setTimeout(function() {
    bookmarkButton.appendChild(bookmarkTextBox);
  }, 500);
});

bookmarkButton.addEventListener("mouseout", function() {
  if (bookmarkTextBox) {
    bookmarkTextBox.remove();
    bookmarkTextBox = null;
  }
});

bookmarkButton.addEventListener("click", function() {
  if (bookmarkTextBox) {
    bookmarkTextBox.remove();
    bookmarkTextBox = null;
  }
});


let recordTextBox = null;

recordButtonOverlay.addEventListener("mouseover", function() {
  recordTextBox = document.createElement("div");
  recordTextBox.classList.add("recordTooltip");

  if (isRecording) {
    recordTextBox.textContent = "Stop recording";
  } else {
    recordTextBox.textContent = "Record";
  }

  setTimeout(function() {
    recordButtonOverlay.appendChild(recordTextBox);
  }, 500);
});

recordButtonOverlay.addEventListener("mouseout", function() {
  if (recordTextBox) {
    recordTextBox.remove();
    recordTextBox = null;
  }
});

recordButtonOverlay.addEventListener("click", function() {
  if (recordTextBox) {
    recordTextBox.remove();
    recordTextBox = null;
  }
});


const questionIcon = document.querySelector(".question-icon");


let questionTextBox = null;

questionIcon.addEventListener("mouseover", function() {
  questionTextBox = document.createElement("div");
  questionTextBox.textContent = "Pick the best options that describe the intro you're looking for.";
  questionTextBox.classList.add("questionTooltip");

  setTimeout(function() {
    questionIcon.appendChild(questionTextBox);
  }, 500);
});

questionIcon.addEventListener("mouseout", function() {
  if (questionTextBox) {
    questionTextBox.remove();
    questionTextBox = null;
  }
});

