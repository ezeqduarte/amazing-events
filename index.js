/*/ Eventos de la api y data de filtrado /*/
const allEvents = data.events;
const currentDate = data.currentDate;

/*/ Containers para DOM /*/
let container_cards = document.getElementById("container_cards");
let container_checkboxs = document.getElementById("box_checksbox");
let containter_search = document.getElementById("search");

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

eventosFiltrados.forEach(printCards);

/*/Array de categorias /*/

let categoriesEvents = [...new Set(allEvents.map((event) => event.category))];

/*/ funcion que me de un array con las categorias de los eventos /*/

function createCheckbox(category) {
  container_checkboxs.innerHTML += `
  
  <label class="d-flex  mx-2">${category}
    <input type="checkbox" class="mx-2 checksbox_input" value="${category}">
  </label>
  
  `;
}

/*/imprimi los checkboxs/*/

categoriesEvents.forEach(createCheckbox);

/*/ Aca filtro por texto /*/

let searchForText = "";

containter_search.addEventListener("input", function (e) {
  searchForText = e.target.value;
  console.log(`searchForText adentro de la funcion: ${searchForText}`);
  filtrado();
});

console.log(`searchForText afuera de la funcion: ${searchForText}`);

/*/ aca filtro por checkboxs /*/

let categoriesChecked = [];

container_checkboxs.addEventListener("change", function (e) {
  if (e.target.checked) {
    categoriesChecked.push(e.target.value);
  } else categoriesChecked = categoriesChecked.filter((value) => value != e.target.value);
  console.log(`categoriesChecked adentro de la funcion: ${categoriesChecked}`);
  filtrado();
});

console.log(`categoriesChecked afuera de la funcion: ${categoriesChecked}`);

function filtrado() {
  let eventsFilterPorTexto = eventosFiltrados.filter((evento) =>
    evento.name.toLowerCase().includes(searchForText.toLowerCase())
  );

  container_cards.innerHTML = " ";

  if (categoriesChecked.length === 0) {
    eventsFilterPorTexto.forEach(printCards);
    return;
  }

  let eventFilterPorTodo = eventsFilterPorTexto.filter((evento) =>
    categoriesChecked.includes(evento.category)
  );

  eventFilterPorTodo.forEach(printCards);
}
