// ==========================================
// START SCREEN
// ==========================================

const startScreen = document.getElementById("start-screen");

const playBtn = document.getElementById("play-btn");

const music = document.getElementById("bg-music");

music.volume = 0.25;

// ==========================================
// ELEMENTS
// ==========================================

const typingText = document.getElementById("typing-text");
const systemLog = document.getElementById("system-log");
const hero = document.querySelector(".hero");
const landingScreen = document.getElementById("landing-screen");
const timelineSection = document.getElementById("timeline-section");
const beginBtn = document.getElementById("begin-btn");
const gallerySlideshow = document.getElementById("gallery-slideshow");

// ==========================================
// GALLERY ELEMENTS
// ==========================================

const gallerySection = document.getElementById("gallery-section");

const galleryImage = document.getElementById("gallery-image");

const galleryGrid = document.getElementById("gallery-grid");

const galleryNextBtn = document.getElementById("gallery-next-btn");


// ==========================================
// LETTER ELEMENTS
// ==========================================

const letterSection = document.getElementById("letter-section");

const letterContent = document.getElementById("letter-content");

const letterEnd = document.getElementById("letter-end");

const letterNextBtn = document.getElementById("letter-next-btn");

const secretSection = document.getElementById("secret-section");

const secretText = document.getElementById("secret-text");

const secretNextBtn = document.getElementById("secret-next-btn");


const endingSection = document.getElementById("ending-section");

const restartBtn = document.getElementById("restart-btn");

// ==========================================
// FUN SECTION
// ==========================================

const funSection = document.getElementById("fun-section");

const funBtn = document.getElementById("fun-btn");

const videoSection = document.getElementById("video-section");

const birthdayVideo = document.getElementById("birthday-video");
birthdayVideo.pause();
birthdayVideo.currentTime = 0;

const loaderScreen = document.getElementById("loader-screen");

loaderScreen.style.display = "none";

// ==========================================
// INTRO MESSAGE
// ==========================================

const introMessage = "Finding the best person in this world...";

let introIndex = 0;

// ==========================================
// TIMELINE
// ==========================================

const timeline = [

    {
        type: "command",
        text: "> Initializing Search...",
        delay: 800
    },

    {
        type: "success",
        text: "✓ Search Initialized",
        delay: 700
    },

    {
        type: "command",
        text: "> Searching Shared Memories...",
        delay: 900
    },

    {
        type: "success",
        text: "✓ 3 Years of Memories Loaded",
        delay: 700
    },

    {
        type: "command",
        text: "> Counting Laughs Together...",
        delay: 900
    },

    {
        type: "success",
        text: "✓ Too Many To Count",
        delay: 700
    },

    {
        type: "command",
        text: "> Detecting Pure Heart...",
        delay: 900
    },

    {
        type: "success",
        text: "✓ Match Confidence : 100%",
        delay: 700
    },

    {
        type: "command",
        text: "> Finding The Brightest Smile...",
        delay: 900
    },

    {
        type: "success",
        text: "✓ Perfect Match Found ❤️",
        delay: 900
    },

    {
        type: "command",
        text: "> Opening Birthday Profile...",
        delay: 1500
    }

];

let timelineIndex = 0;

// ==========================================
// TYPE INTRO
// ==========================================

function typeIntro() {

    if (introIndex < introMessage.length) {

        typingText.textContent += introMessage.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro, 70);

    }

    else {

        setTimeout(playTimeline, 1000);

    }

}

// ==========================================
// TYPE TERMINAL COMMAND
// ==========================================

function typeCommand(text, callback) {

    const line = document.createElement("div");

    systemLog.appendChild(line);

    let i = 0;

    function typing() {

        if (i < text.length) {

            line.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 35);

        }

        else {

            callback();

        }

    }

    typing();

}


// ==========================================
// PLAY TIMELINE
// ==========================================

function playTimeline() {

    if (timelineIndex >= timeline.length) {

        // Fade Loader
        document
            .getElementById("loader-screen")
            .classList.add("hide");

        // Show Landing
        setTimeout(() => {

            const landing = document.getElementById("landing-screen");

            landing.style.display = "flex";

            landing.classList.add("show");

            hero.classList.remove("hidden");

        }, 1000);

        return;

    }

    const item = timeline[timelineIndex];

    // ------------------------------
    // COMMAND
    // ------------------------------

    if (item.type === "command") {

        typeCommand(item.text, function () {

            timelineIndex++;

            setTimeout(playTimeline, item.delay);

        });

    }

    // ------------------------------
    // SUCCESS
    // ------------------------------

    else if (item.type === "success") {

        const line = document.createElement("div");

        line.textContent = item.text;

        line.style.color = "#7BBE8A";

        line.style.opacity = "0";

        line.style.transition = "opacity 0.5s ease";

        systemLog.appendChild(line);

        // Fade In
        setTimeout(() => {

            line.style.opacity = "1";

        }, 50);

        timelineIndex++;

        setTimeout(playTimeline, item.delay);

    }

}

// ==========================================
// BEGIN JOURNEY
// ==========================================

