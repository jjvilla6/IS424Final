//NavBar Classes
// cece added a comment to see if commit works
let loggedinlinks = document.querySelectorAll(".loggedin");
let loggedoutlinks = document.querySelectorAll(".loggedout");
let welcomeUser = document.querySelector("#welcomeUser");
let centerColumn = document.querySelector("#center-column");

//functions
function configureNav(user) {
  if (user) {
    welcomeUser.innerHTML = `Welcome ${auth.currentUser.email}!`;
    loggedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    })
    loggedoutlinks.forEach((i) => {
      i.classList.add("is-hidden");
    })
  } else {
    welcomeUser.innerHTML = "";
    loggedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    })
    loggedoutlinks.forEach((i) => {
      i.classList.remove("is-hidden");

    })
  }
}

function configureContent(empty) {
  if (empty) {
    centerColumn.innerHTML = null;
  }
  //retrieve data
  db.collection("Listings").get().then((data) => {
    let listings = [];
    data.forEach((listing) => {
      listings.push(listing.data());
    })
    for (i = 0; i < listings.length && i < 4; i++) {
      var item = listings[i];
      console.log(item);
      centerColumn.innerHTML += ` 
    <div class="box">
        <article class="media">
            <div class="columns is-vcentered">
                <div class="column is-three-fifths is-vcentered">
                    <img src="${item.url}" alt="Image">
                </div>
                <div class ="column">
                    <table class="table is-striped is-bordered is-fullwidth">
                        <tbody>
                            <tr>
                                <td >Location</td>
                                <td>${item.location}</td>
                            </tr>
                            <tr>
                                <td>Bedrooms</td>
                                <td>${item.bed}</td>
                            </tr>
                            <tr>
                                <td> Baths</td>
                                <td>${item.bath}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    $${item.price}
                                </td>
                            </tr>
                            <tr>
                            <td>Description</td>
                            <td>${item.desc}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>`
    }
  })
}
/* allows the modal */
var contact_modal = document.querySelector("#contactmodal");
var contact_button = document.querySelector("#contactbutton");
// attach a click event
contact_button.addEventListener('click', function () {
  // grab the modal

  // add the is active to the modal
  contact_modal.classList.add('is-active');
})

// Attach an event to the modal background
var modalBG = document.querySelector('#modalBG');
modalBG.addEventListener('click', function () {
  contact_modal.classList.remove('is-active');
})
//Signupbtn Functionality
let signupbtn = document.querySelector('#signupbtn');
let signupModal = document.querySelector('#signup-modal');
let signupModalBg = document.querySelector('#signupmodalBG');
signupbtn.addEventListener('click', () => {
  signupModal.classList.add('is-active');
});
signupModalBg.addEventListener('click', () => {
  signupModal.classList.remove('is-active');
});
//Sign-inModal Functionality
let signinbtn = document.querySelector('#signinbtn');
let signinModal = document.querySelector('#signin-modal');
let signinModalBg = document.querySelector('#signinmodalBG');
signinbtn.addEventListener('click', () => {
  signinModal.classList.add('is-active');
})

signinModalBg.addEventListener('click', () => {
  signinModal.classList.remove('is-active');
});

// Post Listing Button
var postListingBtn = document.querySelector("#postListingBtn");
postListingBtn.addEventListener('click', (e) => {
  var ListingForm = document.querySelector("#ListingForm");
  // show modal
  postListingModal.classList.add('is-active');
  e.preventDefault();
})
var listingCancel = document.querySelector("#listingCancel");
listingCancel.addEventListener('click', (e) => {
  e.preventDefault();
  postListingModal.classList.remove('is-active');
})
var listingReset = document.querySelector("#listingReset");
listingReset.addEventListener('click', (e) => {
  e.preventDefault();
  ListingForm.reset();
})
var postListingBG = document.querySelector("#postListingModalBG")
postListingBG.addEventListener("click", (e) => {
  e.preventDefault();
  postListingModal.classList.remove('is-active');
})


