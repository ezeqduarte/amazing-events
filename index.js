let fechaactual = data.currentDate;
let events = data.events;

let container = document.getElementById("contenido_home");
for (i = 0; i < events.length; i++) {
  let cartas = document.createElement("div");
  cartas.className = "card card_events p-0";
  cartas.innerHTML += `

                <div class="pic_event_card d-flex align-items-center justify-content-center">
                        <img src="${events[i].image}" alt="${events[i].image}">
                        <h5 class="card-title text-center d-flex align-items-center justify-content-center">${events[i].name}</h5>
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                        <p class="card-text text-center texto-cards">${events[i].description}</p>
                        <p class="card-text"><span class="datos-cards">Date:</span> <span
                                class="datos-datos-cards">${events[i].date}</span></p>
                        <p class="card-text"><span class="datos-cards">Category:</span> <span
                                class="datos-datos-cards">${events[i].category}</span></p>                                      
                         <p class="card-text"><span class="datos-cards">Price:</span><span class="datos-datos-cards"> $
                        ${events[i].price}</span></p>
                        <div class="d-flex justify-content-end">
                                <a href="details.html" class="btn btn-primary">More information
                                </a>
                        </div>                       
                </div>                       
  

  `;

  container.appendChild(cartas);
}
