/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(id) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    setTimeout(() => {

        const target =
            document.getElementById(id);

        if (target) {

            target.classList.add("active");

        }

    }, 100);

}


/* =====================================
   CHAPTER
===================================== */

function goToChapter(number) {

    // Mulai musik ketika user menekan tombol pertama
    if (bgMusic.paused) {
        startMusic();
    }

    showPage("chapter" + number);
}


/* =====================================
   BACK BUTTON
===================================== */

function goToPrevious(number) {

    const previousPages = {

        1: "opening",

        2: "chapter1",

        3: "chapter2",

        4: "chapter3",

        5: "chapter4",

        6: "counter",

        7: "quiz",

        8: "result"

    };


    const previous =
        previousPages[number];


    if (previous) {

        showPage(previous);

    }

}


/* =====================================
   COUNTER
===================================== */

function goToCounter() {

    showPage("counter");

}


/*
   GANTI TANGGAL INI DENGAN
   TANGGAL KALIAN JADIAN
*/

const startDate = new Date(
    2024,
    4,
    1,
    0,
    0,
    0
);


function updateCounter() {

    const now =
        new Date();

    const difference =
        now - startDate;


    if (difference < 0) {

        return;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days")
        .textContent =
        days;


    document.getElementById("hours")
        .textContent =
        hours;


    document.getElementById("minutes")
        .textContent =
        minutes;


    document.getElementById("seconds")
        .textContent =
        seconds;

}


setInterval(
    updateCounter,
    1000
);


updateCounter();


/* =====================================
   QUIZ
===================================== */

const questions = [

    {
        question:
            "Apa yang paling aku suka ketika sedang bersama kamu?",

        answers: [
            "Ngobrol sama kamu",
            "Main game",
            "Tidur",
            "Makan sendiri"
        ],

        correct: 0
    },

    {
        question:
            "Kalau aku sedang sedih, apa yang paling aku butuhkan?",

        answers: [
            "Ditinggal sendiri",
            "Kamu",
            "Uang",
            "Tidur seharian"
        ],

        correct: 1
    },

    {
        question:
            "Siapa orang yang sedang membaca website ini?",

        answers: [
            "Orang asing",
            "Temanku",
            "Orang yang aku sayang",
            "Google"
        ],

        correct: 2
    }

];


let currentQuestion = 0;

let score = 0;


function goToQuiz() {

    showPage("quiz");

    currentQuestion = 0;

    score = 0;

    loadQuestion();

}


function loadQuestion() {

    const data =
        questions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;


    document.getElementById(
        "question"
    ).textContent =
        data.question;


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    data.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-btn";


            button.textContent =
                answer;


            button.onclick = () => {

                checkAnswer(index);

            };


            answers.appendChild(button);

        }
    );


    const progress =
        (
            (currentQuestion + 1)
            /
            questions.length
        ) * 100;


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";


    document.getElementById(
        "quizMessage"
    ).textContent = "";

}


function checkAnswer(selected) {

    const data =
        questions[currentQuestion];


    if (
        selected === data.correct
    ) {

        score++;

        document.getElementById(
            "quizMessage"
        ).textContent =
            "Benar 🤍";

    } else {

        document.getElementById(
            "quizMessage"
        ).textContent =
            "Hmm... hampir 😌";

    }


    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        } else {

            showResult();

        }

    }, 900);

}


/* =====================================
   RESULT
===================================== */

function showResult() {

    showPage("result");


    const title =
        document.getElementById(
            "resultTitle"
        );


    const text =
        document.getElementById(
            "resultText"
        );


    if (score === 3) {

        title.textContent =
            "Kamu kenal banget sama aku 🤍";

        text.textContent =
            "Ternyata kamu masih hafal " +
            "hal-hal kecil tentang aku. " +
            "Tapi sebenarnya ada sesuatu " +
            "yang lebih penting dari semua jawaban tadi...";

    }

    else if (score === 2) {

        title.textContent =
            "Lumayan 😌";

        text.textContent =
            "Masih ada beberapa hal tentang aku " +
            "yang harus kamu pelajari. " +
            "Tapi nggak apa-apa... kita masih " +
            "punya banyak waktu.";

    }

    else {

        title.textContent =
            "Hmm... 😭";

        text.textContent =
            "Kayaknya kita harus lebih banyak " +
            "menghabiskan waktu bersama. " +
            "Tapi aku tetap punya sesuatu untuk kamu.";

    }

}


/* =====================================
   LETTER
===================================== */

function showLetter() {

    showPage("letter");


    setTimeout(() => {

        typeLetter();

    }, 800);

}