// First Screen
playBtn.addEventListener("click", () => {

    startScreen.style.display = "none";

    loaderScreen.style.display = "flex";

    music.play();

    typeIntro();

});

// Landing Screen
beginBtn.addEventListener("click", () => {

    landingScreen.classList.remove("show");

    setTimeout(() => {

        landingScreen.style.display = "none";

        timelineSection.style.display = "flex";

        loadMemory(0);

    },700);

});

// ==========================================
// MEMORY ENGINE
// ==========================================

const memories = [

    {
        title: "Beginning",
        text: "Sometimes the best people enter our lives without making any noise.\n\nLittle did I know, this would become one of my favourite chapters.",
        image: "assets/images/timeline/1.jpg"
    },

    {
        title: "From Strangers to Friends",
        text: "A few conversations turned into countless smiles.\n\nSomewhere between 'hello' and endless conversations, you became someone I never wanted to lose.",
        image: "assets/images/timeline/2.jpg"
    },

    {
        title: "First Selfie",
        text: "Just a simple picture...\n\nYet somehow, it became one of my favourite memories because it had us in the same frame.",
        image: "assets/images/timeline/3.jpeg"
    },

    {
        title: "Our Favourite Day",
        text: "Some days don't need anything extraordinary.\n\nThey become unforgettable simply because we were together.",
        image: "assets/images/timeline/4.jpg"
    },


    {
        title: "Crazy Moments",
        text: "The laughs, the jokes, the random chaos...\n\nSome of my happiest memories were the ones we never planned.",
        image: "assets/images/timeline/5.jpeg"
    },

    {
        title: "Endless Conversations",
        text: "One conversation became another...\n\nBefore we knew it, hours felt like minutes whenever we talked.",
        image: "assets/images/timeline/6.png"
    },

    {
        title: "Adventures Together",
        text: "Every place felt a little more special because you were there.\n\nIt was never about the destination...It was always about the company.",
        image: "assets/images/timeline/7.jpeg"
    },

    {
        title: "Through Every Season",
        text: "Not every day was perfect.\n\nBut every challenge reminded me how lucky I was to have you beside me.",
        image: "assets/images/timeline/8.jpeg"
    },

    {
        title: "Still My Favourite Person",
        text: "After everything we've shared,\n\nif someone asked me about my favourite memory...\n\nI'd probably say, I'm still living it.",
        image: "assets/images/timeline/9.jpeg"
    },

    {
        title: "To Be Continued... ❤️",
        text: "We've already made countless beautiful memories.\n\nAnd somehow, I still believe the best ones are yet to come.\n\nThis story is far from over. ❤️",
        image: "assets/images/timeline/10.jpeg"
    }

];

let currentMemory = 0;

const memoryDate = document.getElementById("memory-date");
const memoryTitle = document.getElementById("memory-title");
const memoryText = document.getElementById("memory-text");
const memoryImage = document.getElementById("memory-image");

const nextMemoryBtn = document.getElementById("next-memory-btn");
const prevMemoryBtn = document.getElementById("prev-memory-btn");

function loadMemory(index){

    const card = document.querySelector(".memory-card");

    // Fade Out
    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    setTimeout(() => {

        memoryTitle.textContent = memories[index].title;

        memoryText.innerHTML =
            memories[index].text.replace(/\n/g,"<br>");

        memoryImage.onload = () => {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        };

        memoryImage.src = memories[index].image;

        // Fade In

    },300);

}

nextMemoryBtn.addEventListener("click",()=>{

    // Normal memories
    if(currentMemory < memories.length-1){

        currentMemory++;

        window.scrollTo(0,0);

        loadMemory(currentMemory);

    }

    // Last memory → Gallery
    else{

        timelineSection.style.display="none";

        gallerySection.style.display="block";

        window.scrollTo(0,0);

        startGallery();

    }

});

prevMemoryBtn.addEventListener("click",()=>{

    if(currentMemory>0){

        currentMemory--;

        window.scrollTo(0,0);

        loadMemory(currentMemory);

    }

});

// ==========================================
// GALLERY
// ==========================================

const galleryPhotos = [

    "assets/images/gallery/1.jpg",
    "assets/images/gallery/2.jpeg",
    "assets/images/gallery/3.png",
    "assets/images/gallery/4.jpeg",
    "assets/images/gallery/5.jpg",
    "assets/images/gallery/6.jpeg",
    "assets/images/gallery/7.jpeg",
    "assets/images/gallery/8.jpeg",
    "assets/images/gallery/9.jpeg",
    "assets/images/gallery/10.jpeg",
    "assets/images/gallery/11.jpeg",
    "assets/images/gallery/12.jpeg"

];

let galleryIndex = 0;

// ==========================================
// START GALLERY
// ==========================================

function startGallery(){

    galleryIndex = 0;

    // Reset everything
    gallerySlideshow.style.display = "block";
    galleryGrid.style.display = "none";
    galleryNextBtn.style.display = "none";

    galleryImage.style.opacity = "1";
    galleryImage.src = galleryPhotos[0];

    // Small cinematic pause
    setTimeout(showNextPhoto, 2500);

}

