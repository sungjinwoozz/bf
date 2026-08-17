// ===========================
// MULTI-LANGUAGE TRANSLATIONS (TH / EN)
// ===========================
const translations = {
    th: {
        // Navigation
        "nav.home": "หน้าหลัก",
        "nav.services": "บริการ",
        "nav.vehicles": "รถบริการ",
        "nav.policy": "นโยบาย",
        "nav.gallery": "ผลงานของเรา",
        "nav.contact": "ติดต่อเรา",

        // Hero
        "hero.title": "บริการดี <span class=\"gradient-text\">ซื่อสัตย์</span><br>ความพึงพอใจของลูกค้าคือสิ่งสำคัญ",
        "hero.subtitle": "GOOD SERVICE, HONEST, CUSTOMER SATISFACTION IS OUR PRIORITY",
        "hero.btn_explore": "ดูบริการของเรา",
        "hero.btn_contact": "ติดต่อเรา",

        // AP Cargo Services
        "ap.badge": "OUR SERVICES",
        "ap.title": "บริการของเรา",
        "ap.subtitle": "บริการขนส่งและโลจิสติกส์ครบวงจร ทั้งทางเรือ ทางอากาศ และภาคพื้นดิน",
        "ap.view_all": "ดูบริการทั้งหมด",
        "ap.cta_title": "ต้องการคำปรึกษาหรือประเมินราคาขนส่ง?",
        "ap.cta_desc": "ทีมงานมืออาชีพของเราพร้อมตอบทุกข้อสงสัยและวางแผนการขนส่งที่ดีที่สุดสำหรับคุณ",
        "ap.sea_title": "บริการขนส่งทางเรือ",
        "ap.sea_desc1": "AP Cargo ให้บริการขนส่งสินค้าแบบ LCL/FCL ทั่วโลก จากทุกจุดต้นทางถึงปลายทาง มุ่งเน้นบริการขนส่งตรงระหว่างท่าเรือ เพื่อลดการขนถ่ายสินค้าให้น้อยที่สุด",
        "ap.sea_desc2": "เราผสมผสานความรู้ความเชี่ยวชาญในท้องถิ่นและการบริการดูแลลูกค้าอย่างเหนือระดับ พร้อมเครือข่ายระดับโลกที่มีความเชี่ยวชาญด้านการขนส่งทางเรือ",
        "ap.sea_sub": "สินค้าบรรจุคอนเทนเนอร์",
        "ap.sea_li1": "บริการ LCL/FCL",
        "ap.sea_li2": "สินค้าเทกอง / สินค้าทั่วไป (Break Bulk)",
        "ap.sea_li3": "บริการส่งถึงหน้าบ้าน (Door to Door)",
        "ap.air_title": "บริการขนส่งทางอากาศ",
        "ap.air_desc": "บริการขนส่งทางอากาศที่รวดเร็ว ครอบคลุมทั้งสนามบินถึงสนามบิน และบริการส่งถึงหน้าบ้านทั่วโลก",
        "ap.air_li1": "สนามบินถึงสนามบิน (Airport to Airport)",
        "ap.air_li2": "สนามบินถึงหน้าบ้าน (Airport to Door)",
        "ap.air_li3": "เช่าเหมาลำ (Charters)",
        "ap.air_li4": "รวมสินค้า (Consolidation)",
        "ap.air_li5": "ขนส่งสินค้าอันตราย (Dangerous Goods)",
        "ap.air_li6": "Direct IATA",
        "ap.air_li7": "หน้าบ้านถึงสนามบิน (Door to Airport)",
        "ap.air_li8": "หน้าบ้านถึงหน้าบ้าน (Door to Door)",
        "ap.air_li9": "Free Domicile",
        "ap.customs_title": "บริการพิธีการศุลกากร",
        "ap.customs_li1": "สินค้าทางอากาศ นำเข้า – ส่งออก",
        "ap.customs_li2": "สินค้าทางเรือ นำเข้า – ส่งออก",
        "ap.customs_desc": "AP Cargo ดำเนินพิธีการศุลกากรทั้งนำเข้าและส่งออกอย่างรวดเร็วและถูกต้อง ด้วยความสัมพันธ์อันดีและความเชี่ยวชาญในการประสานงานกับเจ้าหน้าที่ศุลกากร",
        "ap.customs_desc2": "การดำเนินพิธีการศุลกากรที่มีประสิทธิภาพ ช่วยให้การขนย้ายสินค้าเข้าและออกต่างประเทศเป็นไปอย่างราบรื่น รวดเร็ว ไร้อุปสรรค",
        "ap.transport_title": "บริการขนส่งและการรวมสินค้า",
        "ap.transport_desc": "บริการจัดการขนส่งสินค้าครบวงจรตั้งแต่ต้นทางถึงปลายทาง ทั้งการรับสินค้า ขนส่งระหว่างประเทศ และขนส่งภายในประเทศ",
        "ap.transport_li1": "ขนส่งภาคพื้นดิน, รถบรรทุกคอนเทนเนอร์",
        "ap.transport_li2": "เรือยกสินค้าหนัก คอนเทนเนอร์ และเรือทั่วไป",
        "ap.transport_li3": "รถเครนและรถบรรทุกขนส่งสินค้าหนักพิเศษ (Hydraulic Heavy Haulage)",
        "ap.transport_li4": "ขนส่งข้ามแดน (Cross Border)",
        "ap.packing_title": "บริการแพ็คและย้ายสินค้า",
        "ap.packing_li1": "บรรจุภัณฑ์ใช้ซ้ำได้ (Re-usable Packaging)",
        "ap.packing_li2": "บรรจุภัณฑ์ใช้ครั้งเดียว (One-Way Packaging)",
        "ap.packing_li3": "แพ็คกิ้งและตีลังไม้ (Packing & Crating)",
        "ap.packing_li4": "บริการขนย้าย (Moving)",
        "ap.packing_li5": "แพ็คอุปกรณ์เสริม (Accessories Packing)",
        "ap.cert_title": "ใบรับรอง",
        "ap.cert_reg": "จดทะเบียนเป็นนิติบุคคลเมื่อวันที่ <strong>15 มิถุนายน 2564</strong>",
        "ap.cert_no": "เลขทะเบียนนิติบุคคล: <strong>0105554077420</strong>",

        // Service Vehicles
        "veh.badge": "SERVICE VEHICLES",
        "veh.title": "รถ<span class=\"gradient-text\">บริการของเรา</span>",
        "veh.subtitle": "พร้อมให้บริการขนส่งครบวงจร ด้วยรถหลากหลายประเภท",
        "veh.4w_title": "รถ 4 ล้อ ตู้ทึบ",
        "veh.6wc_title": "รถ 6 ล้อ ติดเครน",
        "veh.6w_title": "รถ 6 ล้อ ตู้ทึบ",
        "veh.trailer_title": "รถเทรลเลอร์",
        "veh.robert_title": "รถโรเบท",
        "veh.cage_title": "6 ล้อคอก",

        // Gallery / Our Work
        "gallery.badge": "OUR WORK",
        "gallery.title": "ผลงาน<span class=\"gradient-text\">ของเรา</span>",
        "gallery.subtitle": "ภาพบรรยากาศการทำงานจริง ขนส่ง แพ็ค และจัดการสินค้าอย่างมืออาชีพ",

        // Policy
        "policy.badge": "นโยบาย",
        "policy.title": "นโยบาย<span class=\"gradient-text\">องค์กร</span>",
        "policy.subtitle": "มุ่งมั่นในการให้บริการที่มีคุณภาพสูงสุด",
        "policy.comp_title": "นโยบายองค์กร",
        "policy.comp_desc": "บริษัทฯ มุ่งมั่นในการให้บริการขนส่งสินค้าทุกรูปแบบอย่างครบวงจร ครอบคลุมทุกความต้องการของลูกค้า ด้วยมาตรฐานบริการที่ถูกต้อง รวดเร็ว และสร้างความเชื่อมั่น เพื่อให้ลูกค้าได้รับบริการที่มีคุณภาพและประสิทธิภาพสูงสุด",
        "policy.quality_title": "นโยบายบริหารงานคุณภาพ",
        "policy.q1": "การขนส่งปลอดภัย ครบถ้วน ถูกต้อง ตรงต่อเวลา และดูแลรักษาผลิตภัณฑ์สินค้าด้วยความสุจริตตามความต้องการของลูกค้า โดยบริษัทให้ความสำคัญเป็นอันดับสูงสุด",
        "policy.q2": "พัฒนาบุคลากรให้มีความมุ่งมั่น ปฏิบัติงานร่วมกับบริษัทฯ อย่างมีประสิทธิภาพ พร้อมวางระบบการทำงานอย่างเป็นระเบียบตามมาตรฐานคุณภาพสูงสุด",
        "policy.q3": "ความซื่อสัตย์และคุณภาพถือเป็นความรับผิดชอบและความสำคัญสูงสุดของพนักงานทุกคน",
        "policy.q4": "ปฏิบัติงานตามมาตรฐานสากลและกฎหมายอย่างเคร่งครัด พนักงานขับรถและผู้ปฏิบัติงานทุกคนต้องปราศจากแอลกอฮอล์และสารเสพติดขณะปฏิบัติหน้าที่",

        // Contact
        "contact.badge": "ติดต่อเรา",
        "contact.title": "พร้อม<span class=\"gradient-text\">ให้บริการ</span>",
        "contact.subtitle": "ติดต่อเราได้ทุกช่องทาง เรายินดีให้บริการ",
        "contact.addr2_title": "ที่อยู่",
        "contact.addr2_val": "999 หมู่ 7 อาคาร A04 ห้อง 425<br>อาคารปลอดอากรสุวรรณภูมิ ต.ราชาเทวะ<br>อ.บางพลี จ.สมุทรปราการ 10540",
        "contact.email_title": "อีเมล",
        "contact.phone_title": "โทรศัพท์",
        "contact.phone_val": "02-1346505, 02-1346772<br>062-7424956 (คุณโอ๋)",

        // Footer
        "footer.desc": "AP Cargo Logistics Co., Ltd. & BF Transport Co., Ltd. — บริการขนส่งคุณภาพ บริการดี ซื่อสัตย์ ความพึงพอใจของลูกค้าสำคัญ",
        "footer.menu_head": "เมนูลัด",
        "footer.rights": "&copy; 2026 AP Cargo Logistics & BF Transport. สงวนลิขสิทธิ์ทุกประการ."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.vehicles": "Vehicles",
        "nav.policy": "Policies",
        "nav.gallery": "Our Work",
        "nav.contact": "Contact Us",

        // Hero
        "hero.title": "Good Service, <span class=\"gradient-text\">Honest</span>,<br>Customer Satisfaction is Our Priority",
        "hero.subtitle": "GOOD SERVICE, HONEST, CUSTOMER SATISFACTION IS OUR PRIORITY",
        "hero.btn_explore": "Our Services",
        "hero.btn_contact": "Contact Us",

        // AP Cargo Services
        "ap.badge": "OUR SERVICES",
        "ap.title": "Our Services",
        "ap.subtitle": "Comprehensive logistics & freight services by Sea, Air, and Land",
        "ap.view_all": "View All Services",
        "ap.cta_title": "Need Advice or a Freight Quote?",
        "ap.cta_desc": "Our professional team is ready to answer questions and plan the best logistics solution for you.",
        "ap.sea_title": "Sea Freight Service",
        "ap.sea_desc1": "AP Cargo offers global LCL and FCL services from virtually any origin to destination worldwide. We focus on direct port-to-port routes to minimize cargo handling.",
        "ap.sea_desc2": "We uniquely combine local expertise and unparalleled personal customer service with global reach and expertise in ocean shipping.",
        "ap.sea_sub": "Containerized Cargo",
        "ap.sea_li1": "LCL/FCL Services",
        "ap.sea_li2": "Break Bulk / Conventional Cargo",
        "ap.sea_li3": "Door-to-Door Service",
        "ap.air_title": "Air Freight Service",
        "ap.air_desc": "Fast and reliable air freight services covering airport-to-airport and door-to-door solutions worldwide.",
        "ap.air_li1": "Airport to Airport",
        "ap.air_li2": "Airport to Door",
        "ap.air_li3": "Charters",
        "ap.air_li4": "Consolidation",
        "ap.air_li5": "Dangerous Goods Handling",
        "ap.air_li6": "Direct IATA",
        "ap.air_li7": "Door to Airport",
        "ap.air_li8": "Door to Door",
        "ap.air_li9": "Free Domicile",
        "ap.customs_title": "Customs Brokerage Service",
        "ap.customs_li1": "Airfreight Import – Export",
        "ap.customs_li2": "Seafreight Import – Export",
        "ap.customs_desc": "AP Cargo is a well-established freight organization. Customs clearance for both imports and exports is executed efficiently through strong working relationships with Customs Officers.",
        "ap.customs_desc2": "Efficient customs clearance ensures seamless, rapid, and hassle-free movement of goods across borders.",
        "ap.transport_title": "Transportation & Freight Consolidation",
        "ap.transport_desc": "End-to-end shipment management from origin to destination, covering cargo pickup, international freight, and local transport.",
        "ap.transport_li1": "Inland Transportation & Container Trucking",
        "ap.transport_li2": "Heavy Lift, Container, and Conventional Vessels",
        "ap.transport_li3": "Heavy Haulage Vehicles & Hydraulic Crane Operations",
        "ap.transport_li4": "Cross Border Transport",
        "ap.packing_title": "Packing & Moving Service",
        "ap.packing_li1": "Re-usable Packaging",
        "ap.packing_li2": "One-Way Packaging",
        "ap.packing_li3": "Packing & Crating",
        "ap.packing_li4": "Moving Services",
        "ap.packing_li5": "Accessories Packing",
        "ap.cert_title": "Certificate",
        "ap.cert_reg": "Registered as a Legal Entity on <strong>June 15, 2021</strong>",
        "ap.cert_no": "Legal Entity Registration Number: <strong>0105554077420</strong>",

        // Service Vehicles
        "veh.badge": "SERVICE VEHICLES",
        "veh.title": "Our <span class=\"gradient-text\">Service Vehicles</span>",
        "veh.subtitle": "Fully equipped transport fleet with various vehicle types",
        "veh.4w_title": "4 Wheels Closed Van",
        "veh.6wc_title": "6 Wheels Crane Truck",
        "veh.6w_title": "6 Wheels Closed Container",
        "veh.trailer_title": "Trailer Truck",
        "veh.robert_title": "Lowbed Trailer (Robert Truck)",
        "veh.cage_title": "6 Wheels Cage Truck",

        // Gallery / Our Work
        "gallery.badge": "OUR WORK",
        "gallery.title": "Our <span class=\"gradient-text\">Work</span>",
        "gallery.subtitle": "Real moments from our daily operations — shipping, packing, and cargo handling by professionals",

        // Policy
        "policy.badge": "POLICIES",
        "policy.title": "Corporate <span class=\"gradient-text\">Policies</span>",
        "policy.subtitle": "Committed to delivering the highest quality service",
        "policy.comp_title": "Corporate Policy",
        "policy.comp_desc": "The company is committed to providing comprehensive transport services across all regions to meet every customer requirement, emphasizing high quality, reliability, and maximum efficiency for all clients.",
        "policy.quality_title": "Quality Management Policy",
        "policy.q1": "Safe, complete, accurate, and on-time transportation, handling products with utmost care and integrity to achieve maximum customer satisfaction.",
        "policy.q2": "Develop high-quality personnel, foster teamwork, and maintain an organized quality management system for maximum performance.",
        "policy.q3": "Honesty and service quality are the core responsibility and commitment of every employee.",
        "policy.q4": "Strictly comply with international standards and laws. All operational staff and drivers must be completely free from alcohol and drugs while on duty.",

        // Contact
        "contact.badge": "CONTACT US",
        "contact.title": "Ready to <span class=\"gradient-text\">Serve You</span>",
        "contact.subtitle": "Reach out to us through any channel, we are glad to assist",
        "contact.addr2_title": "Address",
        "contact.addr2_val": "999 Moo 7, Building A04 Room 425<br>Suvarnabhumi Free Zone, Racha Thewa<br>Bang Phli, Samut Prakan 10540, Thailand",
        "contact.email_title": "Email",
        "contact.phone_title": "Phone",
        "contact.phone_val": "02-1346505, 02-1346772<br>062-7424956 (Khun Ao)",

        // Footer
        "footer.desc": "AP Cargo Logistics Co., Ltd. & BF Transport Co., Ltd. — Quality transportation and logistics with honesty and customer satisfaction.",
        "footer.menu_head": "Quick Links",
        "footer.rights": "&copy; 2026 AP Cargo Logistics & BF Transport. All Rights Reserved."
    }
};

