document.addEventListener('DOMContentLoaded', function() {
    // 语言下拉交互
    const langDropdown = document.querySelector('.lang-dropdown');
    const langTrigger = document.querySelector('.lang-trigger');
    const langOptions = document.querySelectorAll('.lang-option');
    const langText = document.querySelector('.lang-text');

    // 初始化语言（默认英文）
    let currentLang = localStorage.getItem('fate-lang') || 'en';
    updateLangUI(currentLang);
    switchLanguage(currentLang);

    // 展开/收起下拉框
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
    });

    // 切换语言
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            currentLang = option.dataset.lang;
            localStorage.setItem('fate-lang', currentLang);
            updateLangUI(currentLang);
            switchLanguage(currentLang);
            langDropdown.classList.remove('open');
        });
    });

    // 更新语言按钮文字
    function updateLangUI(lang) {
        langText.textContent = lang === 'en' ? '切换语言' : 'Language';
        langOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.lang === lang) opt.classList.add('active');
        });
    }

    // 切换页面内容
    function switchLanguage(lang) {
        const enContents = document.querySelectorAll('.en-content');
        const zhContents = document.querySelectorAll('.zh-content');
        
        if (lang === 'en') {
            enContents.forEach(el => el.style.display = 'block');
            zhContents.forEach(el => el.style.display = 'none');
            document.documentElement.lang = 'en';
        } else {
            enContents.forEach(el => el.style.display = 'none');
            zhContents.forEach(el => el.style.display = 'block');
            document.documentElement.lang = 'zh-CN';
        }
    }
});
