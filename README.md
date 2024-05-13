# Family-Relationship-Algorithm
---
## [Family Tree](https://www.familyecho.com/?p=D7GMC&c=ybfar0kdyj&f=796759587492087536)
---
## [Main Code](https://openprocessing.org/sketch/2268466) [^1]
---
## Algorithm
Our algorithm is to put a family tree into an invisible tree. We can determine their relation to others by checking how much spaces are in between the two people and the intersecting parent. (**First Step**)First, we pick two random people and we check if they are the same generation. If so, we can check their relationship by going up a generation and checking their parents. (**Step Two**)If they have the same parents we can deduce that they are siblings. If not, we keep going up a generation by checking the parents of the parents. We also keep a check of how many times we jump up for the two people. We keep doing this until the two will intersect (having the same parent/person). We then use the two numbers to check their relationship by using the consanguinity chart. For example, if we had to go up two for each person to intersect. We go up two in the chart, then down two, which shows first cousins. Now in the situation where they aren’t in the same generation (**first step branch**). We first get the lowest gen and we keep jumping up, checking their parents, and counting the amount of jumps. We keep doing this until we reach a point where they have the same generation. Then we do the steps after the first step. Finally, we print the relation between the first person and the second person.

---
## Psuedocode
1. A class of names with different properties.
     - Name
     - Generation
     - Parent
2. Make a bunch of names using class to make the family tree
3. Let 'family' be a list of names in the family tree
4. Let 'originParent1' be true
5. Let 'originParent2' be true
6. Let a be a list of possible chances of relations
     - person, child, grand child, great-grand children
7. Let b be a list of possible chances of relations
     - parent, sibling, nephew/neice, great nephew/neice, great-grand nephew/niece
8. Let c be a list of possible chances of relations
     - grandparent, uncle/aunt, first cousin, first cousin once removed, first cousin twice removed, first cousin thrice removed
9. Let d be a list of possible chances of relations
     - great grandparent, great uncle/aunt, first cousin once removed, second cousin, second cousin once removed, second cousin twice removed, second cousin thrice removed
10. Let e be a list of possible chances of relations
     - great-great grandparent, great-grand uncle/aunt, first cousin twice removed, second cousin once removed, third cousin, third cousin once removed, third cousin twice removed, third cousin thrice removed
11. Let ConsaguinityList be a list of the possible chances of relations
      - a, b, c, d, e
12. Let RelationCountChosen be equal to 0
13. Let RelationCountCompare be equal to 0
14. Let complexity be equal to 0
15. Let ‘chosen’ be a certain person to compare with 'compare'.
16. Let ‘compare’ be another person to compare with 'chosen'.
17. if chosen is the same as compare
      - Then complexity adds one
      - compare will change into a different person
18. print name of chosen
19. print name of compare
20. run the block of code of relationCheck and put chosen and compares properties
21. A loop
22. complexity adds one
23. if chosen's parent is the same as 'origin
    - complexity adds one
    - originParent1 will change into false
24. if compare's parent is the same as 'origin
    - complexity adds one
    - originParent2 will change into false
25. if chosen's name is the same as compare's name
    - complexity adds one
    - then break it
26. if chosen's gen is more than or equal to compare's gen
    - complexity adds one
    - if its originParent1
        - complexity adds one
        - RelationCountChosen adds one
        - chosen will change into the parent of chosen
27. if chosen's gen is less than or equal to compare's gen
    - complexity adds one
    - if its originParent2
        - complexity adds one
        - RelationCountCompare adds one
        - compare will change into the parent of compare
28. print the chosen's name and "is the", and the relation of that person, and "to", and the name of compare

## Code
[^1]:
The classes code:
```
class person {
	constructor(Name, Gen, Parent) {
		this.Name = Name
		this.Gen = Gen
		this.Parent = Parent
	}
}
```
The Relation ship checker code:
```
function relationCheck(chosen, compare) {		
	for (i = 0; i < 10; i++) {
		complexity++
		
		if (chosen.parent == 'origin'){
			complexity++
			originParent1 = false
		}
		
		if (compare.parent == 'origin'){
			complexity++
			originParent2 = false
		}
		
		if (chosen.Name == compare.Name){
			complexity++
			break;
		}
		
		if (chosen.Gen >= compare.Gen){
			complexity++
			if (originParent1){
				complexity++
				RelationCountChosen++
				chosen = chosen.Parent
			}
		}
		
		if (chosen.Name == compare.Name){
			complexity++
			break;
		}
		
		if (chosen.Gen <= compare.Gen){
			complexity++
			if (originParent2){
				complexity++
				RelationCountCompare++
				compare = compare.Parent
			}
		}
	}
}
```
The main code:
```
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
```
