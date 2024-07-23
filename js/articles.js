document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("#content article");

    articles.forEach(article => {
        const header = article.querySelector("h2");
        header.addEventListener("click", () => {
            articles.forEach(a => {
                if (a !== article) a.classList.remove("expanded");
            });
            article.classList.toggle("expanded");
        });
    });

    const chapterCount = document.getElementById("chapter-count");
    chapterCount.textContent = `${articles.length} chapitres`;
});
