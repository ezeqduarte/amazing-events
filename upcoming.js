let fechaactual = data.currentDate;
let events = data.events;

let container = document.getElementById("cont-cards-up");
console.log(container);
console.log(fechaactual);

for (let i = 0; i < events.length; i++) {
  if (events[i].date < fechaactual) {
    let cartas = document.createElement("div");
    cartas.className = "card card_events p-0";
    cartas.innerHTML += `
  
    <div class="pic_event_card d-flex align-items-center justify-content-center">
                          <img src="${events[i].image}" alt="museo">
                          <h5 class="card-title text-center">${events[i].name}</h5>
                      </div>
                      <div class="card-body d-flex flex-column justify-content-around">
                          <p class="card-text text-center texto-cards">${events[i].description}</p>
                          <p class="card-text"><span class="datos-cards">Date:</span> <span
                                  class="datos-datos-cards">${events[i].date}</span></p>
                          <p class="card-text"><span class="datos-cards">Category:</span> <span
                                  class="datos-datos-cards">${events[i].category}</span></p>
                          <p class="card-text"><span class="datos-cards">Place:</span> <span class="datos-datos-cards">
                          ${events[i].place}
                              </span></p>
                          <p class="card-text"><span class="datos-cards">Capacity:</span> <span
                                  class="datos-datos-cards">${events[i].capacity}</span></p>
                          <p class="card-text"><span class="datos-cards">Assistance:</span><span
                                  class="datos-datos-cards"> ${events[i].assistance}</span></p>
                          <p class="card-text"><span class="datos-cards">Price:</span><span class="datos-datos-cards"> $
                          ${events[i].price}</span></p>
                          <a href="details.html" class="btn btn-primary">¡Enter for more information!
  
                          </a>                         
    
    `;

    container.appendChild(cartas);
  }
}
