
/* NEXT, PREVIOUS, & SUBMIT BUTTON TRANSITIONS */

const formItems = document.getElementsByClassName('form-item');
const button = document.getElementsByClassName('btn');
const steps = document.getElementsByClassName('step');
const required = document.getElementsByClassName('required');
const error = document.querySelector('.error');

let currentFormItem = 0;
formItems[currentFormItem].style.display = "block";

if (currentFormItem === 0) {
    button[0].style.display = "none";
    steps[0].style.backgroundColor = "#1e9df7";
}

button[1].addEventListener('click', nextFunction);
function nextFunction() {
    const requiredInputs = [
        [0, 1, 2],
        [3, 4, 5, 6, 7, 8, 9],
        [10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    ];

    let isFormValid = true;

    for (let i = 0; i < requiredInputs[currentFormItem].length; i++) {
        const inputIndex = requiredInputs[currentFormItem][i];
        const inputElement = required[inputIndex];
        const inputValue = required[inputIndex].value;

        if (inputValue === "" || inputValue === "please-select") {
            isFormValid = false;
            inputElement.classList.add('red-border');
        } else {
            inputElement.classList.remove('red-border');
        }
    };

    if (isFormValid) {
        error.style.display = "none";
        currentFormItem++;
        const prevFormItem = currentFormItem - 1;

        if (currentFormItem < 5) {
            button[0].style.display = "inline-block";
            formItems[currentFormItem].style.display = "block";
            formItems[prevFormItem].style.display = "none";
            steps[currentFormItem].style.backgroundColor = "#1e9df7";

            if (currentFormItem === 3) {
                button[1].innerHTML = "Submit";
            } else if (currentFormItem === 4) {
                submitFunction();
            }
        } else {
            button[1].innerHTML = "Next";
        }
    } else {
        error.style.display = "block";
    };
};

button[0].addEventListener('click', prevFunction);

function prevFunction() {
    error.style.display = "none";
    if (currentFormItem > 0) {
        currentFormItem--;
        const nextFormItem = currentFormItem + 1;
        formItems[currentFormItem].style.display = "block";
        formItems[nextFormItem].style.display = "none";
        steps[nextFormItem].style.backgroundColor = "#cfd2d4";

        if (currentFormItem === 0) {
            button[0].style.display = "none";
        }

        if (currentFormItem < 3) {
            button[1].innerHTML = "Next";
        }
    }
};

/* Step Click Transition - this one got tricky
for (let i = 0; i < steps.length; i++) {
    steps[i].addEventListener('click', () => {
        currentFormItem = i;
        for (let j = 0; j < formItems.length; j++) {
            formItems[j].style.display = i === j ? "block" : "none";
            steps[j].style.backgroundColor = i === j ? "#1e9df7" : "#cfd2d4";
        }
    });
}; */

/* SUBMIT FUNCTION */
const inspectionFeeFinal = document.getElementById('inspection-fee');
const crawlspaceFeeFinal = document.getElementById('crawl-fee');
const radonFeeFinal = document.getElementById('radon-fee');
const addAreaFeeFinal = document.getElementById('additional-area-fee');
const totalFeeFinal = document.getElementById('total-fee');
const footage = document.getElementById('footage');
const radon = document.getElementById('radon');
const crawl = document.getElementById('crawl');
const addArea = document.getElementById('other-area');
const addAreaFee = document.getElementById('other-area-fee');

function submitFunction() {
    let inspectionFee = 350;
    let crawlspaceFee = 0;
    let radonFee = 0;
    let addFee = 0;
    let totalFee = 0;

    if (footage.value < 1500) {
        inspectionFee += (footage.value * 0.035);
    } else {
        inspectionFee += (footage.value * 0.05);
    };
    inspectionFeeFinal.innerHTML = "$" + inspectionFee;

    if (radon.value === "yes") {
        radonFee = 200;
    } else {
        radonFee = 0;
    };
    radonFeeFinal.innerHTML = "$" + radonFee;

    if (crawl.value === 'yes') {
        crawlspaceFee = 50;
    } else {
        crawlspaceFee = 0;
    };
    crawlspaceFeeFinal.innerHTML = "$" + crawlspaceFee;

    if (addArea.value === "") {
        addFee = 0;
    } else {
        addFee = addAreaFee.value;
    };
    addAreaFeeFinal.innerHTML = '$' + addFee;

    let a = ((inspectionFee + parseFloat(radonFee) + parseFloat(addFee) + parseFloat(crawlspaceFee)) / 5);
    totalFee = (Math.floor(a) * 5);
    totalFeeFinal.innerHTML = '$' + totalFee;
};

/* "OTHER" INPUT VISIBILITY EVENT LISTENERS */
const referral = document.getElementById('referral');
const otherSource = document.getElementById('other-source');
referral.addEventListener('input', () => {
    if (referral.value === "other") {
        otherSource.style.display = "block";
    } else {
        otherSource.style.display = "none";
    }
});

const authorized = document.getElementById('authorized');
const otherAuth = document.getElementById('other-auth');
authorized.addEventListener('input', () => {
    if (authorized.value === "other") {
        otherAuth.style.display = 'block';
    } else {
        otherAuth.style.display = "none";
    }
});

const access = document.getElementById('access');
const otherAccess = document.getElementById('other-access');
const lockbox = document.getElementById('lockbox');
access.addEventListener('input', () => {
    if (access.value === "other") {
        otherAccess.style.display = 'block';
    } else {
        otherAccess.style.display = "none";
    };

    if (access.value === "lockbox") {
        lockbox.style.display = "block";
    } else {
        lockbox.style.display = "none";
    }
});

const otherArea = document.getElementById('other-area');
const otherAreaFee = document.getElementById('other-area-fee');
otherArea.addEventListener('input', () => {
    if (otherArea.value !== "") {
        otherAreaFee.style.display = "block"
    } else {
        otherAreaFee.style.display = "none"
    }
});

const overrideButton = document.getElementById('override-button');
const override = document.getElementById('override');
const overridePrice = document.getElementById('override-price');
let toggleVisibility = false;
overrideButton.addEventListener('click', () => {
  toggleVisibility = !toggleVisibility; 
  if (toggleVisibility) {
    override.style.display = "block";
    overridePrice.style.display = "block";
  } else {
    override.style.display = "none";
    overridePrice.style.display = "none";
  }
});

/* SEARCH ADDRESS FUNCTION */
const search = document.getElementById('search');
const city = document.getElementById('city');
const address = document.getElementById('address');
search.addEventListener('click', searchFunction)

function searchFunction(e) {
    e.preventDefault();
    let searchTerm = address.value + " " + city.value;
    let searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(searchURL, '_blank');
};

/* ENTER BUTTON EVENT LISTENER */
document.addEventListener('keypress', function(event) {
    const activeElement = document.activeElement;
    const isAddressInput = activeElement === address;
    const isCityInput = activeElement === city;

    if (event.key === "Enter" && !isAddressInput && !isCityInput) {
        event.preventDefault();
        nextFunction();
    }
});
