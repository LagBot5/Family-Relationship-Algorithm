let elizabeth = new person('Elizabeth', 1, 'origin')
let rosanne = new person('Rosanne', 2, elizabeth)
let ruthanne = new person('Ruthanne', 2, elizabeth)
let donnie = new person('Donnie', 2, elizabeth)
let patricia = new person('Patricia', 2, elizabeth)
let marj = new person('Marj', 2, elizabeth)
let kim = new person('Kim', 3, marj)
let monica = new person('Monica', 3, marj)
let martin = new person('Martin', 3, marj)
let gabe = new person('Gabe', 3, marj)
let john = new person('John', 3, marj)
let ben = new person('Ben', 3, marj)
let jerome = new person('Jerome', 3, marj)
let john_G = new person('John G', 4, kim)
let jamie = new person('Jamie', 4, kim)
let julia = new person('Julia', 4, kim)
let phil = new person('Phil', 4, monica)
let alley = new person('Alley', 4, monica)
let anna = new person('Anna', 4, monica)
let steven = new person('Steven', 4, monica)
let ellane = new person('Ellane', 4, gabe)
let jake = new person('Jake', 4, gabe)
let veera = new person('Veera', 4, jerome)
let precila = new person('Precila', 4, jerome)
let clarence = new person('Clarence', 4, jerome)
let lincoln = new person('Lincoln', 5, phil)
let mo = new person('Mo', 5, ellane)

let family = [elizabeth, rosanne, ruthanne, donnie, patricia, marj, kim, monica, gabe, john, ben, jerome, john_G, jamie, julia, phil, alley, anna, steven, ellane, jake, veera, precila, clarence, lincoln, mo]

let originParent1 = true
let originParent2 = true

let a = [ 'person','child', 'grand child', 'great-grand child']
let b = [ 'parent', 'sibling', 'nephew/neice', 'great nephew/neice', 'great-grand nephew/neice']
let c = [ 'grandparent', 'uncle/aunt', 'first cousin', 'first cousin once removed', ' first cousin twice removed', 'first cousin thrice removed']
let d = [ 'great grandparent', 'great uncle/aunt', 'first cousin once removed', 'second cousin', 'second cousin once removed', 'second cousin twice removed', 'second cousin thrice removed']
let e = [ 'great-great grandparent', 'great-grand uncle/aunt', 'first cousin twice removed', 'second cousin once removed', 'third cousin', ' third cousin once removed', 'third cousin twice removed', 'third cousin thrice removed']
let ConsaguinityList = [ a , b , c , d , e ]

let RelationCountChosen = 0
let RelationCountCompare = 0

let complexity = 0

function setup() {
	let chosen = random(family)
	let compare = random(family)
	if ( chosen == compare ){
		complexity++
		compare = random(family)
	}
	print ('chosen: ' + `${chosen.Name}`)
	print ('comparing: ' + `${compare.Name}`)
	// to check
	//print(chosen, compare)
	relationCheck(chosen, compare)
	print(`${chosen.Name}` + ' is the ' + ConsaguinityList[RelationCountCompare][RelationCountChosen] + ' to ' + `${compare.Name}` )
	print ('complexity: ' + complexity)
}
