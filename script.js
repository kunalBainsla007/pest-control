/**
 * VEER PEST CONTROL SERVICES (VPS) - JAVASCRIPT APPLICATION LOGIC
 * High-performance vanilla ES6+ script powering interactive features,
 * quote calculator, direct WhatsApp booking (9887147882), modals & validation.
 */

const WHATSAPP_NUMBER = '919887147882';

// ==========================================================================
// 1. DATA DICTIONARIES (Services Data for Dynamic Modal)
// ==========================================================================
const SERVICES_DATA = {
  termite: {
    title: 'Termite Control & Wood Shield Treatment',
    category: 'Wood & Structural Defense',
    icon: 'fa-shield-virus',
    price: 'From ₹1,499',
    warranty: '1 to 5-Year Renewable Guarantee',
    description: 'Our DRILL-FILL-SEAL method injects eco-friendly termiticide at 12-inch intervals along perimeter walls and foundation pillars. This forms an impenetrable chemical barrier that eliminates existing subterranean colonies and prevents future invasions for years.',
    processSteps: [
      'Comprehensive moisture & acoustic wall inspection to trace hidden termite galleries',
      'Precision drilling at 45-degree angles with specialized diamond-tipped drill bits',
      'High-pressure chemical infusion using Bayer Premise / Termidor formulation',
      'Aesthetic color-matched sealing of all drill holes leaving zero visible marks'
    ],
    safety: '100% Odorless, non-staining, and safe for all indoor environments once sealed.'
  },
  cockroach: {
    title: 'Advanced Cockroach Herbal Gel Baiting',
    category: 'Kitchen & Sanitation Defense',
    icon: 'fa-bug',
    price: 'From ₹799',
    warranty: '90-Day Money-Back Warranty',
    description: 'We deploy an innovative domino-effect baiting protocol. German and American cockroaches consume our proprietary attractant gel, return to their nests, and spread the lethal active agent throughout the entire population, eliminating hidden egg sacs and nymphs.',
    processSteps: [
      'Strategic application of odorless herbal gel micro-dots in drawer hinges and cracks',
      'Targeted micron spray along baseboards, drainage traps, and motor casings',
      'Zero requirement to empty kitchen crockery, spices, or cooking utensils',
      'Second-stage nymph disruption preventing secondary lifecycle hatchings'
    ],
    safety: 'Completely non-toxic to mammals, zero fumes, no kitchen vacating needed.'
  },
  rodent: {
    title: 'Rodent & Rat Proofing & Exclusion',
    category: 'Structural Rodent Management',
    icon: 'fa-shield-halved',
    price: 'From ₹999',
    warranty: '180-Day Defense Warranty',
    description: 'A comprehensive 3-tier exclusion strategy: entry hole physical proofing with chew-resistant steel mesh, lockable tamper-proof exterior bait stations, and interior ultrasonic sound repellers to eliminate rats without foul odors.',
    processSteps: [
      'Complete structural audit identifying pipe gaps, vents, and roof entry points',
      'Installation of heavy-gauge galvanized steel mesh & expansion foam proofing',
      'Deployment of pet-safe lockable tamper-resistant bait stations',
      'Odorless tracking powder and humane multi-catch trap placement'
    ],
    safety: 'All rodent bait is strictly locked inside child-and-pet tamper-proof stations.'
  },
  bedbug: {
    title: 'Bed Bug Thermal Steam & Contact Mist Treatment',
    category: 'Intensive Sleep Sanitation',
    icon: 'fa-virus-slash',
    price: 'From ₹1,299',
    warranty: '90-Day Free Callback Warranty',
    description: 'Our intensive 2-stage bed bug treatment combines 180°C dry superheated steam to instantly kill heat-sensitive bed bug eggs with micro-encapsulated synthetic pyrethroid mist for deep mattress and headboard penetration.',
    processSteps: [
      'Detailed inspection of mattress seams, bed frames, switchboards, and headboards',
      'High-temperature dry steam treatment penetrating up to 3 inches of fabric',
      'Odorless contact spray application with residual egg-hatch inhibitors',
      'Complementary follow-up visit on Day 14 to verify total eradication'
    ],
    safety: 'Safe to re-enter bedroom after 2 hours of normal air circulation.'
  },
  mosquito: {
    title: 'Mosquito & Vector Defense Program',
    category: 'Outdoor & Vector Control',
    icon: 'fa-mosquito',
    price: 'From ₹699',
    warranty: 'Seasonal Barrier Guarantee',
    description: 'Target mosquitoes at both larval and adult stages. We treat stagnant water spots with eco-larvicides and apply ultra-low volume (ULV) cold misting to garden foliage, balcony corners, and drainage perimeter.',
    processSteps: [
      'Larvicide biological treatment in drains, gutters, and plant saucer puddles',
      'ULV foliage barrier spray targeting adult mosquito resting harborages',
      'Micro-encapsulated water-resistant formula that withstands rain showers',
      'Reduces mosquito activity by up to 95% within 24 hours'
    ],
    safety: 'Botanical formulation friendly to pollinators and beneficial garden insects.'
  },
  general: {
    title: 'Comprehensive General Pest Maintenance',
    category: 'Quarterly Home Shield',
    icon: 'fa-spray-can-sparkles',
    price: 'From ₹899',
    warranty: 'Quarterly Re-visit Coverage',
    description: 'An all-in-one preventative defense covering ants, spiders, silverfish, lizards, crickets, and centipedes across all living areas, bathrooms, balconies, and duct shafts.',
    processSteps: [
      'Perimeter spray along baseboards, window sills, and balcony thresholds',
      'Drainage foaming treatment targeting drain flies and bathroom insects',
      'Crack & crevice dusting behind heavy appliances and storage closets',
      'Quarterly proactive barrier replenishment'
    ],
    safety: 'Odorless, non-staining, hypoallergenic, and pet-friendly formulation.'
  },
  commercial: {
    title: 'Commercial & Restaurant Pest Audit & Compliance',
    category: 'FSSAI & Health Board Compliance',
    icon: 'fa-store',
    price: 'Custom Enterprise Quote',
    warranty: '100% Audit-Passing Guarantee',
    description: 'Specialized pest defense designed for food handling facilities, hospitality, warehouses, and IT offices. We provide barcode-scanned station tracking, trend analysis, and official documentation required by health safety boards.',
    processSteps: [
      'Initial baseline risk assessment and critical control point (CCP) mapping',
      'Barcoded bait station and insect light trap (ILT) installation',
      'Discreet after-hours service to avoid customer interference',
      'Cloud-accessible audit logbooks, SDS certificates, and trend graphs'
    ],
    safety: 'Exceeds FSSAI and local commercial food hygiene regulatory standards.'
  },
  woodborer: {
    title: 'Wood Borer & Timber Preservation',
    category: 'Valuable Furniture Protection',
    icon: 'fa-tree',
    price: 'From ₹1,199',
    warranty: '2-Year Timber Guarantee',
    description: 'Powder post beetles and wood borers destroy furniture from the inside out. We use precision needle syringe injection to pump specialized petroleum-based wood preservatives directly into flight pinholes.',
    processSteps: [
      'Identification of active powder frass (yellow wood dust fall) locations',
      'Micro-injection into every individual flight exit hole',
      'Surface chemical absorption coating over unvarnished back timber panels',
      'Stops timber internal hollow decay permanently'
    ],
    safety: 'Dries clear with no discoloration or damage to polished wooden finishes.'
  }
};

