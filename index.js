let container = document.getElementById("container_cards");

filter(data.events, data.currentDate);
sprintCards(filter(data.events, data.currentDate), container);

console.log(filter(data.events, data.currentDate));

/*/ Functions /*/

function sprintCards(events, container) {
  for (const event of events) {
    container.innerHTML += `
    
    <div class="card card_events p-2">
      <div class="pic_event_card d-flex align-items-center justify-content-center">
          <img src="${event.image}" alt="${event.image}">
          <h5 class="card-title text-center">${event.name}</h5>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
          <p class="card-text text-center texto-cards">${event.description}</p>
          <p class="card-text">
              <span class="datos-cards">Date:</span>
              <span class="datos-datos-cards">${event.date}</span>
          </p>
          <p class="card-text">
              <span class="datos-cards">Category:</span>
              <span class="datos-datos-cards">${event.category}</span>
          </p>                                      
          <p class="card-text">
            <span class="datos-cards">Price:</span>
            <span class="datos-datos-cards"> $ ${event.price}</span>
          </p>
      </div>  
      <div class="d-flex justify-content-end">
          <a href="details.html" class="btn btn-primary">More information</a>
      </div>                  
    </div>
    
    `;
  }
}

function filter(events, date) {
  let eventos = [];

  if (document.title === "Home") {    
      eventos = events          
  }
  
  if (document.title === "Upcoming Events") {
    for (const event of events) {
      if (event.date > date) {
        eventos.push(event);
      }
    }
    
  }

  if (document.title === "Past Events") {
    for (const event of events) {
      if (event.date < date) {
        eventos.push(event);
      }
    }
  }
  
  return eventos;
}
