const requestURL = 'https://github.com/ncclapyohands/WDD_230/blob/master/Chamber/json/directory.json';

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
      const prophets = jsonObject['buisnesses'];
      prophets.forEach(displayBusiness);
    }
  };
  
  getBusiness(requestURL);

  function displayBusiness(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = business.name;
    // dob.textContent = `${prophet.birthdate}`;
    // pob.textContent = `${prophet.birthplace}`;
    // img.setAttribute('src', prophet.imageurl);
    // img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    
    card.appendChild(h2);
    // card.appendChild(dob);
    // card.appendChild(pob);
    // card.appendChild(img);
    document.querySelector('.cards').appendChild(card);


  }

  function displayTable(business) {
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = business.name;

    let td_dob = document.createElement('td');
    td_dob.textContent = business.birthdate0;

    list_row.appendChild(td_name);
    list_row.appendChild(td_dob);
    document.querySelector('table').appendChild(list_row);
  }