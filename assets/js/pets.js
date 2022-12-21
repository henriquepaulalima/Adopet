petsURL = "http://localhost:3030/pets";

const petsList = document.getElementById("pets_list");

fetch(petsURL) 
  .then(res => res.json())
  .then(pets => {
    let pets_list = '';
    for (let i = 0; i < pets.length; i++) {
      pets_list += `
      <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center py-3">
        <div class="p-3">
          <img src="${pets[i].img}" class="pet-img" alt="Foto ${pets[i].name}">
        </div>
        <div class="pet-info">
          <h3>${pets[i].name}</h3>
          <p class="m-0">${pets[i].age}</p>
          <p class="m-0">${pets[i].size}</p>
          <p class="m-0">${pets[i].behavior}</p>
          <address class="m-0 py-3">${pets[i].location}</address>
          <div class="d-flex align-items-center contact-owner m-0">
            <img src="assets/img/ícone_mensagem.png" alt="Ícone da mensagem">
            <a href="contact.html">
              <p class="m-0 p-1">Falar com responsável</p>
            </a>
          </div>
        </div>
      </div>
      `;
      petsList.innerHTML = pets_list;
    }
  })