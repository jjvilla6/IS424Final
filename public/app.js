//Person Search Values
//Access Appointments
var personValues = {};
var appointmentValues = {};
/*var user_cred;
var user = user_cred.user;
configureNav(user);
*/
/*
function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};
*/
function getDatabaseSnapshot(dbRef, child, docName) {
    if (dbRef === db) {
        console.log("Appointments");
        dbRef.child(child).child(docName).get().then((snapshot) => {
            if (snapshot.exists()) {
                console.log(Object.values(snapshot.val()));
                // return snapshot.val();
                return new Promise((resolve, reject) => {
                    resolve(Object.values(snapshot.val()))
                })
            } else {
                console.log("No data available");
            }
        }).
        then(appt_data => {
            console.log(appointmentValues);
            databaseSearch(appointmentValues, Array.from(appt_data), "Appointments");
        }).

        catch((error) => {
            console.error(error);
        });
    } else {
        console.log("People");
        dbRef.child(child).child(docName).get().then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                // return snapshot.val();
                return new Promise((resolve, reject) => {
                    resolve(Object.values(snapshot.val()))
                })
            } else {
                console.log("No data available");
            }
        }).
        then(ppl_data => {
            databaseSearch(personValues, Array.from(ppl_data), "People");
        }).

        catch((error) => {
            console.error(error);
        });
    }

}
// Access People
var ppl_data;
var appt_data;
try {
    let pplSearchBtn = document.querySelector('#pplSearchBtn');
    pplSearchBtn.addEventListener('click', (e) => {
        personResultTable.innerHTML = "";
        let pplOtherVal1 = document.querySelector("#otherCol1").value;
        let pplOtherVal2 = document.querySelector("#otherCol2").value;
        let isVolunteer = document.querySelector("#isVolunteer").value;
        personValues['Volunteer'] = isVolunteer;
        let isClient = document.querySelector("#isClient").value;
        personValues['Client'] = isClient;
        let isPotVol = document.querySelector("#isPotVol").value;
        personValues['Potential Volunteer'] = isPotVol;
        let isPotClient = document.querySelector("#isPotClient").value;
        personValues['Potential Client'] = isPotClient;
        let isMADD = document.querySelector("#isMADD").value;
        personValues['MADD'] = isMADD;
        let pplFirstName = document.querySelector("#firstName").value;
        personValues['First Name'] = pplFirstName;
        let pplLastName = document.querySelector("#lastName").value;
        personValues['Last Name'] = pplLastName;
        let pplHomePhone = document.querySelector("#homePhone").value;
        personValues['Home Phone'] = pplHomePhone;
        let pplCellPhone = document.querySelector("#cellPhone").value;
        personValues['Cell Phone'] = pplCellPhone;
        let pplRides = document.querySelector("#rides").value;
        personValues['Rides'] = pplRides;
        let pplShoppingFor = document.querySelector("#shoppingFor").value;
        personValues['Shopping For'] = pplShoppingFor;
        let pplShoppingWith = document.querySelector("#shoppingWith").value;
        personValues['Shopping With'] = pplShoppingWith;
        let pplChores = document.querySelector("#chores").value;
        personValues['Chores'] = pplChores;
        let pplHomeRepairs = document.querySelector("#homeRepairs").value;
        personValues['Home Repairs'] = pplHomeRepairs;
        let pplVisit = document.querySelector("#visit").value;
        personValues['Visit'] = pplVisit;
        let pplDateActiveStart = document.querySelector("#dateActiveStart").value;
        personValues['Date Active-Start'] = pplDateActiveStart;
        let pplDateActiveEnd = document.querySelector("#dateActiveEnd").value;
        personValues['Date Active-End'] = pplDateActiveEnd;
        let pplDateOfBirthStart = document.querySelector("#dateOfBirthStart").value;
        personValues['DOB-Start'] = pplDateOfBirthStart;
        let pplDateOfBirthEnd = document.querySelector("#dateOfBirthEnd").value;
        personValues['DOB-End'] = pplDateOfBirthEnd;
        let congregation = document.querySelector("#congregation").value;
        personValues['Congregation'] = congregation;
        let vaccinated = document.querySelector("#vaccinated").value;
        personValues['Fully vaccinated'] = vaccinated;
        let vaccineRefusal = document.querySelector("#vaccineRefusal").value;
        personValues['Will NOT get vaccine'] = vaccineRefusal;
        let vaccinepreferred = document.querySelector("#dateOfBirthEnd").value;
        personValues['Prefers Vaccinated Only'] = vaccinepreferred;
        let pplOtherSearch1 = document.querySelector("#otherSearch1").value;
        personValues[pplOtherVal1] = pplOtherSearch1;
        let pplOtherSearch2 = document.querySelector("#otherSearch1").value;
        personValues[pplOtherVal2] = pplOtherSearch2;
        getDatabaseSnapshot(people_db, "1hIPBrzcGDxjujGsvDRWoyF4IygUkVK_jTkpron7UTPE", `Sheet1`);

        e.preventDefault();
    });
} catch (TypeError) {

}
try {
    let searchAptBtn = document.querySelector('#searchAptBtn');
    searchAptBtn.addEventListener('click', (e) => {
        //Call function to search appts
        apptResultTable.innerHTML = "";
        let apptOtherVal1 = document.querySelector("#otherCol3").value;
        let apptOtherVal2 = document.querySelector("#otherCol4").value;
        let apptClientName = document.querySelector("#clientNameSelect").value;
        appointmentValues['Client Name'] = apptClientName;
        let apptVolName = document.querySelector("#volNameSelect").value;
        appointmentValues['Volunteer Name'] = apptVolName;
        //Use substrings for date search
        let apptStartDate = document.querySelector("#appointmentStartDate").value;
        appointmentValues['Date of Service-Start'] = apptStartDate;
        let apptEndDate = document.querySelector("#appointmentEndDate").value;
        appointmentValues['Date of Service-End'] = apptEndDate;
        let apptShorewood = document.querySelector("#Shorewood").value;
        appointmentValues['Shorewood Resident Y or N'] = apptShorewood;
        let apptOtherSearch1 = document.querySelector("#otherSearch3").value;
        appointmentValues[apptOtherVal1] = apptOtherSearch1;
        let apptOtherSearch2 = document.querySelector("#otherSearch4").value;
        appointmentValues[apptOtherVal2] = apptOtherSearch2;
        console.log(appointmentValues);
        getDatabaseSnapshot(db, '1C0V_NenLtj08Fq1-55L53aO608oVMcF63-1dgVLUuss', `Pending`);
        e.preventDefault();
    });
} catch (TypeError) {}



