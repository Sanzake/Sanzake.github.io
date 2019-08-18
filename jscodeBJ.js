var counter = 0;
var step;
var gamerScoreArrSum = 0;
var cardback = ["Sanzake.github.io/images/cards/cardback.jpg"];   
var cards = [];
var click = 0;
var gamerAce = 0;
var dealerAce = 0;
var cardsScore = [];
var dealerScoreArr = 0;
var mybank = 10000;
var imageArray = [
	"images/cards/clubs/ace.jpg",
	"images/cards/clubs/two.jpg",
	"images/cards/clubs/three.jpg",
	"Sanzake.github.io/images/cards/clubs/four.jpg",
	"Sanzake.github.io/images/cards/clubs/five.jpg",
	"Sanzake.github.io/images/cards/clubs/six.jpg",
	"Sanzake.github.io/images/cards/clubs/seven.jpg",
	"Sanzake.github.io/images/cards/clubs/eight.jpg",
	"Sanzake.github.io/images/cards/clubs/nine.jpg",
	"Sanzake.github.io/images/cards/clubs/ten.jpg",
	"Sanzake.github.io/images/cards/clubs/Jack.jpg",
	"Sanzake.github.io/images/cards/clubs/Queen.jpg",
	"Sanzake.github.io/images/cards/clubs/King.jpg",
	"Sanzake.github.io/images/cards/diamonds/Ace.jpg",
	"Sanzake.github.io/images/cards/diamonds/Two.jpg",
	"Sanzake.github.io/images/cards/diamonds/Three.jpg",
	"Sanzake.github.io/images/cards/diamonds/Four.jpg",
	"Sanzake.github.io/images/cards/diamonds/Five.jpg",
	"Sanzake.github.io/images/cards/diamonds/Six.jpg",
	"Sanzake.github.io/images/cards/diamonds/Seven.jpg",
	"Sanzake.github.io/images/cards/diamonds/Eight.jpg",
	"Sanzake.github.io/images/cards/diamonds/Nine.jpg",
	"Sanzake.github.io/images/cards/diamonds/Ten.jpg",
	"Sanzake.github.io/images/cards/diamonds/Jack.jpg",
	"Sanzake.github.io/images/cards/diamonds/Queen.jpg",
	"Sanzake.github.io/images/cards/diamonds/King.jpg",
	"Sanzake.github.io/images/cards/hearts/Ace.jpg",
	"Sanzake.github.io/images/cards/hearts/Two.jpg",
	"Sanzake.github.io/images/cards/hearts/Three.jpg",
	"Sanzake.github.io/images/cards/hearts/Four.jpg",
	"Sanzake.github.io/images/cards/hearts/Five.jpg",
	"Sanzake.github.io/images/cards/hearts/Six.jpg",
	"Sanzake.github.io/images/cards/hearts/Seven.jpg",
	"Sanzake.github.io/images/cards/hearts/Eight.jpg",
	"Sanzake.github.io/images/cards/hearts/Nine.jpg",
	"Sanzake.github.io/images/cards/hearts/Ten.jpg",
	"Sanzake.github.io/images/cards/hearts/Jack.jpg",
	"Sanzake.github.io/images/cards/hearts/Queen.jpg",
	"Sanzake.github.io/images/cards/hearts/King.jpg",
	"Sanzake.github.io/images/cards/spades/Ace.jpg",
	"Sanzake.github.io/images/cards/spades/Two.jpg",
	"Sanzake.github.io/images/cards/spades/Three.jpg",
	"Sanzake.github.io/images/cards/spades/Four.jpg",
	"Sanzake.github.io/images/cards/spades/Five.jpg",
	"Sanzake.github.io/images/cards/spades/Six.jpg",
	"Sanzake.github.io/images/cards/spades/Seven.jpg",
	"Sanzake.github.io/images/cards/spades/Eight.jpg",
	"Sanzake.github.io/images/cards/spades/Nine.jpg",
	"Sanzake.github.io/images/cards/spades/Ten.jpg",
	"Sanzake.github.io/images/cards/spades/Jack.jpg",
	"Sanzake.github.io/images/cards/spades/Queen.jpg",
	"Sanzake.github.io/images/cards/spades/King.jpg",
];
var scoreArr = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"10",
	"10",
	"10",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"10",
	"10",
	"10",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"10",
	"10",
	"10",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"10",
	"10",
	"10"
];