// ==========================================
// SLIDESHOW
// ==========================================

function showNextPhoto(){

    galleryIndex++;

    // Finished slideshow
    if(galleryIndex >= galleryPhotos.length){

        galleryImage.style.opacity = "0";

        setTimeout(showAlbum,800);

        return;

    }

    galleryImage.style.opacity = "0";

    setTimeout(()=>{

        galleryImage.src = galleryPhotos[galleryIndex];

        galleryImage.onload = ()=>{

            galleryImage.style.opacity = "1";

        };

    },800);

    setTimeout(showNextPhoto,3500);

}

// ==========================================
// SHOW FINAL ALBUM
// ==========================================

function showAlbum(){

    gallerySlideshow.style.display = "none";

    galleryGrid.style.display = "grid";

    galleryGrid.style.opacity = "0";

    galleryGrid.style.transition = "opacity .8s ease";

    setTimeout(()=>{

        galleryGrid.style.opacity = "1";

    },100);

    setTimeout(()=>{

        galleryNextBtn.style.display = "block";
        galleryNextBtn.onclick = () => {

            gallerySection.style.display = "none";

            letterSection.style.display = "block";

            window.scrollTo(0,0);

            startLetter();

        };

    },700);

}

// ==========================================
// LETTER
// ==========================================

const letterParagraphs = [

`Happy Birthday. ❤️

It's funny how life works sometimes.

We first met during a class, and honestly... my first impression of you wasn't the best. I genuinely thought you were a little rude. 😭 But the more we talked, the more I got to know the real you. Behind that first impression was a funny, brain-rot kid who somehow made every conversation entertaining.`,

`One of the things I admire the most about you is how understanding you are. No matter what happens, you've always tried to understand me. And the way you take care of me... sometimes I genuinely feel like a little kid around you. You never made it feel like a responsibility; you always made it feel natural.

If someone asked me about my favourite memory with you, I'd probably say every single moment. But if I had to choose one, it would definitely be our Dongargarh trip. I'll never forget the monkey incident. Instead of getting scared, you literally shouted at the monkey to protect me. I don't know why, but that moment stayed with me. I was honestly so impressed.`,

`There are so many little things that make me smile, but the biggest one is simply the way you care for me. And yes... your random flirting sometimes. 😂

There's also something I've never really said properly.

I know I get angry at you a lot. Sometimes even for the smallest things. But the truth is... it's never because I want to hurt you. It's because I care about you so much that I overreact. Every single time I get angry, I end up feeling bad later. So if I've ever made you feel upset because of that, I'm really sorry.`,

`I just want you to know that I truly love you, care about you, and I'll always pray that life gives you the happiness you deserve.

Thank you for coming into my life. Thank you for being a true person, a true friend, and someone I can always count on. You've made so many ordinary days feel special without even realizing it.`,

`On your birthday, I don't have a long list of wishes. I just hope everything goes well for you. I hope you achieve everything you dream of, stay happy, stay healthy, and keep smiling the way you always do.

Thank you for being one of the most beautiful chapters of my life.

Happy Birthday once again. ❤️`

];

// ==========================================
// START LETTER
// ==========================================

function startLetter(){

    letterContent.innerHTML="";

    letterEnd.style.display="none";

    letterNextBtn.style.display="none";

    letterParagraphs.forEach((text,index)=>{

        const p=document.createElement("p");

        p.textContent=text;

        letterContent.appendChild(p);

        setTimeout(()=>{

            p.classList.add("show");

        },1000*index);

    });

    setTimeout(()=>{

        letterEnd.style.display = "block";

        letterNextBtn.style.display = "block";

        letterNextBtn.onclick = ()=>{

            letterSection.style.display = "none";

            secretSection.style.display = "flex";

            window.scrollTo(0,0);

            startSecret();

        };

    }, letterParagraphs.length * 1000 + 800);

}

function startSecret(){

    secretText.innerHTML = `
        No matter how many birthdays come and go...<br><br>
        if I had to choose my favourite person all over again,<br><br>
        I'd still choose you. ❤️
    `;

    setTimeout(()=>{

        secretText.classList.add("show");

    },500);

    setTimeout(()=>{

        secretNextBtn.style.display = "block";

        secretNextBtn.onclick = ()=>{

            secretSection.style.display = "none";

            endingSection.style.display = "flex";

            window.scrollTo(0,0);

        };

    },3000);

}

restartBtn.onclick = ()=>{

    endingSection.style.display = "none";

    funSection.style.display = "flex";

    window.scrollTo(0,0);

};

funBtn.onclick = ()=>{

    // Fade out music
    let volume = music.volume;

    const fade = setInterval(()=>{

        volume -= 0.05;

        if(volume <= 0){

            clearInterval(fade);

            music.pause();

            music.currentTime = 0;

        }

        else{

            music.volume = volume;

        }

    },120);

    // Show video after fade starts
    setTimeout(()=>{

        funSection.style.display = "none";

        videoSection.style.display = "flex";

        birthdayVideo.play();

    },1200);

};