function typeLetter() {

    const text =

`Hai kamu...

Kalau kamu sampai di bagian ini,
berarti kamu sudah mengikuti
cerita kecil yang aku buat khusus
untuk kamu.

Aku mungkin nggak selalu bisa
mengatakan semua yang aku rasakan
secara langsung.

Tapi aku mau kamu tahu satu hal.

Aku bersyukur pernah bertemu dengan kamu.

Dari sekian banyak orang di dunia ini,
aku bisa mengenal kamu,
tertawa bersama kamu,
bercerita dengan kamu,
dan membuat begitu banyak
kenangan bersama kamu.

Mungkin hubungan kita nggak selalu sempurna.

Akan ada hari ketika kita berbeda pendapat.
Akan ada hari ketika kita sama-sama capek.

Tapi aku berharap,
di antara semua hari itu,
kita tetap memilih untuk saling bertahan.

Terima kasih sudah menjadi bagian
dari cerita hidup aku.

Dan kalau suatu hari nanti
kamu membaca ini lagi...

semoga kamu masih tersenyum.

🤍`;


    const element =
        document.getElementById(
            "letterText"
        );


    element.textContent = "";


    let index = 0;


    function type() {

        if (
            index <
            text.length
        ) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                type,
                35
            );

        }

    }


    type();

}


/* =====================================
   FINAL
===================================== */

function finalSurprise() {

    showPage("final");

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    heart.textContent =
        "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            Math.random() * 18
            + 10
        ) + "px";


    heart.style.animationDuration =
        (
            Math.random() * 5
            + 5
        ) + "s";


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(
    createHeart,
    700
);


/* =========================
   CINEMATIC BACKGROUND MUSIC
========================= */

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;

bgMusic.volume = 0.22;


/* =========================
   START MUSIC
========================= */

function startMusic() {

    if (!musicStarted) {

        bgMusic.volume = 0;

        bgMusic.play()
            .then(() => {

                musicStarted = true;

                musicButton.textContent = "🎵";
                musicButton.classList.add("playing");

                fadeVolume(0, 0.22, 2500);

            })
            .catch(error => {

                console.log("Musik belum bisa diputar:", error);

            });
    }
}


/* =========================
   PLAY / PAUSE
========================= */

function toggleMusic() {

    if (bgMusic.paused) {

        bgMusic.play();

        musicButton.textContent = "🎵";
        musicButton.classList.add("playing");

    } else {

        bgMusic.pause();

        musicButton.textContent = "🔇";
        musicButton.classList.remove("playing");

    }
}


/* =========================
   FADE VOLUME
========================= */

function fadeVolume(from, to, duration = 2000) {

    const startTime = performance.now();

    function animateVolume(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const volume = from + (to - from) * progress;

        bgMusic.volume = volume;

        if (progress < 1) {
            requestAnimationFrame(animateVolume);
        }
    }

    requestAnimationFrame(animateVolume);
}


/* =========================
   CHANGE MUSIC MOOD
========================= */

function setMusicMood(mood) {

    if (!musicStarted) return;

    if (mood === "normal") {

        fadeVolume(bgMusic.volume, 0.22, 1500);

    }

    if (mood === "soft") {

        fadeVolume(bgMusic.volume, 0.14, 1500);

    }

    if (mood === "romantic") {

        fadeVolume(bgMusic.volume, 0.28, 2000);

    }

    if (mood === "quiz") {

        fadeVolume(bgMusic.volume, 0.10, 1000);

    }

    if (mood === "videoReveal") {

        fadeVolume(bgMusic.volume, 0.0, 1500);

    }

    if (mood === "final") {

        fadeVolume(bgMusic.volume, 0.30, 1500);

    }
}


/* =========================
   OPEN CHAPTER
========================= */

function goToChapter(number) {

    // Musik mulai ketika tombol pertama ditekan
    if (!musicStarted) {
        startMusic();
    }

    showPage("chapter" + number);

    // Atur suasana musik
    if (number === 1) {
        setMusicMood("normal");
    }

    if (number === 2) {
        setMusicMood("normal");
    }

    if (number === 3) {
        setMusicMood("normal");
    }

    if (number === 4) {
        setMusicMood("soft");
    }
}


/* =========================
   COUNTER
========================= */

function goToCounter() {

    showPage("counter");

    setMusicMood("romantic");
}


/* =========================
   QUIZ
========================= */

function goToQuiz() {

    showPage("quiz");

    currentQuestion = 0;
    score = 0;

    loadQuestion();

    setMusicMood("quiz");
}


/* =========================
   LETTER
========================= */

function showLetter() {

    showPage("letter");

    setMusicMood("romantic");

    setTimeout(() => {

        typeLetter();

    }, 800);
}


/* =========================
   FINAL
========================= */

function finalSurprise() {

    showPage("final");

    setMusicMood("final");

}

function showVideo() {

    showPage("videoReveal");

    setMusicMood("soft");

    const video = document.getElementById("loveVideo");

    video.currentTime = 0;

    video.play().catch(() => {
        console.log("Video menunggu interaksi user.");
    });
}


function finishVideo() {

    const video = document.getElementById("loveVideo");

    video.pause();

    showPage("final");

    setMusicMood("final");

}