//Nathan Stauffer
//236 Ewing Rd.
//Youngstown, OH 44512
//(330)-207-2637
//nathanstauffer@gmail.com
//JAVASCRIPT PROGRAM TO ASSIGN FEATURE GROUPS TO CUSTOMERS FOR TESTING
//RUN IN BROWSER USING INCLUDED CUSTOMER.HTML FILE

//create array of objects to represent customers
var customers = [
	{name: "Widget Co",
	assignedFeatureGroup: null
	},
	{name: "Synergy Inc",
	assignedFeatureGroup: null
	},
	{name: "Elevation Executives",
	assignedFeatureGroup: null
	},
	{name: "Momentum Partners",
	assignedFeatureGroup: null
	},
];

//test in console
for (var i=0; i<customers.length; i++){
	console.log(customers[i]);
}


//create array of objects to represent feature groups
var featureGroups = [
	{groupId: 1,
	features: ["A", "B"],
	percentChance: 10
	},
	{groupId: 2,
	features: ["B", "C"],
	percentChance: 20
	},
	{groupId: 3,
	features: ["C"],
	percentChance: 20
	},
	{groupId: 4,
	features: ["A", "C", "D"],
	percentChance: 50
	},
];

//test in console
for (var i=0; i<featureGroups.length; i++){
	console.log(featureGroups[i]);
}

//write function to assign feature groups to customers
function assignGroups(customers, featureGroups){
	
	for (var i=0; i<customers.length; i++){
		if (customers[i].assignedFeatureGroup == null){     //only assign a group if one has never been assigned
			var randInt = Math.floor(Math.random() * 100) + 1;    //random number between 1-100
			var lowIndex = 1;
			
			//loop through feature groups, giving them the correct chance of matching random number
			for (var j=0; j<featureGroups.length; j++){
				var upperIndex = lowIndex + featureGroups[j].percentChance - 1;
				if (randInt >= lowIndex && randInt <= upperIndex){
					customers[i].assignedFeatureGroup = featureGroups[j];
				}
				
				//update lower index for next feature group consideration
				lowIndex = upperIndex + 1;
			}
		}
	}
}

//test in console. should have feature groups assigned
assignGroups(customers, featureGroups);
for (var i=0; i<customers.length; i++){
	console.log(customers[i]);
}


//write function to add a feature group
//this function assumes and ensures that other feature groups have already had the percentChance variable altered to make room
function addFeatureGroup(featureGroups, newFeatureGroup){
	var percentTotal = 0;     //holds total percent chance amounts for all groups currently in array
	
	for (var i=0; i<featureGroups.length; i++){
		percentTotal += featureGroups[i].percentChance;
	}
	
	if (percentTotal + newFeatureGroup.percentChance <= 100){
		//new feature group can be added
		featureGroups.push(newFeatureGroup);
	}
	else{
		console.log("cannot add new feature group");
	}
}

//write function to check customer for a specific feature
function hasFeature(customer, feature){
	
	var featureGroup = customer.assignedFeatureGroup;
	if (featureGroup == null){
		return false;
	}
	else{
		for (var i=0; i<featureGroup.features.length; i++){
			if (featureGroup.features[i] == feature){
				return true;
			}
		}
		return false;
	}	
} 

