async function getHoroscope() {
    const sign = document.getElementById('star-sign').value;
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '/');
    const url = `http://api.jugemkey.jp/api/horoscope/free/${today}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const horoscope = data.horoscope[today].find(h => h.sign === sign);

        document.getElementById('result').innerHTML = `
            <h2>${horoscope.sign}</h2>
            <p>${horoscope.content}</p>
            <p>ラッキーアイテム: ${horoscope.item}</p>
            <p>ラッキーカラー: ${horoscope.color}</p>
            <p>総合運: ${'★'.repeat(horoscope.total)}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerText = '占いの取得に失敗しました。';
    }
}
