// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function openDivTraining() {
    document.getElementById('divTraining').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}

function openDivInternship() {
    document.getElementById('divInternship').style.display = 'block';
    document.getElementById('divTraining').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}


function openDivJob() {
    document.getElementById('divJob').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divTraining').style.display = 'none';
}
function alertshow() {
    alert("We will let you know thank you for showing your intrest");
}

// to get city name from pin code

function check() {
    var pincode = document.getElementById("pincode");
    var head = document.getElementById("city");

    console.log(pincode.value);
    $.ajax({
        type: "GET",
        url: "https://api.postalpincode.in/pincode/" + pincode.value,
        success: function (reponse) {
            console.log(reponse[0].PostOffice[0]);
            head.value = reponse[0].PostOffice[0].Region;
        },
        error: function (data) {
            console.log(data);
        }

    })
}
// to make current address and parmanet address same
function setBillingAddress() {
    if ($("#homepostalcheck").is(":checked")) {
        $('#addressp').val($('#address').val());
        $('#addressp').attr('disabled', 'disabled');
    } else {
        $('#addressp').removeAttr('disabled');
        $('#addressp').val(" ");
    }
}

$('#homepostalcheck').click(function () {
    setBillingAddress();
})
