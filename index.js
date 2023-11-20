
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("burger").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("burger").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})


/*show staff info function*/
function showHH() {
  document.getElementById('harry-info').style.display = "block";
  document.getElementById('sally-info').style.display = "none";
  document.getElementById('barbie-info').style.display = "none";

}

function showSS() {
  document.getElementById('sally-info').style.display = "block";
  document.getElementById('harry-info').style.display = "none";
  document.getElementById('barbie-info').style.display = "none";
}

function showBB() {
  document.getElementById('barbie-info').style.display = "block";
  document.getElementById('harry-info').style.display = "none";
  document.getElementById('sally-info').style.display = "none";
}



