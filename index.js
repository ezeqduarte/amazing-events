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
      <div class="card-body p-2 d-flex flex-column justify-content-between">
      <p class="card-text m-0 datos-cards text-center">
      ${event.category}<span class="primario">.</span>
  </p>                              
          <p class="card-text m-0 datos-cards text-center">
              ${event.date.slice(0, 10)}
          </p>   
          <p class="card-description flex-grow-1 d-flex justify-content-center align-items-center texto-cards">${event.description
    }</p>
          
          </div>  
      <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center justify-content-center">   
          <p class="px-3 card-text d-flex align-items-center justify-content-center gap-2 ">
            <span class="datos-cards">Price </span>
            <span class="datos-datos-cards"> ${event.price}$</span>
          </p>
          </div>
          <a href="details.html?evento=${event.id
    }" class="btn boton_cards btn-primary">More information</a>
      </div>                  
    </div>
    
    `;
}

/* eventosFiltrados.forEach(printCards); */

/*/ function para imprimir cards details /*/

let container_details = document.getElementById("container_card_details");

function printCardDetails(evento) {
  container_details.innerHTML = `
  <a href="javascript:history.back()"><img class="arrow_down_details mb-5" src="./assets/img/icons8-abajo.gif" alt="arrow_down"></a>
  <div class="card_details d-flex pb-5 py-4 flex-column flex-lg-column-reverse align-items-md-center flex-xl-row-reverse">
    <div class="foto_details d-lg-flex justify-content-center"><img class="card-img-details" src="${evento.image}" alt=${evento.name}>
    </div>
    <div class="card_body_details px-md-5 py-md-4 pb-lg-5 flex-grow-1 d-flex flex-column justify-content-evenly align-items-start">
      <h2 class="card-title pt-4 text-center">${evento.name}<span class="primario">.</span></h2>
      <h3 class="card-text pt-4 p-sm-5 text-center">${evento.description}</h3>
      <div class="d-flex flex-column gap-3 px-3 justify-content-center">
        <h4 class="card-text">The date of the event is <span class="bold"> ${evento.date.slice(0,10)}</span><span class="bold primario">.</span> </h4>
        <h4 class="card-text">This event belongs to the <span class="bold"> ${evento.category} category</span><span class="bold primario">.</span> </h4>
        <h4 class="card-text">The event will take place in <span class="bold"> ${evento.place}</span><span class="bold primario">.</span> </h4>
        <h4 class="card-text">It has a capacity of <span class="bold"> ${evento.capacity} peoples</span><span class="bold primario">.</span> </h4>      
        <h4 class="card-text">The price of the event is <span class="bold"> ${evento.price}$</span><span class="bold primario">.</span> </h4>
      </div>
    </div>
  </div>  
  `;
} 

// funcion que me crea un array con las categorias de los eventos

function createCheckbox(category) {
  container_checkboxs.innerHTML += `
  
  <label class="d-flex  mx-2">${category}
    <input type="checkbox" class="mx-2 checksbox_input" value="${category}">
  </label>
  
  `;
}

async function getData() {
  // capturo la api
  let data = await fetch("https://mind-hub.up.railway.app/amazing");
  //paso a json la data
  data = await data.json();
  // declaro events y date
  let events = data.events;
  let date = data.date;

  //con mi funcion filter filtre los eventos de la api y por cada uno los imprimi

  let eventsFiltered = filter(events, date);
  eventsFiltered.forEach(printCards);

  console.log("-------------------------------------------------------------");

  //capturo todas las categorias de los arrays

  let categoriesEvents = [...new Set(events.map((event) => event.category))];

  if (
    document.title === "Home" ||
    document.title === "Past Events" ||
    document.title === "Upcoming Events"
  ) {
    // imprimo todos los checkboxs
    categoriesEvents.forEach(createCheckbox);
  }

  console.log("-------------------------------------------------------------");

  //capturo el id del evento y despues imprimo la card

  function getEventDetails() {
    console.log(location);
    console.log(location.search);
    console.log(location.search.slice(8));
    let id = location.search.slice(8);
    console.log(id);
    let event = data.events.filter((event) => event.id === id);
    event = event[0]; 
    console.log(event);  
    printCardDetails(event);
  }
  
  if (document.title === "Details") {
    getEventDetails();
  }


  console.log("-------------------------------------------------------------");



  //filtros cruzados

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

  // funcion que me filtra los eventos

  function mixFilter() {
    let eventsFilterForText = eventsFiltered.filter((evento) =>
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

getData();
