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
    

    img.setAttribute('src', business.imgurl);
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;

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