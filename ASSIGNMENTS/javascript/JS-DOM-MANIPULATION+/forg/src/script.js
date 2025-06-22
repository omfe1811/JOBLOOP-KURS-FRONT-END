// Basic screen toggle and frog rendering logic
const homePage = document.getElementById("homePage");
const customizerPage = document.getElementById("customizerPage");
const finishedPage = document.getElementById("finishedPage");

const startButton = document.getElementById("startButton");
const previewBtn = document.getElementById("previewBtn");
const doneBtn = document.getElementById("doneBtn");
const finalName = document.getElementById("finalName");
const frogPreview = document.getElementById("frogPreview");
const frogPun = document.getElementById("frogPun");

startButton.addEventListener("click", () => {
  homePage.classList.remove("active");
  homePage.classList.add("hidden");
  customizerPage.classList.add("active");
});

doneBtn.addEventListener("click", () => {
  customizerPage.classList.remove("active");
  customizerPage.classList.add("hidden");
  finishedPage.classList.add("active");

  const name = document.getElementById("frogName").value || "Froggo";
  finalName.textContent = name;

  renderFrog();
  frogPun.textContent = getRandomPun();
});

previewBtn.addEventListener("click", renderFrog);

function renderFrog() {
  const colorPicker = document.getElementById("bodyColorPicker");
  const eyeColor = document.getElementById("eyeColor").value;
  const mouthType = document.getElementById("mouthType").value;

  const bodyStyle = document.querySelector("input[name='bodyStyle']:checked").value;
  const gradient = document.getElementById("bodyGradient").value;
  const flag = document.getElementById("flagOption").value;

  frogPreview.innerHTML = ""; // clear previous

  const body = document.createElement("div");
  body.style.width = "100%";
  body.style.height = "100%";
  body.style.borderRadius = "50%";
  body.style.position = "relative";

  if (bodyStyle === "color") {
    body.style.background = colorPicker.value;
  } else if (bodyStyle === "gradient") {
    const [c1, c2] = gradient.split(",");
    body.style.background = `linear-gradient(45deg, ${c1}, ${c2})`;
  } else if (bodyStyle === "flag") {
    if (flag === "rainbow") {
      body.style.background = "linear-gradient(to bottom, red, orange, yellow, green, blue, purple)";
    } else if (flag === "trans") {
      body.style.background = "linear-gradient(to bottom, #5BCEFA, #F5A9B8, white, #F5A9B8, #5BCEFA)";
    } else if (flag === "bi") {
      body.style.background = "linear-gradient(to bottom, #D60270, #9B4F96, #0038A8)";
    }
  }

  // Eyes
  const leftEye = document.createElement("div");
  leftEye.className = "eye left-eye";
  leftEye.style.background = eyeColor;

  const rightEye = document.createElement("div");
  rightEye.className = "eye right-eye";
  rightEye.style.background = eyeColor;

  // Mouth
  const mouth = document.createElement("div");
  mouth.className = "mouth";
  mouth.textContent = mouthType === "smile" ? ":)" :
                      mouthType === "grin" ? ":D" :
                      mouthType === "frown" ? ":(" :
                      ":P";

  body.appendChild(leftEye);
  body.appendChild(rightEye);
  body.appendChild(mouth);
  frogPreview.appendChild(body);
}

function getRandomPun() {
  const puns = [
    "Hoppy to meet you!",
    "You're toad-ally awesome!",
    "Ribbiting personality!",
    "A real jump-starter!",
    "Unfroggettable indeed!",
  ];
  return puns[Math.floor(Math.random() * puns.length)];
}
