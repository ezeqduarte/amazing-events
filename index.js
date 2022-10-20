/*/ Eventos y fecha de information /*/
const allEvents = data.events;
const currentDate = data.currentDate;

/*/ Containers para DOM /*/
let container_cards = document.getElementById("container_cards");
let container_checkboxs = document.getElementById("box_checksbox");
let container_search = document.getElementById("search");

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

let eventosFiltrados = filter(allEvents, currentDate);

/*/funcion para imprimir cartas de cada evento /*/

function printCards(event) {
  container_cards.innerHTML += `
    
    <div class="card card_events p-2">
      <div class="pic_event_card d-flex align-items-center justify-content-center">
          <img src="${event.image}" alt="${event.image}">
          <h5 class="card-title text-center">${event.name}</h5>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
          <p class="card-text py-2 text-center texto-cards">${event.description}</p>
          <p class="card-text">
              <span class="datos-cards">Date:</span>
              <span class="datos-datos-cards">${event.date}</span>
          </p>
          <p class="card-text">
              <span class="datos-cards">Category:</span>
              <span class="datos-datos-cards">${event.category}</span>
          </p>                                      
          <p class="card-text">
            <span class="datos-cards">Price: </span>
            <span class="datos-datos-cards"> $${event.price}</span>
          </p>
      </div>  
      <div class="d-flex justify-content-end">
          <a href="details.html?evento=${event._id}" class="btn boton_cards btn-primary">More information</a>
      </div>                  
    </div>
    
    `;
}

eventosFiltrados.forEach(printCards);

/*/ function para imprimir cards details /*/

let container_details = document.getElementById("container_card_details");

function printCardDetails(evento) {
  container_details.innerHTML = `
  <div class="card card_details d-flex flex-column flex-xl-row">
    <div class="foto_details"><img class="card-img-top" src="${evento.image}" alt=${evento.name}>
    </div>
    <div class="card-body px-md-5 py-md-4 d-flex flex-column justify-content-between align-items-center">
      <h2 class="card-title pt-4 text-center">${evento.name}<span class="primario">.</span></h2>
      <h3 class="card-text pt-4 text-center d-flex align-items-center">${evento.description}</h3>
      <div class="d-flex flex-column flex-grow-1 gap-3 justify-content-center">
      <h4 class="card-text d-flex">The date of the event is<span class="px-2 primario">:</span> ${evento.date}</h4>
      <h4 class="card-text d-flex">It is an event related to<span class="px-2 primario">:</span> ${evento.category}</h4>
      <h4 class="card-text d-flex">The event will take place in<span class="px-2 primario">:</span> ${evento.place}</h4>
      <h4 class="card-text d-flex">It has a capacity of<span class="px-2 primario">:</span> ${evento.capacity} peoples</h4>
      <h4 class="card-text d-flex">Assistance<span class="px-2 primario">:</span> ${evento.assistance}</h4>
      <h4 class="card-text d-flex">Price<span class="px-2 primario">:</span> ${evento.price}$</h4>
      </div>
      </div>
  </div>  
  `;
}

/*/ funcion para obtener el id del evento, y que me imprima en details ese evento obtenido /*/

function getEventDetails() {
  /* console.log(location);
  console.log(location.search); */
  console.log(location.search.slice(8));
  let id = Number(location.search.slice(8));
  let event = data.events.filter((event) => event._id === id);
  event = event[0];

  console.log(event);

  printCardDetails(event);
}

if (document.title === "Details") {
  getEventDetails();
}

/*/ array de las categorias de los eventos /*/

let categoriesEvents = [...new Set(allEvents.map((event) => event.category))];

/*/ funcion que me crea un array con las categorias de los eventos /*/

function createCheckbox(category) {

  container_checkboxs.innerHTML += `
  
  <label class="d-flex  mx-2">${category}
    <input type="checkbox" class="mx-2 checksbox_input" value="${category}">
  </label>
  
  `;

}

if (
  document.title === "Home" ||
  document.title === "Past Events" ||
  document.title === "Upcoming Events"
) {
  /*/imprimi los checkboxs/*/

  categoriesEvents.forEach(createCheckbox);

  /*/ arranco a filtrar por texto /*/

  let filterForText = "";

  container_search.addEventListener("keyup", (evento) => {

    filterForText = evento.target.value;

    mixFilter();

  });

  /*/ arranco a filtrar por checkbox /*/

  let categoriesChecked = [];

  container_checkboxs.addEventListener("change", (e) => {
    
    if (e.target.checked) {
      categoriesChecked.push(e.target.value);
    } else {
      let indice = categoriesChecked.indexOf(e.target.value);
      categoriesChecked.splice(indice, 1);
    }

    mixFilter();    

  });

  /*/ funcion que me filtra los eventos /*/

  function mixFilter() {
    let eventsFilterForText = eventosFiltrados.filter((evento) =>
      evento.name.toLowerCase().includes(filterForText.toLowerCase())
    );

    if (categoriesChecked.length === 0) {
      if (eventsFilterForText.length === 0) {
        container_cards.innerHTML = `<h2>No match found<span class="primario">.</span></h2>
      <img class="img_error" src="./assets/img/undraw_not_found_re_44w9.svg">`;
      } else {
        container_cards.innerHTML = " ";
        eventsFilterForText.forEach(printCards);
      }
    } else {
      let eventsFilterForTextAndCheck = eventsFilterForText.filter((evento) =>
        categoriesChecked.includes(evento.category)
      );
      container_cards.innerHTML = " ";

      if (eventsFilterForTextAndCheck.length === 0) {
        container_cards.innerHTML = `<h2>No match found<span class="primario">.</span></h2>
      <img class="img_error" src="./assets/img/undraw_not_found_re_44w9.svg">`;
      } else {
        eventsFilterForTextAndCheck.forEach(printCards);
      }
    }
  }
}


