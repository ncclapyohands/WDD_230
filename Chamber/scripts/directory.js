const requestURL = 'https://raw.githubusercontent.com/ncclapyohands/WDD_230/master/Chamber/json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });


  async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
      const jsonObject = await response.json();
      console.log(jsonObject);
      
      const businesses = jsonObject;
      businesses.forEach(displayBusiness);
      businesses.forEach(displayTable);
    }
  };
  
  getBusiness(requestURL);

  function displayBusiness(business) {

    let card = document.createElement('section');
    // let card = document.createElement('section');
    // let h2 = document.createElement('h2');
    
    let img = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    

    img.setAttribute('src', business.logo);
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;
    website.setAttribute('href', business.website);

    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    // let pob = document.createElement('p');
    // let img = document.createElement('img');

    // h2.textContent = business.;

    // // dob.textContent = `${prophet.birthdate}`;
    // // pob.textContent = `${prophet.birthplace}`;
    // // img.setAttribute('src', prophet.imageurl);
    // // img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    
    // card.appendChild(h2);
    // // card.appendChild(dob);
    // // card.appendChild(pob);
    // // card.appendChild(img);
     document.querySelector('#cards').appendChild(card);


  }

  function displayTable(business) {
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = business.name;


    let address = document.createElement('td');
    address.textContent = business.address;
    let phone = document.createElement('td');
    phone.textContent = business.phone;
    let website = document.createElement('td');
    website.textContent = business.website;


    list_row.appendChild(td_name);
    list_row.appendChild(address);
    list_row.appendChild(phone);
    list_row.appendChild(website);
    document.querySelector('table').appendChild(list_row);
  }


// function toggleHidden() {
  
//   let card = document.getElementById('cards');
//   let row = document.getElementById('hidden');
//   let rowshow = document.getElementById('rows');
//   let cardshow = document.getElementById('cards');
//   console.log(card);
//   console.log(row);
//   let cardid = card.getAttribute('id');
//   let rowid = row.getAttribute('id');

//   if (cardid === "cards") {
//     cardid = 'hidden';
//     card.setAttribute('id', cardid);
//     rowid = 'rows';
//     row.setAttribute('id', rowid);
//   }


//   if (rowid === "rows") {
//     rowid = 'hidden';
//     row.setAttribute('id', rowid);
//     cardid = 'cards';
//     card.setAttribute('id', cardid);
//   }


//   // if (cardid === "cards hidden") {
//   //   cardid = 'hidden';
//   //   card.setAttribute('id', cardid);
//   //   rowid = 'rowhidden';
//   //   row.setAttribute('id', rowid);
//   // }
//   // if (rowid === "rowhidden") {
//   //   rowid = 'hidden';
//   //   row.setAttribute('id', rowid);
//   //   cardid = 'cards';
//   //   card.setAttribute('id', cardid);
//   // }
// }

// toggleHidden();
// displayBusiness();


function toggleHidden() {

  let card = document.getElementById('cards');
  let row = document.getElementById('rows');
  
  let cardclass = card.getAttribute('class');
  let rowclass = row.getAttribute('class');
  
  if (rowclass === "show") {
  
  rowclass = 'hidden';
  row.setAttribute('class', rowclass);
  
  cardclass = 'show';
  card.setAttribute('class', cardclass);
  console.log('hide row, show card');
  }
  else if (cardclass === "show") {
  
  cardclass = 'hidden';
  
  card.setAttribute('class', cardclass);
  
  rowclass = 'show';
  row.setAttribute('class', rowclass);
  console.log('hide card, show row');
  }
  }
document.getElementById("grid").addEventListener('click', toggleHidden);
document.getElementById("row").addEventListener('click', toggleHidden);