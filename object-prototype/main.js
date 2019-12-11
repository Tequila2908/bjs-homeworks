function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
	let now = Date.now();
  	let birthday1 = Number(new Date(birthday));
  	let diff = now - birthday1;
  	let age = Math.floor(diff / 31556952000);
  	console.log(age);
  	return age >= 18;
    // код для задачи №3 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
	let sound = animal.sound;
	if (sound === undefined) {
		return null;
	} else if (sound !== undefined) {
		return sound;
	}
    // код для задачи №1 писать здесь
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}


function getAverageMark(marks) {
  	let sum = 0;
  	for (let i = 0; i < marks.length; i++) {
    	sum += Number(marks[i]);
  	}
 	let roundedAverage = Math.round(sum / marks.length);
  	return roundedAverage;
    // код для задачи №2 писать здесь
}