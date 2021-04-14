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

// functionsList.push(() => {
//   insertNameArrowRightBubble("You", "Hi..", "tick");
// });
// functionsList.push(() => {
//   insertRightBubble("Who are you ?", "tick");
// });
// functionsList.push(() => {
//   insertNameArrowLeftBubble("Rahif", "Hi..", "coming");
// });
// functionsList.push(() => {
//   insertLeftBubble("Who are you ?", "coming");
// });

functionsList.push(() => {
  insertNameArrowRightBubble("You", "Hi..", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Muhammed Rahif", "Hello..", "coming");
});
functionsList.push(() => {
  insertNameArrowRightBubble("You", "What's you name ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Muhammed Rahif", "My name is Rahif!", "coming");
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "Rahif, that's nice... Unique name..!",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Muhammed Rahif", "Thanks...", "coming");
});
functionsList.push(() => {
  insertNameArrowRightBubble("You", "Where are you from ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Muhammed Rahif", "I am from India...", "coming");
});
functionsList.push(() => {
  insertNameArrowRightBubble("You", "Where in India ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble("Muhammed Rahif", "Kerala, Malappuram ", "coming");
});
functionsList.push(() => {
  insertNameArrowRightBubble("You", "Hm, what are you doing ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "I am a Software Developer",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble("You", "Good...How can you help me ?", "tick");
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "I am web developer... I will create websites for you... Static websites and dynamic websites... If ypu have a business or something like that to market, websites are really helpful for your business growth... It's a good option for marketing and advertising your stuffs",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "Yeah, I know... Actually I  have a business.. And I need a website... That's why I get i  touch with you...",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "You are now at the right destination",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "Okay, what is your creative skills and experiences ?",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "You know what, I am very intresing to know more about creative skills and experiences in programming field espesially in full stack develpoment. Now I am a student so I need to be know more and achieve experinence. To learn more I am researching around internet and solving errors and problems with using stackoverflow, w3school, github, etc. I am very intresting to get more experiences in this field.",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "Oh your are student? How old are you ?",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "Yeah, I am 16 years old now",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "That's cool but what do you know in web development ?",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "I know HTML, CSS, JavaScript, React, React-Native, Node.js, mongoDB and etc... And still learning...",
    "coming"
  );
});
functionsList.push(() => {
  insertLeftBubble(
    "That's why I say I am student...!",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "That's amazing... Is that true...? I don't believe...",
    "tick"
  );
});
functionsList.push(() => {
  insertRightBubble(
    "A 16 years old boy know react and node js ?",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "Yeah... It's all true...for proof check my projects that I have already done...",
    "coming"
  );
});
functionsList.push(() => {
  insertLeftBubble(
    "Also check my github, stackoverflow, fiverr accounts...",
    "coming"
  );
});
functionsList.push(() => {
  insertLeftBubble(
    "links here!",
    "coming"
  );
});
functionsList.push(() => {
  insertNameArrowRightBubble(
    "You",
    "Wow...",
    "tick"
  );
});
functionsList.push(() => {
  insertRightBubble(
    "How can I contact you?",
    "tick"
  );
});
functionsList.push(() => {
  insertNameArrowLeftBubble(
    "Muhammed Rahif",
    "To contact me I am giving my address and email down below. And thank you for visiting my website..!",
    "coming"
  );
});

// Run each functions
function runEachFunctions() {
  var x = 0;
  setInterval(() => {
    if (x === functionsList.length) {
      return;
    } else {
      functionsList[x]();
      x++;
      var objDiv = document.querySelector(".chat-area");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, 2500);
}

runEachFunctions();
