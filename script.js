
"use strict";

const $ = (selector) => document.querySelector(selector);

const languageSelect = $("#language");
const display = $("#textDisplay");
const input = $("#typingInput");
const wpmEl = $("#wpm");
const accuracyEl = $("#accuracy");
const timeEl = $("#time");
const errorsEl = $("#errors");
const progress = $("#progress");
const statusEl = $("#status");
const bestEl = $("#best");
const result = $("#result");

const passages = {
  uz: [
    "Har bir yangi kun yangi imkoniyatlar olib keladi. Inson o‘z maqsadiga erishish uchun tinimsiz harakat qilishi, sabrli bo‘lishi va o‘ziga ishonishi kerak.",
    "Kitob o‘qish insonning dunyoqarashini kengaytiradi, bilimini oshiradi va fikrlash qobiliyatini rivojlantiradi. Har kuni ozgina bo‘lsa ham yangi narsa o‘rgan.",
    "Texnologiyalar hayotimizni o‘zgartirmoqda. Dasturlash orqali yangi saytlar, o‘yinlar va foydali dasturlar yaratish mumkin. Eng muhimi, boshlashdan qo‘rqmaslik kerak.",
    "Do‘stlik ishonch, hurmat va samimiylik asosida quriladi. Yaxshi do‘st qiyin kunlarda yordam beradi, quvonchli damlarda esa sen bilan birga xursand bo‘ladi.",
    "O‘zbekiston qadimiy tarixga, go‘zal shaharlarga va boy madaniyatga ega. Samarqand, Buxoro va Xiva kabi shaharlar dunyoning turli joylaridan sayyohlarni o‘ziga jalb qiladi.",
    "Sport inson salomatligi uchun foydali. Muntazam mashq qilish kuchni oshiradi, kayfiyatni yaxshilaydi va kun davomida faol bo‘lishga yordam beradi.",
    "Muvaffaqiyat birdaniga kelmaydi. Katta natijalar kichik qadamlardan boshlanadi. Xatolardan saboq ol, yangi usullarni sinab ko‘r va oldinga intil.",
    "Tabiatni asrash har bir insonning vazifasidir. Daraxt ekish, suvni tejash va atrofni toza saqlash orqali kelajak avlod uchun yaxshi muhit yaratamiz.",
    "Internet yordamida dunyoning istalgan joyidan bilim olish mumkin. Lekin ma'lumotlarni tekshirish, vaqtni to‘g‘ri taqsimlash va xavfsizlik qoidalariga amal qilish muhim.",
    "Yangi ko‘nikma o‘rganish uchun muntazam mashq qilish kerak. Bugun kechagidan bir oz yaxshiroq bo‘lishning o‘zi ham katta yutuq hisoblanadi.",
    "Oila inson hayotidagi eng muhim qadriyatlardan biridir. Oila a'zolariga hurmat ko‘rsatish, ularga yordam berish va birga vaqt o‘tkazish munosabatlarni mustahkamlaydi.",
    "Vaqtni qadrlagan inson o‘z maqsadlariga osonroq erishadi. Reja tuzish, muhim ishlarni birinchi bajarish va dam olish uchun ham vaqt ajratish foydali.",
    "Kompyuterda tez yozishni o‘rganish uchun klaviaturaga kamroq qarashga harakat qil. Avval aniqlikni oshir, keyin esa tezlikni asta-sekin ko‘paytir.",
    "Orzular insonni yangi marralar sari yetaklaydi. O‘z oldingga aniq maqsadlar qo‘y, reja tuz va har kuni shu maqsadga yaqinlashtiradigan biror ishni bajar.",
    "Yaxshi natijaga erishish uchun qiziqish va mehnat birgalikda kerak. Savol berishdan uyalmagin, o‘rganishdan to‘xtama va yangi g‘oyalarni sinab ko‘r."
  ],

  en: [
    "Every new day brings another opportunity to learn something useful and become a better version of yourself. Stay curious, keep practicing, and never stop exploring the world around you.",
    "Reading books helps people discover new ideas, understand different perspectives, and improve their imagination. Even a few minutes of reading every day can make a meaningful difference over time.",
    "Technology is changing the way people learn, communicate, and work. With programming skills, creative thinkers can build websites, design games, solve problems, and share their ideas with the world.",
    "Success does not happen overnight. It grows through patience, consistent effort, and the willingness to learn from mistakes. Focus on progress instead of expecting everything to be perfect.",
    "A good friend listens carefully, offers support, and celebrates your achievements. Strong friendships are built through honesty, kindness, trust, and respect for each other's differences.",
    "Learning to type faster takes regular practice. Start by focusing on accuracy, keep your hands relaxed, and gradually increase your speed. Small improvements will eventually lead to impressive results.",
    "The world is full of interesting places, wonderful stories, and amazing discoveries. Traveling, reading, and talking to different people can help us understand the world from new perspectives.",
    "Nature provides clean air, fresh water, food, and beautiful places to explore. Protecting the environment starts with simple actions such as saving water, recycling waste, and planting trees.",
    "A creative idea can become something amazing when imagination meets determination. Try different approaches, ask questions, and remember that every experienced creator started as a beginner.",
    "Time is valuable, so use it wisely. Make a simple plan, complete your most important tasks first, and remember to leave enough room for rest, hobbies, family, and friends.",
    "Computer skills are useful in many different areas of life. Learning how to write code, organize information, and solve technical problems can open the door to exciting opportunities.",
    "Healthy habits help people feel more energetic and focused. Regular movement, enough sleep, balanced meals, and time outdoors can support both physical health and everyday concentration.",
    "Mistakes are a natural part of learning. Instead of giving up when something feels difficult, look for the reason, try another method, and use what you learned to improve your next attempt.",
    "Great achievements often begin with a small step. Choose a goal that matters to you, create a realistic plan, and work on it regularly. Consistency can turn simple actions into lasting progress.",
    "Curiosity encourages us to ask questions and discover how things work. Whether you are learning a language, building a website, or exploring science, every question can lead to something new."
  ],

  ru: [
    "Каждый новый день приносит новые возможности для обучения и развития. Старайся узнавать что-то полезное, пробуй новые занятия и не бойся совершать ошибки на пути к своей цели.",
    "Чтение книг помогает расширять кругозор, развивать воображение и узнавать интересные факты. Даже несколько страниц в день могут постепенно превратиться в большую привычку.",
    "Современные технологии меняют способы общения, обучения и работы. С помощью программирования можно создавать сайты, разрабатывать игры, автоматизировать задачи и воплощать собственные идеи.",
    "Успех редко приходит мгновенно. Для достижения хороших результатов нужны терпение, постоянная практика и желание учиться на своих ошибках. Каждый маленький шаг имеет значение.",
    "Настоящая дружба строится на доверии, честности и взаимном уважении. Хорошие друзья умеют слушать, поддерживать друг друга и вместе радоваться новым достижениям.",
    "Чтобы научиться быстро печатать, необходимо регулярно тренироваться. Сначала обращай внимание на правильность написания, а затем постепенно увеличивай скорость и старайся меньше смотреть на клавиатуру.",
    "Природа дарит людям чистый воздух, воду, растения и красивые места для отдыха. Каждый может помочь сохранить окружающую среду, экономя воду и поддерживая чистоту.",
    "Время является ценным ресурсом, поэтому важно правильно его распределять. Составляй планы, выполняй важные задачи вовремя и оставляй достаточно времени для отдыха и любимых занятий.",
    "Изучение иностранных языков помогает общаться с людьми из разных стран и знакомиться с другими культурами. Регулярная практика делает новые слова понятнее, а разговорную речь увереннее.",
    "Любая большая цель начинается с небольшого действия. Определи, чего хочешь достичь, составь понятный план и постепенно двигайся вперёд. Постоянство часто важнее скорости.",
    "Компьютеры помогают решать множество задач, создавать цифровые проекты и обмениваться информацией. Полезные навыки работы с технологиями открывают новые возможности для творчества и обучения.",
    "Здоровые привычки помогают сохранять энергию и хорошее настроение. Достаточный сон, движение, сбалансированное питание и прогулки на свежем воздухе положительно влияют на самочувствие.",
    "Ошибки не означают, что нужно прекращать попытки. Внимательно изучи проблему, найди причину и попробуй другой способ. Так постепенно появляются опыт, уверенность и новые знания.",
    "Любознательные люди задают вопросы, проверяют идеи и стремятся понять окружающий мир. Изучение науки, истории и технологий помогает находить неожиданные ответы и открывать новые горизонты.",
    "Хорошая привычка формируется благодаря регулярным действиям. Выделяй немного времени каждый день, отмечай свой прогресс и продолжай двигаться к цели, даже если результат появляется не сразу."
  ]
};