// ==========================================================================
// 2. DOM CONTENT LOADED INITIALIZER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initScrollspy();
  initStatsCounter();
  initCostCalculator();
  initServiceFilter();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
  setCurrentYear();
});

// ==========================================================================
// 3. STICKY HEADER & SCROLL BEHAVIOR
// ==========================================================================
function initStickyHeader() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================================================
// 4. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileDrawer() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .btn-drawer-book');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================================================
// 5. SCROLLSPY (Active Navigation Links)
// ==========================================================================
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ==========================================================================
// 6. ANIMATED STATS COUNTER
// ==========================================================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 2000;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = isDecimal 
              ? (easeProgress * target).toFixed(1)
              : Math.floor(easeProgress * target).toLocaleString();

            stat.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              stat.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
            }
          }

          requestAnimationFrame(updateCount);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) observer.observe(statsSection);
}

// ==========================================================================
// 7. INTERACTIVE PEST COST CALCULATOR
// ==========================================================================
function initCostCalculator() {
  const form = document.getElementById('priceCalculatorForm');
  if (!form) return;

  const propertyInputs = form.querySelectorAll('input[name="propertyType"]');
  const pestSelect = document.getElementById('calcPestType');
  const severityRange = document.getElementById('severityRange');
  const priceDisplay = document.getElementById('calculatedPrice');
  const warrantyText = document.getElementById('calcWarrantyText');

  const severityLabels = {
    1: document.getElementById('severityLow'),
    2: document.getElementById('severityMed'),
    3: document.getElementById('severityHigh')
  };

  // Base costs in INR (1 BHK, Mild)
  const basePestRates = {
    cockroach: { base: 799, warranty: '90-Day Free Re-visit Guarantee' },
    termite: { base: 1499, warranty: '1 to 5-Year Renewable Warranty' },
    bedbug: { base: 1299, warranty: '90-Day Free Re-treatment Warranty' },
    rodent: { base: 999, warranty: '180-Day Defense Warranty' },
    mosquito: { base: 699, warranty: '60-Day Seasonal Protection' },
    general: { base: 899, warranty: 'Quarterly Maintenance Coverage' }
  };

  // Property multipliers
  const propertyMultipliers = {
    '1bhk': 1.0,
    '2bhk': 1.35,
    '3bhk': 1.7,
    'villa': 2.3,
    'commercial': 2.8
  };

  // Severity multipliers
  const severityMultipliers = {
    1: 1.0,
    2: 1.25,
    3: 1.55
  };

  function calculate() {
    let selectedProp = '1bhk';
    propertyInputs.forEach(input => {
      if (input.checked) selectedProp = input.value;
    });

    const selectedPest = pestSelect.value;
    const severityVal = parseInt(severityRange.value, 10);

    // Update severity label styling
    Object.keys(severityLabels).forEach(key => {
      if (severityLabels[key]) {
        severityLabels[key].classList.toggle('active', parseInt(key, 10) === severityVal);
      }
    });

    const pestInfo = basePestRates[selectedPest] || { base: 799, warranty: '90-Day Guarantee' };
    const propMult = propertyMultipliers[selectedProp] || 1.0;
    const sevMult = severityMultipliers[severityVal] || 1.0;

    const estimatedTotal = Math.round(pestInfo.base * propMult * sevMult);

    if (priceDisplay) {
      priceDisplay.textContent = estimatedTotal.toLocaleString('en-IN');
    }
    if (warrantyText) {
      warrantyText.innerHTML = `<i class="fa-solid fa-shield-check"></i> ${pestInfo.warranty}`;
    }
  }

  // Event Listeners
  propertyInputs.forEach(input => input.addEventListener('change', calculate));
  pestSelect.addEventListener('change', calculate);
  severityRange.addEventListener('input', calculate);

  // Initial calculation
  calculate();
}

