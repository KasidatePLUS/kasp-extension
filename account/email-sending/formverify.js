let mail = "testing@temp.kasidate.me";
let password = "12345678";
let sendotp;
let sendotpid;

function makeotpid(length) {
    var otpidresult = '';
    var otpidcharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var otpidcharactersLength = otpidcharacters.length;
    for (var i = 0; i < length; i++) {
        otpidresult += otpidcharacters.charAt(Math.floor(Math.random() *
            otpidcharactersLength));
    }
    return otpidresult;
}

let otpid = makeotpid(4);

document.getElementById('otpid').innerHTML = otpid;

function makeotp(length) {
    var otpresult = '';
    var otpcharacters = '0123456789';
    var otpcharactersLength = otpcharacters.length;
    for (var i = 0; i < length; i++) {
        otpresult += otpcharacters.charAt(Math.floor(Math.random() *
            otpcharactersLength));
    }
    return otpresult;
}

let otp = makeotp(6);

document.getElementById('otppassword').innerHTML = otp;

sendotpid = otpid;
sendotp = otp;
document.getElementById('sendotpidref').innerHTML = sendotpid;
document.getElementById('sendotpid').innerHTML = sendotpid;

function KasPActionOTPBlock() {
    location.reload();
}

function otpTrackFunction() {
    var trackresult = document.getElementById("otpforminput").value;
    if (trackresult == null) {
        document.getElementById("trackresult").innerText = "trackresult";
    } else if (sendotp === trackresult) {
        document.getElementById("trackchecker").innerText = "welcome";
    } else {
        document.getElementById("trackchecker").innerText = "try again";
    }
}

function makeusernameiduniqe(length) {
    var usernameiduniqeresult = '';
    var usernameiduniqecharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var usernameiduniqecharactersLength = usernameiduniqecharacters.length;
    for (var i = 0; i < length; i++) {
        usernameiduniqeresult += usernameiduniqecharacters.charAt(Math.floor(Math.random() *
            usernameiduniqecharactersLength));
    }
    return usernameiduniqeresult;
}

let usernameiduniqe = makeusernameiduniqe(2);
let usernamefornull = makeusernameiduniqe(8);
let passwordfornull = makeusernameiduniqe(8);
let globalpassword;
let globalusername;
let globalmail;

function regismailpassword() {
    var getuservalue = document.getElementById("usernameregis").value;
    var getusernameregis
    if (getuservalue === "") {
        getusernameregis = usernamefornull;
    } else {
        getusernameregis = getuservalue;
    };

    var getpasswordvalue = document.getElementById("passwordregis").value;
    var getpasswordregis
    if (getpasswordvalue === "") {
        getpasswordregis = passwordfornull;
        document.getElementById("passwordregis").value = passwordfornull;
        document.getElementById("passwordvaluedisplay").innerText = passwordfornull;
    } else {
        getpasswordregis = getpasswordvalue;
    };
    globalusername = getusernameregis;
    globalpassword = getpasswordregis;


    var sa = getusernameregis + "." + usernameiduniqe + "@temp.kasidate.me";
    document.getElementById("mailregis").value = sa;
    globalmail = sa;
}

function copyfunction() {
    navigator.clipboard.writeText(document.getElementById("mailregis").value);
    document.getElementById("actioncopieddisplay").innerText = "Copied the text: " + document.getElementById("mailregis").value;
    console.log(globalpassword);
    console.log(globalusername);

    document.getElementById('mail').innerText = globalmail;
    document.getElementById('showpassword').innerText = globalpassword;
    document.getElementById('mailshow').innerText = globalmail;
}
