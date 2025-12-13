// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    if (nav.style.display === 'flex') {
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '68px';
      nav.style.left = '16px';
      nav.style.right = '16px';
      nav.style.background = 'rgba(11,28,45,0.92)';
      nav.style.border = '1px solid rgba(255,255,255,0.12)';
      nav.style.borderRadius = '14px';
      nav.style.padding = '10px';
      nav.style.backdropFilter = 'blur(10px)';
    }
  });
}

// Form submission (Formspree)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

// ضع رابط فورمسبري هنا بعد إنشائه
// مثال: https://formspree.io/f/abcdefg
const FORMSPREE_ENDPOINT = "";

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (statusEl) statusEl.textContent = 'جاري الإرسال...';

    const data = new FormData(form);

    // Demo mode if not configured
    if (!FORMSPREE_ENDPOINT) {
      setTimeout(() => {
        if (statusEl) statusEl.textContent = 'تم الإرسال (تجريبي). أضف رابط Formspree لتفعيل الإرسال إلى بريدك.';
        form.reset();
      }, 700);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (statusEl) statusEl.textContent = 'تم الإرسال بنجاح. سنرد عليك قريبًا.';
        form.reset();
      } else {
        if (statusEl) statusEl.textContent = 'تعذّر الإرسال الآن. حاول مرة أخرى.';
      }
    } catch {
      if (statusEl) statusEl.textContent = 'فشل الاتصال. تحقق من الشبكة أو إعداد الرابط.';
    }
  });
}
