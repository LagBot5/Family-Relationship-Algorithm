# Family-Relationship-Algorithm
---
## [Family Tree](https://www.familyecho.com/?p=D7GMC&c=ybfar0kdyj&f=796759587492087536)
---
## [Main Code](https://openprocessing.org/sketch/2268466)
---
## Algorithm
Our algorithm is to put a family tree into an invisible tree. We can determine their relation to others by checking how much spaces are in between the two people and the intersecting parent. (First Step)First, we pick two random people and we check if they are the same generation. If so, we can check their relationship by going up a generation and checking their parents. (Step Two)If they have the same parents we can deduce that they are siblings. If not, we keep going up a generation by checking the parents of the parents. We also keep a check of how many times we jump up for the two people. We keep doing this until the two will intersect (having the same parent/person). We then use the two numbers to check their relationship by using the consanguinity chart. For example, if we had to go up two for each person to intersect. We go up two in the chart, then down two, which shows first cousins. Now in the situation where they aren’t in the same generation (first step branch). We first get the lowest gen and we keep jumping up, checking their parents, and counting the amount of jumps. We keep doing this until we reach a point where they have the same generation. Then we do the steps after the first step. Finally, we print the relation between the first person and the second person.

---
## Psuedocode
1. A class of names with different properties.
2.  Let ‘gen’ be a list of different groups of names ordered in generations
3. Let ‘chosen’ be a certain person to compare with a different person.
4. Let ‘compare’ be another person to compare with the chosen person.
5. Find a way to find the original (parent) group to determine if they are a sibling, parent, cousin, etc.
6. Check how far the distance of their similarities (parents/grandparents)
7. Print what that ‘chosen’ person is to the ‘compare’ person.

hello