let currentLang = localStorage.getItem('site_lang') || 'th';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    // Update lang attribute on html tag
    document.documentElement.lang = lang;

    // Update dropdown display text
    const langNames = { th: 'ไทย', en: 'English' };
    const langCurrent = document.getElementById('lang-current');
    if (langCurrent) langCurrent.textContent = langNames[lang];

    // Update active state on dropdown options
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Close dropdown after selection
    document.getElementById('lang-dropdown')?.classList.remove('open');

    // Update text content / HTML of elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholder attributes
    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// Initialize Language on Page Load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Language Dropdown toggle
    const langDropdown = document.getElementById('lang-dropdown');
    const langDropdownBtn = document.getElementById('lang-dropdown-btn');

    if (langDropdownBtn && langDropdown) {
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });

        // Language option clicks
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }
});

// Clear any previous dark mode setting
localStorage.removeItem('site_theme');
document.documentElement.removeAttribute('data-theme');


// ===========================
// HEADER SCROLL EFFECT
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    // Only handle scroll nav highlighting on main page with multiple sections
    if (window.location.pathname.includes('service-')) {
        return;
    }

    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${sectionId}`) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.car-card, .service-detail-card, .service-preview-card, .policy-card, .contact-map-card, .contact-info-card, .section-header, .gallery-item, .split-service-item'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

initRevealAnimations();

// ===========================
// SMOOTH PARALLAX ON MOUSE MOVE (Hero only)
// ===========================
const heroSection = document.querySelector('.hero');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const particles = heroSection.querySelectorAll('.particle');
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        particles.forEach((particle, i) => {
            const speed = (i + 1) * 8;
            particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// ===========================
// IMAGE SLIDESHOW
// ===========================
(function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');

    if (!slides.length) return;

    let currentSlide = 0;
    let autoPlayInterval = null;
    const AUTOPLAY_DELAY = 5000;

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-dot'), 10);
            goToSlide(index);
            startAutoPlay();
        });
    });

    const wrapper = document.querySelector('.hero');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoPlay);
        wrapper.addEventListener('mouseleave', startAutoPlay);
    }

    document.addEventListener('keydown', (e) => {
        if (!wrapper) return;
        const rect = wrapper.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;
        if (e.key === 'ArrowLeft') { prevSlide(); startAutoPlay(); }
        if (e.key === 'ArrowRight') { nextSlide(); startAutoPlay(); }
    });

    startAutoPlay();
})();

// ===========================
// DISABLE RIGHT-CLICK CONTEXT MENU
// ===========================
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ===========================
// FLOATING CONTACT BUTTON TOGGLE
// ===========================
const floatingBtn = document.getElementById('floating-contact-btn');
const floatingContact = document.getElementById('floating-contact');

if (floatingBtn && floatingContact) {
    floatingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        floatingContact.classList.remove('active');
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    document.addEventListener('click', (e) => {
        if (!floatingContact.contains(e.target)) {
            floatingContact.classList.remove('active');
        }
    });
}
