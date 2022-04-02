let mail = "testing@temp.kasidate.me";
let password = "12345678";
let sendotp;
let sendotpid;
let smssendotp;
let smssendotpid;
let globalpassword;
let globalusername;
let globalmail;
let otp = makeotp(6);
let otpid = makeotpid(4);
let smsotp = makeotp(6);
let smsotpid = makeotpid(4);
let usernameiduniqe = makeusernameiduniqe(2);
let usernamefornull = makeusernameiduniqe(8);
let passwordfornull = makeusernameiduniqe(8);

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

function smsotpTrackFunction() {
    var smstrackresult = document.getElementById("smsotpforminput").value;
    if (smstrackresult == null) {
        document.getElementById("smstrackresult").innerText = "*****";
    } else if (smssendotp === smstrackresult) {
        document.getElementById("smstrackchecker").innerText = "welcome";
    } else {
        document.getElementById("smstrackchecker").innerText = "try again";
    }
}

function regismailpassword() {
    var getuservalue = document.getElementById("usernameregis").value;
    var getusernameregis
    if (getuservalue === "") 
        {
            getusernameregis = usernamefornull;
        } else {
            getusernameregis = getuservalue;
        };

    var getpasswordvalue = document.getElementById("passwordregis").value;
    var getpasswordregis
    if (getpasswordvalue === "") 
        {
            getpasswordregis = passwordfornull;
            document.getElementById("passwordregis").value = passwordfornull;
            document.getElementById("passwordvaluedisplay").innerText = passwordfornull;
        } 
        else {
            getpasswordregis = getpasswordvalue;
        };

    globalusername = getusernameregis;
    globalpassword = getpasswordregis;

    var mailmixing = getusernameregis + "." + usernameiduniqe + "@temp.kasidate.me";
    document.getElementById("mailregis").value = mailmixing;
    globalmail = mailmixing;
}

function loginmailpassword() {
    var usernamelogin = document.getElementById("usernamelogin").value;
    var passwordlogin = document.getElementById("passwordlogin").value;
    var smsotpforminput = document.getElementById("smsotpforminput").value;

    console.log(usernamelogin);
    console.log(passwordlogin);
    console.log(smsotpforminput);

    if(usernamelogin === globalusername && passwordlogin === globalpassword && smsotpforminput === smsotp){
        document.getElementById('loginstatus').innerText = "Log In Successfully";
    } else { document.getElementById('loginstatus').innerText = "filed Log in";}
}

function copyfunction() {
    navigator.clipboard.writeText(document.getElementById("mailregis").value);
    document.getElementById("actioncopieddisplay").innerText = "Copied the text: " + document.getElementById("mailregis").value;
    document.getElementById('mail').innerText = globalmail;
    document.getElementById('showpassword').innerText = globalpassword;
    document.getElementById('mailshow').innerText = globalmail;
}

sendotpid = otpid;
sendotp = otp;
smssendotpid = smsotpid; 
smssendotp = smsotp;

document.getElementById('otpid').innerHTML = otpid;
document.getElementById('otppassword').innerHTML = otp;
document.getElementById('sendotpidref').innerHTML = sendotpid;
document.getElementById('sendotpid').innerHTML = sendotpid;
document.getElementById('smsotpid').innerHTML = smsotpid;
document.getElementById('smsotppassword').innerHTML = smsotp;
document.getElementById('smssendotpidref').innerHTML = smssendotpid;
