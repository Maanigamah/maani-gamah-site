document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
menuToggle && menuToggle.addEventListener('click', () => {
  if (nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// ضع رابط Formspree هنا عندما تنشئه:
const FORMSPREE_ENDPOINT = "";

form.addEventListener('submit', function(e){
  e.preventDefault();
  status.textContent = 'جاري الإرسال...';
  const data = new FormData(form);

  if (FORMSPREE_ENDPOINT) {
    fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { 'Accept':'application/json' } })
      .then(() => {
        status.textContent = 'تم الإرسال بنجاح. سنرد عليك قريبًا.';
        form.reset();
      })
      .catch(() => status.textContent = 'فشل الإرسال. تأكد من الإعداد.');
    return;
  }

  setTimeout(() => {
    status.textContent = 'تم الإرسال (تجريبي). أضف رابط Formspree لتفعيل الإرسال الحقيقي.';
    form.reset();
  }, 600);
});
