/* ---------------- Main Menu ----------------------- */

// main nav hide and show
function showMenu() {
  const headerNav = document.getElementById("headerNavId");
  if(headerNav.style.display == "none") {
    headerNav.style.display = "block";
  }else {
    headerNav.style.display = "none";
  }
  
}

// sub nav hide and show
function showSubMenu() {
  const serviceLiId = document.getElementById("serviceLiId");
  const subNavId = document.getElementById("subNavId");

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
const indexBanner1 = document.getElementById("indexBanner1Id");
const indexBanner2 = document.getElementById("indexBanner2Id");
const indexBanner3 = document.getElementById("indexBanner3Id");

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

/* ---------------- READ MORE POP UP ----------------------- */

//optimisation not working
// function popUp() {
//   const popUpId = document.getElementById("popUpId");
//   const body = document.getElementsByTagName("body")[0];

//   const readMoreId = document.getElementById ("readMoreId");
//   const closeMarkId = document.getElementById ("closeMarkId");
//   const closeButtonId = document.getElementById ("closeButtonId");

//   readMoreId.onclick = readMore();
//   closeMarkId.onclick = closePopUp();
//   closeButtonId.onclick = closePopUp();

// }

const popUpId = document.getElementById("popUpId");
const body = document.getElementsByTagName("body")[0];

//open read-more pop-up
function readMore() {
  popUpId.style.display = "block";
  body.style.overflow = "hidden";
}

//close read-more pop-up 
function closePopUp() {
  popUpId.style.display = "none";
  body.style.overflow = "auto";
}

/* ---------------- CHAT BOX ----------------------- */
const chatBox_iconID = document.getElementById("chatBox-iconID");
const chatBox_popUpID = document.getElementById("chatBox-popUpID");
const chatBox_iconCloseID = document.getElementById("chatBox-iconCloseID");

function openChat() {
  if(chatBox_popUpID.style.visibility == "hidden"){
    chatBox_popUpID.style.visibility = "visible";
    chatBox_iconCloseID.style.display = "block";
    chatBox_iconID.style.display = "none";
  }else{
    chatBox_popUpID.style.visibility = "hidden";
    chatBox_iconCloseID.style.display = "none";
    chatBox_iconID.style.display = "block";
  }
}

function closeChat() {
  if(chatBox_popUpID.style.visibility = "visible") {
    chatBox_popUpID.style.visibility = "hidden";
    chatBox_iconCloseID.style.display = "none";
    chatBox_iconID.style.display = "block";
  }else{
    chatBox_popUpID.style.visibility = "visible";
    chatBox_iconCloseID.style.display = "block";
    chatBox_iconID.style.display = "none";
  }
}

