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