//Function to search through entries to find matches #TODO
function databaseSearch(searchValues, data, type) {
    curr_values = Array.from(data);
    console.log(curr_values);
    for (let i in searchValues) {
        if (typeof searchValues[i] !== "undefined" && searchValues[i] !== "" && searchValues[i] != "Select") {
            searchValue = searchValues[i];
            if (searchValue != null && searchValue != "") {
                console.log(searchValue);
                if (searchValue === "Yes") {
                    curr_values = getMatches(i, true, curr_values);
                } else if (searchValue === "No") {
                    curr_values = getMatches(i, false, curr_values);
                } else if (i.includes("Date")) {
                    if (i.includes("Start")) {
                        curr_values = getMatches(i, searchValue, curr_values, type, "Start");
                    }
                } else {
                    curr_values = getMatches(i, searchValue, curr_values);
                }
            }
        }
    }
    console.log(curr_values);
    createTable(curr_values, type);
}

function getMatches(key, value, data, searchedDB, datetype = "None") {
    var matches = [];
    console.log(key, value);
    if (value == true) {
        console.log("Passed");
    }
    Object.values(data).forEach(entry => {
        if (typeof (entry) !== "undefined") {
            if (datetype == "Start") {
                fieldToSearch = key.substring(0, key.indexOf('-'));
                startDate = Date.parse(value);
                entryDate = Date.parse(entry[fieldToSearch]);
                if (searchedDB == "Appointments") {
                    endDateString = fieldToSearch.concat('-End');
                    endDate = Date.parse(appointmentValues[endDateString]);

                } else {
                    endDateString = fieldToSearch.concat('-End');
                    endDate = Date.parse(personValues[endDateString]);
                }
                console.log(startDate, endDate, entryDate);
                if (startDate < entryDate && endDate > entryDate) {
                    matches.push(entry);
                }
            } else {
                if (entry[key] == value) {
                    matches.push(entry)
                }
            }
        }
    })
    return matches;
}
//Get all values of specified field #TODO

