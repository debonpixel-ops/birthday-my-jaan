document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.getElementById("enter-btn");
    const passcodeInput = document.getElementById("passcode-input");
    const errorMsg = document.getElementById("error-msg");
    const landingScreen = document.getElementById("landing-screen");
    const mainContent = document.getElementById("main-content");
    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");
    
    // 1. Anniversary Date Passcode Lock (27 October)
    if (enterBtn) {
        enterBtn.addEventListener("click", function () {
            let userVal = passcodeInput.value.trim().toLowerCase();
            if (userVal === "27 october" || userVal === "27 oct" || userVal === "27/10") {
                landingScreen.classList.add("fade-out");
                setTimeout(() => {
                    landingScreen.style.display = "none";
                    mainContent.classList.remove("hidden");
                    
                    if (typeof confetti === "function") {
                        confetti({
                            particleCount: 120,
                            spread: 80,
                            origin: { y: 0.6 }
                        });
                    }
                }, 500);

                if (bgMusic) {
                    bgMusic.play().then(() => {
                        musicToggle.classList.remove("hidden");
                        musicToggle.innerText = "🎵";
                    }).catch(e => console.log("Audio blocked"));
                }
            } else {
                errorMsg.style.display = "block";
                passcodeInput.style.border = "2px solid #ff4d6d";
            }
        });
    }

    // 2. Music Toggle
    if (musicToggle && bgMusic) {
        musicToggle.addEventListener("click", function () {
            if (bgMusic.paused) {
                bgMusic.play();
                musicToggle.innerText = "🎵";
            } else {
                bgMusic.pause();
                musicToggle.innerText = "🔇";
            }
        });
    }

    // 3. Meet Choices Logic
    window.selectMeet = function(type) {
        const resp = document.getElementById("meet-response");
        resp.classList.remove("hidden");
        let texts = {
            hug: "🫂 Pata tha! Milte hi sabse pehle itna tight hug dunga ki saari thakan gayab ho jayegi. ❤️",
            food: "🍕 Done! Tumhari favorite jagah chalenge aur pet bhar ke sab kuch khayenge! 😋",
            cry: "😭 Rona bilkul nahi hai! Main tumhe gale laga kar sirf hasaunga meri jaan. 🥰",
            stare: "🥰 Sahi baat hai, tumhein dekhne se fursat kahan milegi! Ekdum true soulmate moment. ✨"
        };
        resp.innerText = texts[type];
        if (typeof confetti === "function") {
            confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
        }
    };

    // 4. Balloon Pop & Gift Wishlist (Instagram Integration)
    window.popBalloon = function(element) {
        element.style.visibility = "hidden";
        if (typeof confetti === "function") {
            confetti({ particleCount: 25, spread: 40, origin: { y: 0.6 } });
        }
        
        let giftBox = document.getElementById("gift-box");
        giftBox.classList.remove("hidden");
        
        if (!document.getElementById("insta-send-btn")) {
            let instaBtnHTML = `
                <br>
                <button id="insta-send-btn" class="vibe-btn" onclick="sendToInsta()" style="margin-top: 15px; background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);">
                    💬 Send to Advi Boy on Instagram ❤️
                </button>
                <p id="gift-success" class="hidden" style="color: #a7f3d0; margin-top: 10px; font-weight: 500;"></p>
            `;
            giftBox.insertAdjacentHTML('beforeend', instaBtnHTML);
        }
    };

    window.sendToInsta = function() {
        const giftInput = document.getElementById("gift-input").value.trim();
        const successText = document.getElementById("gift-success");
        
        if(giftInput !== "") {
            successText.classList.remove("hidden");
            successText.innerText = `Gift locked: "${giftInput}"! Opening Instagram... 😉🎉`;
            
            if (typeof confetti === "function") {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
            }

            // Username already set here: _mr.adityashah
            let myInstaUsername = "_mr.adityashah"; 
            
            setTimeout(() => {
                window.open(`https://instagram.com/${myInstaUsername}`, '_blank');
            }, 1200);

        } else {
            alert("Pehle gift ka naam toh likho bbe! 😂❤️️");
        }
    };

    // 5. Online Cake Cutting
    window.cutCake = function() {
        const cakeVisual = document.getElementById("cake-visual");
        const cutBtn = document.getElementById("cut-cake-btn");
        cakeVisual.innerHTML = "🍰 🍽️✨ (Khatam! Happy Birthday my Queen!)";
        cutBtn.innerText = "Cake Cut Successfully! 🎉";
        cutBtn.disabled = true;
        cutBtn.style.opacity = "0.7";

        if (typeof confetti === "function") {
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
        }
    };

    // 6. Vibe Box Logic
    window.showVibe = function(type) {
        const vibeBox = document.getElementById("vibe-display");
        const vibeText = document.getElementById("vibe-text");
        vibeBox.classList.remove("hidden");

        let messages = {
            hug: "🫂 Virtual tightest hug loaded! Jaldi se real life mein bhi le lo. 😂❤️",
            kiss: "😘 Unlimited kisses sent straight to your forehead and cheeks! Mwahh! 💋",
            forehead: "🥰 Sabse safe aur sukoon wali jagah... hamesha tumhare paas rahunga meri jaan. 🫂✨",
            food: "🍕 Done! Agli baar jab milenge, tumhari pasand ki treat meri taraf se pakki! 😋🎉"
        };
        vibeText.innerHTML = messages[type];
        if (typeof confetti === "function") {
            confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
        }
    };

    // 7. Reveal Advi IDs Easter Egg
    const revealBtn = document.getElementById("reveal-advi-btn");
    const adviReveal = document.getElementById("advi-reveal");
    const adviText = document.getElementById("advi-text");
    
    if (revealBtn) {
        revealBtn.addEventListener("click", function () {
            if (adviReveal) adviReveal.classList.remove("hidden");
            if (adviText) adviText.classList.remove("hidden");
            revealBtn.style.display = "none";
        });
    }

    // 8. Envelope & Countdown logic
    const envelope = document.getElementById("envelope");
    if (envelope) {
        envelope.addEventListener("click", () => envelope.classList.toggle("open"));
    }

    const startCountdownBtn = document.getElementById("start-countdown-btn");
    const countdownTrigger = document.getElementById("countdown-trigger");
    const countdownDisplay = document.getElementById("countdown-display");
    const countNumber = document.getElementById("count-number");
    const finalReveal = document.getElementById("final-reveal");

    if (startCountdownBtn) {
        startCountdownBtn.addEventListener("click", function () {
            countdownTrigger.classList.add("hidden");
            countdownDisplay.classList.remove("hidden");
            let count = 3;
            countNumber.innerText = count;
            let timer = setInterval(() => {
                count--;
                if (count > 0) {
                    countNumber.innerText = count;
                } else {
                    clearInterval(timer);
                    countdownDisplay.classList.add("hidden");
                    finalReveal.classList.remove("hidden");
                    if (typeof confetti === "function") {
                        confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
                    }
                }
            }, 1000);
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-on-scroll").forEach(el => observer.observe(el));
});