const durations = [600, 300, 180, 120, 60, 30, 15, 5];

let duration = 60;
let timeLeft = duration;
let timer = null;
let started = false;
let finished = false;
let passage = "";
let typedBeforeFinish = "";
let errorsTotal = 0;
let correctTotal = 0;
let round = 0;
let activeLanguage = "uz";
let bestWpm = 0;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (mins > 0) {
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  return `${secs}s`;
}

function getBest() {
  try {
    return Number(
      localStorage.getItem(`typerush_best_${activeLanguage}`) || 0
    );
  } catch {
    return 0;
  }
}

function saveBest(value) {
  try {
    localStorage.setItem(
      `typerush_best_${activeLanguage}`,
      String(value)
    );
  } catch {
    // Test localStorage ishlamasa ham davom etadi.
  }
}

function updateBestDisplay() {
  bestWpm = getBest();
  bestEl.textContent = `🏆 Best: ${bestWpm} WPM`;
}

function shuffledPassages() {
  const list = [...passages[activeLanguage]];

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}

function generatePassage() {
  const list = shuffledPassages();

  // Ko‘p matnlarni bitta uzun matnga birlashtiramiz.
  return list.join(" ");
}

function makeLongText() {
  let text = "";
  const minimumLength = 1800;

  // Test uchun yetarli uzunlikdagi matn tayyorlanadi.
  while (text.length < minimumLength) {
    text += generatePassage() + " ";
  }

  return text;
}

