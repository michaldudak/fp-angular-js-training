"use strict";

exports.getAll = function(req, res) {

	var products = [{
		id: 1,
		title: "Dehydrated water",
		description: "Bacon ipsum dolor sit amet cow brisket leberkas, pork tongue meatloaf pastrami corned beef meatball shoulder andouille shankle sausage beef. Turkey tail rump turducken shoulder spare ribs swine strip steak boudin ham ball tip brisket t-bone leberkas. Bresaola ham bacon landjaeger. Ground round doner tri-tip ham hock meatball. Bacon spare ribs flank salami rump, biltong landjaeger pork jerky. Tongue prosciutto porchetta, leberkas shankle filet mignon spare ribs pork jerky meatloaf beef ribs andouille bresaola swine. Spare ribs kielbasa pork chop sirloin boudin.",
		images: ["water-1.jpg", "water-2.jpg", "water-3.jpg"],
		stockQuantity: 10,
		price: 29.99
	}, {
		id: 2,
		title: "Non-alcoholic vodka",
		description: "Salami beef bacon meatloaf rump beef ribs porchetta shankle boudin fatback tri-tip ribeye pig corned beef pastrami. Pork chop tongue pork loin swine chicken. Andouille jowl tail tongue, ham shank meatball filet mignon flank short ribs chuck landjaeger shankle t-bone. Kielbasa biltong hamburger brisket swine. Ball tip chicken pork prosciutto. Flank spare ribs pork belly frankfurter cow pork landjaeger andouille. Turkey short loin spare ribs sirloin, chicken pork loin flank kevin.",
		images: ["vodka-1.jpg", "vodka-2.jpg"],
		stockQuantity: 1000,
		price: 19.95
	}, {
		id: 3,
		title: "Fresh air in a jar",
		description: "Prosciutto beef ribs pastrami, boudin beef biltong fatback cow. Rump tri-tip leberkas pork loin, pork chop ground round porchetta kielbasa biltong filet mignon swine ribeye corned beef beef. Short loin chicken shankle flank kielbasa. Porchetta beef ribs tongue, filet mignon pork chop hamburger pastrami kielbasa ham bacon brisket pig frankfurter shoulder. Pancetta prosciutto shankle fatback, chuck tri-tip ball tip t-bone turducken cow tail pastrami ground round pork chop short ribs.",
		images: ["air-1.png", "air-2.jpg"],
		stockQuantity: 0,
		price: 190
	}, {
		id: 4,
		title: "Los Angeles Smog",
		description: "Ham hamburger tongue porchetta ham hock andouille boudin. Doner brisket bresaola tri-tip chicken. Rump ham hock pork loin, bacon biltong tongue boudin spare ribs flank shank salami chuck doner. Meatloaf tri-tip pork chop fatback sirloin, tongue kevin beef ribs bacon pork loin.",
		images: ["smog-1.jpg", "smog-2.jpg"],
		stockQuantity: 42,
		price: 139.90
	}, {
		id: 5,
		title: "Canned radiation",
		description: "Leberkas kielbasa andouille bacon brisket frankfurter fatback corned beef strip steak, chicken flank landjaeger short loin salami. Cow salami doner boudin pork belly ham picanha biltong hamburger t-bone frankfurter meatloaf chuck. Turkey ham shank chicken turducken. Ham drumstick frankfurter doner landjaeger bresaola.",
		images: ["radiation-1.jpg"],
		stockQuantity: 1,
		price: 899
	}];

	res.send(products);
};