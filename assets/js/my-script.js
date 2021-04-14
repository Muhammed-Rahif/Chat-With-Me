// Bubbles
var nameArrowLeftBubble = (name, time, msg) => {
  return `
    <div class="msg">
    <div class="bubble">
        <div class="txt">
            <span class="name">${name}</span>
            <span class="timestamp">${time}</span>
            <span class="message">
                ${msg}
            </span>

            </div>
            <div class="bubble-arrow"></div>
        </div>
    </div>
    `;
};
var leftBubble = (time, msg) => {
  return `
     <div class="msg">
     <div class="bubble follow">
           <div class="txt">
                 <span class="timestamp">${time}</span>
                 <span class="message follow">${msg}</span>
             </div>
         </div>
    </div>
      `;
};
var nameArrowRightBubble = (name, time, msg) => {
  return `
    <div class="msg">
    <div class="bubble alt">
        <div class="txt">
            <span class="name alt">${name}
            </span>
            <span class="timestamp">${time}</span>
            <p class="message">${msg}</p>
        </div>
        <div class="bubble-arrow alt"></div>
    </div>
</div>
      `;
};
var rightBubble = (time, msg) => {
  return `
    <div class="msg">
    <div class="bubble altfollow">
        <div class="txt">
            <span class="timestamp">${time}</span>
            <p class="message follow">
                ${msg}
            </p>
        </div>
    </div>
</div>
        `;
};

// Defined functions
function insertNameArrowLeftBubble(name, msg, audio) {
  let time = moment().format("LT");
  var chatSection = $("#chat-section");
  chatSection.append(nameArrowLeftBubble(name, time, msg));
  if (audio) {
    playAudio(audio);
  } else {
    return;
  }
}
function insertLeftBubble(msg, audio) {
  let time = moment().format("LT");
  var chatSection = $("#chat-section");
  chatSection.append(leftBubble(time, msg));
  if (audio) {
    playAudio(audio);
  } else {
    return;
  }
}
function insertNameArrowRightBubble(name, msg, audio) {
  let time = moment().format("LT");
  var chatSection = $("#chat-section");
  chatSection.append(nameArrowRightBubble(name, time, msg));
  if (audio) {
    playAudio(audio);
  } else {
    return;
  }
}
function insertRightBubble(msg, audio) {
  let time = moment().format("LT");
  var chatSection = $("#chat-section");
  chatSection.append(rightBubble(time, msg));
  if (audio) {
    playAudio(audio);
  } else {
    return;
  }
}

// Play audio by ID
function playAudio(txt) {
  document.getElementById(txt).play();
}

// Function calls
var functionsList = new Array();

functionsList.push(() => {
  insertNameArrowRightBubble("You", "Hi..", "tick");
});
functionsList.push(() => {
  insertRightBubble("Who are you ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Rahif", "Hi..", "coming");
});
functionsList.push(() => {
  insertLeftBubble("Who are you ?", "coming");
});

function runEachFunctions() {
  var x = 0;
  setInterval(() => {
    if (x === functionsList.length) {
      return;
    } else {
      console.log(functionsList[x]);
      functionsList[x]();
      x++;
    }
  }, 2500);
}

runEachFunctions();
