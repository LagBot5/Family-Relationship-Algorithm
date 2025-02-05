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

