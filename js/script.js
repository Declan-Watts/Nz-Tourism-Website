// Preloader
$(window).on('load', function() {
	preloaderFadeOutTime = 1000;
	function hidePreloader() {
		var preloader = $('#preloader');
		preloader.fadeOut(preloaderFadeOutTime, function() {});
		$('#Header_heading').removeClass('invisible');
		$('#Header_heading').addClass('visible');
	}

	hidePreloader();
});

// Heading change on scroll down
$(document).ready(function() {
	// Setting Variables for the scroll check (so it doesn't spam)
	// and scroll_heading ID
	var $scrlCHQ = 0;
	var $scrlHD = $('.Scroll_heading');
	var $scrlTXT = $('#Scrl_txt');
	var $scrlNAV = $('#navbar-top');
	var $scrlHR = $('.welcome-hr');
	// This listens for the browsers scroll,
	// And then does an if statement to see where the
	// scroll position is
	$(window).scroll(function() {
		// This checks too see if the page is scrolled down or too the scrollTop
		// Then if it has been scrolled down, it checks if the text has already been changed
		// If it hasn't then it will change the text and set $scrlCHQ to 1 (meaning true)
		if ($(this).scrollTop() > 100) {
			if ($scrlCHQ == 0) {
				$scrlTXT.fadeOut(400);
				$scrlNAV.removeClass('bg-custom');
				$scrlNAV.addClass('bg-custom2');
				$scrlHD.fadeOut(400, function() {
					$scrlHD.removeClass('white');
					$scrlHD.addClass('black');
					$scrlHR.addClass('hr-expand');
					$scrlHD.fadeIn(1000);
				});
				$scrlCHQ = 1;
			}
			// This checks too see if the page is scrolled too the top
			// and if it has been scrolled to the top, it checks if the text has already been changed
			// If it hasn't then it will change the text back and set $scrlCHQ to 0 (meaning false)
		} else if ($scrlCHQ == 1) {
			$scrlTXT.fadeIn(400);
			$scrlNAV.removeClass('bg-custom2');
			$scrlNAV.addClass('bg-custom');
			$scrlHR.addClass('hr-expand');
			$scrlHD.fadeOut(400, function() {
				$scrlHD.removeClass('black');
				$scrlHR.removeClass('hr-expand');
				$scrlHD.addClass('white');
				$scrlHD.fadeIn(200);
			});
			$scrlCHQ = 0;
		}
	});
});

// Display Information For the History Page Cards

