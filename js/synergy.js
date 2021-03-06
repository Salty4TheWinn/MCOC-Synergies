function synergy() {
	var w = 1200, h = 900;
	/* Character images from http://marvel-contestofchampions.wikia.com/wiki/List_of_Champions */
	var data = {
		nodes: {
			// Cosmic
			"Black Bolt": { name: "Black Bolt", class: "cosmic", 
			  image: "images/Black_Bolt.png" },
			"Captain Marvel": { name: "Captain Marvel", class: "cosmic", 
			  image: "images/Captain_Marvel.png" },
			"Drax": { name: "Drax", class: "cosmic", 
			  image: "images/Drax.png" },
			"Gamora": { name: "Gamora", class: "cosmic", 
			  image: "images/Gamora.png" },
			"Groot": { name: "Groot", class: "cosmic", 
			  image: "images/Groot.png" },
			"Ms. Marvel": { name: "Ms. Marvel", class: "cosmic", 
			  image: "images/Ms_Marvel.png" },
			"Ronan": { name: "Ronan", class: "cosmic", 
			  image: "images/Ronan.png" },
			"Spider-Man (Black Suit)": { name: "Spider-Man (Black Suit)", class: "cosmic", 
			  image: "images/Spider-Man_Black_Suit.png" },
			"Superior Iron Man": { name: "Superior Iron Man", class: "cosmic", 
			  image: "images/Superior_Iron_Man.png" },
			"Thor": { name: "Thor", class: "cosmic", 
			  image: "images/Thor.png" },
			"Venom": { name: "Venom", class: "cosmic", 
			  image: "images/Venom.png" },
			"Venompool": { name: "Venompool", class: "cosmic", 
			  image: "images/Venompool.png" },
			  
			// Mutant
			"Colossus": { name: "Colossus", class: "mutant", 
			  image: "images/Colossus.png" },
			"Cyclops Classic": { name: "Cyclops Classic", class: "mutant", 
			  image: "images/Cyclops_Classic.png" },
			"Cyclops": { name: "Cyclops", class: "mutant", 
			  image: "images/Cyclops.png" },
			"Deadpool": { name: "Deadpool", class: "mutant", 
			  image: "images/Deadpool.png" },
			"Deadpool (X-Force)": { name: "Deadpool (X-Force)", class: "mutant", 
			  image: "images/Deadpool_X-Force.png" },
			"Magneto": { name: "Magneto", class: "mutant", 
			  image: "images/Magneto.png" },
			"Magneto (Marvel Now)": { name: "Magneto (Marvel Now)", class: "mutant", 
			  image: "images/Magneto_Marvel_Now.png" },
			"Old Man Logan": { name: "Old Man Logan", class: "mutant", 
			  image: "images/Old_Man_Logan.png" },
			"Storm": { name: "Storm", class: "mutant", 
			  image: "images/Storm.png" },
			"Wolverine": { name: "Wolverine", class: "mutant", 
			  image: "images/Wolverine.png" },
			"X-23": { name: "X-23", class: "mutant", 
			  image: "images/X-23.png" },
			  
			// Mystic
			"Dr. Strange": { name: "Dr. Strange", class: "mystic", 
			  image: "images/Doctor_Strange.png" },
			"Guillotine": { name: "Guillotine", class: "mystic", 
			  image: "images/Guillotine.png" },
			"Iron Fist": { name: "Iron Fist", class: "mystic",
			  image: "images/Iron_Fist.png" },
			"Juggernaut": { name: "Juggernaut", class: "mystic", 
			  image: "images/Juggernaut.png" },
			"Magik": { name: "Magik", class: "mystic", 
			  image: "images/Magik.png" },
			"Scarlet Witch": { name: "Scarlet Witch", class: "mystic", 
			  image: "images/Scarlet_Witch.png" },
			"Thor (Jane Foster)": { name: "Thor (Jane Foster)", class: "mystic", 
			  image: "images/Thor_Jane.png" },
			"Unstoppable Colossus": { name: "Unstoppable Colossus", class: "mystic", 
			  image: "images/Unstoppable_Colossus.png" },
			  
			// Science
			"Abomination": { name: "Abomination", class: "science", 
			  image: "images/Abomination.png" },
			"Ant-Man": { name: "Ant-Man", class: "science", 
			  image: "images/Ant-Man.png" },
			"Captain America": { name: "Captain America", class: "science", 
			  image: "images/Captain_America.png" },
			"Captain America WWII": { name: "Captain America WWII", class: "science", 
			  image: "images/Captain_America_WWII.png" },
			"Electro": { name: "Electro", class: "science", 
			  image: "images/Electro.png" },
			"Hulk": { name: "Hulk", class: "science", 
			  image: "images/Hulk.png" },
			"Joe Fixit": { name: "Joe Fixit", class: "science", 
			  image: "images/Joe_Fixit.png" },
			"Luke Cage": { name: "Luke Cage", class: "science", 
			  image: "images/Luke_Cage.png" },
			"Rhino": { name: "Rhino", class: "science", 
			  image: "images/Rhino.png" },
			"She-Hulk": { name: "She-Hulk", class: "science", 
			  image: "images/She-Hulk.png" },
			"Spider-Gwen": { name: "Spider-Gwen", class: "science", 
			  image: "images/Spider-Gwen.png" },
			"Spider-Man": { name: "Spider-Man", class: "science", 
			  image: "images/Spider-Man.png" },
			"Spider-Man Morales": { name: "Spider-Man Morales", class: "science", 
			  image: "images/Spider-Man_Morales.png" },
			"Yellowjacket": { name: "Yellowjacket", class: "science",
			  image: "images/Yellowjacket.png" },
			  
			// Skill
			"Black Panther": { name: "Black Panther", class: "skill", 
			  image: "images/Black_Panther.png" },
			"Black Widow": { name: "Black Widow", class: "skill", 
			  image: "images/Black_Widow.png" },
			"Daredevil": { name: "Daredevil", class: "skill", 
			  image: "images/Daredevil.png" },
			"Daredevil (Netflix)": { name: "Daredevil (Netflix)", class: "skill", 
			  image: "images/Daredevil_Netflix.png" },
			"Elektra": { name: "Elektra", class: "skill", 
			  image: "images/Elektra.png" },
			"Hawkeye": { name: "Hawkeye", class: "skill", 
			  image: "images/Hawkeye.png" },
			"Moon Knight": { name: "Moon Knight", class: "skill", 
			  image: "images/Moon_Knight.png" },
			"Punisher": { name: "Punisher", class: "skill", 
			  image: "images/Punisher.png" },
			"Winter Soldier": { name: "Winter Soldier", class: "skill", 
			  image: "images/Winter_Soldier.png" },
			  
			// Technology
			"Hulkbuster": { name: "Hulkbuster", class: "technology", 
			  image: "images/Hulkbuster.png" },
			"Iron Man": { name: "Iron Man", class: "technology", 
			  image: "images/Iron_Man.png" },
			"Iron Patriot": { name: "Iron Patriot", class: "technology", 
			  image: "images/Iron_Patriot.png" },
			"Rocket Raccoon": { name: "Rocket Raccoon", class: "technology", 
			  image: "images/Rocket_Raccoon.png" },
			"Star-Lord": { name: "Star-Lord", class: "technology", 
			  image: "images/Star-Lord.png" },
			"The Vision": { name: "The Vision", class: "technology", 
			  image: "images/The_Vision.png" },
			"Ultron": { name: "Ultron", class: "technology", 
			  image: "images/Ultron.png" },
			"Vision": { name: "Vision", class: "technology", 
			  image: "images/Vision.png" },
			"War Machine": { name: "War Machine", class: "technology", 
			  image: "images/War_Machine.png" }
			
		},
		edges: [
			/* Synergy bonuses from http://marvel-contestofchampions.wikia.com/wiki/Synergy_Bonus */
			// Avengers
			{ source: "Black Widow", target: "Hulk", type: "stun" },
			
			// Enemies
			{ source: "Captain America", target: "Superior Iron Man", type: "crit_rate" },
			{ source: "Colossus", target: "Juggernaut", type: "crit_rate" },
			{ source: "Deadpool", target: "Rhino", type: "crit_rate" },
			{ source: "Hulk", target: "Abomination", type: "crit_rate" },
			{ source: "Iron Patriot", target: "Spider-Man", type: "crit_rate" },
			{ source: "Joe Fixit", target: "Moon Knight", type: "crit_rate" },
			{ source: "Joe Fixit", target: "Ms. Marvel", type: "crit_rate" },
			{ source: "Juggernaut", target: "Colossus", type: "crit_rate" },
			{ source: "Juggernaut", target: "Hulk", type: "crit_rate" },
			{ source: "Magik", target: "Juggernaut", type: "crit_rate" },
			{ source: "Magneto", target: "Wolverine", type: "crit_rate" },
			{ source: "Moon Knight", target: "Iron Patriot", type: "crit_rate" },
			{ source: "Old Man Logan", target: "Wolverine", type: "crit_rate" },
			{ source: "Rocket Raccoon", target: "Ronan", type: "crit_rate" },
			{ source: "Spider-Gwen", target: "Rhino", type: "crit_rate" },
			{ source: "Spider-Gwen", target: "Daredevil", type: "crit_rate" },
			{ source: "Spider-Man", target: "Electro", type: "crit_rate" },
			{ source: "Spider-Man Morales", target: "Electro", type: "crit_rate" },
			{ source: "Spider-Man Morales", target: "Iron Patriot", type: "crit_rate" },
			{ source: "Spider-Man (Black Suit)", target: "Electro", type: "crit_rate" },
			{ source: "Superior Iron Man", target: "Captain America", type: "crit_rate" },
			{ source: "Thor", target: "Juggernaut", type: "crit_rate" },
			{ source: "War Machine", target: "Black Panther", type: "crit_rate" },
			{ source: "Wolverine", target: "Magneto", type: "crit_rate" },
			
			// Friends
			{ source: "Abomination", target: "Rhino", type: "friends" },
			{ source: "Ant-Man", target: "Hulk", type: "friends" },
			{ source: "Black Widow", target: "Captain Marvel", type: "friends" },
			{ source: "Captain America", target: "Spider-Man", type: "friends" },
			{ source: "Captain America", target: "Winter Soldier", type: "friends" },
			{ source: "Captain America WWII", target: "Winter Soldier", type: "friends" },
			{ source: "Captain America WWII", target: "Wolverine", type: "friends" },
			{ source: "Captain Marvel", target: "Captain America", type: "friends" },
			{ source: "Captain Marvel", target: "Gamora", type: "friends" },
			{ source: "Captain Marvel", target: "Iron Man", type: "friends" },
			{ source: "Colossus", target: "Wolverine", type: "friends" },
			{ source: "Deadpool (X-Force)", target: "Magneto (Marvel Now)", type: "friends" },
			{ source: "Dr. Strange", target: "Spider-Man", type: "friends" },
			{ source: "Dr. Strange", target: "Thor", type: "friends" },
			{ source: "Electro", target: "Rhino", type: "friends" },
			{ source: "Elektra", target: "Wolverine", type: "friends" },
			{ source: "Gamora", target: "Star-Lord", type: "friends" },
			{ source: "Groot", target: "Star-Lord", type: "friends" },
			{ source: "Guillotine", target: "Black Panther", type: "friends" },
			{ source: "Hawkeye", target: "Hulk", type: "friends" },
			{ source: "Hawkeye", target: "Iron Man", type: "friends" },
			{ source: "Hawkeye", target: "Moon Knight", type: "friends" },
			{ source: "Hulk", target: "Hawkeye", type: "friends" },
			{ source: "Iron Fist", target: "Black Panther", type: "friends" },
			{ source: "Iron Fist", target: "Dr. Strange", type: "friends" },
			{ source: "Iron Man", target: "Captain America", type: "friends" },
			{ source: "Iron Patriot", target: "Iron Man", type: "friends" },
			{ source: "Joe Fixit", target: "Wolverine", type: "friends" },
			{ source: "Magik", target: "Storm", type: "friends" },
			{ source: "Moon Knight", target: "Spider-Man", type: "friends" },
			{ source: "Ms. Marvel", target: "Captain America", type: "friends" },
			{ source: "Old Man Logan", target: "Hawkeye", type: "friends" },
			{ source: "Rocket Raccoon", target: "Star-Lord", type: "friends" },
			{ source: "Scarlet Witch", target: "Captain Marvel", type: "friends" },
			{ source: "Spider-Man", target: "Wolverine", type: "friends" },
			{ source: "Spider-Man", target: "Hawkeye", type: "friends" },
			{ source: "Spider-Man", target: "Captain America", type: "friends" },
			{ source: "Spider-Man (Black Suit)", target: "Storm", type: "friends" },
			{ source: "Star-Lord", target: "Rocket Raccoon", type: "friends" },
			{ source: "Thor", target: "Dr. Strange", type: "friends" },
			{ source: "Thor", target: "Iron Man", type: "friends" },
			{ source: "Thor (Jane Foster)", target: "Black Widow", type: "friends" },
			{ source: "Ultron", target: "Scarlet Witch", type: "friends" },
			{ source: "Unstoppable Colossus", target: "Wolverine", type: "friends" },
			{ source: "Venompool", target: "Deadpool", type: "friends" },
			{ source: "Venompool", target: "Deadpool (X-Force)", type: "friends" },
			{ source: "War Machine", target: "Winter Soldier", type: "friends" },
			{ source: "Winter Soldier", target: "Wolverine", type: "friends" },
			{ source: "Wolverine", target: "Captain America", type: "friends" },
			
			// Family
			{ source: "Colossus", target: "Magik", type: "health" },
			{ source: "Hulkbuster", target: "Iron Man", type: "health" },
			{ source: "Hulkbuster", target: "Superior Iron Man", type: "health" },
			{ source: "Magik", target: "Colossus", type: "health" },
			{ source: "Magneto", target: "Scarlet Witch", type: "health" },
			{ source: "She-Hulk", target: "Hulk", type: "health" },
			{ source: "The Vision", target: "Iron Man", type: "health" },
			{ source: "Ultron", target: "Iron Man", type: "health" },
			{ source: "Unstoppable Colossus", target: "Magik", type: "health" },
			{ source: "Venom", target: "Spider-Man (Black Suit)", type: "health" },
			
			// Heroes for Hire
			{ source: "Luke Cage", target: "Iron Fist", type: "block" },
			
			// Inseperable
			{ source: "Groot", target: "Rocket Raccoon", type: "inseparable" },
			{ source: "Venompool", target: "Venom", type: "inseparable" },
			
			// Leadership
			{ source: "Black Bolt", target: "Cyclops", type: "block" },
			{ source: "Cyclops Classic", target: "Storm", type: "block" },
			{ source: "Dr. Strange", target: "Scarlet Witch", type: "block" },
			{ source: "Magneto", target: "Cyclops", type: "block" },
			{ source: "War Machine", target: "Hawkeye", type: "block" },
			
			// Mutant Agenda
			{ source: "Cyclops", target: "Colossus", type: "attack" },
			{ source: "Cyclops", target: "Storm", type: "attack" },
			{ source: "Cyclops Classic", target: "Colossus", type: "attack" },
			{ source: "Cyclops Classic", target: "Wolverine", type: "attack" },
			
			// Nemesis
			{ source: "Abomination", target: "Hulk", type: "attack" },
			{ source: "Ant-Man", target: "Yellowjacket", type: "attack" },
			{ source: "Black Bolt", target: "Ronan", type: "attack" },
			{ source: "Cyclops", target: "Magneto", type: "attack" },
			{ source: "Electro", target: "Spider-Man", type: "attack" },
			{ source: "Guillotine", target: "Venom", type: "attack" },
			{ source: "Joe Fixit", target: "Hulk", type: "attack" },
			{ source: "Juggernaut", target: "Dr. Strange", type: "attack" },
			{ source: "Old Man Logan", target: "Hulk", type: "attack" },
			{ source: "Spider-Man Morales", target: "Venom", type: "attack" },
			{ source: "The Vision", target: "Ultron", type: "attack" },
			{ source: "Venom", target: "Spider-Man", type: "attack" },
			{ source: "Yellowjacket", target: "Ant-Man", type: "attack" },
			
			// Rivals
			{ source: "Black Panther", target: "Iron Fist", type: "critical_damage" },
			{ source: "Cyclops", target: "Wolverine", type: "critical_damage" },
			{ source: "Daredevil", target: "Superior Iron Man", type: "critical_damage" },
			{ source: "Daredevil (Netflix)", target: "Punisher", type: "critical_damage" },
			{ source: "Deadpool (X-Force)", target: "Deadpool", type: "critical_damage" },
			{ source: "Deadpool (X-Force)", target: "Moon Knight", type: "critical_damage" },
			{ source: "Drax", target: "Gamora", type: "critical_damage" },
			{ source: "Elektra", target: "Black Widow", type: "critical_damage" },
			{ source: "Gamora", target: "Drax", type: "critical_damage" },
			{ source: "Guillotine", target: "Magik", type: "critical_damage" },
			{ source: "Hulk", target: "Thor", type: "critical_damage" },
			{ source: "Hulkbuster", target: "Hulk", type: "critical_damage" },
			{ source: "Iron Patriot", target: "Captain America", type: "critical_damage" },
			{ source: "Magneto", target: "Storm", type: "critical_damage" },
			{ source: "Moon Knight", target: "Deadpool (X-Force)", type: "critical_damage" },
			{ source: "Punisher", target: "Spider-Man", type: "critical_damage" },
			{ source: "Spider-Gwen", target: "Punisher", type: "critical_damage" },
			{ source: "Superior Iron Man", target: "Daredevil", type: "critical_damage" },
			{ source: "Unstoppable Colossus", target: "Juggernaut", type: "critical_damage" },
			{ source: "Venom", target: "Electro", type: "critical_damage" },
			{ source: "Wolverine", target: "Cyclops", type: "critical_damage" },
			{ source: "Yellowjacket", target: "Ultron", type: "critical_damage" },
			
			// Romance
			{ source: "Black Panther", target: "Storm", type: "power_gain" },
			{ source: "Black Widow", target: "Hawkeye", type: "power_gain" },
			{ source: "Black Widow", target: "Winter Soldier", type: "power_gain" },
			{ source: "Captain Marvel", target: "Wolverine", type: "power_gain" },
			{ source: "Daredevil", target: "Black Widow", type: "power_gain" },
			{ source: "Daredevil", target: "Elektra", type: "power_gain" },
			{ source: "Daredevil (Netflix)", target: "Elektra", type: "power_gain" },
			{ source: "Elektra", target: "Daredevil", type: "power_gain" },
			{ source: "Hawkeye", target: "Scarlet Witch", type: "power_gain" },
			{ source: "She-Hulk", target: "Superior Iron Man", type: "power_gain" },
			{ source: "Spider-Gwen", target: "Spider-Man", type: "power_gain" },
			{ source: "Storm", target: "Black Panther", type: "power_gain" },
			{ source: "Thor (Jane Foster)", target: "Thor", type: "power_gain" },
			{ source: "Vision", target: "Scarlet Witch", type: "power_gain" },
			
			// Teammates
			{ source: "Ant-Man", target: "Iron Man", type: "block" },
			{ source: "Ant-Man", target: "Spider-Man", type: "block" },
			{ source: "Captain America", target: "Iron Man", type: "block" },
			{ source: "Daredevil (Netflix)", target: "Luke Cage", type: "block" },
			{ source: "Deadpool", target: "Punisher", type: "block" },
			{ source: "Dr. Strange", target: "Black Bolt", type: "block" },
			{ source: "Elektra", target: "Deadpool", type: "block" },
			{ source: "Drax", target: "Star-Lord", type: "block" },
			{ source: "Guillotine", target: "Captain America WWII", type: "block" },
			{ source: "Groot", target: "Drax", type: "block" },
			{ source: "Groot", target: "Gamora", type: "block" },
			{ source: "Iron Man", target: "Thor", type: "block" },
			{ source: "Luke Cage", target: "Daredevil", type: "block" },
			{ source: "Magik", target: "Cyclops", type: "block" },
			{ source: "Moon Knight", target: "Daredevil", type: "block" },
			{ source: "Ms. Marvel", target: "Hulk", type: "block" },
			{ source: "Ms. Marvel", target: "Iron Man", type: "block" },
			{ source: "Ms. Marvel", target: "Thor", type: "block" },
			{ source: "Punisher", target: "Rhino", type: "block" },
			{ source: "Rocket Raccoon", target: "Drax", type: "block" },
			{ source: "Rocket Raccoon", target: "Gamora", type: "block" },
			{ source: "Spider-Man Morales", target: "Spider-Gwen", type: "block" },
			{ source: "Star-Lord", target: "Drax", type: "block" },
			{ source: "Star-Lord", target: "Gamora", type: "block" },
			{ source: "Storm", target: "Cyclops", type: "block" },
			{ source: "Superior Iron Man", target: "Thor", type: "block" },
			{ source: "The Vision", target: "Scarlet Witch", type: "block" },
			{ source: "Thor (Jane Foster)", target: "Vision", type: "block" },
			{ source: "Unstoppable Colossus", target: "Cyclops", type: "block" },
			{ source: "Vision", target: "Iron Man", type: "block" },
			{ source: "War Machine", target: "Black Widow", type: "block" },
			{ source: "Winter Soldier", target: "Captain America", type: "block" },
			
			// Thunderbolts
			{ source: "Luke Cage", target: "Juggernaut", type: "armor" },
			{ source: "Luke Cage", target: "Iron Patriot", type: "armor" }
		]
	};
	
	// Convert edge source and target to integer values.
	data.edges.forEach(function(edge) {
		edge.source = data.nodes[edge.source];
		edge.target = data.nodes[edge.target];
	});
	
	var force = d3.layout.force()
			.nodes(d3.values(data.nodes))
			.links(data.edges)
			.size([w, h])
			.linkDistance([250])
			.charge([-300])
			.on("tick", tick)
			.start();
	
	var svg = d3.select("svg")
				.attr("width", w)
				.attr("height", h);
				
	// Per-type markers, as they don't inherit styles.
	svg.append("defs").selectAll("marker")
		.data(["power_gain", "armor", "critical_damage", "stun", "block", "health", "crit_rate", "attack", "friends", "inseparable"])
		.enter().append("marker")
		.attr("id", function(d) { return d; })
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 37)
		.attr("refY", -3)
		.attr("markerWidth", 6)
		.attr("markerHeight", 6)
		.attr("orient", "auto")
		.append("path")
		.attr("d", "M0,-5L10,0L0,5z");
			
	var path = svg.append("g").selectAll("path")
				.data(force.links())
				.enter().append("path")
				.attr("class", function(d) { return "link " + d.type; })
				.attr("marker-end", function(d) { return "url(#" + d.type + ")"; });
			
	var node = svg.selectAll(".node")
			.data(force.nodes())
			.enter().append("g")
			.attr("class", "node")
			.call(force.drag);
		
		// Append class circles
		node.append("circle")
			.attr("r", 25)
			.attr("class", function(d) { return d.class; })
			.call(force.drag);
			
		// Append images
		node.append("image")
			.attr("xlink:href",  function(d) { return d.image;})
			.attr("x", function(d) { return -25;})
			.attr("y", function(d) { return -25;})
			.attr("height", 50)
			.attr("width", 50);
			
		node.append("text")
			.attr("x", 10)
			.attr("y", "1.25em")
			.text(function(d) { return d.name; });
	
	// Use elliptical arc path segments to doubly-encode directionality.
	function tick() {
		path.attr("d", linkArc);
		node.attr("transform", transform);
	}
	
	function linkArc(d) {
		var dx = d.target.x - d.source.x,
			dy = d.target.y - d.source.y,
			dr = Math.sqrt(dx * dx + dy * dy);
		return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
	}
	
	function transform(d) {
		return "translate(" + d.x + "," + d.y + ")";
	}
};