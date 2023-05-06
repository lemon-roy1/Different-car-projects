var busObject = {
    name: "bus",
    imgUrl: "https://media.istockphoto.com/id/500653017/photo/blue-bus.jpg?s=1024x1024&w=is&k=20&c=J-6TNipUdyIMP8S_9QaRSvQUOl5jh7FW3yEb5W-zXBQ=",
    fareparkilo: "4",
    capacity: "30",
    decpikction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum nostrum, odit corrupti cumque itaque! Perspiciatis est ex ipsa sint!"
};
var bikeObject = {
    name: "bike",
    imgUrl: "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    fareparkilo: "2",
    capacity: "3",
    decpikction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum nostrum, odit corrupti cumque itaque! Perspiciatis est ex ipsa sint!"
};
var carObject = {
    name: "car",
    imgUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    fareparkilo: "3",
    capacity: "20",
    decpikction: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum nostrum, odit corrupti cumque itaque! Perspiciatis est ex ipsa sint!"
}
const serviceArray=[carObject,busObject,bikeObject]

function displayservice(service) {
    const mainSection = document.getElementById("main-section")
    const stringilyfied=JSON.stringify(service)
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card mb-3 mt-3 mx-auto" style="max-width: 950px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${service.imgUrl} class="img-fluid rounded-start h-100" alt="...">   
                </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${service.name}</h5>
                            <p class="card-text">${service.decpikction}</p>
                            <p class="card-text"><small class="text-muted">fare per kilo:${service.fareparkilo} capacity ${service.capacity}</small></p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='heandleBooking(${stringilyfied})' data-bs-target="#exampleModal ">Launch demo modal</button>
                        </div>
                    </div>
            </div
    </div>
    `
    mainSection.appendChild(div)

}

function displayAllAritacle(arr){
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            displayservice(element)
        }
    }
displayAllAritacle(serviceArray)



function heandleBooking(obj){
    const modelbody =document.getElementById("modal-body")
    const stringilyfied=JSON.stringify(obj)
    modelbody.innerHTML=`
    <div class="card" style="width: 29rem;">
         <img src=${obj.imgUrl} class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">vehicle name: ${obj.name}</h5>
            <p class="card-text" >${obj.decpikction}</p>

            <p class="card-text">fare: <small class="text-muted" id="fare"></small></p>
            <p class="card-text">tex: <small class="text-muted" id="text" ></small></p>
            <p class="card-text">total:<small class="text-muted" id="total-cort"></small></p>

            <p class="card-text"><small class="text-muted">fare per kilo:${obj.fareparkilo} capacity ${obj.capacity}</small></p>
            <div class="d-flex flex-column" role="search">
            <input class="form-control me-2" type="search" id="distance-input" placeholder="koto kilo jabo ?" aria-label="Search">
            <input class="form-control me-2" type="search" id="quantity-input" placeholder="koyta gari lagba ?" aria-label="Search">
            <button class="btn btn-outline-success" onclick='calcultionCost(${stringilyfied})' type="submit">Submit</button>
        </div>
        </div>
    </div>
    `
}

function calcultionCost(obj){
const distense=document.getElementById("distance-input").value;
const quentity=document.getElementById("quantity-input").value;
    const feradiv=document.getElementById("fare")
    feradiv.innerHTML=distense*quentity*obj. 
    console.log(feradiv);
}
function calcultionCost(obj){
const distense=document.getElementById("distance-input").value;
const quentity=document.getElementById("quantity-input").value;
    const feradiv=document.getElementById("total-cort")
    feradiv.innerHTML=distense*quentity*obj.fareparkilo*obj.capacity
    console.log(feradiv);
}
function calcultionCost(obj){
const distense=document.getElementById("distance-input").value;
const quentity=document.getElementById("quantity-input").value;
    const feradiv=document.getElementById("text")
    feradiv.innerHTML=distense*quentity*obj.fareparkilo%obj.capacity
    console.log(feradiv);
}

document.getElementById("search-btn").addEventListener('click',function(){
    const searchValue=document.getElementById("input-search").value;
   
    for (let i = 0; i < serviceArray.length; i++) {
        const element = serviceArray[i];

        if (searchValue.toLowerCase() == element.name.toLowerCase()) {
            document.getElementById("main-section").innerHTML=""
        displayservice(element) 
        return;

        }
    }
    alert("nothing found with your input ↕ ")
})