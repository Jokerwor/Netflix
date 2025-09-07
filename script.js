document.addEventListener('DOMContentLoaded', () => {

    // Mock data for movies (simulating an API response)
    const MOCK_DATA = {
        trending: [
            { id: 1, title: "Interstellar", image: "interstellar.jpg", video: "https://www.youtube.com/watch?v=zSWdZVtXT7E", rank: 1 },
            { id: 2, title: "Tenet", image: "tenet.jpg", video: "https://www.youtube.com/watch?v=L3pk_TBkihU", rank: 2 },
            { id: 3, title: "Red Notice", image: "rednotice1.jpg", video: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms", rank: 3 },
            { id: 4, title: "Stranger Things", image: "starngerthings1.jpg", video: "https://www.youtube.com/watch?v=iKZyYdwS3Wg", rank: 4 },
            { id: 5, title: "Money Heist", image: "moneyheist.jpg", video: "https://www.youtube.com/watch?v=_InqQJRqGW4", rank: 5 },
            { id: 6, title: "The Walking Dead", image: "walkingdead.jpg", video: "https://www.youtube.com/watch?v=iTOaFootkSk", rank: 6 },
            { id: 7, title: "Dark", image: "dark1.jpg", video: "https://www.youtube.com/watch?v=rrwycJ08PSA", rank: 7 },
            { id: 8, title: "Breaking Bad", image: "breakingbad1.jpg", video: "https://www.youtube.com/watch?v=HhesaQXLuRY", rank: 8 },
            { id: 9, title: "Better Call Saul", image: "bettercallsaul1.jpg", video: "https://www.youtube.com/watch?v=HN4oydykJFc", rank: 9 },
            { id: 10, title: "Dahmer", image: "dahmer.jpg", video: "https://www.youtube.com/watch?v=GnujgrCPT7A", rank: 10 }
        ],
        popular: [
            { id: 11, title: "The Kashmir Files", image: "kashmirfiles1.jpg", video: "https://www.youtube.com/watch?v=A179apttY58&pp=0gcJCfwAo7VqN5tD", rank: 1 },
            { id: 12, title: "RRR", image: "rrr.jpg", video: "https://www.youtube.com/watch?v=NgBoMJy386M", rank: 2 },
            { id: 13, title: "K.G.F: Chapter 2", image: "kgf.jpg", video: "https://www.youtube.com/watch?v=JKa05nyUmuQ", rank: 3 },
            { id: 14, title: "Alice in the Boderland", image: "aliceintheboderland.jpg", video: "https://www.youtube.com/watch?v=CaWRDITtT1U", rank: 4 },
            { id: 15, title: "Peaky Blinders", image: "peakyblinders.jpg", video: "https://www.youtube.com/watch?v=2nsT9uQPIrk", rank: 5 },
            { id: 16, title: "Wednesday", image: "wednesday.jpg", video: "https://www.youtube.com/watch?v=ueCc-AYUMRs", rank: 6 },
            { id: 17, title: "The Queen's Gambit", image: "queengambit.jpg", video: "https://www.youtube.com/watch?v=oZn3qSgmLqI", rank: 7 },
            { id: 18, title: "Khakee: The Bihar Chapter", image: "khakee.jpg", video: "https://www.youtube.com/watch?v=XneHBxjMg_Y", rank: 8 },
            { id: 19, title: "Sacred Games", image: "sacredgames.jpg", video: "https://www.youtube.com/watch?v=w-Xe8gLBc5I", rank: 9 },
            { id: 20, title: "Mindhunter", image: "mindhunter.jpg", video: "https://www.youtube.com/watch?v=PHlJQCyqiaI", rank: 10 },
        ]
    };

    // --- NEW: Language Translation Data ---
    const translations = {
        en: {
            signIn: "Sign In",
            heroTitle: "Unlimited movies, TV shows and more",
            heroSubtitle: "Watch anywhere. Cancel anytime.",
            heroMembership: "Ready to watch? Enter your email to create or restart your membership.",
            emailPlaceholder: "Email address",
            emailError: "Please enter a valid email address.",
            getStarted: "Get Started",
            trendingNow: "Trending Now",
            popularOnNetflix: "Popular on Netflix",
            moreReasons: "More Reasons to Join",
            enjoyOnTV: "Enjoy on your TV",
            enjoyOnTVDesc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            downloadShows: "Download your shows",
            downloadShowsDesc: "Save your favourites easily and always have something to watch.",
            watchEverywhere: "Watch everywhere",
            watchEverywhereDesc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            profilesForKids: "Create profiles for kids",
            profilesForKidsDesc: "Send kids on adventures with their favourite characters in a space made just for them.",
            faqTitle: "Frequently Asked Questions",
            faq1q: "What is Netflix?",
            faq1a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
            faq2q: "How much does Netflix cost?",
            faq2a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
            faq3q: "Where can I watch?",
            faq3a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.",
            questions: "Questions?",
            footerFAQ: "FAQ",
            footerHelp: "Help Centre",
            footerAccount: "Account",
            footerMedia: "Media Centre",
            footerInvestor: "Investor Relations",
            footerJobs: "Jobs",
            footerWays: "Ways to Watch",
            footerTerms: "Terms of Use",
            footerPrivacy: "Privacy",
            footerCookie: "Cookie Preferences",
            footerCorporate: "Corporate Information",
            footerContact: "Contact Us",
            footerSpeed: "Speed Test",
            footerLegal: "Legal Notices",
            footerOnly: "Only on Netflix",
            emailPhonePlaceholder: "Email or phone number",
            passwordPlaceholder: "Password",
            newToNetflix: "New to Netflix?",
            signUpNow: "Sign up now",
            signUp: "Sign Up",
            firstNamePlaceholder: "First name",
            lastNamePlaceholder: "Last name",
            alreadyHaveAccount: "Already have an account?",
            signInNow: "Sign in now"
        },
        hi: {
            signIn: "साइन इन करें",
            heroTitle: "अनलिमिटेड फ़िल्में, टीवी शो के अलावा भी बहुत कुछ",
            heroSubtitle: "कहीं भी देखें। कभी भी कैंसल करें।",
            heroMembership: "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें।",
            emailPlaceholder: "ईमेल एड्रेस",
            emailError: "कृपया एक मान्य ईमेल एड्रेस डालें।",
            getStarted: "शुरू करें",
            trendingNow: "अभी ट्रेंडिंग में",
            popularOnNetflix: "नेटफ्लिक्स पर लोकप्रिय",
            moreReasons: "शामिल होने के और कारण",
            enjoyOnTV: "अपने टीवी पर आनंद लें",
            enjoyOnTVDesc: "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के अलावा भी बहुत कुछ पर देखें।",
            downloadShows: "अपने शो डाउनलोड करें",
            downloadShowsDesc: "अपने पसंदीदा शो आसानी से सेव करें और हमेशा कुछ देखने के लिए तैयार रहें।",
            watchEverywhere: "हर जगह देखें",
            watchEverywhereDesc: "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।",
            profilesForKids: "बच्चों के लिए प्रोफ़ाइल बनाएं",
            profilesForKidsDesc: "बच्चों को उनके पसंदीदा किरदारों के साथ एक खास जगह में एडवेंचर पर भेजें।",
            faqTitle: "अक्सर पूछे जाने वाले सवाल",
            faq1q: "नेटफ्लिक्स क्या है?",
            faq1a: "नेटफ्लिक्स एक स्ट्रीमिंग सर्विस है, जो हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड-विनिंग टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ वगैरह ऑफ़र करती है।",
            faq2q: "नेटफ्लिक्स की लागत कितनी है?",
            faq2a: "सिर्फ़ एक तय मासिक शुल्क पर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें। प्लान ₹149 से लेकर ₹649 प्रति माह तक हैं। कोई अतिरिक्त लागत या अनुबंध नहीं।",
            faq3q: "मैं कहां देख सकता हूं?",
            faq3a: "कहीं भी, कभी भी देखें। अपने नेटफ्लिक्स अकाउंट से साइन इन करके वेब पर netflix.com पर तुरंत देखें, या किसी भी इंटरनेट-कनेक्टेड डिवाइस पर जिसमें नेटफ्लिक्स ऐप है।",
            questions: "कोई सवाल?",
            footerFAQ: "अक्सर पूछे जाने वाले सवाल",
            footerHelp: "सहायता केंद्र",
            footerAccount: "अकाउंट",
            footerMedia: "मीडिया सेंटर",
            footerInvestor: "इन्वेस्टर संबंध",
            footerJobs: "नौकरियां",
            footerWays: "देखने के तरीके",
            footerTerms: "उपयोग की शर्तें",
            footerPrivacy: "प्राइवेसी",
            footerCookie: "कुकी प्राथमिकताएं",
            footerCorporate: "कॉरपोरेट जानकारी",
            footerContact: "हमसे संपर्क करें",
            footerSpeed: "स्पीड टेस्ट",
            footerLegal: "कानूनी नोटिस",
            footerOnly: "सिर्फ़ नेटफ्लिक्स पर",
            emailPhonePlaceholder: "ईमेल या फ़ोन नंबर",
            passwordPlaceholder: "पासवर्ड",
            newToNetflix: "नेटफ्लिक्स पर नए हैं?",
            signUpNow: "अभी साइन अप करें",
            signUp: "साइन अप करें",
            firstNamePlaceholder: "पहला नाम",
            lastNamePlaceholder: "अंतिम नाम",
            alreadyHaveAccount: "पहले से ही एक खाता है?",
            signInNow: "अभी साइन इन करें"
        }
    };

    // DOM Elements
    const signInBtn = document.getElementById('signInBtn');
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const signUpNow = document.getElementById('signUpNow');
    const signInNow = document.getElementById('signInNow');
    const emailSignupForm = document.getElementById('emailSignupForm');
    const emailInput = document.getElementById('emailInput');
    const videoPlayer = document.getElementById('videoPlayer');
    const netflixVideo = document.getElementById('netflixVideo');
    const closeVideo = document.querySelector('.close-video');
    const langEnBtn = document.getElementById('langEn');
    const langHiBtn = document.getElementById('langHi');
    const langDisplay = document.getElementById('langDisplay');

    // --- NEW: Language Switching Function ---
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang][key]) {
                 // Handle button text which might contain icons
                if (el.tagName === 'BUTTON' && el.querySelector('i')) {
                    const iconHTML = el.querySelector('i').outerHTML;
                    el.innerHTML = `${translations[lang][key]} ${iconHTML}`;
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });

        const placeholders = document.querySelectorAll('[data-translate-key-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-translate-key-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        langDisplay.innerText = lang === 'hi' ? 'हिन्दी' : 'English';
        document.documentElement.lang = lang; // Update the lang attribute of the html tag
    }

    langEnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    langHiBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('hi');
    });

    // --- Modal Handling ---
    const openModal = (modal) => modal.style.display = 'flex';
    const closeModal = (modal) => modal.style.display = 'none';

    signInBtn.addEventListener('click', () => openModal(signInModal));
    signUpNow.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signInModal);
        openModal(signUpModal);
    });
    signInNow.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signUpModal);
        openModal(signInModal);
    });
    closeBtns.forEach(btn => btn.addEventListener('click', () => {
        closeModal(signInModal);
        closeModal(signUpModal);
    }));

    // --- Email Form Validation & Signup ---
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    emailSignupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('invalid');
            openModal(signUpModal);
            signUpModal.querySelector('input[type="email"]').value = emailInput.value;
        } else {
            emailInput.classList.add('invalid');
        }
    });

    // --- Content Display ---
    function fetchAndDisplayContent() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(MOCK_DATA);
            }, 500);
        });
    }

    function renderContent(container, items, isRanked = false) {
        container.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                ${isRanked ? `<span class="rank">${item.rank}</span>` : ''}
                <img src="${item.image}" alt="${item.title}">
            `;
            card.addEventListener('click', () => playVideo(item.video));
            container.appendChild(card);
        });
    }

    // --- Video Player ---
    function playVideo(videoSrc) {
        netflixVideo.src = videoSrc;
        videoPlayer.style.display = 'flex';
        netflixVideo.play();
    }

    function stopVideo() {
        videoPlayer.style.display = 'none';
        netflixVideo.pause();
        netflixVideo.currentTime = 0;
    }

    closeVideo.addEventListener('click', stopVideo);

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    // --- Close modals/video on outside click ---
    window.addEventListener('click', (e) => {
        if (e.target === signInModal) closeModal(signInModal);
        if (e.target === signUpModal) closeModal(signUpModal);
        if (e.target === videoPlayer) stopVideo();
    });

    // --- Initialize Page ---
    async function initialize() {
        const trendingContainer = document.getElementById('trendingContainer');
        const popularContainer = document.getElementById('popularContainer');

        try {
            const data = await fetchAndDisplayContent();
            renderContent(trendingContainer, data.trending, true);
            // FIX: Changed the third argument to `true` to show ranks
            renderContent(popularContainer, data.popular, true);
        } catch (error) {
            console.error("Failed to load content:", error);
            trendingContainer.innerHTML = "<p>Could not load trending content.</p>";
            popularContainer.innerHTML = "<p>Could not load popular content.</p>";
        }

        // Initialize with default language
        setLanguage('en');
    }

    initialize();
});