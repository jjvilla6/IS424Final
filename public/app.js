let appointmentValues = {};
let personValues = {};
//Make All references #TODO
let apptOtherVal1 = document.querySelector("#otherCol3");
let apptOtherVal2 = document.querySelector("#otherCol4");
let apptClientName = document.querySelector("#clientNameSelect");
appointmentValues['Client Name'] = apptClientName;
let apptVolName = document.querySelector("#volNameSelect");
appointmentValues['Volunteer Name'] = apptVolName
//Use substrings for date search
let apptStartDate = document.querySelector("#appointmentStartDate");
appointmentValues['Volunteer Name'] = apptVolName
let apptEndDate = document.querySelector("#appointmentEndDate");
appointmentValues['Volunteer Name'] = apptVolName
let apptShorewood = document.querySelector("#Shorewood");
appointmentValues['Volunteer Name'] = apptVolName
let apptOtherSearch1 = document.querySelector("#otherSearch3");
appointmentValues[apptOtherVal1] = apptOtherSearch1;
let apptOtherSearch2 = document.querySelector("#otherSearch4");
appointmentValues[apptOtherVal2] = apptOtherSearch2;
let appointmentSearchBtn = document.querySelector("#searchAptBtn");
//Person Search Values
let pplOtherVal1 = document.querySelector("#otherCol1");
let pplOtherVal2 = document.querySelector("#otherCol2");
let isVolunteer = document.querySelector("#isVolunteer");
personValues['Volunteer'] = isVolunteer;
let isClient = document.querySelector("#isClient");
personValues['Client'] = isClient;
let isPotVol = document.querySelector("#isPotVol");
personValues['Potential Volunteer'] = isPotVol;
let isPotClient = document.querySelector("#isPotClient");
personValues['Potential Client'] = isPotClient;
let isMADD = document.querySelector("#isMADD");
personValues['MADD'] = isMADD;
let pplFirstName = document.querySelector("#firstName");
personValues['First Name'] = pplFirstName;
let pplLastName = document.querySelector("#lastName");
personValues['Last Name'] = pplLastName;
let pplHomePhone = document.querySelector("#homePhone");
personValues['Home Phone'] = pplHomePhone;
let pplCellPhone = document.querySelector("#cellPhone");
personValues['Cell Phone'] = pplCellPhone;
let pplRides = document.querySelector("#rides");
personValues['Rides'] = pplRides;
let pplShoppingFor = document.querySelector("#shoppingFor");
personValues['Shopping For'] = pplShoppingFor;
let pplShoppingWith = document.querySelector("#shoppingWith");
personValues['Shopping With'] = pplShoppingWith;
let pplChores = document.querySelector("#chores");
personValues['Chores'] = pplChores;
let pplHomeRepairs = document.querySelector("#homeRepairs");
personValues['Home Repairs'] = pplHomeRepairs;
let pplVisit = document.querySelector("#visit");
personValues['Visit'] = pplVisit;
let pplDateActiveStart = document.querySelector("#dateActiveStart");
personValues['Date Active-Start'] = pplDateActiveStart;
let pplDateActiveEnd = document.querySelector("#dateActiveEnd");
personValues['Date Active-End'] = pplDateActiveEnd;
let pplDateOfBirthStart = document.querySelector("#dateOfBirthStart");
personValues['DOB-Start'] = pplDateOfBirthStart;
let pplDateOfBirthEnd = document.querySelector("#dateOfBirthEnd");
personValues['DOB-End'] = pplDateOfBirthEnd;
let congregation = document.querySelector("#congregation");
personValues['Congregation'] = congregation;
let vaccinated = document.querySelector("#vaccinated");
personValues['Fully vaccinated'] = vaccinated;
let vaccineRefusal = document.querySelector("#vaccineRefusal");
personValues['Will NOT get vaccine'] = vaccineRefusal;
let vaccinepreferred = document.querySelector("#dateOfBirthEnd");
personValues['Prefers Vaccinated Only'] = vaccinepreferred;
let pplOtherSearch1 = document.querySelector("#otherSearch1");
personValues[pplOtherVal1] = pplOtherSearch1;
let pplOtherSearch2 = document.querySelector("#otherSearch1");
personValues[pplOtherVal2] = pplOtherSearch2;


let pplSearchBtn = document.querySelector('#searchPplBtn');
pplSearchBtn.addEventListener('click', () => {
    console.log(pplDateActiveStart.value, typeof pplDateActiveStart.value);
});
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