function display_information(caller) {
	// Fade In Popup Model
	$('.bg-model').fadeIn(500);
	// Add in the Close button for Pop Up Model
	$('.model-content-inner').html(`<a
		href="javascript:void(0)"
		class="model-content-close"
		onclick="close_bg_model();"
	>
		<i class="fas fa-times"></i>
	</a>`);
	// Insert Information for the card that was clicked on
	if (caller == 'treaty') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/Treaty_of_Waitangi.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>What is the Treaty of Waitangi?</h1>
		<p>The Treaty of Waitangi is an agreement made in 1840 between 
		representatives of the British Crown and more than 500 Māori chiefs. 
		It resulted in the declaration of British sovereignty over New Zealand 
		by Lieutenant Governor William Hobson in May 1840. Most chiefs signed a 
		Māori-language version of the treaty. The English- and Māori-language 
		versions held different meanings, and Māori and Europeans therefore had 
		different expectations of the treaty’s terms. Ever since, resolution of 
		these differences has presented New Zealand with challenges.</p></div>
		`);
	} else if (caller == 'before') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/tamaki-village-rotorua-large-version.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>New Zealand before the treaty</h1>
		<p>Before European settlers, New Zealand (Aotearoa) was dominantly 
		inhabited by Maori Iwi (Tribe) and Hapu (Sub-Tribe), governed by Maori 
		chiefs. In addition, before the treaty, during 1830, Europeans began 
		settling in Aotearoa, which soon started the system of bartering, exchanging 
		resources such as, flax and timber for muskets and clothing. Soon after, the 
		population of Europeans in Aotearoa began to rise, permanently settling and wanting 
		to buy land. However, this caused fights; some losing their lives due to 
		misunderstanding because Europeans did not understand the Maori language, laws, 
		and Tikanga Maori (The Maori way of living). In addition, a huge amount of 
		pressure was put on Maori people due to the growing interest of other European countries 
		in New Zealand such as France.</p></div>
		`);
	} else if (caller == 'british') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/tane_mahuta_waipoua_forest.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>From independence to British colony</h1>
		<p>The British colonial office sent British royal navy officer William 
		Hobson to travel all around New Zealand with a task to gain consent from 
		Maori chiefs, agreeing to give the British crown sovereignty over New Zealand. 
		In addition, during his journey, Governor George Gipps of New South Wales 
		recommended writing a separate Treaty translated in Maori for chiefs to sign.</p></div>
		`);
	} else if (caller == 'signed') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/treaty_first_signed.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Treaty first signed</h1>
		<p>On the 6th of February with persuasion and debate regarding the Treaty 
		of Waitangi, 40 chiefs agreed to sign the Treaty. Also, French Bishop 
		Jean Baptiste François Pompallier suggested that Religious groups should 
		be allowed and given the chance to be a part of the new dominion, to which 
		Hobson agreed. In addition, Hobson’s expedition took him to Waimate North 
		and Hokianga where he succeeded to add more signatures to the Treaty. As a 
		result, Hobson’s expedition was successful in obtaining the consent of 52 
		chiefs majorly coming from the North Island to give the British Crown sovereignty 
		over New Zealand.</p></div>
		`);
	} else if (caller == 'drafting') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/pounamu-carving.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Drafting and translating the treaty</h1>
		<p>During the 29th of January 1840 at the Bay of Islands, William Hobson and 
		James Freeman drafted the Treaty of Waitangi. Soon after, James Busby received 
		the drafted copy where he edited,  added to them, and translated in Maori, in 
		one night with his son and Henry Williams.

		Hobson presented this Māori-language treaty to a meeting of around 
		500 Māori invited to Waitangi on 5 February. They held a lively debate on 
		the possible effects of the treaty on their chiefly authority, land and 
		trade, but no agreement was reached when the day-long meeting closed.</p></div>
		`);
	} else if (caller == 'further') {
		$('.model-content-inner').append(`<div class="history-image"><img
		src="images/treaty_signing_more.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Gathering further signatures</h1>
		<p>Unfortunately, before Hobson could further his successful expedition 
		to obtain more signatures he became ill. Therefore, no longer considered 
		fit for the position he was in. As a result, missionaries and 2 army officers 
		were given the task to continue Hobson’s expedition where they were given several 
		handwritten copies of the Treaty along with the Maori translated version. 
		In addition, only 9 of these copies were able to be recovered. Surprisingly, 
		more than 500 chiefs signed the Maori translated version of the Treaty and a 
		few of them were females Nearly all signed a Māori-language copy. The 
		exception was an English-language copy signed by 39 chiefs at Manukau 
		Harbour and Waikato Heads. Each treaty copy was also signed by European 
		witnesses who varied from place to place.</p></div>
		`);
	} else if (caller == 'u2') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/u2_tour.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>U2 Tour in 2019</h1>
		<p>With Special Guest Noel Gallagher's High Flying Birds.
		Live Nation is excited to confirm that U2 will bring their acclaimed 
		Joshua Tree Tour to New Zealand in November.
		Following the highly successful 2017 tour in celebration of the band’s 
		seminal album, The Joshua Tree Tour 2019 will see the band make a much 
		anticipated return to New Zealand for the first time since the record-shattering 
		U2 360° Tour in 2010.</p></div>
		`);
	} else if (caller == 'royal') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/royal_family_tour.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Royal Family Tour</h1>
		<p>The Royal Family dance crew are bringing their new tour show to 
		Auckland for a one off show. Having just returned from a soldout 
		tour of Australia and putting shows on in London & Israel. Don't miss 
		seeing The Royal Family live on stage - CROWNS UP!</p></div>
		`);
	} else if (caller == 'comedy') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/comedy_allstars.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>The Classic Comedy Allstars</h1>
		<p>Friday and Saturday our Comedy Allstars take the stage at NZ's home of live comedy. 
		4 to 5 comedians in a 2 hour show featuring a selection of headliners and rising stars.
		
		This is our most popular show - be sure to book! 
		If you miss out on the Comedy Allstars show, check out the Late & Live at 10pm.</p></div>
		`);
	} else if (caller == 'fgs') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/chocolatte.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>2019 FGS ChocoLatte</h1>
		<p>Calling all Coffee & Chocolate lovers! Come and get your fix of 
		caffeine or sugar at the super amazing FGS Chocolate event! There will 
		be a variety of coffee, chocolate and dessert companies attending this 
		amazing event! Join us and grab your tickets now!

		We have a live personal teaching coffee demonstration by Ken Shi who is 
		the New Zealand Cup Tasters Champion, Australia International Coffee Award 
		and International Golden Bean Awards Silver Winner, Judge Panel for 2018 
		and 2019 New Zealand Barista Championship</p></div>
		`);
	} else if (caller == 'queen') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/queen.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Queen + Adam Lambert - The Rhapsody Tour 2020</h1>
		<p>Heading to New Zealand Stadiums in February 2020. 
		Returning To Auckland - first time ever in Wellington And Dunedin!

		Tickets on sale from Wednesday 17 April from 10am NZST - 
		all shows reserved seating.
		
		The soaring success of the film 'Bohemian Rhapsody', the 
		highest grossing music biopic of all time, has proven that 
		the love for Queen remains as strong as ever. Lifelong New Zealand 
		fans and new converts will be thrilled with the news that Queen original 
		band members Brian May and Roger Taylor are teaming up once more with 
		long-time front-man Adam Lambert on lead vocals and returning to New Zealand 
		in February 2020 for three giant stadium shows with a brand-new, spectacular 
		production.</p></div>
		`);
	} else if (caller == 'mitch_james') {
		$('.model-content-inner').append(`<div class="events-image"><img
		src="images/mitch_james.jpg"
		alt="..."
		style="width: 100%;"
	/></div><div class="model-text"><h1>Bright Blue Skies Tour</h1>
		<p>Kiwi pop sensation Mitch James is about to take the world by storm, 
		announcing a string of international shows and a New Zealand tour.

		Throughout May, James – who now shares a booking agent with Ed Sheeran - 
		will play shows in the UK, including an already sold-out show in London. 
		He will then return to New Zealand to embark on his biggest headlining 
		tour to date.</p></div>
		`);
	}
}

