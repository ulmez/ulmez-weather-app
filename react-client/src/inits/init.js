const weathers = {
	"types": [{
		"code": 1000,
		"night_or_day_icon": ["C", "B"]
	}, {
		"code": 1003,
		"night_or_day_icon": ["I", "H"]
	}, {
		"code": 1006,
		"night_or_day_icon": ["N", "N"]
	}, {
		"code": 1009,
		"night_or_day_icon": ["L", "L"]
	}, {
		"code": 1030,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1063,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1066,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1072,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1087,
		"night_or_day_icon": ["O", "O"]
	}, {
		"code": 1114,
		"night_or_day_icon": ["T", "T"]
	}, {
		"code": 1117,
		"night_or_day_icon": ["T", "T"]
	}, {
		"code": 1135,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1147,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1150,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1153,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1168,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1171,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1180,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1183,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1186,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1189,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1192,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1195,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1198,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1201,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1210,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1213,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1216,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1219,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1222,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1225,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1237,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1240,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1243,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1246,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1255,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1258,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1261,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1264,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1273,
		"night_or_day_icon": ["O", "O"]
	}, {
		"code": 1276,
		"night_or_day_icon": ["O", "O"]
	}]
};

const cities = [
	{
	  "city": "Adak",
	  "country": "United States"
	},
	{
	  "city": "Apia",
	  "country": "Samoa"
	},
	{
	  "city": "Pago Pago",
	  "country": "United States"
	},
	{
	  "city": "Alofi",
	  "country": "Niue"
	},
	{
	  "city": "Avarua",
	  "country": "Cook Islands"
	},
	{
	  "city": "Honolulu",
	  "country": "United States"
	},
	{
	  "city": "Hilo",
	  "country": "United States"
	},
	{
	  "city": "Anchorage",
	  "country": "United States"
	},
	{
	  "city": "Papeete",
	  "country": "French Polynesia"
	},
	{
	  "city": "Fairbanks",
	  "country": "United States"
	},
	{
	  "city": "Sitka",
	  "country": "United States"
	},
	{
	  "city": "Whitehorse",
	  "country": "Canada"
	},
	{
	  "city": "Juneau",
	  "country": "United States"
	},
	{
	  "city": "Adamstown",
	  "country": "United States"
	},
	{
	  "city": "Vancouver",
	  "country": "Canada"
	},
	{
	  "city": "Portland",
	  "country": "United States"
	},
	{
	  "city": "San Francisco",
	  "country": "United States"
	},
	{
	  "city": "Seattle",
	  "country": "United States"
	},
	{
	  "city": "Sacramento",
	  "country": "United States"
	},
	{
	  "city": "Los Angeles",
	  "country": "United States"
	},
	{
	  "city": "Riverside",
	  "country": "United States"
	},
	{
	  "city": "San Diego",
	  "country": "United States"
	},
	{
	  "city": "Tijuana",
	  "country": "Mexico"
	},
	{
	  "city": "Mexicali",
	  "country": "Mexico"
	},
	{
	  "city": "Las Vegas",
	  "country": "United States"
	},
	{
	  "city": "Yellowknife",
	  "country": "Canada"
	},
	{
	  "city": "Calgary",
	  "country": "Canada"
	},
	{
	  "city": "Edmonton",
	  "country": "Canada"
	},
	{
	  "city": "Phoenix",
	  "country": "United States"
	},
	{
	  "city": "Salt Lake City",
	  "country": "United States"
	},
	{
	  "city": "Tucson",
	  "country": "United States"
	},
	{
	  "city": "Hanga Roa",
	  "country": "Chile"
	},
	{
	  "city": "Saskatoon",
	  "country": "Canada"
	},
	{
	  "city": "Albuquerque",
	  "country": "United States"
	},
	{
	  "city": "El Paso",
	  "country": "United States"
	},
	{
	  "city": "Chihuahua",
	  "country": "Mexico"
	},
	{
	  "city": "Denver",
	  "country": "United States"
	},
	{
	  "city": "Durango",
	  "country": "Mexico"
	},
	{
	  "city": "Regina",
	  "country": "Canada"
	},
	{
	  "city": "Zapopan",
	  "country": "Mexico"
	},
	{
	  "city": "Guadalajara",
	  "country": "Mexico"
	},
	{
	  "city": "Monterrey",
	  "country": "Mexico"
	},
	{
	  "city": "Mexico City",
	  "country": "Mexico"
	},
	{
	  "city": "San Antonio",
	  "country": "United States"
	},
	{
	  "city": "Puebla",
	  "country": "Mexico"
	},
	{
	  "city": "Austin",
	  "country": "United States"
	},
	{
	  "city": "Oklahoma City",
	  "country": "United States"
	},
	{
	  "city": "Wichita",
	  "country": "United States"
	},
	{
	  "city": "Winnipeg",
	  "country": "Canada"
	},
	{
	  "city": "Dallas",
	  "country": "United States"
	},
	{
	  "city": "Veracruz",
	  "country": "Mexico"
	},
	{
	  "city": "Houston",
	  "country": "United States"
	},
	{
	  "city": "Kansas City",
	  "country": "United States"
	},
	{
	  "city": "Minneapolis",
	  "country": "United States"
	},
	{
	  "city": "Quetzaltenango",
	  "country": "Guatemala"
	},
	{
	  "city": "Guatemala City",
	  "country": "Guatemala"
	},
	{
	  "city": "New Orleans",
	  "country": "United States"
	},
	{
	  "city": "Memphis",
	  "country": "United States"
	},
	{
	  "city": "Merida",
	  "country": "Mexico"
	},
	{
	  "city": "San Salvador",
	  "country": "El Salvador"
	},
	{
	  "city": "Belmopan",
	  "country": "Belize"
	},
	{
	  "city": "Belize City",
	  "country": "Belize"
	},
	{
	  "city": "Milwaukee",
	  "country": "United States"
	},
	{
	  "city": "Chicago",
	  "country": "United States"
	},
	{
	  "city": "Tegucigalpa",
	  "country": "Honduras"
	},
	{
	  "city": "Nashville",
	  "country": "United States"
	},
	{
	  "city": "Managua",
	  "country": "Nicaragua"
	},
	{
	  "city": "Indianapolis",
	  "country": "United States"
	},
	{
	  "city": "Louisville",
	  "country": "United States"
	},
	{
	  "city": "Cincinnati",
	  "country": "United States"
	},
	{
	  "city": "Atlanta",
	  "country": "United States"
	},
	{
	  "city": "San Jose",
	  "country": "Costa Rica"
	},
	{
	  "city": "Detroit",
	  "country": "United States"
	},
	{
	  "city": "Columbus",
	  "country": "United States"
	},
	{
	  "city": "Tampa",
	  "country": "United States"
	},
	{
	  "city": "Havana",
	  "country": "Cuba"
	},
	{
	  "city": "Cleveland",
	  "country": "United States"
	},
	{
	  "city": "Jacksonville",
	  "country": "United States"
	},
	{
	  "city": "George Town",
	  "country": "Malaysia"
	},
	{
	  "city": "Charlotte",
	  "country": "United States"
	},
	{
	  "city": "Miami",
	  "country": "United States"
	},
	{
	  "city": "Pittsburgh",
	  "country": "United States"
	},
	{
	  "city": "Guayaquil",
	  "country": "Ecuador"
	},
	{
	  "city": "Panama City",
	  "country": "Panama"
	},
	{
	  "city": "Toronto",
	  "country": "Canada"
	},
	{
	  "city": "Buffalo",
	  "country": "United States"
	},
	{
	  "city": "Raleigh",
	  "country": "United States"
	},
	{
	  "city": "Quito",
	  "country": "Ecuador"
	},
	{
	  "city": "Rochester",
	  "country": "United States"
	},
	{
	  "city": "Nassau",
	  "country": "The Bahamas"
	},
	{
	  "city": "Washington",
	  "country": "United States"
	},
	{
	  "city": "Lima",
	  "country": "Peru"
	},
	{
	  "city": "Kingston",
	  "country": "Jamaica"
	},
	{
	  "city": "Baltimore",
	  "country": "United States"
	},
	{
	  "city": "Cali",
	  "country": "Colombia"
	},
	{
	  "city": "Virginia Beach",
	  "country": "United States"
	},
	{
	  "city": "Ottawa",
	  "country": "Canada"
	},
	{
	  "city": "Medellin",
	  "country": "Colombia"
	},
	{
	  "city": "Cartagena",
	  "country": "Colombia"
	},
	{
	  "city": "Philadelphia",
	  "country": "United States"
	},
	{
	  "city": "Barranquilla",
	  "country": "Colombia"
	},
	{
	  "city": "Forked River",
	  "country": "United States"
	},
	{
	  "city": "Jersey City",
	  "country": "United States"
	},
	{
	  "city": "Bogota",
	  "country": "Colombia"
	},
	{
	  "city": "Montreal",
	  "country": "Canada"
	},
	{
	  "city": "Iquitos",
	  "country": "Peru"
	},
	{
	  "city": "Valdivia",
	  "country": "Chile"
	},
	{
	  "city": "Concepcion",
	  "country": "Chile"
	},
	{
	  "city": "Cusco",
	  "country": "Peru"
	},
	{
	  "city": "Maracaibo",
	  "country": "Venezuela"
	},
	{
	  "city": "Valparaiso",
	  "country": "Chile"
	},
	{
	  "city": "Arequipa",
	  "country": "Peru"
	},
	{
	  "city": "Providence",
	  "country": "United States"
	},
	{
	  "city": "La Serena",
	  "country": "Chile"
	},
	{
	  "city": "Cockburn Town",
	  "country": "Turks and Caicos Islands"
	},
	{
	  "city": "Boston",
	  "country": "United States"
	},
	{
	  "city": "Punta Arenas",
	  "country": "Chile"
	},
	{
	  "city": "Santiago",
	  "country": "Chile"
	},
	{
	  "city": "Antofagasta",
	  "country": "Chile"
	},
	{
	  "city": "Iquique",
	  "country": "Chile"
	},
	{
	  "city": "Oranjestad",
	  "country": "Aruba"
	},
	{
	  "city": "Santo Domingo",
	  "country": "Dominican Republic"
	},
	{
	  "city": "Rio Branco",
	  "country": "Brazil"
	},
	{
	  "city": "Willemstad",
	  "country": "Netherlands Antilles"
	},
	{
	  "city": "Calama",
	  "country": "Chile"
	},
	{
	  "city": "Mendoza",
	  "country": "Argentina"
	},
	{
	  "city": "Iqaluit",
	  "country": "Canada"
	},
	{
	  "city": "Ushuaia",
	  "country": "Argentina"
	},
	{
	  "city": "La Paz",
	  "country": "Bolivia"
	},
	{
	  "city": "Puerto Williams",
	  "country": "Chile"
	},
	{
	  "city": "Caracas",
	  "country": "Venezuela"
	},
	{
	  "city": "Fredericton",
	  "country": "Canada"
	},
	{
	  "city": "San Juan",
	  "country": "Puerto Rico"
	},
	{
	  "city": "Saint John",
	  "country": "Grenada"
	},
	{
	  "city": "Sucre",
	  "country": "Bolivia"
	},
	{
	  "city": "Charlotte Amalie",
	  "country": "United States"
	},
	{
	  "city": "Hamilton",
	  "country": "Bermuda"
	},
	{
	  "city": "Road Town",
	  "country": "British Virgin Islands"
	},
	{
	  "city": "Cordoba",
	  "country": "Argentina"
	},
	{
	  "city": "Porto Velho",
	  "country": "Brazil"
	},
	{
	  "city": "Charlottetown",
	  "country": "Canada"
	},
	{
	  "city": "The Valley",
	  "country": "Anguilla"
	},
	{
	  "city": "Basse-Terre",
	  "country": "Guadeloupe"
	},
	{
	  "city": "Bahia Blanca",
	  "country": "Argentina"
	},
	{
	  "city": "Roseau",
	  "country": "Dominica"
	},
	{
	  "city": "Chaguanas",
	  "country": "Trinidad and Tobago"
	},
	{
	  "city": "Kingstown",
	  "country": "Saint Vincent and the Grenadines"
	},
	{
	  "city": "Castries",
	  "country": "St. Lucia"
	},
	{
	  "city": "Rosario",
	  "country": "Argentina"
	},
	{
	  "city": "Boa Vista",
	  "country": "Brazil"
	},
	{
	  "city": "Manaus",
	  "country": "Brazil"
	},
	{
	  "city": "Bridgetown",
	  "country": "Barbados"
	},
	{
	  "city": "Buenos Aires",
	  "country": "Argentina"
	},
	{
	  "city": "Stanley",
	  "country": "Hong Kong"
	},
	{
	  "city": "Asuncion",
	  "country": "Paraguay"
	},
	{
	  "city": "Saint-Pierre",
	  "country": "Reunion"
	},
	{
	  "city": "Montevideo",
	  "country": "Uruguay"
	},
	{
	  "city": "Cuiaba",
	  "country": "Brazil"
	},
	{
	  "city": "Paramaribo",
	  "country": "Suriname"
	},
	{
	  "city": "Campo Grande",
	  "country": "Brazil"
	},
	{
	  "city": "Pelotas",
	  "country": "Brazil"
	},
	{
	  "city": "Cayenne",
	  "country": "French Guiana"
	},
	{
	  "city": "Nuuk",
	  "country": "Greenland"
	},
	{
	  "city": "Porto Alegre",
	  "country": "Brazil"
	},
	{
	  "city": "Macapa",
	  "country": "Brazil"
	},
	{
	  "city": "Assis",
	  "country": "Italy"
	},
	{
	  "city": "Curitiba",
	  "country": "Brazil"
	},
	{
	  "city": "Belem",
	  "country": "Brazil"
	},
	{
	  "city": "Brasilia",
	  "country": "Brazil"
	},
	{
	  "city": "Campinas",
	  "country": "Brazil"
	},
	{
	  "city": "Sao Paulo",
	  "country": "Brazil"
	},
	{
	  "city": "Vitoria",
	  "country": "Brazil"
	},
	{
	  "city": "Ilheus",
	  "country": "Brazil"
	},
	{
	  "city": "Fortaleza",
	  "country": "Brazil"
	},
	{
	  "city": "Maceio",
	  "country": "Brazil"
	},
	{
	  "city": "Recife",
	  "country": "Brazil"
	},
	{
	  "city": "Ponta Delgada",
	  "country": "Portugal"
	},
	{
	  "city": "Praia",
	  "country": "Brazil"
	},
	{
	  "city": "Reykjavik",
	  "country": "Iceland"
	},
	{
	  "city": "Dakar",
	  "country": "Senegal"
	},
	{
	  "city": "Thies",
	  "country": "Senegal"
	},
	{
	  "city": "Serekunda",
	  "country": "The Gambia"
	},
	{
	  "city": "Brikama",
	  "country": "The Gambia"
	},
	{
	  "city": "Banjul",
	  "country": "The Gambia"
	},
	{
	  "city": "Nouakchott",
	  "country": "Mauritania"
	},
	{
	  "city": "Bissau",
	  "country": "Guinea-Bissau"
	},
	{
	  "city": "Conakry",
	  "country": "Guinea"
	},
	{
	  "city": "Freetown",
	  "country": "Sierra Leone"
	},
	{
	  "city": "El Aaiun",
	  "country": "Western Sahara"
	},
	{
	  "city": "Monrovia",
	  "country": "Liberia"
	},
	{
	  "city": "Lisbon",
	  "country": "Portugal"
	},
	{
	  "city": "Porto",
	  "country": "Brazil"
	},
	{
	  "city": "Bamako",
	  "country": "Mali"
	},
	{
	  "city": "Casablanca",
	  "country": "Morocco"
	},
	{
	  "city": "Koulikoro",
	  "country": "Mali"
	},
	{
	  "city": "Rabat",
	  "country": "Morocco"
	},
	{
	  "city": "Torshavn",
	  "country": "Faroe Islands"
	},
	{
	  "city": "Dublin",
	  "country": "Ireland"
	},
	{
	  "city": "Seville",
	  "country": "Spain"
	},
	{
	  "city": "Belfast",
	  "country": "United Kingdom"
	},
	{
	  "city": "Jamestown",
	  "country": "United States"
	},
	{
	  "city": "Gibraltar",
	  "country": "Gibraltar"
	},
	{
	  "city": "Yamoussoukro",
	  "country": "Côte d'Ivoire"
	},
	{
	  "city": "Douglas",
	  "country": "Australia"
	},
	{
	  "city": "Malaga",
	  "country": "Spain"
	},
	{
	  "city": "Glasgow",
	  "country": "United Kingdom"
	},
	{
	  "city": "Abidjan",
	  "country": "Côte d'Ivoire"
	},
	{
	  "city": "Madrid",
	  "country": "Spain"
	},
	{
	  "city": "Cardiff",
	  "country": "United Kingdom"
	},
	{
	  "city": "Edinburgh",
	  "country": "United Kingdom"
	},
	{
	  "city": "Timbuktu",
	  "country": "Mali"
	},
	{
	  "city": "Liverpool",
	  "country": "United Kingdom"
	},
	{
	  "city": "Bilbao",
	  "country": "Spain"
	},
	{
	  "city": "Manchester",
	  "country": "United Kingdom"
	},
	{
	  "city": "Aberdeen",
	  "country": "United Kingdom"
	},
	{
	  "city": "Birmingham",
	  "country": "United Kingdom"
	},
	{
	  "city": "Leeds",
	  "country": "United Kingdom"
	},
	{
	  "city": "Nantes",
	  "country": "France"
	},
	{
	  "city": "Ouagadougou",
	  "country": "Burkina Faso"
	},
	{
	  "city": "Tamale",
	  "country": "Ghana"
	},
	{
	  "city": "Valencia",
	  "country": "Spain"
	},
	{
	  "city": "Accra",
	  "country": "Ghana"
	},
	{
	  "city": "London",
	  "country": "United Kingdom"
	},
	{
	  "city": "Greenwich",
	  "country": "United Kingdom"
	},
	{
	  "city": "Lome",
	  "country": "Togo"
	},
	{
	  "city": "Toulouse",
	  "country": "France"
	},
	{
	  "city": "Ibiza",
	  "country": "Spain"
	},
	{
	  "city": "Niamey",
	  "country": "Niger"
	},
	{
	  "city": "Barcelona",
	  "country": "Spain"
	},
	{
	  "city": "Paris",
	  "country": "France"
	},
	{
	  "city": "Cotonou",
	  "country": "Benin"
	},
	{
	  "city": "Porto-Novo",
	  "country": "Benin"
	},
	{
	  "city": "Palma",
	  "country": "Spain"
	},
	{
	  "city": "Algiers",
	  "country": "Algeria"
	},
	{
	  "city": "Lagos",
	  "country": "Nigeria"
	},
	{
	  "city": "Ibadan",
	  "country": "Nigeria"
	},
	{
	  "city": "The Hague",
	  "country": "Netherlands"
	},
	{
	  "city": "Brussels",
	  "country": "Belgium"
	},
	{
	  "city": "Antwerp",
	  "country": "Belgium"
	},
	{
	  "city": "Rotterdam",
	  "country": "Netherlands"
	},
	{
	  "city": "Lyon",
	  "country": "France"
	},
	{
	  "city": "Amsterdam",
	  "country": "Netherlands"
	},
	{
	  "city": "Marseille",
	  "country": "France"
	},
	{
	  "city": "Bergen",
	  "country": "Norway"
	},
	{
	  "city": "Geneva",
	  "country": "Switzerland"
	},
	{
	  "city": "Dusseldorf",
	  "country": "Germany"
	},
	{
	  "city": "Cologne",
	  "country": "Germany"
	},
	{
	  "city": "Cannes",
	  "country": "France"
	},
	{
	  "city": "Nice",
	  "country": "France"
	},
	{
	  "city": "Monaco",
	  "country": "Monaco"
	},
	{
	  "city": "Abuja",
	  "country": "Nigeria"
	},
	{
	  "city": "Enugu",
	  "country": "Nigeria"
	},
	{
	  "city": "Turin",
	  "country": "Italy"
	},
	{
	  "city": "Strasbourg",
	  "country": "France"
	},
	{
	  "city": "Kano",
	  "country": "Nigeria"
	},
	{
	  "city": "Zurich",
	  "country": "Switzerland"
	},
	{
	  "city": "Frankfurt",
	  "country": "Germany"
	},
	{
	  "city": "Stuttgart",
	  "country": "Germany"
	},
	{
	  "city": "Milan",
	  "country": "Italy"
	},
	{
	  "city": "Libreville",
	  "country": "Gabon"
	},
	{
	  "city": "Vaduz",
	  "country": "Liechtenstein"
	},
	{
	  "city": "Douala",
	  "country": "Cameroon"
	},
	{
	  "city": "Hanover",
	  "country": "Germany"
	},
	{
	  "city": "Hamburg",
	  "country": "Germany"
	},
	{
	  "city": "Tunis",
	  "country": "Tunisia"
	},
	{
	  "city": "Aarhus",
	  "country": "Denmark"
	},
	{
	  "city": "Oslo",
	  "country": "Norway"
	},
	{
	  "city": "Innsbruck",
	  "country": "Austria"
	},
	{
	  "city": "Yaounde",
	  "country": "Cameroon"
	},
	{
	  "city": "Munich",
	  "country": "Germany"
	},
	{
	  "city": "Gothenburg",
	  "country": "Sweden"
	},
	{
	  "city": "Leipzig",
	  "country": "Germany"
	},
	{
	  "city": "Rome",
	  "country": "Italy"
	},
	{
	  "city": "Copenhagen",
	  "country": "Denmark"
	},
	{
	  "city": "Malmo",
	  "country": "Sweden"
	},
	{
	  "city": "Salzburg",
	  "country": "Austria"
	},
	{
	  "city": "Tripoli",
	  "country": "Libya"
	},
	{
	  "city": "Luanda",
	  "country": "Angola"
	},
	{
	  "city": "Berlin",
	  "country": "Germany"
	},
	{
	  "city": "Dresden",
	  "country": "Germany"
	},
	{
	  "city": "Naples",
	  "country": "Italy"
	},
	{
	  "city": "Linz",
	  "country": "Austria"
	},
	{
	  "city": "Prague",
	  "country": "Czech Republic"
	},
	{
	  "city": "Sabha",
	  "country": "Libya"
	},
	{
	  "city": "Birkirkara",
	  "country": "Malta"
	},
	{
	  "city": "Ljubljana",
	  "country": "Slovenia"
	},
	{
	  "city": "Valletta",
	  "country": "Malta"
	},
	{
	  "city": "Brazzaville",
	  "country": "Republic of the Congo"
	},
	{
	  "city": "Kinshasa",
	  "country": "Democratic Republic of the Congo"
	},
	{
	  "city": "Graz",
	  "country": "Austria"
	},
	{
	  "city": "Longyearbyen",
	  "country": "Svalbard and Jan Mayen"
	},
	{
	  "city": "Zagreb",
	  "country": "Croatia"
	},
	{
	  "city": "Vienna",
	  "country": "Austria"
	},
	{
	  "city": "Bratislava",
	  "country": "Slovakia"
	},
	{
	  "city": "Stockholm",
	  "country": "Sweden"
	},
	{
	  "city": "Sarajevo",
	  "country": "Bosnia and Herzegovina"
	},
	{
	  "city": "Cape Town",
	  "country": "South Africa"
	},
	{
	  "city": "Bangui",
	  "country": "Central African Republic"
	},
	{
	  "city": "Budapest",
	  "country": "Hungary"
	},
	{
	  "city": "Podgorica",
	  "country": "Montenegro"
	},
	{
	  "city": "Tirana",
	  "country": "Albania"
	},
	{
	  "city": "Krakow",
	  "country": "Poland"
	},
	{
	  "city": "Belgrade",
	  "country": "Serbia"
	},
	{
	  "city": "Kaliningrad",
	  "country": "Russia"
	},
	{
	  "city": "Warsaw",
	  "country": "Poland"
	},
	{
	  "city": "Pristina",
	  "country": "Kosovo"
	},
	{
	  "city": "Skopje",
	  "country": "Macedonia"
	},
	{
	  "city": "Sofia",
	  "country": "Bulgaria"
	},
	{
	  "city": "Athens",
	  "country": "Greece"
	},
	{
	  "city": "Tampere",
	  "country": "Finland"
	},
	{
	  "city": "Lviv",
	  "country": "Ukraine"
	},
	{
	  "city": "Riga",
	  "country": "Latvia"
	},
	{
	  "city": "Espoo",
	  "country": "Finland"
	},
	{
	  "city": "Tallinn",
	  "country": "Estonia"
	},
	{
	  "city": "Helsinki",
	  "country": "Finland"
	},
	{
	  "city": "Vilnius",
	  "country": "Lithuania"
	},
	{
	  "city": "Port Elizabeth",
	  "country": "South Africa"
	},
	{
	  "city": "Livingstone",
	  "country": "Zambia"
	},
	{
	  "city": "Gaborone",
	  "country": "Botswana"
	},
	{
	  "city": "Bucharest",
	  "country": "Romania"
	},
	{
	  "city": "Bloemfontein",
	  "country": "South Africa"
	},
	{
	  "city": "Tartu",
	  "country": "Syria"
	},
	{
	  "city": "Lubumbashi",
	  "country": "Democratic Republic of the Congo"
	},
	{
	  "city": "Maseru",
	  "country": "Lesotho"
	},
	{
	  "city": "Francistown",
	  "country": "Botswana"
	},
	{
	  "city": "Minsk",
	  "country": "Belarus"
	},
	{
	  "city": "Johannesburg",
	  "country": "South Africa"
	},
	{
	  "city": "Pretoria",
	  "country": "South Africa"
	},
	{
	  "city": "Lusaka",
	  "country": "Zambia"
	},
	{
	  "city": "Ndola",
	  "country": "Zambia"
	},
	{
	  "city": "Bulawayo",
	  "country": "Zimbabwe"
	},
	{
	  "city": "Istanbul",
	  "country": "Turkey"
	},
	{
	  "city": "Bursa",
	  "country": "Turkey"
	},
	{
	  "city": "Bujumbura",
	  "country": "Burundi"
	},
	{
	  "city": "Tiraspol",
	  "country": "Moldova"
	},
	{
	  "city": "Alexandria",
	  "country": "Egypt"
	},
	{
	  "city": "Kigali",
	  "country": "Rwanda"
	},
	{
	  "city": "Saint Petersburg",
	  "country": "Russia"
	},
	{
	  "city": "Odessa",
	  "country": "Ukraine"
	},
	{
	  "city": "Harare",
	  "country": "Zimbabwe"
	},
	{
	  "city": "Durban",
	  "country": "South Africa"
	},
	{
	  "city": "Mbabane",
	  "country": "Swaziland"
	},
	{
	  "city": "Lobamba",
	  "country": "Swaziland"
	},
	{
	  "city": "Cairo",
	  "country": "Egypt"
	},
	{
	  "city": "Manzini",
	  "country": "Swaziland"
	},
	{
	  "city": "Port Said",
	  "country": "Egypt"
	},
	{
	  "city": "Konya",
	  "country": "Turkey"
	},
	{
	  "city": "Omdurman",
	  "country": "Sudan"
	},
	{
	  "city": "Khartoum",
	  "country": "Sudan"
	},
	{
	  "city": "Suez",
	  "country": "Egypt"
	},
	{
	  "city": "Maputo",
	  "country": "Mozambique"
	},
	{
	  "city": "Luxor",
	  "country": "Egypt"
	},
	{
	  "city": "Ankara",
	  "country": "Turkey"
	},
	{
	  "city": "Mwanza",
	  "country": "Tanzania"
	},
	{
	  "city": "Murmansk",
	  "country": "Russia"
	},
	{
	  "city": "Nicosia",
	  "country": "Cyprus"
	},
	{
	  "city": "Lilongwe",
	  "country": "Malawi"
	},
	{
	  "city": "Simferopol",
	  "country": "Ukraine"
	},
	{
	  "city": "Gaza",
	  "country": "Palestine"
	},
	{
	  "city": "Mersin",
	  "country": "Turkey"
	},
	{
	  "city": "Tel Aviv",
	  "country": "Israel"
	},
	{
	  "city": "Blantyre",
	  "country": "Malawi"
	},
	{
	  "city": "Jerusalem",
	  "country": "Israel"
	},
	{
	  "city": "Adana",
	  "country": "Turkey"
	},
	{
	  "city": "Beirut",
	  "country": "Lebanon"
	},
	{
	  "city": "Dodoma",
	  "country": "Tanzania"
	},
	{
	  "city": "Amman",
	  "country": "Jordan"
	},
	{
	  "city": "Damascus",
	  "country": "Syria"
	},
	{
	  "city": "Kharkiv",
	  "country": "Ukraine"
	},
	{
	  "city": "Nairobi",
	  "country": "Kenya"
	},
	{
	  "city": "Gaziantep",
	  "country": "Turkey"
	},
	{
	  "city": "Moscow",
	  "country": "Russia"
	},
	{
	  "city": "Addis Ababa",
	  "country": "Ethiopia"
	},
	{
	  "city": "Asmara",
	  "country": "Eritrea"
	},
	{
	  "city": "Jeddah",
	  "country": "Saudi Arabia"
	},
	{
	  "city": "Zanzibar City",
	  "country": "Tanzania"
	},
	{
	  "city": "Medina",
	  "country": "Saudi Arabia"
	},
	{
	  "city": "Mecca",
	  "country": "Saudi Arabia"
	},
	{
	  "city": "Sukhumi",
	  "country": "Georgia"
	},
	{
	  "city": "Moroni",
	  "country": "Comoros"
	},
	{
	  "city": "Baghdad",
	  "country": "Iraq"
	},
	{
	  "city": "Hargeisa",
	  "country": "Somalia"
	},
	{
	  "city": "Yerevan",
	  "country": "Armenia"
	},
	{
	  "city": "Tbilisi",
	  "country": "Georgia"
	},
	{
	  "city": "Mamoudzou",
	  "country": "Mayotte"
	},
	{
	  "city": "Mogadishu",
	  "country": "Somalia"
	},
	{
	  "city": "Tabriz",
	  "country": "Iran"
	},
	{
	  "city": "Riyadh",
	  "country": "Saudi Arabia"
	},
	{
	  "city": "Stepanakert",
	  "country": "Azerbaijan"
	},
	{
	  "city": "Antananarivo",
	  "country": "Madagascar"
	},
	{
	  "city": "Basra",
	  "country": "Iraq"
	},
	{
	  "city": "Baku",
	  "country": "Azerbaijan"
	},
	{
	  "city": "Dammam",
	  "country": "Saudi Arabia"
	},
	{
	  "city": "Samara",
	  "country": "Russia"
	},
	{
	  "city": "Manama",
	  "country": "Bahrain"
	},
	{
	  "city": "Tehran",
	  "country": "Iran"
	},
	{
	  "city": "Doha",
	  "country": "Qatar"
	},
	{
	  "city": "Abu Dhabi",
	  "country": "United Arab Emirates"
	},
	{
	  "city": "Dubai",
	  "country": "United Arab Emirates"
	},
	{
	  "city": "Saint-Denis",
	  "country": "Reunion"
	},
	{
	  "city": "Perm",
	  "country": "Russia"
	},
	{
	  "city": "Port Louis",
	  "country": "Mauritius"
	},
	{
	  "city": "Ashgabat",
	  "country": "Turkmenistan"
	},
	{
	  "city": "Muscat",
	  "country": "Oman"
	},
	{
	  "city": "Nukus",
	  "country": "Uzbekistan"
	},
	{
	  "city": "Mashhad",
	  "country": "Iran"
	},
	{
	  "city": "Yekaterinburg",
	  "country": "Russia"
	},
	{
	  "city": "Kandahar",
	  "country": "Afghanistan"
	},
	{
	  "city": "Karachi",
	  "country": "Pakistan"
	},
	{
	  "city": "Hyderabad",
	  "country": "India"
	},
	{
	  "city": "Dushanbe",
	  "country": "Tajikistan"
	},
	{
	  "city": "Kabul",
	  "country": "Afghanistan"
	},
	{
	  "city": "Tashkent",
	  "country": "Uzbekistan"
	},
	{
	  "city": "Astana",
	  "country": "Kazakhstan"
	},
	{
	  "city": "Multan",
	  "country": "Pakistan"
	},
	{
	  "city": "Peshawar",
	  "country": "Pakistan"
	},
	{
	  "city": "Namangan",
	  "country": "Uzbekistan"
	},
	{
	  "city": "Ahmedabad",
	  "country": "India"
	},
	{
	  "city": "Mumbai",
	  "country": "India"
	},
	{
	  "city": "Surat",
	  "country": "India"
	},
	{
	  "city": "Faisalabad",
	  "country": "Pakistan"
	},
	{
	  "city": "Rawalpindi",
	  "country": "Pakistan"
	},
	{
	  "city": "Islamabad",
	  "country": "Pakistan"
	},
	{
	  "city": "Omsk",
	  "country": "Russia"
	},
	{
	  "city": "Pune",
	  "country": "India"
	},
	{
	  "city": "Lahore",
	  "country": "Pakistan"
	},
	{
	  "city": "Bishkek",
	  "country": "Kyrgyzstan"
	},
	{
	  "city": "Srinagar",
	  "country": "India"
	},
	{
	  "city": "Amritsar",
	  "country": "India"
	},
	{
	  "city": "Jaipur",
	  "country": "India"
	},
	{
	  "city": "Ludhiana",
	  "country": "India"
	},
	{
	  "city": "Almaty",
	  "country": "Kazakhstan"
	},
	{
	  "city": "New Delhi",
	  "country": "India"
	},
	{
	  "city": "Bangalore",
	  "country": "India"
	},
	{
	  "city": "Nagpur",
	  "country": "India"
	},
	{
	  "city": "Colombo",
	  "country": "Sri Lanka"
	},
	{
	  "city": "Chennai",
	  "country": "India"
	},
	{
	  "city": "Kanpur",
	  "country": "India"
	},
	{
	  "city": "Kandy",
	  "country": "Sri Lanka"
	},
	{
	  "city": "Lucknow",
	  "country": "India"
	},
	{
	  "city": "Batticaloa",
	  "country": "Sri Lanka"
	},
	{
	  "city": "Novosibirsk",
	  "country": "Russia"
	},
	{
	  "city": "Patna",
	  "country": "India"
	},
	{
	  "city": "Kathmandu",
	  "country": "Nepal"
	},
	{
	  "city": "Urumqi",
	  "country": "China"
	},
	{
	  "city": "Norilsk",
	  "country": "Russia"
	},
	{
	  "city": "Gangtok",
	  "country": "India"
	},
	{
	  "city": "Shigatse",
	  "country": "China"
	},
	{
	  "city": "Thimphu",
	  "country": "Bhutan"
	},
	{
	  "city": "Dhaka",
	  "country": "Bangladesh"
	},
	{
	  "city": "Lhasa",
	  "country": "China"
	},
	{
	  "city": "Agartala",
	  "country": "India"
	},
	{
	  "city": "Guwahati",
	  "country": "India"
	},
	{
	  "city": "Chittagong",
	  "country": "Bangladesh"
	},
	{
	  "city": "Shillong",
	  "country": "India"
	},
	{
	  "city": "Port Blair",
	  "country": "India"
	},
	{
	  "city": "Dibrugarh",
	  "country": "India"
	},
	{
	  "city": "Banda Aceh",
	  "country": "Indonesia"
	},
	{
	  "city": "Yangon",
	  "country": "Myanmar"
	},
	{
	  "city": "Medan",
	  "country": "Indonesia"
	},
	{
	  "city": "Chiang Mai",
	  "country": "Thailand"
	},
	{
	  "city": "Surat Thani",
	  "country": "Thailand"
	},
	{
	  "city": "Padang",
	  "country": "Indonesia"
	},
	{
	  "city": "Hat Yai",
	  "country": "Thailand"
	},
	{
	  "city": "Bangkok",
	  "country": "Thailand"
	},
	{
	  "city": "Pattaya",
	  "country": "Thailand"
	},
	{
	  "city": "Ipoh",
	  "country": "Malaysia"
	},
	{
	  "city": "Pekanbaru",
	  "country": "Indonesia"
	},
	{
	  "city": "Bratsk",
	  "country": "Russia"
	},
	{
	  "city": "Kuala Lumpur",
	  "country": "Malaysia"
	},
	{
	  "city": "Xining",
	  "country": "China"
	},
	{
	  "city": "Nakhon Ratchasima",
	  "country": "Thailand"
	},
	{
	  "city": "Kota Bharu",
	  "country": "Malaysia"
	},
	{
	  "city": "Vientiane",
	  "country": "Laos"
	},
	{
	  "city": "Kunming",
	  "country": "China"
	},
	{
	  "city": "Udon Thani",
	  "country": "Thailand"
	},
	{
	  "city": "Johor Bahru",
	  "country": "Malaysia"
	},
	{
	  "city": "Lanzhou",
	  "country": "China"
	},
	{
	  "city": "Singapore",
	  "country": "Singapore"
	},
	{
	  "city": "Siem Reap",
	  "country": "Cambodia"
	},
	{
	  "city": "Chengdu",
	  "country": "China"
	},
	{
	  "city": "Palembang",
	  "country": "Indonesia"
	},
	{
	  "city": "Phnom Penh",
	  "country": "Cambodia"
	},
	{
	  "city": "Hanoi",
	  "country": "Vietnam"
	},
	{
	  "city": "Chongqing",
	  "country": "China"
	},
	{
	  "city": "Hai Phong",
	  "country": "Vietnam"
	},
	{
	  "city": "Ho Chi Minh City",
	  "country": "Vietnam"
	},
	{
	  "city": "Jakarta",
	  "country": "Indonesia"
	},
	{
	  "city": "Bogor",
	  "country": "Indonesia"
	},
	{
	  "city": "Ulan Bator",
	  "country": "Mongolia"
	},
	{
	  "city": "Bandung",
	  "country": "Indonesia"
	},
	{
	  "city": "Da Nang",
	  "country": "Vietnam"
	},
	{
	  "city": "Nanning",
	  "country": "China"
	},
	{
	  "city": "Pontianak",
	  "country": "Indonesia"
	},
	{
	  "city": "Kuching",
	  "country": "Malaysia"
	},
	{
	  "city": "Semarang",
	  "country": "Indonesia"
	},
	{
	  "city": "Taiyuan",
	  "country": "China"
	},
	{
	  "city": "Malang",
	  "country": "Indonesia"
	},
	{
	  "city": "Surabaya",
	  "country": "Indonesia"
	},
	{
	  "city": "Guangzhou",
	  "country": "China"
	},
	{
	  "city": "Macau",
	  "country": "Macau"
	},
	{
	  "city": "Zhengzhou",
	  "country": "China"
	},
	{
	  "city": "Dongguan",
	  "country": "China"
	},
	{
	  "city": "Miri",
	  "country": "Malaysia"
	},
	{
	  "city": "Shenzhen",
	  "country": "China"
	},
	{
	  "city": "Hong Kong",
	  "country": "Hong Kong"
	},
	{
	  "city": "Wuhan",
	  "country": "China"
	},
	{
	  "city": "Handan",
	  "country": "China"
	},
	{
	  "city": "Shijiazhuang",
	  "country": "China"
	},
	{
	  "city": "Bandar Seri Begawan",
	  "country": "Brunei"
	},
	{
	  "city": "Denpasar",
	  "country": "Indonesia"
	},
	{
	  "city": "Mandurah",
	  "country": "Australia"
	},
	{
	  "city": "Perth",
	  "country": "Australia"
	},
	{
	  "city": "Kota Kinabalu",
	  "country": "Malaysia"
	},
	{
	  "city": "Beijing",
	  "country": "China"
	},
	{
	  "city": "Balikpapan",
	  "country": "Indonesia"
	},
	{
	  "city": "Jinan",
	  "country": "China"
	},
	{
	  "city": "Tianjin",
	  "country": "China"
	},
	{
	  "city": "Port Hedland",
	  "country": "Australia"
	},
	{
	  "city": "Nanjing",
	  "country": "China"
	},
	{
	  "city": "Makassar",
	  "country": "Indonesia"
	},
	{
	  "city": "Hangzhou",
	  "country": "China"
	},
	{
	  "city": "Kaohsiung",
	  "country": "Taiwan"
	},
	{
	  "city": "Qingdao",
	  "country": "China"
	},
	{
	  "city": "Taichung",
	  "country": "Taiwan"
	},
	{
	  "city": "Manila",
	  "country": "Philippines"
	},
	{
	  "city": "Quezon City",
	  "country": "Philippines"
	},
	{
	  "city": "Shanghai",
	  "country": "China"
	},
	{
	  "city": "Taipei",
	  "country": "Taiwan"
	},
	{
	  "city": "Dalian",
	  "country": "China"
	},
	{
	  "city": "Iloilo City",
	  "country": "Philippines"
	},
	{
	  "city": "Zamboanga City",
	  "country": "Philippines"
	},
	{
	  "city": "Shenyang",
	  "country": "China"
	},
	{
	  "city": "Tagbilaran",
	  "country": "Philippines"
	},
	{
	  "city": "Cebu City",
	  "country": "Philippines"
	},
	{
	  "city": "Changchun",
	  "country": "China"
	},
	{
	  "city": "Dili",
	  "country": "Mali"
	},
	{
	  "city": "Pyongyang",
	  "country": "North Korea"
	},
	{
	  "city": "Davao City",
	  "country": "Philippines"
	},
	{
	  "city": "Kaesong",
	  "country": "North Korea"
	},
	{
	  "city": "Harbin",
	  "country": "China"
	},
	{
	  "city": "Incheon",
	  "country": "South Korea"
	},
	{
	  "city": "Seoul",
	  "country": "South Korea"
	},
	{
	  "city": "Wonsan",
	  "country": "North Korea"
	},
	{
	  "city": "Okinawa",
	  "country": "Japan"
	},
	{
	  "city": "Ambon",
	  "country": "Indonesia"
	},
	{
	  "city": "Daegu",
	  "country": "South Korea"
	},
	{
	  "city": "Busan",
	  "country": "South Korea"
	},
	{
	  "city": "Yakutsk",
	  "country": "Russia"
	},
	{
	  "city": "Chongjin",
	  "country": "North Korea"
	},
	{
	  "city": "Fukuoka",
	  "country": "Japan"
	},
	{
	  "city": "Darwin",
	  "country": "Australia"
	},
	{
	  "city": "Vladivostok",
	  "country": "Russia"
	},
	{
	  "city": "Hiroshima",
	  "country": "Japan"
	},
	{
	  "city": "Melekeok",
	  "country": "Palau"
	},
	{
	  "city": "Kobe",
	  "country": "Japan"
	},
	{
	  "city": "Osaka",
	  "country": "Japan"
	},
	{
	  "city": "Kyoto",
	  "country": "Japan"
	},
	{
	  "city": "Nagoya",
	  "country": "Japan"
	},
	{
	  "city": "Adelaide",
	  "country": "Australia"
	},
	{
	  "city": "Yokohama",
	  "country": "Japan"
	},
	{
	  "city": "Kawasaki",
	  "country": "Japan"
	},
	{
	  "city": "Jayapura",
	  "country": "Indonesia"
	},
	{
	  "city": "Sapporo",
	  "country": "Japan"
	},
	{
	  "city": "Geelong",
	  "country": "Australia"
	},
	{
	  "city": "Hagatna",
	  "country": "United States"
	},
	{
	  "city": "Dededo",
	  "country": "United States"
	},
	{
	  "city": "Melbourne",
	  "country": "Australia"
	},
	{
	  "city": "Saipan",
	  "country": "United States"
	},
	{
	  "city": "Cairns",
	  "country": "Australia"
	},
	{
	  "city": "Townsville",
	  "country": "Australia"
	},
	{
	  "city": "Port Moresby",
	  "country": "Papua New Guinea"
	},
	{
	  "city": "Hobart",
	  "country": "Australia"
	},
	{
	  "city": "Canberra",
	  "country": "Australia"
	},
	{
	  "city": "Rockhampton",
	  "country": "Australia"
	},
	{
	  "city": "Magadan",
	  "country": "Russia"
	},
	{
	  "city": "Wollongong",
	  "country": "Australia"
	},
	{
	  "city": "Sydney",
	  "country": "Australia"
	},
	{
	  "city": "Newcastle",
	  "country": "United Kingdom"
	},
	{
	  "city": "Weno",
	  "country": "Federated States of Micronesia"
	},
	{
	  "city": "Brisbane",
	  "country": "Australia"
	},
	{
	  "city": "Gold Coast",
	  "country": "Australia"
	},
	{
	  "city": "Palikir",
	  "country": "Federated States of Micronesia"
	},
	{
	  "city": "Honiara",
	  "country": "Solomon Islands"
	},
	{
	  "city": "Noumea",
	  "country": "New Caledonia"
	},
	{
	  "city": "Invercargill",
	  "country": "New Zealand"
	},
	{
	  "city": "Dunedin",
	  "country": "New Zealand"
	},
	{
	  "city": "Majuro",
	  "country": "Marshall Islands"
	},
	{
	  "city": "Christchurch",
	  "country": "New Zealand"
	},
	{
	  "city": "Wellington",
	  "country": "New Zealand"
	},
	{
	  "city": "Auckland",
	  "country": "New Zealand"
	},
	{
	  "city": "Suva",
	  "country": "Fiji"
	},
	{
	  "city": "Funafuti",
	  "country": "Tuvalu"
	},
	{
	  "city": "Labasa",
	  "country": "Fiji"
	},
	{
	  "city": "Rabi Island",
	  "country": ""
	},
	{
	  "city": "Santiago de Cuba",
	  "country": "Cuba"
	},
	{
	  "city": "New York City",
	  "country": "United States"
	},
	{
	  "city": "Port-au-Prince",
	  "country": "Haiti"
	},
	{
	  "city": "San Carlos de Bariloche",
	  "country": "Argentina"
	},
	{
	  "city": "Quebec City",
	  "country": "Canada"
	},
	{
	  "city": "City of Halifax",
	  "country": "Canada"
	},
	{
	  "city": "Santa Cruz de la Sierra",
	  "country": "Bolivia"
	},
	{
	  "city": "Port of Spain",
	  "country": "Trinidad and Tobago"
	},
	{
	  "city": "Fort-de-France",
	  "country": "Martinique"
	},
	{
	  "city": "Ciudad del Este",
	  "country": "Argentina"
	},
	{
	  "city": "Sao Jose dos Campos",
	  "country": "Brazil"
	},
	{
	  "city": "Rio de Janeiro",
	  "country": "Brazil"
	},
	{
	  "city": "Angra do Heroismo",
	  "country": "Portugal"
	},
	{
	  "city": "Santa Cruz de Tenerife",
	  "country": "Spain"
	},
	{
	  "city": "Las Palmas de Gran Canaria",
	  "country": "Spain"
	},
	{
	  "city": "Cork",
	  "country": "Ireland"
	},
	{
	  "city": "Marrakech",
	  "country": "Morocco"
	},
	{
	  "city": "Andorra la Vella",
	  "country": "Andorra"
	},
	{
	  "city": "Luxembourg",
	  "country": "Luxembourg"
	},
	{
	  "city": "City of San Marino",
	  "country": "San Marino"
	},
	{
	  "city": "Vatican City",
	  "country": "Vatican City"
	},
	{
	  "city": "Split",
	  "country": "Croatia"
	},
	{
	  "city": "Gdansk",
	  "country": "Poland"
	},
	{
	  "city": "Thessaloniki",
	  "country": "Greece"
	},
	{
	  "city": "Izmir",
	  "country": "Turkey"
	},
	{
	  "city": "Kiev",
	  "country": "Ukraine"
	},
	{
	  "city": "Dar es Salaam",
	  "country": "Tanzania"
	},
	{
	  "city": "Djibouti",
	  "country": "Djibouti"
	},
	{
	  "city": "Tskhinvali",
	  "country": "Georgia"
	},
	{
	  "city": "Nizhny Novgorod",
	  "country": "Russia"
	},
	{
	  "city": "Arbil",
	  "country": "Iraq"
	},
	{
	  "city": "Kuwait City",
	  "country": "Kuwait"
	},
	{
	  "city": "Sri Jayawardenapura-Kotte",
	  "country": "Sri Lanka"
	},
	{
	  "city": "Kolkata",
	  "country": "India"
	},
	{
	  "city": "Phuket",
	  "country": "Thailand"
	},
	{
	  "city": "Alor Star",
	  "country": "Malaysia"
	},
	{
	  "city": "Malacca Town",
	  "country": "Malaysia"
	},
	{
	  "city": "Xian",
	  "country": "China"
	},
	{
	  "city": "Yogyakarta",
	  "country": "Indonesia"
	},
	{
	  "city": "Makati City",
	  "country": "Philippines"
	},
	{
	  "city": "Koror",
	  "country": "Republic of Palau"
	},
	{
	  "city": "Tokyo",
	  "country": "Japan"
	},
	{
	  "city": "Petropavlovsk-Kamchatsky",
	  "country": "Russia"
	},
	{
	  "city": "Yaren District",
	  "country": "Nauru"
	},
	{
	  "city": "Port Vila",
	  "country": "Vanuatu"
	},
	{
	  "city": "Falun",
	  "country": "Sweden"
	},
	{
	  "city": "Boden",
	  "country": "Sweden"
	},
	{
	  "city": "Florence",
	  "country": "Italy"
	},
	{
	  "city": "Venice",
	  "country": "Italy"
	},
	{
	  "city": "Chisinau",
	  "country": "Moldova"
	}
	];

	const europeMapCities = [
		{
				name: 'Reykjavik',
				x: 200,
				y: 30
		},
		// {
		// 		name: 'Falun',
		// 		x: 485,
		// 		y: 200
		// },
		{
				name: 'Helsinki',
				x: 575,
				y: 210
		},
		{
				name: 'Stockholm',
				x: 510,
				y: 230
		},
		{
				name: 'Gothenburg',
				x: 445,
				y: 265
		},
		// {
		// 		name: 'Riga',
		// 		x: 570,
		// 		y: 275
		// },
		{
				name: 'Moscow',
				x: 670,
				y: 270
		},
		// {
		// 		name: 'Minsk',
		// 		x: 615,
		// 		y: 330
		// },
		// {
		// 		name: 'Malmo',
		// 		x: 455,
		// 		y: 290
		// },
		{
				name: 'Copenhagen',
				x: 440,
				y: 310
		},
		// {
		// 		name: 'Boden',
		// 		x: 535,
		// 		y: 110
		// },
		{
				name: 'Trondheim',
				x: 445,
				y: 150
		},
		{
				name: 'Oslo',
				x: 435,
				y: 220
		},
		// {
		// 		name: 'Bergen',
		// 		x: 390,
		// 		y: 200
		// },
		// {
		// 		name: 'Hamburg',
		// 		x: 415,
		// 		y: 335
		// },
		// {
		// 		name: 'Frankfurt',
		// 		x: 395,
		// 		y: 385
		// },
		{
				name: 'Prague',
				x: 460,
				y: 410
		},
		// {
		// 		name: 'Vienna',
		// 		x: 475,
		// 		y: 445
		// },
		// {
		// 		name: 'Budapest',
		// 		x: 515,
		// 		y: 465
		// },
		{
				name: 'Belgrade',
				x: 535,
				y: 525
		},
		{
				name: 'Athens',
				x: 585,
				y: 635
		},
		{
				name: 'Bucharest',
				x: 605,
				y: 505
		},
		{
				name: 'Berlin',
				x: 445,
				y: 355
		},
		{
				name: 'Warsaw',
				x: 535,
				y: 375
		},
		{
				name: 'London',
				x: 290,
				y: 345
		},
		{
				name: 'Paris',
				x: 310,
				y: 400
		},
		// {
		// 		name: 'Glasgow',
		// 		x: 270,
		// 		y: 255
		// },
		{
				name: 'Dublin',
				x: 235,
				y: 290
		},
		// {
		// 		name: 'Lyon',
		// 		x: 330,
		// 		y: 460
		// },
		// {
		// 		name: 'Nantes',
		// 		x: 250,
		// 		y: 420
		// },
		// {
		// 		name: 'Toulouse',
		// 		x: 270,
		// 		y: 490
		// },
		{
				name: 'Barcelona',
				x: 260,
				y: 540
		},
		{
				name: 'Madrid',
				x: 170,
				y: 540
		},
		{
				name: 'Lisbon',
				x: 102,
				y: 560
		},
		// {
		// 		name: 'Marrakech',
		// 		x: 65,
		// 		y: 675
		// },
		// {
		// 		name: 'Algiers',
		// 		x: 265,
		// 		y: 640
		// },
		{
				name: 'Rome',
				x: 415,
				y: 560
		},
		// {
		// 		name: 'Florence',
		// 		x: 400,
		// 		y: 510
		// },
		// {
		// 		name: 'Venice',
		// 		x: 425,
		// 		y: 490
		// },
		{
				name: 'Istanbul',
				x: 655,
				y: 575
		},
		// {
		// 		name: 'Ankara',
		// 		x: 705,
		// 		y: 595
		// },
		// {
		// 		name: 'Beirut',
		// 		x: 780,
		// 		y: 690
		// },
		// {
		// 		name: 'Jerusalem',
		// 		x: 780,
		// 		y: 735
		// },
		// {
		// 		name: 'Cairo',
		// 		x: 720,
		// 		y: 770
		// },
		// {
		// 		name: 'Baghdad',
		// 		x: 920,
		// 		y: 665
		// },
		// {
		// 		name: 'Baku',
		// 		x: 940,
		// 		y: 510
		// },
		// {
		// 		name: 'Chisinau',
		// 		x: 645,
		// 		y: 463
		// },
		// {
		// 		name: 'Kharkiv',
		// 		x: 715,
		// 		y: 395
		// },
		// {
		// 		name: 'Murmansk',
		// 		x: 620,
		// 		y: 40
		// },
		// {
		// 		name: 'Nizhny Novgorod',
		// 		x: 770,
		// 		y: 250
		// }
];

export {
    weathers,
		cities,
		europeMapCities
};