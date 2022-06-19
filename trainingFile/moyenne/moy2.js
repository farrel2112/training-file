// ON CREE UNE CLASSE ELEVES QUI AURA UNE METHODE MOYENNE

class Eleves{
    constructor(name,age,marks){
        this.name = name
        this.age = age
        this.marks = marks
       
    }
    average(){
        var sum = 0
        for(var mark of this.marks){
            sum += mark
        }
        return sum/ this.marks.length
    }
}
// ON CREE UN ARRAY CONTENANT LES DIFFERENTS ELEVES AVEC LEURS NOTES

var tleA =[
    new Eleves('Kanky',2,[15,13,16,12,10]),
    new Eleves('Farrel',34,[12,10,8,15,6,13]),
    new Eleves('Monica',28,[15,7,9,13,8,12,10,6,10,9]),
    new Eleves('Paul',15,[7,9,6,10,11,8,13]),
    new Eleves('Emilie',19,[7,9,16,10,11,8,13]),
    new Eleves('Daniel',18,[7,9,6,10,11,8,13,8,12,13]),
    new Eleves('Maeva',17,[5,8,10,11,7,13])]

    // ON CALCULE LA MOYENNE DE CHAQUE ELEVE
    
for(var list of tleA){
    if(parseFloat(list.average().toFixed(2)) > 12){
        console.log(list.name.toUpperCase() + ' a obtenu une bourse de coopération')
    }else if(parseFloat(list.average().toFixed(2)) >=10){
        console.log(list.name.toUpperCase() + ' a la moyenne')
    }else if(parseFloat(list.average().toFixed(2)) < 7){
        console.log(list.name.toUpperCase() + ' est exclu')
    }
    else{
        console.log(list.name.toUpperCase() + ' est ajourné')
    }
}