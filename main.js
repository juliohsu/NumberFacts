//Event Functionality about clicks
document.getElementById("main").addEventListener("click", displayIntro);
document.getElementById("randomLink").addEventListener("click", displayRandom);
document.getElementById("yearLink").addEventListener("click", displayYear);
document.getElementById("dateLink").addEventListener("click", displayDate);
document.getElementById("mathLink").addEventListener("click", displayMath);

//Target div content
let intro = document.querySelector("#intro");

//Functionality about every kind of clicks
function displayIntro() {
  intro.innerHTML = `
  <div class="card-header mt-5">Welcome to the NumberFacts!</div>
        <div class="card-body">
          <h4 class="card-title">Pick one method from navbar</h4>
          <p class="card-text">In order to check cool facts about numbers.</p>
        </div>
  `;
}

function displayRandom() {
  //First delete all class that has active then Show current span in the navbar
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
    active.style.display = "none";
  }
  document.getElementById("randomSpan").classList.add('active');
  document.getElementById("randomSpan").style.display = "block";

  //Loading random data and displaying in html
  fetch("http://numbersapi.com/random")
    .then((response) => response.text())
    .then((data) => {
      intro.innerHTML = `<div class="card-header mt-5">Enjoy your random number fact!</div>
       <div class="card-body">
       <h4 class="card-title">${data}</h4>
      </div>`;
    });
}
function displayYear() {
  //First delete all class that has active then Show current span in the navbar
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
    active.style.display = "none";
  }
  document.getElementById("yearSpan").classList.add('active');
  document.getElementById("yearSpan").style.display = "block";

  //Loading year data and displaying in html
  intro.innerHTML = `
  <div class="card-header mt-5">Please insert your desire year number!</div>
  <div class="form-group">
    <input type="text" class="form-control col-lg-3" placeholder="xxxx" id="year">
    <button class="btn btn-primary btn-sm mt-4" onclick="submit('year')">Submit</button>
  </div>
  `;
}
function displayDate() {
  //First delete all class that has active then Show current span in the navbar
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
    active.style.display = "none";
  }
  document.getElementById("dateSpan").classList.add('active');
  document.getElementById("dateSpan").style.display = "block";

  //Loading date data and displaying in html
  intro.innerHTML = `
  <div class="card-header mt-5">Please insert your desire date number!</div>
  <div class="form-group">
    <input type="text" class="form-control col-lg-3" placeholder="xx/xx" id="date">
    <button class="btn btn-primary btn-sm mt-4" onclick="submit('date')">Submit</button>
  </div>
  `;
}
function displayMath() {
  //First delete all class that has active then Show current span in the navbar
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
    active.style.display = "none";
  }
  document.getElementById("mathSpan").classList.add('active');
  document.getElementById("mathSpan").style.display = "block";

  //Loading math data and displaying in html
  intro.innerHTML = `
  <div class="card-header mt-5">Please insert your desire math number!</div>
  <div class="form-group">
    <input type="text" class="form-control col-lg-3" placeholder="x" id="math">
    <button class="btn btn-primary btn-sm mt-4" onclick="submit('math')">Submit</button>
  </div>
  `;
}

function submit(time) {
  var value = document.querySelector("#" + time).value;
  var url = "http://numbersapi.com/" + value + "/" + time;

  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      intro.innerHTML = `<div class="card-header mt-5">Enjoy your desired number fact!</div>
       <div class="card-body">
       <h4 class="card-title">${data}</h4>
      </div>`;
    });
}