//Create table displaying all appt values #TODO
try {
    var apptResultTable = document.querySelector("#apptResultTable");
} catch (e) {

}
try {
    var personResultTable = document.querySelector("#personResultTable");
} catch (e) {}

function createTable(data, type) {
    if (type == "Appointments") {
        let htmlString = "<table class=\"table is-bordered is-hoverable\"><tbody><tr><td>id</td><td>Joan Notified</td><td>Client First Name</td><td>Client Name</td><td>Date of Service</td><td>Time of Ride</td><td>Volunteer Name</td><td>Service Type</td><td>Sub-Service Type</td><td>COVID Agreement</td><td>Hours Spent</td><td>Ride Units</td><td>Miles</td><td>Destination Name</td><td>Destination Address</td><td>Additional Notes</td><td>Shorewood Resident Y or N</td> <td>Cancellation Reason</td><td>Volunteer Matched with Cancelled Ride</td><td>Month</td><td>Ride Coordinator</td></tr>";
        Object.values(data).forEach(appointment => {
            htmlString = htmlString.concat(`<tr>
            <td>${appointment['id']}</td>
        <td> ${appointment['Joan Notified']}</td>
        <td>${appointment['Client First Name']}</td>
        <td>${appointment['Client Name']}</td>
        <td>${new Date(appointment['Date of Service']).toDateString()}</td>
        <td>${new Date(appointment['Time of ride']).toLocaleTimeString('en',
        { timeStyle: 'short', hour12: true, timeZone: 'America/Chicago' })}</td>
        <td>${appointment['Volunteer Name']}</td>
        <td>${appointment['Service Type']}</td>
        <td>${appointment['Sub Service Type']}</td>
        <td>${appointment['COVID Agreement']}</td>
        <td>${appointment['Hours Spent']}</td>
        <td>${appointment['Ride Units']}</td>
        <td>${appointment['Miles']}</td>
        <td>${appointment['Destination Name']}</td>
        <td>${appointment['Destination Address']}</td>
        <td>${appointment['Additional Notes']}</td>
        <td>${appointment['Shorewood Resident Y or N']}</td>
        <td>${appointment['Cancellation Reason']}</td>
        <td>${appointment['Volunteer Matched with Cancelled Ride']}</td>
        <td>${appointment['Month']}</td>
        <td>${appointment['Ride Coordinator']}</td> </tr>`);
        });
        htmlString += `</tbody></table>`;
        apptResultTable.innerHTML = htmlString;

    } else {
        let htmlString = `<table class="table is-bordered is-hoverable">
        <tr>
            <td>ID</td>
            <td>Volunteer</td>
            <td>Client</td>
            <td>Birthday List</td>
            <td>Donor</td>
            <td>Community Contact</td>
            <td>Potential Volunteer</td>
            <td>Potential Client</td>
            <td>MADD</td>
            <td>SDC</td>
            <td>Loan Closet</td>
            <td>Boswell's Volunteer</td>
            <td>Event Attender</td>
            <td>Status A|I||NA </td>
            <td>Last Name</td>
            <td>First Name</td>
            <td>Organization</td>
            <td>Address</td>
            <td>City</td>
            <td>State</td>
            <td>Zip</td>
            <td>Home Phone</td>
            <td>Cell Phone</td>
            <td>Texting?</td>
            <td>Email</td>
            <td>Preferred method of contact</td>
            <td>Rides</td>
            <td>Shopping For</td>
            <td>Shopping With</td>
            <td>Chores</td>
            <td>Home Repairs</td>
            <td>Visit</td>
            <td>Calls</td>
            <td>Admin</td>
            <td>I&A</td>
            <td>Service Comments</td>
            <td>Date Active</td>
            <td>Date Inactive</td>
            <td>Reason Inactive</td>
            <td>DOB</td>
            <td>Birthday</td>
            <td>Gender</td>
            <td>Marital Status</td>
            <td>Lives With</td>
            <td>Veteran</td>
            <td>Race</td>
            <td>Ethnicity</td>
            <td>Below Poverty Level</td>
            <td>Emergency Contact 1</td>
            <td>Emergency Phone 1</td>
            <td>Emergency Contact 2</td>
            <td>Emergency Phone 2</td>
            <td>Congregation</td>
            <td>How Did You Hear About Us?</td>
            <td>Consent to photo?</td>
            <td>Other regular volunteer</td>
            <td>Potential volunteer?</td>
            <td>Do not Mail|Do Not Contact</td>
            <td>Incomplete Paperwork</td>
            <td>Fully Vaccinated</td>
            <td>Will NOT get vaccine</td>
            <td>Prefers Vaccinated Only</td>
            </tr>`
        Object.values(data).forEach(person => {
            htmlString += `
        <tr>
            <td>${person['ID']}</td>
            <td>${person['Volunteer']}</td>
            <td>${person['Client']}</td>
            <td>${person['Birthday List']}</td>
            <td>${person['Donor']}</td>
            <td>${person['Community Contact']}</td>
            <td>${person['Potential Volunteer']}</td>
            <td>${person['Potential Client']}</td>
            <td>${person['MADD']}</td>
            <td>${person['SDC']}</td>
            <td>${person['Loan Closet']}</td>
            <td>${person["Boswell's Volunteer"]}</td>
            <td>${person['Event Attender']}</td>
            <td>${person['Status A|I||NA ']}</td>
            <td>${person['Last Name']}</td>
            <td>${person['First Name']}</td>
            <td>${person['Organization']}</td>
            <td>${person['Address']}</td>
            <td>${person['City']}</td>
            <td>${person['State']}</td>
            <td>${person['Zip']}</td>
            <td>${person['Home Phone']}</td>
            <td>${person['Cell Phone']}</td>
            <td>${person['Texting?']}</td>
            <td>${person['Email']}</td>
            <td>${person['Preferred method of contact']}</td>
            <td>${person['Rides']}</td>
            <td>${person['Shopping For']}</td>
            <td>${person['Shopping With']}</td>
            <td>${person['Chores']}</td>
            <td>${person['Home Repairs']}</td>
            <td>${person['Visit']}</td>
            <td>${person['Calls']}</td>
            <td>${person['Admin']}</td>
            <td>${person['I&A']}</td>
            <td>${person['Service Comments']}</td>
            <td>${new Date(person['Date Active']).toDateString()}</td>
            <td>${new Date(person['Date Inactive']).toDateString()}</td>
            <td>${person['Reason Inactive']}</td>
            <td>${new Date(person['DOB']).toDateString()}</td>
            <td>${new Date(person['Birthday']).getMonth()+'/'+new Date(person['Birthday']).getDate()}</td>
            <td>${person['Gender']}</td>
            <td>${person['Marital Status']}</td>
            <td>${person['Lives With']}</td>
            <td>${person['Veteran']}</td>
            <td>${person['Race']}</td>
            <td>${person['Ethnicity']}</td>
            <td>${person['Below Poverty Level']}</td>
            <td>${person['Emergency Contact 1']}</td>
            <td>${person['Emergency Phone 1']}</td>
            <td>${person['Emergency Contact 2']}</td>
            <td>${person['Emergency Phone 2']}</td>
            <td>${person['Congregation']}</td>
            <td>${person['How Did You Hear About Us?']}</td>
            <td>${person['Consent to photo?']}</td>
            <td>${person['Other regular volunteer']}</td>
            <td>${person['Potential volunteer?']}</td>
            <td>${person['Do not Mail|Do Not Contact']}</td>
            <td>${person['Incomplete Paperwork']}</td>
            <td>${person['Fully Vaccinated']}</td>
            <td>${person['Will NOT get vaccine']}</td>
            <td>${person['Prefers Vaccinated Only']}</td>
        </tr>`

        })
        htmlString += `</table>`;
        personResultTable.innerHTML = htmlString;
    }
}