function createTextDisplay() {
  display.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < passage.length; i++) {
    const span = document.createElement("span");
    span.textContent = passage[i];

    if (i === 0) span.classList.add("current");

    fragment.appendChild(span);
  }

  display.appendChild(fragment);
}

function addMoreTextIfNeeded() {
  // Oxiriga yaqinlashganda yangi matn avtomatik qo‘shiladi.
  if (passage.length - input.value.length < 500) {
    const extra = makeLongText();
    const startIndex = passage.length;

    passage += " " + extra;

    const fragment = document.createDocumentFragment();

    for (let i = startIndex; i < passage.length; i++) {
      const span = document.createElement("span");
      span.textContent = passage[i];
      fragment.appendChild(span);
    }

    display.appendChild(fragment);
  }
}

function calculateStats() {
  const typed = input.value;
  let correct = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === passage[i]) {
      correct++;
    } else {
      errors++;
    }
  }

  const elapsed = Math.max(0.001, (duration - timeLeft) / 60);
  const wpm = started
    ? Math.round((correct / 5) / elapsed)
    : 0;

  const accuracy = typed.length
    ? Math.round((correct / typed.length) * 100)
    : 100;

  return { correct, errors, wpm, accuracy };
}

function renderTypedText() {
  const typed = input.value;
  const spans = display.querySelectorAll("span");

  spans.forEach((span, index) => {
    span.classList.remove("correct", "incorrect", "current");

    if (index < typed.length) {
      if (typed[index] === passage[index]) {
        span.classList.add("correct");
      } else {
        span.classList.add("incorrect");
      }
    } else if (index === typed.length && !finished) {
      span.classList.add("current");
    }
  });

  const current = spans[typed.length];

  if (current) {
    const displayRect = display.getBoundingClientRect();
    const currentRect = current.getBoundingClientRect();

    if (
      currentRect.bottom > displayRect.bottom ||
      currentRect.top < displayRect.top
    ) {
      current.scrollIntoView({
        block: "nearest",
        behavior: "auto"
      });
    }
  }
}

