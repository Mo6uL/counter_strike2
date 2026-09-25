function filterWeapons(category, e) {
    document.querySelectorAll('.filter-buttons .btn').forEach(btn => btn.classList.remove('active'));
    if (e) e.target.classList.add('active');

    document.querySelectorAll('.weapon-item').forEach(item => {
        item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
    });
}

document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const ans = q.nextElementSibling;
        const isVisible = ans.style.display === 'block';
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        ans.style.display = isVisible ? 'none' : 'block';
    });
});

document.getElementById('cs2-quiz').addEventListener('submit', (e) => {
    e.preventDefault();
    const q1 = e.target.q1.value;
    const q2 = e.target.q2.value;
    const result = document.getElementById('quiz-result');

    if (!q1 || !q2) {
        result.textContent = "Vyplňte všechny otázky!";
        result.style.color = "#ff4d4d";
        return;
    }

    let score = (q1 === '13' ? 1 : 0) + (q2 === 'source2' ? 1 : 0);
    result.textContent = `Výsledek: ${score} z 2 správně!`;
    result.style.color = score === 2 ? "#a6ce39" : "#de9b35";
});