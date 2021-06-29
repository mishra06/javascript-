const taskContainer = document.querySelector(".task__container");

const globalstore =  [];

const generatenewCard = (taskdata) => `
<div class="col-md-6 col-lg-4" id=${taskdata.id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-dumpster-fire"></i>
    </button>
  </div>  
  <img 
  src=${taskdata.imageUrl} 
  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${taskdata.taskTitle}</h5>
    <p class="card-text">
    ${taskdata.taskDescription}
    </p>
    <a href="#" class="btn btn-primary">${taskdata.taskType}</a>
  </div>
  <div class="card-footer"><button type="button" class="btn btn-outline-primary float-end">
    Open Task
  </button>
 </div>
  </div>
</div>
`;

const loadInitialCardData = () => {
 // localstorege to get tasky card data

 const getCardData = localStorage.getItem("tasky");

  // convert from string to normal object

 const {cards} = JSON.parse(getCardData);

   // loop over those array of task object to create HTML card, inject it to DOM

 cards.map((Cardobject) => {

    taskContainer.insertAdjacentHTML("beforeend", generatenewCard(Cardobject));
    // update or globalstore
    globalstore.push(Cardobject);
 })


};

const SaveChanges = () => {
    const taskdata = {
        id: `${Date.now()}`,  //unique number for id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescrption").value,
    };

    taskContainer.insertAdjacentHTML("beforeend", generatenewCard(taskdata));

    globalstore.push(taskdata);

    localStorage.setItem("tasky", JSON.stringify({cards:globalstore})); 
};