const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const fnameInput = document.getElementById("fname");
const dobInput = document.getElementById("dob");

const emailInput = document.getElementById("email");
// const mobileInput = document.getElementById("mobile");
 const passwordInput = document.getElementById("password");
 const confirmPasswordInput = document.getElementById("confirm-password");
 const AddressInput=document.getElementById("Address");
//  const mobileInput=document.getElementById("mobile");
 const qualificationInput=document.getElementById("slctStudentQualification");
//  const pincodeInput=document.getElementById("pincode");
const phoneNumberInput=document.getElementById("txtStudentPhoneNumber");
const pincodeInput=document.getElementById("pincode");
const genderRadio = document.getElementsByName('input[name="rdbstudentgender"]:checked');
const genderValue = genderRadio.value;
if (genderRadio !== null) {
  const genderValue = genderRadio.value;
  console.log(genderValue);
} 
console.log(genderValue);




 
 
form.addEventListener("submit", (event) => {

    event.preventDefault();
 
    // Validate inputs
    const isValid = validateInputs();
    const genderRadio = document.querySelector('input[name="rdbstudentgender"]:checked');
    const genderValue = genderRadio.value;
    // If all inputs are valid, submit the form
    if (isValid) {
        const formData = {
            name: nameInput.value,
            fname:fnameInput.value,
            dob:dobInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            confirmPassword: confirmPasswordInput.value,
            Address:AddressInput.value,
            Gender:genderValue,
            // mobile:mobileInput.value,
            slctStudentQualification:qualificationInput.value,
            // pincode:pincodeInput.value,
            txtStudentPhoneNumber:phoneNumberInput.value,
            pincode:pincodeInput.value,
            
            
           
        };
          console.log(formData);
    }
  });
  
function validateInputs() {
  let isValid = true;
  var IsStudentGenderValid=true;
  var IsStudentQualificationValid=true;
  var IsStudentPhoneNumberValid=true;
  // var IsStudentPincodeNumberValid=true;
  
  
 

  
 

  // Validate name
  if (nameInput.value === "") {
    setError(nameInput, "Name is not required");
    
  } else {
    setSuccess(nameInput);
  }
  if (fnameInput.value === "") {
    setError(fnameInput, "Name is not required");
    
  } else {
    setSuccess(fnameInput);
  }
  if (dobInput.value === "") {
    setError(dobInput, "Name is not required");
    
  } else {
    setSuccess(dobInput,"name is coorect");
  }

  // Validate email
  if (emailInput.value === "") {
    setError(emailInput, "Email is not required");
    
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, "Email is not valid");
    
  } else {
    setSuccess(emailInput);
  }
  // Validate password
   if (passwordInput.value === "") {
    setError(passwordInput, "Password is not required");
  }
  else {
     setSuccess(passwordInput);
   }

  // Validate confirm password
   if (confirmPasswordInput.value === "") {
     setError(confirmPasswordInput, "Confirm password is not required");
   
   } else if (confirmPasswordInput.value !== confirmPasswordInput.value) {
     setError(confirmPasswordInput, "Passwords do not match");
   
   } else {
     setSuccess(confirmPasswordInput);
  }
  if (pincodeInput.value === "") {
    setError(pincodeInput, "Pincode is not required");
  }
  else {
     setSuccess(pincodeInput);
   }
  if (AddressInput.value === "") {
    setError(AddressInput, "Name is not required");
    
  } else {
    setSuccess(AddressInput);
  }
  
  // if (pincodeInput.value === "") {
  //   setError(pincodeInput, "Name is not required");
    
  // } else {
  //   setSuccess(pincodeInput);
  // }
  
  // if (mobileInput.value === "") {
  //   setError(mobileInput, "Name is not required");
    
  // } else {
  //   setSuccess(mobileInput);
  // }
  

 
  
  if(document.getElementById("rdbMale").checked!=true && document.getElementById("rdbFemale").checked!=true)
    {
        IsStudentGenderValid=false;
        document.getElementById("spnIsStudentGenderValid").innerHTML="please select your gender";
        document.getElementById("spnIsStudentGenderValid").style.color="red";
    }
    else{
        IsStudentGenderValid=true;
        document.getElementById("spnIsStudentGenderValid").innerHTML="valid";
        document.getElementById("spnIsStudentGenderValid").style.color="green";
    }
    if(document.getElementById("slctStudentQualification").value==-1)
    {
        IsStudentQualificationValid=false;
        document.getElementById("spnIsStudentQualificationValid").innerHTML="please select a option";
        document.getElementById("spnIsStudentQualificationValid").style.color="red";
    }
    else{
        IsStudentQualificationValid=true;
        document.getElementById("spnIsStudentQualificationValid").innerHTML="valid";
        document.getElementById("spnIsStudentQualificationValid").style.color="green";
    }

    if(document.getElementById("Tamil").checked!=true && document.getElementById("English").checked!=true)
    {
        IsStudentGenderValid=false;
        document.getElementById("spnIsStudentLanguagesValid").innerHTML="please select your Languages";
        document.getElementById("spnIsStudentLanguagesValid").style.color="red";
    }
    else{
        IsStudentGenderValid=true;
        document.getElementById("spnIsStudentLanguagesValid").innerHTML="valid";
        document.getElementById("spnIsStudentLanguagesValid").style.color="green";
    }

    var phoneNumberInput = document.getElementById("txtStudentPhoneNumber").value;

if (phoneNumberInput === "") {
  IsStudentPhoneNumberValid = false;
  document.getElementById("spnIsStudentPhoneNumberValid").innerHTML = "Please enter your phone number";
  document.getElementById("spnIsStudentPhoneNumberValid").style.color = "red";
} else if (/^\d+$/.test(phoneNumberInput) === false) {
  IsStudentPhoneNumberValid = false;
  document.getElementById("spnIsStudentPhoneNumberValid").innerHTML = "Please enter a valid phone number (numeric values only)";
  document.getElementById("spnIsStudentPhoneNumberValid").style.color = "red";
} else if (/^[6-9]\d{9}$/.test(phoneNumberInput) === false) {
  IsStudentPhoneNumberValid = false;
  document.getElementById("spnIsStudentPhoneNumberValid").innerHTML = "Please enter a valid phone number starting with 6, 7, 8, or 9";
  document.getElementById("spnIsStudentPhoneNumberValid").style.color = "red";
} else {
  IsStudentPhoneNumberValid = true;
  document.getElementById("spnIsStudentPhoneNumberValid").innerHTML = "Valid phone number";
  document.getElementById("spnIsStudentPhoneNumberValid").style.color = "green";
}




    
    
return isValid;
  }
function setError(inputcontrol, errormessage) {
  const formcontrol = inputcontrol.parentElement;
  const error = formcontrol.querySelector(".error-message");
  error.innerText = errormessage;
  formcontrol.className = "form-control error";
}
function setSuccess(inputcontrol) {
  const formcontrol = inputcontrol.parentElement;
  formcontrol.className = "form-control success";
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




 
  