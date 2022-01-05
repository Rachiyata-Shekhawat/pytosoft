
// main nav hide and show
function showMenu() {
  let headerNav = document.getElementById("headerNavId");
  if(headerNav.style.display == "none") {
    headerNav.style.display = "block";
  }else {
    headerNav.style.display = "none";
  }
  
}

// sub nav hide and show
function showSubMenu() {
  let serviceLiId = document.getElementById("serviceLiId");
  let subNavId = document.getElementById("subNavId");

  if(subNavId.style.display == "none") {
    serviceLiId.style.backgroundColor = "#e7e7e7"; 
    serviceLiId.style.color = "#2d2d2d"; 
    subNavId.style.display = "block";
  }else {
    serviceLiId.style.backgroundColor = "white"; 
    // serviceLiId.style.color = "#74a8d6"; 
    subNavId.style.display = "none";
  }
}

// banner slides
var indexBanner1 = document.getElementById("indexBanner1Id");
var indexBanner2 = document.getElementById("indexBanner2Id");
var indexBanner3 = document.getElementById("indexBanner3Id");

function bannerRightClick1() {
  indexBanner1.style.display = "none";
  indexBanner2.style.display = "block";
}

function bannerLeftClick2() {
  indexBanner1.style.display = "block";
  indexBanner2.style.display = "none";
}

function bannerRightClick2() {
  indexBanner2.style.display = "none";
  indexBanner3.style.display = "block";
}

function bannerLeftClick3() {
  indexBanner2.style.display = "block";
  indexBanner3.style.display = "none";
}