/**
 * Transfers calculated quote info directly to Contact form and smooth scrolls
 */
function bookCalculatedQuote() {
  const propertyInput = document.querySelector('input[name="propertyType"]:checked');
  const pestSelect = document.getElementById('calcPestType');
  const priceDisplay = document.getElementById('calculatedPrice');

  const propertyNames = {
    '1bhk': '1 BHK / Studio Apartment',
    '2bhk': '2 BHK Apartment',
    '3bhk': '3+ BHK Independent Home',
    'villa': 'Independent Villa / Estate',
    'commercial': 'Commercial Office / Restaurant'
  };

  const serviceMap = {
    'cockroach': 'Cockroach Control',
    'termite': 'Termite Control',
    'bedbug': 'Bed Bug Treatment',
    'rodent': 'Rodent Control',
    'mosquito': 'Mosquito Defense',
    'general': 'General Pest Control'
  };

  const propVal = propertyInput ? propertyInput.value : '1bhk';
  const pestVal = pestSelect ? pestSelect.value : 'cockroach';
  const price = priceDisplay ? priceDisplay.textContent : '799';

  // Populate booking form
  const formService = document.getElementById('serviceNeeded');
  const formProp = document.getElementById('propertySize');
  const formDesc = document.getElementById('problemDescription');

  if (formService && serviceMap[pestVal]) {
    formService.value = serviceMap[pestVal];
  }
  if (formProp && propertyNames[propVal]) {
    formProp.value = propertyNames[propVal];
  }
  if (formDesc) {
    formDesc.value = `Estimated Instant Quote: ₹${price} for ${propertyNames[propVal]}.`;
  }

  // Smooth scroll to contact
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast('Quote Applied!', `Locked estimate: ₹${price}. Please provide your contact info to confirm.`);
}

