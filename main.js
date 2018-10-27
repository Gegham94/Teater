$(document).ready(function () {
    $.post({
        url: "startPrint.php",
        dataType: "",
        success: function (data) {
            let myInput1 = '';
            let myInput2 = '';
            let popup = '';
            let dataParse = JSON.parse(data);
            for (let i = 0; i < dataParse.length; i++) {
                if (i < 12) {
                    if (dataParse[i].status == 1) {
                        myInput1 +=
                            `<input id=` + dataParse[i].id + ` class='myInputs webkit' style='background-color:orangered' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" disabled></input>`;
                    } else {
                        myInput1 +=
                            `<input id=` + dataParse[i].id + ` class='myInputs webkit' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" readonly></input>`;
                    }
                } else {
                    if (dataParse[i].status == 1) {
                        myInput2 +=
                            `<input id=` + dataParse[i].id + ` class='myInputs webkit' style='background-color:orangered' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" disabled></input>`;
                    } else {
                        myInput2 +=
                            `<input id=` + dataParse[i].id + ` class='myInputs webkit' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" readonly></input>`;
                    }
                }
            }
            $('#firstColumn').html(myInput1);
            $('#secondColumn').html(myInput2);
        }
    });
});

// Show Popup_____________________________________________________________________________________________________________________________________________________________
function showPopup(ID) {
    $("#seatID").val(ID);
    $('#popupContent').addClass('show');
}

// Close Popup_____________________________________________________________________________________________________________________________________________________________
function closePopup() {
    $('#popupContent').removeClass('show');
    $("#seatID").val('');
    $('.popupInput').val('');
}

// Order Button_____________________________________________________________________________________________________________________________________________________________
$("form").submit(function (event) {
    $.post({
        url: "save.php",
        data: $(this).serializeArray(),
        dataType: "",
        success: function (data) {
            $('#' + data).addClass('ordered');
            $('#' + data).attr("disabled", "true");
        }
    })
    $('#popupContent').removeClass('show');
    $('.popupInput').val('');
    event.preventDefault();
});



// Clean(reset) Button_____________________________________________________________________________________________________________________________________________________________
$("#resetBtn").click(function (event) {
    $.post({
        url: "clean.php",
        dataType: "",
        success: function (data) {
            let myInput1 = '';
            let myInput2 = '';
            let popup = '';
            let dataParse = JSON.parse(data);
            for (let i = 0; i < dataParse.length; i++) {
                if (i < 12) {
                    myInput1 +=
                        `<input id=` + dataParse[i].id + ` class='myInputs webkit' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" readonly></input>`;
                } else {
                    myInput2 +=
                        `<input id=` + dataParse[i].id + ` class='myInputs webkit' value=` + dataParse[i].id + ` onclick="showPopup(this.id)" readonly></input>`;
                }
            }
            $('#firstColumn').html(myInput1);
            $('#secondColumn').html(myInput2);
        }
    })
    $('#popupContent').removeClass('show');
    event.preventDefault();
});