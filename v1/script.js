const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

// Selecting DOM elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render facts in List
factsList.innerHTML = '';
// createFactsList(initialFacts);

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    'https://lxnufytjhrrdgrdkwtrs.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bnVmeXRqaHJyZGdyZGt3dHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzE2MzUsImV4cCI6MjA0MDYwNzYzNX0.igx37Q1Yolo0POEGZEfSE790irryyVl0v87866w9-p4',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bnVmeXRqaHJyZGdyZGt3dHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzE2MzUsImV4cCI6MjA0MDYwNzYzNX0.igx37Q1Yolo0POEGZEfSE790irryyVl0v87866w9-p4',
      },
    }
  );

  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === 'society');
  // createFactsList(filteredData);
  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML('afterbegin', '<li>Jonas</li>');

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
   ${fact.text}
  <a class="source" href="${fact.source}" target="_blank">(Source)</a>
  </p>
  <span class="tag" style="background-color:${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">${fact.category}</span>
  </li>`
  );

  console.log(htmlArr);
  const html = htmlArr.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

// Toggle form visibility
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});

/*

function calcFactAge(year) {
  const currYear = new Date().getFullYear();
  const age = currYear - year;

  return age;
}

const age1 = calcFactAge(1983);
console.log(age1);

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));

console.log(factAges);
console.log(factAges.join('-'));
*/