/**
 * Sends calculated quote directly to WhatsApp (9887147882)
 */
function sendCalculatedQuoteToWhatsApp() {
  const propertyInput = document.querySelector('input[name="propertyType"]:checked');
  const pestSelect = document.getElementById('calcPestType');
  const priceDisplay = document.getElementById('calculatedPrice');

  const propertyNames = {
    '1bhk': '1 BHK / Studio',
    '2bhk': '2 BHK Flat',
    '3bhk': '3+ BHK Home',
    'villa': 'Independent Villa',
    'commercial': 'Commercial Space'
  };

  const propName = propertyNames[propertyInput ? propertyInput.value : '1bhk'] || 'Home';
  const pestName = pestSelect ? pestSelect.options[pestSelect.selectedIndex].text : 'Pest Control';
  const price = priceDisplay ? priceDisplay.textContent : '799';

  const message = `Hello Veer Pest Control Services, I calculated an estimate on your website:%0A- *Property:* ${propName}%0A- *Pest Issue:* ${pestName}%0A- *Estimated Price:* ₹${price}%0APlease let me know the earliest available slot for inspection.`;
  
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

// ==========================================================================
// 8. SERVICE FILTER TABS
// ==========================================================================
function initServiceFilter() {
  const tabs = document.querySelectorAll('#serviceFilterTabs .tab-btn');
  const cards = document.querySelectorAll('.service-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// ==========================================================================
// 9. SERVICE DETAILS MODAL
// ==========================================================================
function openServiceModal(serviceKey) {
  const service = SERVICES_DATA[serviceKey];
  const modal = document.getElementById('serviceModal');
  const content = document.getElementById('modalContent');

  if (!service || !modal || !content) return;

  let stepsHtml = '';
  service.processSteps.forEach((step, idx) => {
    stepsHtml += `
      <li>
        <i class="fa-solid fa-circle-check"></i>
        <div><strong>Step ${idx + 1}:</strong> ${step}</div>
      </li>
    `;
  });

  content.innerHTML = `
    <div class="modal-header-visual">
      <div class="modal-icon-wrap">
        <i class="fa-solid ${service.icon}"></i>
      </div>
      <div class="modal-title-wrap">
        <div class="modal-meta-tag">${service.category}</div>
        <h3>${service.title}</h3>
      </div>
    </div>

    <p class="modal-text">${service.description}</p>

    <h4 class="modal-section-title"><i class="fa-solid fa-list-check text-accent"></i> Standard Treatment Protocol:</h4>
    <ul class="modal-feature-list">
      ${stepsHtml}
    </ul>

    <div class="contact-guarantee-box mb-3">
      <i class="fa-solid fa-leaf text-accent"></i>
      <div>
        <strong>Safety & Health Commitment</strong>
        <p>${service.safety}</p>
      </div>
    </div>

    <div class="modal-footer-cta">
      <div>
        <span class="service-price">Standard Pricing: <strong>${service.price}</strong></span>
        <div class="text-accent" style="font-size: 0.8rem; font-weight: 700;">
          <i class="fa-solid fa-award"></i> ${service.warranty}
        </div>
      </div>
      <button class="btn btn-whatsapp-header" onclick="bookOnWhatsAppModal('${service.title}')">
        <i class="fa-brands fa-whatsapp"></i> WhatsApp Quote
      </button>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close on backdrop click & Escape key
window.addEventListener('click', (e) => {
  const modal = document.getElementById('serviceModal');
  if (e.target === modal) {
    closeServiceModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeServiceModal();
  }
});

function bookOnWhatsAppModal(serviceName) {
  closeServiceModal();
  const message = `Hello Veer Pest Control Services, I would like to book *${serviceName}*. Please let me know your availability and charges.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ==========================================================================
// 10. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================================================
// 11. CONTACT & BOOKING FORM VALIDATION + DIRECT WHATSAPP SUBMIT
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('leadBookingForm');
  if (!form) return;

  const nameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const emailInput = document.getElementById('emailAddress');
  const serviceSelect = document.getElementById('serviceNeeded');
  const submitBtn = document.getElementById('submitBtn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return phone.replace(/[^0-9]/g, '').length >= 7;
  }

  function setError(input, errorId, show) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.toggle('has-error', show);
    }
  }

  [nameInput, phoneInput, emailInput, serviceSelect].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        setError(input, null, false);
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, 'nameError', true);
      isValid = false;
    } else {
      setError(nameInput, 'nameError', false);
    }

    if (!phoneInput.value.trim() || !validatePhone(phoneInput.value)) {
      setError(phoneInput, 'phoneError', true);
      isValid = false;
    } else {
      setError(phoneInput, 'phoneError', false);
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      setError(emailInput, 'emailError', true);
      isValid = false;
    } else {
      setError(emailInput, 'emailError', false);
    }

    if (!serviceSelect.value) {
      setError(serviceSelect, 'serviceError', true);
      isValid = false;
    } else {
      setError(serviceSelect, 'serviceError', false);
    }

    if (!isValid) return;

    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Processing Request...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;

      const clientName = nameInput.value.trim();
      const serviceChosen = serviceSelect.value;
      const isUrgent = document.getElementById('urgentBooking')?.checked;

      form.reset();

      showToast(
        `Booking Confirmed, ${clientName}!`,
        `${isUrgent ? 'Priority Emergency Dispatch.' : 'Request Logged.'} Our expert will call/WhatsApp you on 9887147882 in under 15 minutes regarding your ${serviceChosen}.`
      );
    }, 900);
  });
}

