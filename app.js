fetch("carsList.json")

// what then?

.then(function(data){
if(data.status === 200){
    return data.json()
}else {
    return Promise.reject(data)
}
})

// what then

.then(function(data){
const allCars = data.cars


let displayedCars = ''
allCars.forEach(car => {
    displayedCars += `
    <h2 style="color:crimson">${car.title}</h2>
    <img width="400px" height="300px" src=${car.image} alt=""></img>
    `
});

document.querySelector(".cars-list").innerHTML = displayedCars
}).catch(function(data){
    console.log("there was an error", data)
})


















































