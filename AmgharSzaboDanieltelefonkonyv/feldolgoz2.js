$(function () {
    $("#beolvas").on("click",kiir);
});
var telefonkonyvem = [];


function kiir() {
    beolvas();
    $("article").empty();
    for (var i = 0, max = telefonkonyvem.length; i < max; i++) {
        var nev = telefonkonyvem[i].nev;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;
    }
    var elem = "<div ><h2>"+nev+"</h2> <p>"+tel+"</p><p>"+kep+"</p><button class='torol'>Töröl</button></div>";
    $("article").append(elem);
}

function beolvas() {
    $.ajax(
            {
                type: "GET",
                url: "feldolgoz.php",
                success: function (result) {
                    console.log(result);
                    telefonkonyvem = JSON.parse(result);
                },
                error: function() {
                alert("Hiba történt a beolvasáskor");
            }
            });
}


function adBeir() {
    var szemely = {
    nev : $("#nev").val(),
    tel : $("#tel").val(),
    kep : $("#kep").val()
    };
    
    $.ajax({
        
                type: "POST",
                url: "beir.php",
                data:szemely,
                success: function (result) {
                    console.log(result);
                    telefonkonyvem = JSON.parse(result);
                },
                error: function() {
                alert("Hiba történt a beolvasáskor");
            }
            }
    );
}