function bg_model_site_seeing(caller) {
	// Display Pop Up Model
	$('.bg-model').fadeIn(500);
}

//Close the BG_Model

function close_bg_model() {
	// Make Pop Up Model Disapear
	$('.bg-model').fadeOut(500);
}

//Change the Information for the locations page

function display_site_seeing(caller) {
	// Make all of the divs empty ready for the new information
	$('#header-site-seeing').empty();
	$('.site-seeing-paragraph').empty();
	$('.model-content-inner-paragraph').empty();
	$('.model-content-inner-header');
	let div_array = [
		['#header-site-seeing', '.site-seeing-paragraph'],
		['.model-content-inner-header', '.model-content-inner-paragraph']
	];
	// For each item in the Array, insert the information according too the location clicked
	for (let i = 0; i < 2; i++) {
		console.log(div_array[i][0]);
		if (caller == 'canterbury') {
			$(div_array[i][0]).text('Canterbury');
			$(div_array[i][1]).html(`<h3>Whale Watching in Kaikoura by boat</h3>
			<p>
				Located on the eastern shores of New Zealand’s South Island,
				Kaikoura is famous for the spectacular array of marine wildlife
				living off its shores—but to see the best of it, you have to take
				to the waves. On this tour, cruise into Kaikoura’s deep waters by
				speedy catamaran with running commentary throughout from your
				guide, and spot dolphins, seals, and sperm whales in their natural
				habitat.
			</p>
			<h3>Hanmer Springs Natural Thermal Pools</h3>
			<p>
				Hanmer Springs is a resort town known for its natural hot pools.
				Open mid-morning until late evening, these popular pools are a
				great place to replenish yourself after a long walk or to take the
				kids during the day. By booking your tickets in advance, you can
				drop in at any time and avoid the disappointment of getting turned
				away, especially during the pool’s busy weekends.
			</p>`);
		} else if (caller == 'manawatu') {
			$(div_array[i][0]).text('Manawatu');
			$(div_array[i][1]).html(`<h3>Jet Boat Tour on the Whanganui River</h3>
			<p>
			Skim through rapids and deep still pools by Jet Boat as you 
			travel  down the majestic Whanganui river to Lauren’s Lavender 
			farm. Stroll through the lavender fields, enjoy the tranquility of 
			this riverside paradise. Relax and enjoy the café and gift shop.
			</p>
			<h3>Tongariro Volcanic Direct Helicopter Flight</h3>
			<p>
			Get the best possible views of Tongariro National Park, 
			a UNESCO World Heritage Site, on a helicopter tour from 
			Taupo. You'll look down on volcanoes, Lake Taupo, and the 
			Kaimanawa Range, plus land on the snow for another perspective 
			of the landscape.
			</p>`);
		} else if (caller == 'gisborn') {
			$(div_array[i][0]).text('Gisborn');
			$(div_array[i][1]).html(`<h3>Rere Rockslide</h3>
			<p>
			40 minutes drive from Gisborne. A 60m long natural water slide 
			ending in a large deep swimming hole. Listed in AA's Top 101 
			things to do in NZ - a very popular free adventure.  
			Awarded Certificate of Excellence by Tripadvisor, listed as 
			one of the most popular things to do in Gisborne. 	
			Please take your rubbish away with you, thanks.
			Note: Serious injury can occur when using the slide, rocks 
			can be sharp and slippery. 
			Drowning has occurred. If you can't swim - don't slide.
			</p>
			<h3>Sunshine Brewery</h3>
			<p>
			Come down and enjoy the full range of our beers in a brewery 
			environment.  We have a relaxed bar area from which you can 
			view the brewing process in action, and a deck out front for 
			those long, lazy Gisborne summer afternoons.  There is a light 
			food menu with a selection of tasty, locally made options chosen 
			to compliment our beers.
			</p>`);
		} else if (caller == 'hawke') {
			$(div_array[i][0]).text(`Hawke's Bay`);
			$(div_array[i][1]).html(`<h3>Little Penguin Encounter</h3>
			<p>
			Standing just 1 foot (30 centimeters) tall, little penguins, 
			or fairy penguins, are the world’s smallest penguin species. 
			Get up close and personal with these adorable birds on a 
			penguin encounter at Napier’s National Aquarium of New Zealand. 
			Meet a keeper, tour the penguin conservation facility, learn 
			about their rehabilitation program, and help feed the penguins 
			a breakfast or lunch of fish.
			</p>
			<h3>Napier Prison Audio Tours</h3>
			<p>
			Discover the dark history of New Zealand's oldest prison with 
			a self-guided audio tour of the notorious Napier Prison. 
			Hear stories of drug barons, escape attempts and hauntings 
			as you follow your 50-minute audio guide around the historic 
			building and learn about life in a 19th and 20th-century prison. 
			See the hanging yard, solitary confinement area, death row cells 
			and mess hall, and spend as long as you like exploring once your 
			tour has ended.
			</p>`);
		} else if (caller == 'auckland') {
			$(div_array[i][0]).text('Auckland');
			$(div_array[i][1]).html(`<h3>Sky Tower</h3>
			<p>
			Auckland’s Sky Tower has stood 1076 feet tall (328 meters) 
			over the city since 1994, and is one of its most popular 
			attractions, especially for first-time visitors. Save money 
			and time by pre-booking your general Sky Tower admission 
			ticket, which allows you to spend one to two hours at three 
			observation levels. Get quickly orientated and spot key 
			landmarks such as the Harbour Bridge, Mount Eden, and Waiheke Island.
			</p>
			<h3>Hunua Falls</h3>
			<p>
			Hunua Falls is located in the western part of Hunua Ranges 
			Regional Park in Auckland area. The spectacular 30-metre waterfall 
			is part of the Wairoa River which carves through an ancient 
			volcano as it winds its way north through the township of Clevedon, 
			before meeting the Hauraki Gulf. The waterfall is extremely 
			popular among the locals which makes it one of New Zealand Must 
			See Waterfalls.
			</p>`);
		} else if (caller == 'bop') {
			$(div_array[i][0]).text('Bay of Plenty');
			$(div_array[i][1]).html(`<h3>Wai-O-Tapu Thermal Wonderland </h3>
			<p>
			Explore the well-marked paths of Wai-O-Tapu Thermal 
			Wonderland and witness Lady Knox Geyser erupt. Your admission 
			ticket grants you all-day access to one of New Zealand’s most 
			popular geothermal parks, located just outside of Rotorua. 
			Stroll past gurgling mud pools, volcanic craters and steaming 
			lakes at your own pace. Consult your complimentary guidebook to 
			learn about the area’s volcanic activity, and view informative 
			displays along the trails and at the visitor center.
			</p>
			<h3>Rotorua Maori Hangi Dinner and Performance</h3>
			<p>
			While in Rotorua, see a cultural performance and take part in 
			a traditional Maori ‘hangi’ feast at Tamaki Maori Village. A local 
			guide escorts you by coach to the ‘marae’ (Maori village) for an 
			immersive evening that begins with a welcome ceremony by New Zealand's 
			indigenous people. Learn about local customs and watch a powerful 
			display of song and dance before a hangi dinner.
			</p>`);
		} else if (caller == 'marlborough') {
			$(div_array[i][0]).text('Marlborough');
			$(div_array[i][1])
				.html(`<h3>Half-Day Dolphin Viewing Eco-Tour from Picton</h3>
			<p>
			The sunken river valleys, forested cliffs, and sandy bays of 
			the Marlborough Sounds are one of the best places in New Zealand 
			to spot dolphins in their natural environment, but increased 
			tourism can often put wildlife at risk. This 4-hour cruise from 
			Picton is run by certified Department of Conservation operators, 
			allowing you to interact with dusky, bottlenose, and orca dolphins 
			in a safe, fun, and eco-friendly way.
			</p>
			<h3>Full-Day Marlborough Wine Tour Including Wine Tasting</h3>
			<p>
			Take in the sights of Marlborough's wine country scenery and 
			taste some of the region's best offerings on this full-day tour 
			from Blenheim. Make several stops at different wineries and 
			taste Sauvignon Blanc, Pinot Gris, Riesling and Pinot Noir as 
			well as some lesser known varieties from the area. Round-trip 
			transportation from hotels in Picton, Blenheim, or Havelock 
			included.
			</p>`);
		} else if (caller == 'nelson') {
			$(div_array[i][0]).text('Nelson');
			$(div_array[i][1])
				.html(`<h3>World of WearableArt & Classic Car Museum Admission</h3>
			<p>
			Where else in the world can you see a stunning selection of more 
			than 60 wearable art garments, alongside more than 140 veteran, 
			vintage and classic cars?
			</p>
			<h3>Full-Day Abel Tasman National Park Hiking Tour with Cruise</h3>
			<p>
			Discover the jewel in the crown of New Zealand’s South Island on 
			this full-day Abel Tasman National Park hiking tour with cruise. 
			Travel from Nelson to Kaiteriteri with your guide, then hop aboard 
			your water taxi. Cruise the azure-blue seas toward the heart of 
			Abel Tasman National Park and the start-point of your trek. Follow 
			hiking trails through the dense forest and listen as your guide 
			points out medicinal and edible plants along the way. Gain insight 
			into native Maori and Dutch settlers’ heritage, and enjoy lunch 
			on Torrent Beach.
			</p>`);
		} else if (caller == 'tasman') {
			$(div_array[i][0]).text('Tasman');
			$(div_array[i][1]).html(`<h3>Te Waikoropupū Springs</h3>
			<p>
			Te Waikoropupū Springs are the largest freshwater springs in 
			New Zealand, the largest cold water springs in the Southern 
			Hemisphere and contain some of the clearest water ever measured.
			</p>
			<h3>Mapua Ferry</h3>
			<p>
			A perfect day out is a trip to Rabbit Island. Whether you are a 
			walker, jogger or cyclist, Rabbit Island has it all.
			A quick 10 minute ferry ride from Mapua Wharf transfers you to 
			a scenic wonderland. The island is covered in pine plantations 
			and owned by the Tasman District Council. 
			</p>`);
		} else if (caller == 'northland') {
			$(div_array[i][0]).text('Northland');
			$(div_array[i][1]).html(`<h3>90 Mile Beach and Cape Reinga Tour</h3>
			<p>
			Visit 90 Mile Beach and Cape Reinga in New Zealand's 
			Far North District. This day trip from Paihia takes you 
			aboard a Dune Rider vehicle, ideal for traversing the 
			gorgeous coastal landscape. Stop at Cape Reinga Lighthouse 
			and the Ancient Kauri Kingdom. Try sandboarding at the 
			Te Paki Stream sand dunes and enjoy a buffet lunch at 
			Waitiki Landing.
			</p>
			<h3>Cape Brett "Hole in the Rock" Cruise</h3>
			<p>
			On this half-day Bay of Islands catamaran tour, 
			cruise through the famous “Hole in the Rock.” Relax while 
			your captain expertly navigates the islands, secluded beaches, 
			and rocky promontories. Look for dolphins, penguins, and sea 
			birds en route to Motukokako Island and the Cape Brett Lighthouse. 
			Learn about the area’s Maori heritage along the way. Optionally 
			disembark in Paihia or Russell, and then use your ferry ticket to 
			return to your departure point.
			</p>`);
		} else if (caller == 'taranaki') {
			$(div_array[i][0]).text('Taranaki');
			$(div_array[i][1]).html(`<h3>Wilkies Pools Loop Track</h3>
			<p>
			Walk through young forest then into sub-alpine (goblin territory) 
			forest to a series of beautiful pools and waterfalls with crystal 
			clear blue waters, scoured from 20,000 year old lava.
			The first half of this track is baby buggy/wheelchair assisted 
			friendly. Bring the kids!
			</p>
			<h3>Mount Taranaki Summit Track</h3>
			<p>
			Rising above the clouds, the 2518 m summit of this dormant volcano 
			offers spectacular views to those who make the challenging climb to 
			its peak. While the distance may not seem far to the summit - it's 
			the elevation gain that will get you puffing. In 6.3 km from North 
			Egmont to the summit area, the gain in height is 1.6 km - that's steep!
			</p>`);
		} else if (caller == 'wc') {
			$(div_array[i][0]).text('West Coast');
			$(div_array[i][1]).html(`<h3>Heli-Hike Franz Josef Glacier Walk</h3>
			<p>
			Heli-hike Franz Josef Glacier on a small-group glacier-hiking 
			tour that explores a maze of ice caves, pinnacles, and crevasses. 
			Flying over Franz Josef means spectacular panoramic views of the 
			massive glacier. And with three hours of hiking time, you’ll see 
			more of the glacial landscape than most Franz Josef tours, traveling 
			mountaineer-style with crampons and ice axes, then finishing the 
			day with a soak in a hot pool.
			</p>
			<h3>Monteith's Brewery Tour</h3>
			<p>
			The Monteith’s Brewing Company is one of New Zealand’s oldest 
			beer-makers and a West Coast icon. Go behind the scenes at the 
			company’s Greymouth brewery on this exclusive tour and learn about 
			the history behind West Coast brewing. See how Monteith’s make 
			their beer and cider and sample some of it for yourself during a 
			hands-on beer-tasting lesson with tasting notes to help you out.
			</p>`);
		} else if (caller == 'otago') {
			$(div_array[i][0]).text('Otago');
			$(div_array[i][1]).html(`<h3>Queenstown Skyline Gondola and Luge</h3>
			<p>
			Though not as adrenaline-packed as the Olympic sport, the Queenstown 
			luge winds downhill with stunning 220-degree views of Lake Wakatipu 
			and the Remarkables mountain range beyond. Ride the Skyline Gondola 
			up to the top of Bob’s Peak where you’ll experience the Skyline Luge 
			Queenstown on five rides — sure to satisfy any thrill-seeker. Choose 
			the scenic track or descend a steeper gradient on the advanced track, 
			or switch between the two specially designed routes.
			</p>
			<h3>Skippers Canyon Jet Boat Tour</h3>
			<p>
			Enjoy two trips in one on this good-value jet boat tour: a guided 
			tour of Skippers Canyon and a thrilling ride on the Shotover River. 
			Zip up some of the narrowest canyons on the Upper Shotover, and learn 
			about the gold mining history of the area from your knowledgeable guide 
			on the journey there. This combined tour is ideal for history buffs and 
			adrenaline seekers.
			</p>`);
		} else if (caller == 'southland') {
			$(div_array[i][0]).text('Southland');
			$(div_array[i][1]).html(`<h3>Milford Sound Nature Cruise</h3>
			<p>
			See the Eighth Wonder of the World on a Milford Sound cruise, 
			led by a naturalist guide. Gliding past granite walls, glacier-fed 
			waterfalls and stunning Mitre Peak aboard a smaller-sized vessel 
			than most Milford Sound cruises, you’ll have great photo ops of this 
			famous South Island attraction situated within the UNESCO-listed 
			Fiordland National Park. Stay on the water for just over 2 hours, 
			and be on the lookout for Fiordland crested penguins and bottlenose 
			dolphins.
			</p>
			<h3>Wild Kiwi Encounter</h3>
			<p>
			At dusk depart Halfmoon Bay in our catamaran for a cruise across Paterson 
			Inlet to Little Glory Cove.  During the cruise pass Ulva Island 
			(a predator-free sanctuary) and learn about Stewart Island's rich history. 
			Once at Little Glory Cove, disembark onto a wharf at the southern part of the 
			peninsula known as The Neck. The walk, led by your nature guide, is on a 
			well-formed track across the peninsula, through spectacular coastal forest 
			to a secluded sandy beach. As dusk sets in and daylight diminishes, 
			venture by torchlight through the native forest with the stars and forest 
			night sounds around you.  The walk will take about 45 minutes one-way and the 
			track emerges on to Ocean Beach.  This wide sandy beach is where kiwi are 
			often found feeding among the grasses and seaweed.
			</p>`);
		} else if (caller == 'waikato') {
			$(div_array[i][0]).text('Waikato');
			$(div_array[i][1]).html(`<h3>Hobbiton™ Movie Set 2-Hour Walking Tour</h3>
			<p>
			Hobbtion™ is the only intact set from the The Lord of the 
			Rings and The Hobbit trilogies, spread over 12 acres. Don’t 
			miss any of the highlights with a guide who takes your through 
			the stories and scenes on the set during a 2-hour walking tour, 
			which grants you access to places tour vehicles can't reach. 
			Plus, included transportation to and from the set makes visiting 
			easy and convenient.
			</p>
			<h3>Waitomo Glowworm Caves </h3>
			<p>
			Come visit a New Zealand attraction that’s sure to 
			have you ‘glowing’ during this 45-minute small-group guided 
			boat ride through the famous Waitomo Glowworm Caves. Glide by 
			boat through this underground complex, enjoying a light show 
			put on by the millions of tiny bioluminescent insects hanging 
			above. As an added bonus, many of the trip guides are of Maori 
			descent, adding unique historical context to your visit.
			</p>`);
		} else if (caller == 'wellington') {
			$(div_array[i][0]).text('Wellington');
			$(div_array[i][1]).html(`<h3>Weta Cave Workshop Tour</h3>
			<p>
			Go behind the scenes of ‘The Lord of the Rings' and other 
			blockbusters at Weta Workshop, the world’s leading special 
			effects and prop studio. The informative and entertaining Weta 
			Cave Workshop Tour gives you a glimpse into the film production 
			of your favorite movies including the LOTR trilogy, 'Avatar' and 
			'The Amazing Spider-Man 2.’ Your 2.5-hour tour includes convenient 
			round-trip transport by minivan from central Wellington, eliminating 
			the hassle of driving and parking.
			</p>
			<h3>Museum of New Zealand Te Papa</h3>
			<p>
			Get a personal introduction to Te Papa Tongarewa, New Zealand’s 
			premier museum based in Wellington. This 1-hour guided tour provides 
			an overview of the museum’s interactive exhibits, artifacts, fine 
			art and natural history displays so that you can better explore the 
			collection on your own. You’ll get a deeper look at Maori cultural 
			heritage and colonial history with an expert guide who share insights 
			and offers suggestions for galleries that might suit your interests.
			</p>`);
		}
	}
}

// Contact Form Javascript Verification

function validate() {
	// Array of all the inputes names
	let inputs = ['name', 'lastname', 'email', 'phone', 'feedback'];
	let pass = true;
	// Loop Through each Inputs value, check if its empty
	// If it is empty then display 'This is required' in the span
	// tag assosciated with the input
	inputs.forEach(value => {
		$(`#error_${value}`).text('');
		if ($(`#${value}`).val() == '') {
			$(`#error_${value}`).text('This is Required');
			pass = false;
		}
	});
	// Check to see if email has an @ symbol in it
	let email = $(`#email`).val();
	if (!email.includes('@')) {
		$(`#error_email`).text('This Needs to be an email');
		pass = false;
	}
	if (pass === true) {
		window.location = 'success.html';
	}
}
