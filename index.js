let events = data.events;

/*/ container de cards y checkboxs /*/

let container_cards = document.getElementById("container_cards");
let container_checkboxs = document.getElementById("box_checksbox");
let checksboxs_active = document.getElementsByClassName("checkbox_check");

/*/ filtre los eventos /*/
let filteredEvents = filter(data.events, data.currentDate);

/*/imprimi las cards/*/
filteredEvents.forEach(sprintCards);

/*/Array de categorias /*/
let categoriesEvents = events.map((event) => event.category);
let categoriesEventsFilter = [...new Set(categoriesEvents)];



/*/imprimi los checkboxs/*/
categoriesEventsFilter.forEach(createCheckbox);

/*/ evento de checkboxs /*/

console.log(checksboxs_active);
let checkboxs = 


/* checksboxs_active.addEventListener("change", function (event) {
  console.log("cambio el select", event);
}); */

/*/ Functions /*/

/*/ funcion que me de un array con las categorias de los eventos /*/



function createCheckbox(category) {
  container_checkboxs.innerHTML += `
    
  <label class="checksbox_label d-flex mx-2">${category}
    <input type="checkbox" class="mx-2 checkbox_check" value="${category}">
  </label>
  
  `;
}

/*/funcion para imprimir cartas de cada evento /*/

function sprintCards(event) {
  container_cards.innerHTML += `
    
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

/*/funcion para filtrar los eventos dependiendo de la pagina en la que este y de la current date /*/

function filter(events, date) {
  let filteredEvents = events.filter((evento) => {
    if (document.title === "Home") {
      return evento;
    }

    if (document.title === "Upcoming Events") {
      return evento.date > date;
    }

    if (document.title === "Past Events") {
      return evento.date < date;
    }
  });

  return filteredEvents;
}
