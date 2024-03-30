console.log("script is running...");

img1 = document.getElementById("img1");
img2 = document.getElementById("img2");
img3 = document.getElementById("img3");

hoverImg1 = document.getElementById("hover-img1");
hoverImg2 = document.getElementById("hover-img2");
hoverImg3 = document.getElementById("hover-img3");

imgLine = document.getElementById("img-hover-line");

let flag = 0;

// remove animation classes
img1.classList.remove("ani-1");
img2.classList.remove("ani-2");
img3.classList.remove("ani-3");
img3.classList.remove("ani-33");
img2.classList.remove("ani-22");
img1.classList.remove("ani-11");

// on click hover image-1
hoverImg1.addEventListener("click", () => {
    // alert("click hua");
    // console.log("img-1 before flag", (flag));
    if (flag == 3) {
        img1.style.transform = "rotate(380deg)";
        img2.style.transform = "rotate(380deg)";
        img3.style.transform = "rotate(380deg)";
        flag = 0;
        // console.log("img-1 after flag", (flag));
    }

    img2.classList.remove("ani-2"); //remove ishliyea  kiya kyuki agr hover-img2 pe se hover-img1 par aaye to hover-img2 ka animation ktm ho jaye
    img1.classList.remove("ani-1");
    img3.classList.remove("ani-3");
    imgLine.style.transform = "translate(45px,-55px)";

    // flag=1;
    // img2.style.width="645px";
    // img2.style.width="645px"
});

// on click hover image-2
hoverImg2.addEventListener("click", () => {
    img2.classList.add("ani-2"); //hover-img1 se hover-img2 par jab aayenge
    img1.classList.add("ani-1");
    img3.classList.add("ani-3");

    img3.classList.remove("ani-33"); //hover-img3 se jab hover-img2 par vapish jab aayenge
    img2.classList.remove("ani-22");
    img1.classList.remove("ani-11");

    imgLine.style.transform = "translate(190px,-55px)";

    flag = 2;
    // console.log("img-2 flag is",flag);
});

// on click hover image-3
hoverImg3.addEventListener("click", () => {
    // console.log("img-2 before flag",(flag));
    // if (flag == 0) {
    //     img2.style.transform = "rotate(-340deg)";
    //     img3.style.transform = "rotate(-340deg)";
    //     img1.style.transform = "rotate(-340deg)";
    // }
    img2.classList.add("ani-2"); //hover-img1 se jab hover-img3 par aayenge to pahale hover-img2 par aane ka animation chalana padega
    img1.classList.add("ani-1");
    img3.classList.add("ani-3");

    img3.classList.add("ani-33"); //hover-img2 se jab hover-img3 par jab aayenge
    img2.classList.add("ani-22");
    img1.classList.add("ani-11");

    imgLine.style.transform = "translate(330px,-55px)";

    flag = 3;
    // console.log("img-3 after flag",(flag));
});