function updateStats() {
  const stats = calculateStats();

  wpmEl.textContent = stats.wpm;
  accuracyEl.textContent = `${stats.accuracy}%`;
  errorsEl.textContent = stats.errors;

  renderTypedText();

  return stats;
}

function startTimer() {
  if (started || finished) return;

  started = true;
  statusEl.textContent = "Typing...";
  $("#timeLabel").textContent = "Time remaining";

  timer = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 1);

    timeEl.textContent = formatTime(timeLeft);

    const percent = ((duration - timeLeft) / duration) * 100;
    progress.style.width = `${percent}%`;

    updateStats();

    if (timeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

function finishTest() {
  if (finished) return;

  finished = true;
  clearInterval(timer);
  timer = null;

  input.disabled = true;

  const stats = updateStats();
  const newRecord = stats.wpm > bestWpm;

  if (newRecord) {
    bestWpm = stats.wpm;
    saveBest(bestWpm);
  }

  updateBestDisplay();

  $("#finalWpm").textContent = stats.wpm;
  $("#finalAccuracy").textContent = `${stats.accuracy}%`;
  $("#finalErrors").textContent = stats.errors;
  $("#finalBest").textContent = bestWpm;

  $("#resultMessage").textContent = newRecord && stats.wpm > 0
    ? "🔥 Yangi rekord! Ajoyib natija!"
    : "Mashq qilishda davom et va rekordingni yangila!";

  $("#passageLabel").textContent = "Test yakunlandi";
  statusEl.textContent = "Finished";
  $("#timeLabel").textContent = "Time is up";

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetTest() {
  clearInterval(timer);
  timer = null;

  started = false;
  finished = false;
  timeLeft = duration;
  round++;

  passage = makeLongText();
  input.value = "";
  input.disabled = false;

  timeEl.textContent = formatTime(timeLeft);
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100%";
  errorsEl.textContent = "0";
  progress.style.width = "0%";

  statusEl.textContent = "Tayyor";
  $("#timeLabel").textContent = "Ready to start";
  $("#passageLabel").textContent = "Matnni yozishni boshla";

  result.classList.add("hidden");

  createTextDisplay();
  updateBestDisplay();

  if (activeLanguage === "uz") {
    input.placeholder = "Shu yerga yozishni boshla...";
    $("#passageLabel").textContent = "Matnni yozishni boshla";
  } else if (activeLanguage === "en") {
    input.placeholder = "Start typing here...";
    $("#passageLabel").textContent = "Start typing the text";
  } else {
    input.placeholder = "Начни печатать здесь...";
    $("#passageLabel").textContent = "Начни печатать текст";
  }
}

input.addEventListener("input", () => {
  if (finished) return;

  addMoreTextIfNeeded();

  if (input.value.length > 0 && !started) {
    startTimer();
  }

  updateStats();

  if (started && !finished && timeLeft > 0) {
    statusEl.textContent = "Typing...";
  }
});

document.querySelectorAll("[data-time]").forEach(button => {
  button.addEventListener("click", () => {
    const selectedDuration = Number(button.dataset.time);

    if (!durations.includes(selectedDuration)) return;

    duration = selectedDuration;

    document.querySelectorAll("[data-time]").forEach(item => {
      item.classList.toggle("selected", item === button);
    });

    resetTest();
  });
});

languageSelect.addEventListener("change", () => {
  const selectedLanguage = languageSelect.value;

  if (!passages[selectedLanguage]) return;

  activeLanguage = selectedLanguage;
  resetTest();
});

$("#restart").addEventListener("click", () => {
  resetTest();
  input.focus();
});

$("#tryAgain").addEventListener("click", () => {
  resetTest();
  input.focus();
});

resetTest();