window.onload = function() {
	document.getElementById("newgame").disabled = true;
	document.getElementById("deal").disabled = true;
	document.getElementById("stand").disabled = true;
	document.getElementById("bank").innerHTML = mybank;
	alert ("Управление: Добавить шуз - '=', Перемешать - '-', Раздать - '1', Получить карту - '2', Остановиться - '3' ");
}

function newdeck() {											//добавить колоду
	for (step = 0; step < 52; step++) {
		cards.push(imageArray[step]);
	}
	for (step = 0; step < 52; step++) {
		cardsScore.push(scoreArr[step]);
	}
	document.getElementById("cardscounter").innerHTML = cards.length - counter;
}
function shuffle(obj1, obj2) {									//перемешать, я хз как это работает, я просто это украл (она мешает массив карт и массив их значений паралельно)
	var index = obj1.length;
	var rnd, tmp1, tmp2;
	while (index) {
		rnd = Math.floor(Math.random() * index);
		index -= 1;
		tmp1 = obj1[index];
		tmp2 = obj2[index];
		obj1[index] = obj1[rnd];
		obj2[index] = obj2[rnd];
		obj1[rnd] = tmp1;
		obj2[rnd]
		= tmp2;
	}
	document.getElementById("newgame").disabled = false;
	document.getElementById("newdeck").disabled = true; 
	document.getElementById("shuffle").disabled = true; 
}
function newgame() {											//раздать
	document.getElementById('dealerTable').innerHTML = '';
	document.getElementById('gamerTable').innerHTML = '';
	gamerScoreArrSum = [];
	dealerScoreArr = [];
	gamerAce = 0;
	dealerAce = 0;
	click = 0;
	document.getElementById("deal").disabled = false;
	for (step = 0; step < 1; step++) {
		var card = document.createElement("img");
		card.setAttribute("src", cardback);
		document.getElementById("dealerTable").appendChild(card);
		card.className = "cardback";
		card.id = 'cardback1';
	}
	for (step = 0; step < 1; step++) {
		var card = document.createElement("img");
		card.setAttribute("src", cards[counter++]);
		document.getElementById("dealerTable").appendChild(card);
		card.className = "card";
		dealerScoreArr.push(cardsScore[counter-1]);
		if (cardsScore[counter-1]*1 - 1 == 0) {
			dealerAce++;
		}
	}
	document.getElementById("dealerScoreCounter").innerHTML = dealerScoreArr;
	for (step = 0; step < 1; step++) {
		var card = document.createElement("img");
		card.setAttribute("src", cards[counter++]);
		document.getElementById("dealerTable").appendChild(card);
		card.className = "card";
		dealerScoreArr = dealerScoreArr*1 + cardsScore[counter-1]*1;
		if (cardsScore[counter-1]*1 - 1 == 0) {
			dealerAce++;
		}
	}
	for (step = 0; step < 2; step++) {
		var card = document.createElement("img");
		card.setAttribute("src", cards[counter++]);
		document.getElementById("gamerTable").appendChild(card);
		card.className = "card";
		gamerScoreArrSum = gamerScoreArrSum*1 + cardsScore[counter-1]*1;
		if (cardsScore[counter-1]*1 - 1 == 0) {
			gamerAce++;
		}
	}
	if (gamerAce*1 > 0) {
		gamerScoreArrSum = gamerScoreArrSum*1 + 10;
	}
	if (gamerScoreArrSum*1 > 21 && gamerAce > 0) {
			gamerScoreArrSum = gamerScoreArrSum*1 - 10;
			gamerAce = gamerAce - 1;
	}
	if (dealerAce*1 > 0) {
		dealerScoreArr = dealerScoreArr*1 + 10;
	}
	if (dealerScoreArr*1 > 21 && dealerAce > 0) {
			dealerScoreArr = dealerScoreArr*1 - 10;
			dealerAce = dealerAce - 1;
	}
	if (gamerScoreArrSum*1 == 21) {
		document.getElementById("deal").disabled = true;
	}
	document.getElementById("gamerScoreCounter").innerHTML = gamerScoreArrSum;
	document.getElementById("cardscounter").innerHTML = cards.length - counter;
	document.getElementById("newgame").disabled = true;
	document.getElementById("stand").disabled = false;
	document.getElementById("rate").disabled = true;
	document.getElementById("bank").innerHTML = mybank - rate.value;
	mybank = mybank - rate.value;
}
function deal() {												//получить карту
	var card = document.createElement("img");
	card.setAttribute("src", cards[counter++]);
	document.getElementById("gamerTable").appendChild(card);
	card.className = "card";
	document.getElementById("cardscounter").innerHTML = cards.length - counter;
	gamerScoreArrSum = gamerScoreArrSum*1 + cardsScore[counter-1]*1;
	if (cardsScore[counter-1]*1 - 1 == 0) {
		gamerScoreArrSum = gamerScoreArrSum*1 + 10;
		gamerAce++;
	}
	if (gamerScoreArrSum*1 > 21 && gamerAce*1 > 0) {
			gamerScoreArrSum = gamerScoreArrSum*1 - 10;
			gamerAce = gamerAce - 1;
	}
	document.getElementById("gamerScoreCounter").innerHTML = gamerScoreArrSum;
	click++;
	if (click > 2) {
	document.getElementById("deal").disabled = true;
	}
	if (gamerScoreArrSum >= 21) {
		document.getElementById("deal").disabled = true;
		document.getElementById("newgame").disabled = false;
		document.getElementById("stand").disabled = true;
		dealerTable.removeChild(cardback1);
		while (dealerScoreArr < 17) {
			var card = document.createElement("img");
			card.setAttribute("src", cards[counter++]);
			document.getElementById("dealerTable").appendChild(card);
			card.className = "card";
			dealerScoreArr = dealerScoreArr*1 + cardsScore[counter-1]*1;
			if (cardsScore[counter-1]*1 - 1 == 0) {
			dealerAce++;
			}
			if (dealerScoreArr > 21 && dealerAce > 0) {
			gamerScoreArrSum = gamerScoreArrSum*1 - 10;
			dealerAce = dealerAce - 1;
			}
			document.getElementById("dealerScoreCounter").innerHTML = dealerScoreArr;
		}	
		document.getElementById("dealerScoreCounter").innerHTML = dealerScoreArr;
		if (gamerAce*1 > 0){
			if (gamerScoreArrSum*1 > 21) {
				gamerScoreArrSum*1 - 10;
				gamerAce - 1;
			}
		}
		if (gamerScoreArrSum == 21 && dealerScoreArr != 21) {    //подсчет результата
			alert ("Вы выиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
			document.getElementById("bank").innerHTML = mybank + 2*rate.value + 0.5*rate.value;
			mybank = mybank + 2*rate.value + 0.5*rate.value;
		}	
		else if (gamerScoreArrSum == 21 && dealerScoreArr ==21) {
			alert ("Вы выиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
			document.getElementById("bank").innerHTML = mybank + 2*rate.value;
			mybank = mybank + 2*rate.value;
		}
		else if (gamerScoreArrSum > dealerScoreArr && gamerScoreArrSum < 22) {
			alert ("Вы выиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
			document.getElementById("bank").innerHTML = mybank + 2*rate.value;
			mybank = mybank + 2*rate.value;
		}
		else if (dealerScoreArr > 21 && gamerScoreArrSum < 22) {
			alert ("Вы выиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
			document.getElementById("bank").innerHTML = mybank + 2*rate.value;
			mybank = mybank + 2*rate.value;
		}
		else if (gamerScoreArrSum == dealerScoreArr) {
			alert ("Ничья");
			document.getElementById("rate").disabled = false;
			document.getElementById("bank").innerHTML = mybank + 1*rate.value;
			mybank = mybank + 1*rate.value;
		}
		else if (gamerScoreArrSum > 21) {
			alert ("Вы проиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
		}
		else if (gamerScoreArrSum < dealerScoreArr) {
			alert ("Вы проиграли");
			var audio = new Audio();
			audio.src = 'sounds/fanfary.mp3';
//			audio.autoplay = true;
			document.getElementById("rate").disabled = false;
		}
	}	
}									
function stand() {													//остановиться
	document.getElementById("deal").disabled = true;
	document.getElementById("stand").disabled = true;
	document.getElementById("newgame").disabled = false;
	dealerTable.removeChild(cardback1);
	document.getElementById("dealerScoreCounter").innerHTML = dealerScoreArr;
	while (dealerScoreArr < 17) {
		var card = document.createElement("img");
		card.setAttribute("src", cards[counter++]);
		document.getElementById("dealerTable").appendChild(card);
		card.className = "card";
		dealerScoreArr = dealerScoreArr*1 + cardsScore[counter-1]*1;
		if (cardsScore[counter-1]*1 - 1 == 0) {
		dealerAce++;
		}
		if (dealerScoreArr > 21 && dealerAce > 0) {
		dealerScoreArr = dealerScoreArr*1 - 10;
		dealerAce = dealerAce - 1;
		}
		document.getElementById("dealerScoreCounter").innerHTML = dealerScoreArr;
	}	
	if (gamerAce*1 > 0){
		if (gamerScoreArrSum*1 > 21) {
			gamerScoreArrSum*1 - 10;
			gamerAce - 1;
		}
	}							
	if (gamerScoreArrSum == 21 && dealerScoreArr != 21) {    //подсчет результата
		alert ("Вы выиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
		document.getElementById("bank").innerHTML = mybank + 2*rate.value + 0.5*rate.value;
		mybank = mybank + 2*rate.value + 0.5*rate.value;
	}	
	else if (gamerScoreArrSum == 21 && dealerScoreArr ==21) {
		alert ("Вы выиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
		document.getElementById("bank").innerHTML = mybank + 2*rate.value;
		mybank = mybank + 2*rate.value;
	}
	else if (gamerScoreArrSum > dealerScoreArr && gamerScoreArrSum < 22) {
		alert ("Вы выиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
		document.getElementById("bank").innerHTML = mybank + 2*rate.value;
		mybank = mybank + 2*rate.value;
	}
	else if (dealerScoreArr > 21 && gamerScoreArrSum < 22) {
		alert ("Вы выиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
		document.getElementById("bank").innerHTML = mybank + 2*rate.value;
		mybank = mybank + 2*rate.value;
	}
	else if (gamerScoreArrSum == dealerScoreArr) {
		alert ("Ничья");
		document.getElementById("rate").disabled = false;
		document.getElementById("bank").innerHTML = mybank + 1*rate.value;
		mybank = mybank + 1*rate.value;
	}
	else if (gamerScoreArrSum > 21) {
		alert ("Вы проиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
	}
	else if (gamerScoreArrSum < dealerScoreArr) {
		alert ("Вы проиграли");
		var audio = new Audio();
		audio.src = 'sounds/fanfary.mp3';
//		audio.autoplay = true;
		document.getElementById("rate").disabled = false;
	}
}
document.onkeydown = function checkKeycode(event)				//управление с клавиатуры
{
	var keycode;
	if (event.keyCode) keycode = event.keyCode; // IE
	if (keycode == 187) 
		{let event = new Event("click");
		var element = document.getElementById('newdeck'); 
		var o = document.createEvent('MouseEvents');  
		o.initMouseEvent( 'click', true, true);
		element.dispatchEvent(o);
		}
	else if (keycode == 189)
		{let event = new Event("click");
		var element = document.getElementById('shuffle'); 
		var o = document.createEvent('MouseEvents');  
		o.initMouseEvent( 'click', true, true);
		element.dispatchEvent(o);
		}
	else if (keycode == 49)
		{let event = new Event("click");
		var element = document.getElementById('newgame'); 
		var o = document.createEvent('MouseEvents');  
		o.initMouseEvent( 'click', true, true);
		element.dispatchEvent(o); 
		}
	else if (keycode == 50)
		{let event = new Event("click");
		var element = document.getElementById('deal'); 
		var o = document.createEvent('MouseEvents');  
		o.initMouseEvent( 'click', true, true);
		element.dispatchEvent(o); 
		}
	else if (keycode == 51)
		{let event = new Event("click");
		var element = document.getElementById('stand'); 
		var o = document.createEvent('MouseEvents');  
		o.initMouseEvent( 'click', true, true);
		element.dispatchEvent(o); 
		}	
}

