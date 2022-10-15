/*/ defini todos los eventos para despues hacer los checkboxs /*/
const allEvents = data.events;

/*/ Containers para DOM /*/
let container_cards = document.getElementById("container_cards");
let container_checkboxs = document.getElementById("box_checksbox");
let containter_search = document.getElementById ("search")



/*/ filtre los eventos aplicandole el filtro por currentDate /*/

let eventosFiltrados = filter(allEvents, data.currentDate);

/*/imprimi las cards/*/

eventosFiltrados.forEach(printCards);

/*/Array de categorias /*/

let categoriesEvents = [...new Set(allEvents.map((event) => event.category))];


/*/imprimi los checkboxs/*/

categoriesEvents.forEach(createCheckbox);


/*/ Aca filtro por texto /*/

let searchForText = ""

containter_search.addEventListener('input', function (e){

  searchForText = e.target.value
  filtrandoAndo ( )
  

})


/*/ aca filtro por checkboxs /*/

let categoriesChecked = []

container_checkboxs.addEventListener ('change', function (e){

  

  if (e.target.checked) {
    categoriesChecked.push(e.target.value)
  } else (
    categoriesChecked=categoriesChecked.filter(value => value != e.target.value)
  )

  filtrandoAndo ( )
  
  
  
})

function filtrandoAndo ( ) {

  let eventsFilterPorTexto = eventosFiltrados.filter(evento => evento.name.toLowerCase().includes(searchForText.toLowerCase())) 
  


  container_cards.innerHTML = " "
  if (categoriesChecked.length===0){
    eventsFilterPorTexto.forEach(printCards)
  } else {
    let eventFilterPorTodo = eventsFilterPorTexto.filter (evento => categoriesChecked.includes(evento.category))
    eventFilterPorTodo.forEach(printCards)
  }  


}























/*/------------------------------------------------------------------------ Functions --------------------------------------------------------------------- /*/

/*/ funcion que me de un array con las categorias de los eventos /*/

function createCheckbox(category) {
  container_checkboxs.innerHTML += `
  
  <label class="d-flex  mx-2">${category}
    <input type="checkbox" class="mx-2 checksbox_input" value="${category}">
  </label>
  
  `;
}

/*/funcion para imprimir cartas de cada evento /*/

function printCards(event) {
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


