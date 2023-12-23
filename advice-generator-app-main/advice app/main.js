const url = 'https://api.adviceslip.com/advice';

async function quote() {
  const request = await fetch(url);
  const result = await request.json();
const final = result.slip;
  console.log(final)
  const html5 = `<p>advice #${final.id}</p>
  <div>
    "${final.advice}."
  </div>`;
  console.log(html5)
  document.querySelector('.content').innerHTML =html5;
}
quote()
document.querySelector('.button').addEventListener('click',quote)