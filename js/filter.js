// on click filter button

let filter = document.getElementById("filter");
let shoe_container = document.getElementById("shoe-container");

filter.addEventListener("click", () => {
})

console.log("Script running...");

document.querySelector(".cross").style.display = "none";
document.querySelector("#filter").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        setTimeout(() => {
            document.querySelector("#filter").style.display = "inline";
        }, 700);
        document.querySelector(".cross").style.display = "none";
    }
    else {
        document.querySelector("#filter").style.display = "none";
        document.querySelector(".cross").style.display = "inline";
        // shoe_container.style.gridTemplateColumns="repeat(3, 300px)";
        shoe_container.classList.add("filter-shoe");
        document.querySelector(".line").style.display = "none"
    }
})
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        setTimeout(() => {
            document.querySelector("#filter").style.display = "inline";
            // shoe_container.style.paddingLeft="0px";
            document.querySelector(".line").style.display = "block"
        }, 700);
        document.querySelector(".cross").style.display = "none";
        // shoe_container.style.gridTemplateColumns="repeat(4, 300px)";
        shoe_container.classList.remove("filter-shoe");
    }
    else {
        document.querySelector("#filter").style.display = "none";
        document.querySelector(".cross").style.display = "inline";
    }
})

// Rangebar price javascript

let myRangeBar = document.getElementById("rangebar");
let inMax = document.getElementById("range-max");
myRangeBar.addEventListener("change", (e) => {
    // console.log(myProgressBar);
    // console.log(e.target.value);
    let rangeBarValue = e.target.value;
    inMax.value = rangeBarValue;
})

inMax.addEventListener("change", (e) => {
    // console.log("range-max input field value is ",e.target.value);
    // console.log(e.target.value);
    let inMaxValue = e.target.value;
    myRangeBar.value = inMaxValue;
})