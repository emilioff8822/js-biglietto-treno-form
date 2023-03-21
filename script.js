function generaBiglietto() {
			// Recuperiamo i valori degli input
			var nome = document.getElementById("nome").value;
			var km = document.getElementById("km").value;
			var eta = document.getElementById("eta").value;
			
			// Calcoliamo il prezzo base del biglietto in base ai km
			var prezzoBase = km * 0.21;
			
			// Applichiamo lo sconto in base all'età
			if (eta === "minorenne") {
				var sconto = prezzoBase * 0.2;
			} else if (eta === "over65") {
				var sconto = prezzoBase * 0.4;
			} else {
				var sconto = 0;
			}
			
			// Calcoliamo il prezzo finale del biglietto
			var prezzoFinale = prezzoBase - sconto;
			
			// Stampiamo il biglietto
			var biglietto = document.getElementById("biglietto");
			biglietto.innerHTML = "Nome passeggero: " + nome + "<br>"
								  + "Costo biglietto: " + prezzoFinale.toFixed(2) + " €";
			biglietto.style.display = "block";
		}
		
		function annulla() {
			// Nascondiamo il biglietto
			var biglietto = document.getElementById("biglietto");
			biglietto.style.display = "none";
		}