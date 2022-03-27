let mail = "testing@temp.kasidate.me";
let password = "12345678";
let sendotp ;
let sendotpid ;

document.getElementById('mail').innerHTML = mail;
document.getElementById('showpassword').innerHTML = password;
document.getElementById('mailshow').innerHTML = mail;

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
        console.log(trackresult);
    } else if (sendotp === trackresult) {
        document.getElementById("trackchecker").innerText = "welcome";
    } else {
        document.getElementById("trackchecker").innerText = "try again";
    }
}