/**
 * Direct WhatsApp Form Submitter
 */
function submitToWhatsApp() {
  const name = document.getElementById('fullName').value.trim() || 'Client';
  const phone = document.getElementById('phoneNumber').value.trim() || 'Not specified';
  const service = document.getElementById('serviceNeeded').value || 'Pest Control';
  const propSize = document.getElementById('propertySize').value;
  const date = document.getElementById('preferredDate').value || 'Earliest available';
  const notes = document.getElementById('problemDescription').value.trim();
  const isUrgent = document.getElementById('urgentBooking')?.checked;

  const msg = `*New Inspection Booking - Veer Pest Control*%0A%0A` +
    `👤 *Name:* ${name}%0A` +
    `📞 *Phone:* ${phone}%0A` +
    `🐛 *Service:* ${service}%0A` +
    `🏠 *Property Size:* ${propSize}%0A` +
    `📅 *Preferred Date:* ${date}%0A` +
    `🚨 *Emergency Same-Day:* ${isUrgent ? 'YES (Urgent)' : 'Standard'}%0A` +
    (notes ? `📝 *Notes:* ${notes}%0A` : '') +
    `%0APlease confirm the inspection time.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}

// ==========================================================================
// 12. TOAST NOTIFICATIONS
// ==========================================================================
let toastTimeout;
function showToast(title, message) {
  const toast = document.getElementById('successToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMessage');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    hideToast();
  }, 6000);
}

function hideToast() {
  const toast = document.getElementById('successToast');
  if (toast) {
    toast.classList.remove('show');
  }
}

// ==========================================================================
// 13. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// 14. CURRENT YEAR HELPER
// ==========================================================================
function setCurrentYear() {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
