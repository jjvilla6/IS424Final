let appointmentValues = {};
let personValues = {};
//Make All references #TODO
let apptOtherVal1 = document.querySelector("#otherCol3");
appointmentValues.add(apptOtherVal1);
let apptOtherVal2 = document.querySelector("#otherCol4");
appointmentValues.add(apptOtherVal2);
let apptClientName = document.querySelector("#clientNameSelect");
appointmentValues.add(apptClientName);
let apptVolName = document.querySelector("#volNameSelect");
appointmentValues.add(apptVolName);
let apptStartDate = document.querySelector("#appointmentStartDate");
appointmentValues.add(apptStartDate);
let apptEndDate = document.querySelector("#appointmentEndDate");
appointmentValues.add(apptEndDate);
let apptShorewood = document.querySelector("#Shorewood");
appointmentValues.add(apptShorewood);
let apptOtherSearch1 = document.querySelector("#otherSearch3");
appointmentValues.add(apptOtherSearch1);
let apptOtherSearch2 = document.querySelector("#otherSearch4");
appointmentValues.add(apptOtherSearch2);
let appointmentSearchBtn = document.querySelector("#searchAptBtn");
//Person Search Values
let pplOtherVal1 = document.querySelector("#otherCol1");
personValues.add(pplOtherVal1);
let pplOtherVal2 = document.querySelector("#otherCol2");
personValues.add(pplOtherVal1);
let isVolunteer = document.querySelector("#isVolunteer");
personValues.add(isVolunteer);
let isClient = document.querySelector("#isClient");
personValues.add(isClient);
let isPotVol = document.querySelector("#isPotVol");
personValues.add(isPotVol);
let isPotClient = document.querySelector("#isPotClient");
personValues.add(isPotClient);
let isMADD = document.querySelector("#isMADD");
personValues.add(pplOtherVal1);
let pplFirstName = document.querySelector("#firstName");
personValues.add(firstName);
let pplLastName = document.querySelector("#lastName");
personValues.add(pplLastName);
let pplHomePhone = document.querySelector("#homePhone");
personValues.add(pplHomePhone);
let pplCellPhone = document.querySelector("#cellPhone");
personValues.add(pplCellPhone);
let pplRides = document.querySelector("#rides");
personValues.add(pplRides);
let pplShoppingFor = document.querySelector("#shoppingFor");
personValues.add(pplShoppingFor);
let pplShoppingWith = document.querySelector("#shoppingWith");
personValues.add(pplShoppingWith);
let pplChores = document.querySelector("#chores");
personValues.add(pplChores);
let pplHomeRepairs = document.querySelector("#homeRepairs");
personValues.add(pplHomeRepairs);
let pplVisit = document.querySelector("#visit");
personValues.add(pplVisit);
let pplDateActiveStart = document.querySelector("#dateActiveStart");
personValues.add(pplDateActiveStart);
let pplDateActiveEnd = document.querySelector("#dateActiveEnd");
personValues.add(pplDateActiveEnd);
let pplDateOfBirthStart = document.querySelector("#dateOfBirthStart");
personValues.add(pplDateOfBirthStart);
let pplDateOfBirthEnd = document.querySelector("#dateOfBirthEnd");
personValues.add(pplDateOfBirthEnd);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);
let x = document.querySelector("#");
personValues.add(pplOtherVal1);

//Assign Reference to respective list #TODO

//Loop through values #TODO

//Function to search through entries to find matches #TODO

//Get all values of specified field #TODO

//Create table displaying all values #TODO



// New Appointment Button
/*var addAppointmentBtn = document.querySelector("#addAppointmentBtn");
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
*/
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

//Access Appointments 
db.child("1C0V_NenLtj08Fq1-55L53aO608oVMcF63-1dgVLUuss").child("Pending").get().then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
// Access People
people_db.child("1hIPBrzcGDxjujGsvDRWoyF4IygUkVK_jTkpron7UTPE").child("Sheet1").get().then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});