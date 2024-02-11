// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
}

function email() {
    document.getElementById("email").addEventListener("click", function () {
        // Endereço de email para o destinatário
        var destinatario = "luhcotmel@gmail.com";

        // Assunto do email
        var assunto = "Parcerias com O PROJETO";

        // Corpo do email
        var corpoEmail = "";

        // Monta o link de email com os dados
        var linkEmail = "mailto:" + destinatario +
            "?subject=" + encodeURIComponent(assunto) +
            "&body=" + encodeURIComponent(corpoEmail);

        // Abre o cliente de email padrão com os dados preenchidos
        window.location.href = linkEmail;
    });
};
email();

