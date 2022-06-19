class Students{
	constructor(name,sex,marks){
		this.name = name;
		this.sex = sex;
		this.marks = marks;
	}
	average(){
		var sum = 0;
		for(var mark of this.marks){
			sum += mark;
		}
		return this.average = sum / this.marks.length;
	}
}

var tleA = [
			new Students('Coralie','female',[8,5,7,9,12,11,10,6]),
			new Students('Naomie','female',[12,15,4,6,17,9,10]),
			new Students('Kanky','male',[15,13,16,12,10])
			];

	for(list of tleA){
		console.log(list.name + ' : ' + list.average());
	}
