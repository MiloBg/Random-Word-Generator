let words = document.querySelector(".words");
let generate = document.querySelector(".generate");

const randomWords = ['Tisch', 'Hund', 'Frühling','Teppich', 'Schlüssel', 'Job', 'Schrank', 'Sessel', 'Stuhl',
                    'Frau', 'Wolke', 'Straße', 'Schule', 'Lampe', 'Couch',
                    'Kind', 'Auto', 'Sofa', 'Bett', 'Bild'];

generate.addEventListener('click', ()=>{
    let gen = Math.floor(Math.random() * randomWords.length);
    words.innerHTML = randomWords[gen];
});
