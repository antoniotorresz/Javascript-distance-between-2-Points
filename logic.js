function drawPlane() {
    var canvas = document.getElementById("lienzo1");
    var lienzoX = canvas.getContext("2d");

    var lienzoY = canvas.getContext("2d");

    if (lienzoX) {
        lienzoX.moveTo(0, 0);
        lienzoX.lineTo(0, 0);

        lienzoX.strokeStyle = "rgb(0,0,0)";
        lienzoX.beginPath();
        lienzoX.moveTo(0, 1);
        lienzoX.lineTo(500, 1);
        lienzoX.stroke();
    }

    if (lienzoY) {
        lienzoY.moveTo(0, 0);
        lienzoY.lineTo(0, 0);

        lienzoY.strokeStyle = "rgb(0,0,0)";
        lienzoY.beginPath();
        lienzoY.moveTo(1, 0);
        lienzoY.lineTo(1, 500);
        lienzoY.stroke();
    }

    //Dibujamos las líneas del eje de las x
    for (var x = 0; x < 500;) {
        lienzoX.moveTo(0, 0);
        lienzoX.lineTo(0, 0);

        lienzoX.fillText(x, x, 15);
        lienzoX.strokeStyle = "rgb(0,0,0)";
        lienzoX.beginPath();
        lienzoX.moveTo(x, 0);
        lienzoX.lineTo(x, 10);
        lienzoX.stroke();
        x += 50;
    }

    //Dibujamos las lineas del eje de las Y
    for (var y = 0; y < 500;) {
        lienzoY.moveTo(0, 0);
        lienzoY.lineTo(0, 0);

        lienzoY.fillText(y, 12, y);
        lienzoY.strokeStyle = "rgb(0,0,0)";
        lienzoY.beginPath();
        lienzoY.moveTo(0, y);
        lienzoY.lineTo(10, y);
        lienzoY.stroke();
        y += 50;
    }
}


function dibujar() {

    var canvas = document.getElementById("lienzo1");
    var lienzo = canvas.getContext("2d");
    
    var x1 = Number(document.getElementById('x1').value);
    var y1 = Number(document.getElementById('y1').value);

    var x2 = Number(document.getElementById('x2').value);
    var y2 = Number(document.getElementById('y2').value);

    var distancia = (Math.sqrt(((Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))))));

    document.getElementById("res").value = distancia + " unidades";

    if (lienzo) {
        lienzo.clearRect(0, 0, 500, 500);
        drawPlane();
        lienzo.moveTo(0, 0);
        lienzo.lineTo(0, 0);

        lienzo.strokeStyle = "rgb(0,0,0)";
        lienzo.beginPath();
        lienzo.moveTo(x1, y1);
        lienzo.lineTo(x2, y2);
        lienzo.stroke();

        //Texto con los valores de los puntos A y B
        lienzo.fillText("A= (" + x1 + ", " + y1 + ")", x1 + 10, y1);
        lienzo.fillText("B= (" + x2 + ", " + y2 + ")", x2 + 10, y2);

        //Circulos que representan A y B
        var ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(x1 - 5, y1, 5, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x2 - 5, y2, 5, 0, 2 * Math.PI);
        ctx.stroke();
    }

}