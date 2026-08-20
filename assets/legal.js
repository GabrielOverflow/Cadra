(() => {
  const requested = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('focra-legal-language');
  const preferred = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const initial = requested === 'zh' || requested === 'en'
    ? requested
    : saved === 'zh' || saved === 'en'
      ? saved
      : preferred;

  function setLanguage(language) {
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.querySelectorAll('[data-lang]').forEach(element => {
      element.hidden = element.getAttribute('data-lang') !== language;
    });
    document.querySelectorAll('[data-language-button]').forEach(button => {
      button.setAttribute(
        'aria-pressed',
        String(button.getAttribute('data-language-button') === language),
      );
    });
    localStorage.setItem('focra-legal-language', language);
  }

  document.querySelectorAll('[data-language-button]').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-language-button'));
    });
  });
  setLanguage(initial);
})();
/* global location, localStorage */