//Create authorization stuff
signin_form.addEventListener("submit", (e) => {
    e.preventDefault();
    signin_error.innerHTML = "";
    let email = document.querySelector("#signin_email").value;
    let password = document.querySelector("#signin_pass").value;
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            user_cred = userCredential.user;
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

function configureNav(user) {
    if (user) {
        welcomeUser.innerHTML = `Welcome ${auth.currentUser.email}!`;
        signoutbtn.classList.remove("is-hidden");
        signinbtn.classList.add("is-hidden");
        try {
            pplSearchBtn.classList.remove("is-hidden");
        } catch (e) {}
        try {
            searchAptBtn.classList.remove("is-hidden");
        } catch (e) {}
    } else {
        welcomeUser.innerHTML = '';
        signinbtn.classList.remove("is-hidden");
        signoutbtn.classList.add("is-hidden");
        try {
            pplSearchBtn.classList.add("is-hidden");
        } catch (e) {}
        try {
            searchAptBtn.classList.add("is-hidden");
        } catch (e) {}
    }
}
let signoutbtn = document.querySelector("#signoutbtn");
signoutbtn.addEventListener('click', (e) => {
    auth.signOut();
    configureNav(null);
});
// New Appointment Button
/*var addAppointmentBtn = document.querySelector("#addAppointmentBtn");
addAppointmentBtn.addEventListener('click', (e) => {
    var appointmentForm = document.querySelector("#appointmentForm");
    // show modal
    addAppointmentModal.classList.add('is-active');
    preventDefault();
})
var appointmentCancel = document.querySelector("#appointmentCancel");
appointmentCancel.addEventListener('click', (e) => {
    preventDefault();
    addAppointmentModal.classList.remove('is-active');
})
var appointmentReset = document.querySelector("#appointmentReset");
appointmentReset.addEventListener('click', (e) => {
    preventDefault();
    appointmentForm.reset();
})
var addAppointmentModalBG = document.querySelector("#addAppointmentModalBG")
addAppointmentModalBG.addEventListener("click", (e) => {
    preventDefault();
    addAppointmentModal.classList.remove('is-active');
})
// New Contact Button
var addContactBtn = document.querySelector("#addContactBtn");
addContactBtn.addEventListener('click', (e) => {
    var contactFrom = document.querySelector("#contactForm");
    // show modal
    addContactModal.classList.add('is-active');
    preventDefault();
})
var contactCancel = document.querySelector("#contactCancel");
contactCancel.addEventListener('click', (e) => {
    preventDefault();
    addContactModal.classList.remove('is-active');
})
var contactReset = document.querySelector("#contactReset");
contactReset.addEventListener('click', (e) => {
    preventDefault();
    contactForm.reset();
})
var addContactModalBG = document.querySelector("#addContactModalBG")
addContactModalBG.addEventListener("click", (e) => {
    preventDefault();
    addContactModal.classList.remove('is-active');
})
*/
/*
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
*/
//Sign-inModal Functionality
let signinbtn = document.querySelector('#signinbtn');
let signinModal = document.querySelector('#signin-modal');
let signinModalBg = document.querySelector('#signinmodalBG');
signinbtn.addEventListener('click', () => {
    signinModal.classList.add('is-active');
})

signinModalBg.addEventListener('click', () => {
    signinModal.classList.remove('is-active');
    preventDefault();
});