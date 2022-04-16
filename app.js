// New Appointment Button
var addAppointmentBtn = document.querySelector("#addAppointmentBtn");
addAppointmentBtn.addEventListener('click', (e) => {
    var appointmentForm = document.querySelector("#appointmentForm");
    // show modal
    addAppointmentModal.classList.add('is-active');
    e.preventDefault();
})
var appointmentCancel = document.querySelector("#appointmentCancel");
appointmentCancel.addEventListener('click', (e) => {
    e.preventDefault();
    addAppointmentModal.classList.remove('is-active');
})
var appointmentReset = document.querySelector("#appointmentReset");
appointmentReset.addEventListener('click', (e) => {
    e.preventDefault();
    appointmentForm.reset();
})
var addAppointmentModalBG = document.querySelector("#addAppointmentModalBG")
addAppointmentModalBG.addEventListener("click", (e) => {
    e.preventDefault();
    addAppointmentModal.classList.remove('is-active');
})
// New Contact Button
var addContactBtn = document.querySelector("#addContactBtn");
addContactBtn.addEventListener('click', (e) => {
    var contactFrom = document.querySelector("#contactForm");
    // show modal
    addContactModal.classList.add('is-active');
    e.preventDefault();
})
var contactCancel = document.querySelector("#contactCancel");
contactCancel.addEventListener('click', (e) => {
    e.preventDefault();
    addContactModal.classList.remove('is-active');
})
var contactReset = document.querySelector("#contactReset");
contactReset.addEventListener('click', (e) => {
    e.preventDefault();
    contactForm.reset();
})
var addContactModalBG = document.querySelector("#addContactModalBG")
addContactModalBG.addEventListener("click", (e) => {
    e.preventDefault();
    addContactModal.classList.remove('is-active');
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
//Contacts
let addContactModal = document.querySelector('#addContactModal')
// Adding data to firebase animalID DB
let contactSubmitBtn = document.querySelector("contactSubmit")
contactSubmitBtn.addEventListener(('click'), (e) => {
    e.preventDefault();
    let newVol = document.querySelector("#isNewVol").value
    let buildingName = document.querySelector('#buildingName').value;
    let nPrice = document.querySelector('#nPrice').value;
    let desc = document.querySelector('#desc').value;
    let bBedrooms = document.querySelector('#bBedrooms').value;
    let nBathrooms = document.querySelector('#nBahtrooms').value;
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
})
//Appointments
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
})