let signin_form = document.querySelector("#signin_form");
let signin_error = document.querySelector("#signin_error");
let signinsubmit = document.querySelector("#signin_submit");
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();
  signin_error.innerHTML = "";
  let email = document.querySelector("#signin_email").value;
  let password = document.querySelector("#signin_pass").value;
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user_cred = userCredential.user;
      console.log("Sign-in complete!");
      signinModal.classList.remove('is-active');
      signin_form.reset();
      configureNav(user_cred);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      signin_error.innerHTML = `<p> ${errorMessage} </p>`

    });
})
let signup_form = document.querySelector("#signup_form");
let signup_error = document.querySelector("#signup_error")
let signupsubmitbtn = document.querySelector("#signup_submit");
signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#signup_email").value;
  let password = document.querySelector("#signup_pass").value;
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log("User created successfully");
      signupModal.classList.remove('is-active');
      signup_form.reset();
      // ...
      configureNav(user);
      signup_error.innerHTML = "";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      signup_error.innerHTML = `<p> ${errorMessage}</p>`;
      // ..
    });
})
//Signout Button
let signoutbtn = document.querySelector("#signoutbtn");
signoutbtn.addEventListener('click', (e) => {
  auth.signOut();
});
//Search Function
var docRef = db.collection("Listings");
searchbtn.addEventListener('click', (e) => {
  e.preventDefault();
  let empty = true;
  let location = document.querySelector("#locationSelect option:checked").value;
  console.log(location)
  let numBeds = document.querySelector("#numBeds option:checked").value;
  let numBaths = document.querySelector("#numBaths option:checked").value;
  let priceLow = document.querySelector("#priceLow option:checked").value;
  let priceHigh = document.querySelector("#priceHigh option:checked").value;
  console.log(location, numBeds, numBaths, priceLow, priceHigh);
  centerColumn.innerHTML = "";

  docRef.where("bed", "!=", null).get().then((data) => {
    let matches = 0;
    data.forEach((listing) => {
      let item = listing.data();
      console.log(item);
      let mismatch = false;

      if (location != "Select") {
        empty = false;
        if (item.location != location) {
          mismatch = true;
        }
      }
      if (numBeds != "Select") {
        empty = false;
        if (item.bed != numBeds) {
          mismatch = true;
        }
      }
      if (numBaths != "Select") {
        empty = false;
        if (item.bath != numBaths) {
          mismatch = true;
        }
      }
      if (priceLow != "Select") {
        empty = false;
        if (item.price < priceLow) {
          mismatch = true;
        }
      }
      if (priceHigh != "Select") {
        empty = false;
        if (item.price > priceHigh) {
          mismatch = true;
        }
      }
      if (!mismatch && !empty) {
        matches++;
        centerColumn.innerHTML += ` 
  <div class="box">
      <article class="media">
          <div class="columns is-vcentered">
              <div class="column is-three-fifths is-vcentered">
                  <img src="${item.url}" alt="Image">
              </div>
              <div class ="column">
                  <table class="table is-striped is-bordered is-fullwidth">
                      <tbody>
                          <tr>
                              <td >Location</td>
                              <td>${item.location}</td>
                          </tr>
                          <tr>
                              <td>Bedrooms</td>
                              <td>${item.bed}</td>
                          </tr>
                          <tr>
                              <td> Baths</td>
                              <td>${item.bath}</td>
                          </tr>
                          <tr>
                              <td>Price</td>
                              <td>
                                  $${item.price}
                              </td>
                          </tr>
                          <tr>
                          <td>Description</td>
                          <td>${item.desc}
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          </div>`
      }
    })
    if (matches == 0 && !empty) {
      centerColumn.innerHTML += `<div class="box">
        <span class="icon has-text-primary-dark">
                    <i class="fas fa-home mdi mdi-48px"></i>
                </span>
  We're sorry, there are no apartments with those criteria available. Check out some other options below!
</div>`
    }
    if (empty) {
      configureContent(empty);
    } else {
      if (matches == 0) {
        configureContent(false);
      }

    }

  })
})
var user = firebase.auth().currentUser;
configureContent();
auth.onAuthStateChanged((user) => {
  // check if user is signed in or signed out
  if (user) {
    configureNav(user);
    configureContent();
  } else {
    configureNav();
    configureContent();
  }
})
let listing = {
  Bathrooms: 1,
  Bedrooms: 2,
  Location: "Milwaukee, WI",
  Price: 400,
  url: ""
};

let postListingModal = document.querySelector('#postListingModal')
// Adding data to firebase animalID DB
postListingModal.addEventListener(('submit'), (e) => {
  e.preventDefault();

  let buildingName = document.querySelector('#buildingName').value;
  let nPrice = document.querySelector('#nPrice').value;
  let desc = document.querySelector('#desc').value;
  let bBedrooms = document.querySelector('#bBedrooms').value;
  let nBahtrooms = document.querySelector('#nBahtrooms').value;
  let file = document.querySelector('#animalPictures').files[0];
  let image = new Date() + "_" + file.name;
  const task = ref.child(image).put(file);

  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      db.collection("Listings").add({
          bath: bBedrooms,
          bed: bBedrooms,
          desc: desc,
          location: buildingName,
          desc: desc,
          price: nPrice,
          url: url
        })
        .then((x) => {
          console.log("Document written with ID: ", x.id);
          ListingForm.reset();
          postListingModal.classList.remove('is-active');
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    })

  //test



})