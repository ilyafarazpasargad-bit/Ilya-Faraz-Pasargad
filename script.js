function toggleLanguage() {
  const lang = document.body.getAttribute('data-lang');
  const newLang = lang === 'en' ? 'fa' : 'en';
  document.body.setAttribute('data-lang', newLang);

  const enSections = document.querySelectorAll('.lang-en');
  const faSections = document.querySelectorAll('.lang-fa');

  enSections.forEach(el => el.style.display = newLang === 'en' ? 'block' : 'none');
  faSections.forEach(el => el.style.display = newLang === 'fa' ? 'block' : 'none');

  document.getElementById('lang-toggle').textContent = newLang === 'en' ? 'فارسی' : 'English';
  document.body.dir = newLang === 'fa' ? 'rtl' : 'ltr';
}
