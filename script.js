//* - User - */
const accountNameExpected = "Sara";
const accountPassExpected = "qwe123";
/* - Access to html-div - */
const accessFuncDiv = document.body.querySelector(".access-function");

/* - Upon refresh - */
let accountNameStored = localStorage.getItem("Account Name");
let accountPasswordStored = localStorage.getItem("Account Password")
let btnTryAgainState = localStorage.getItem("State");

if (accountNameStored == accountNameExpected && accountPasswordStored == accountPassExpected) {

    placeLogout();
    const LogOutTextChange = document.getElementById("LogOutText");
    LogOutTextChange.innerHTML = "Du är inloggad";

}
else if (btnTryAgainState) {

    placeTryAgain();

}
else {
    
    accessFuncDiv.replaceChildren();
    placeLogin();

}
/* ------------------------------------------------------------------------------------------------- */


function placeLogin() {
/* - Building up elements - */
/*2 inputs*/
const inpNameElement = document.createElement("input");
inpNameElement.setAttribute("id", "inpName");
inpNameElement.setAttribute("type", "text");
inpNameElement.setAttribute("placeholder", "Account name...");

const inpPassElement = document.createElement("input");
inpPassElement.setAttribute("id", "inpPass");
inpPassElement.setAttribute("type", "text");
inpPassElement.setAttribute("placeholder", "Password...");
/*1 button*/
const btnLoginElement = document.createElement("button");
const btnLoginText = document.createTextNode("Log in");
btnLoginElement.setAttribute("id", "btnLogin");

/* - Appending of elements - */
accessFuncDiv.appendChild(inpNameElement);
accessFuncDiv.appendChild(inpPassElement);

btnLoginElement.appendChild(btnLoginText);
accessFuncDiv.appendChild(btnLoginElement);

/* - Function of elements - */
const inpName = document.getElementById("inpName");
const inpPass = document.getElementById("inpPass");
const btnLogin = document.getElementById("btnLogin");

    btnLogin.onclick = function() {

        const Name = inpName.value;
        const Pass = inpPass.value;

        if (Name && Pass) {

            localStorage.setItem("Account Name", Name); /*key index: 1*/
            localStorage.setItem("Account Password", Pass); /*key index: 0*/

            let accountNameStored = localStorage.getItem("Account Name");
            let accountPasswordStored = localStorage.getItem("Account Password");

            if (accountNameStored == accountNameExpected && accountPasswordStored == accountPassExpected) {
                
                accessFuncDiv.replaceChildren();
                placeLogout();

            }
            else {

                localStorage.clear();
                localStorage.setItem("State", "MaintainBtnTryAgainUponRefresh");
                accessFuncDiv.replaceChildren();
                placeTryAgain();

            }

        }

    };

};

function placeLogout() {
/* - Building up elements - */
/*1 paragraph*/
const paraElement = document.createElement("p");
const paraText = document.createTextNode("Välkommen, du är nu inloggad");
paraElement.setAttribute("id", "LogOutText");
/*1 button*/
const btnLogoutElement = document.createElement("button");
const btnLogoutText = document.createTextNode("Log out");
btnLogoutElement.setAttribute("id", "btnLogout");

/* - Appending of elements - */
paraElement.appendChild(paraText);
accessFuncDiv.appendChild(paraElement);

btnLogoutElement.appendChild(btnLogoutText);
accessFuncDiv.appendChild(btnLogoutElement);

/* - Function of elements - */
const btnLogout = document.getElementById("btnLogout");

    btnLogout.onclick = function() {

        localStorage.clear();
        accessFuncDiv.replaceChildren();
        placeLogin();

    };

};

function placeTryAgain() {
/* - Building up elements - */
/*1 paragraph*/
const paraElement = document.createElement("p");
const paraText = document.createTextNode("Fel lösen eller användarnamn");
/*1 button*/
const btnTryAgainElement = document.createElement("button");
const btnTryAgainText = document.createTextNode("Try Again");
btnTryAgainElement.setAttribute("id", "btnTryAgain");
    
/* - Appending of elements - */
paraElement.appendChild(paraText);
accessFuncDiv.appendChild(paraElement);

btnTryAgainElement.appendChild(btnTryAgainText);
accessFuncDiv.appendChild(btnTryAgainElement);
    
/* - Function of elements - */
const btnTryAgain = document.getElementById("btnTryAgain");
    
btnTryAgain.onclick = function() {
    
        localStorage.clear();
        accessFuncDiv.replaceChildren();
        placeLogin();
    
    };
    
};
