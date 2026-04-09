window.initLegalPage = (copy) => {
  const applyLanguage = (language) => {
    const bundle = copy[language] || copy.zh;
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = bundle.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (key in bundle) {
        const value = bundle[key];
        if (typeof value === "string" && value.includes("<")) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (key in bundle) {
        element.innerHTML = bundle[key];
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      const isActive = button.dataset.langToggle === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem("erc-language", language);
    } catch (error) {
      console.debug("Language preference could not be stored.", error);
    }
  };

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langToggle);
    });
  });

  let savedLanguage = "zh";

  try {
    savedLanguage = localStorage.getItem("erc-language") || "zh";
  } catch (error) {
    console.debug("Language preference could not be read.", error);
  }

  applyLanguage(savedLanguage === "en" ? "en" : "zh");
};
