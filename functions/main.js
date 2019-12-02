function getSolutions(a,b,c){

    let d = b * b - 4 * a * c;
    if (d < 0) {
        return {
            d
        }
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        return {
            roots: [x1],
            d
        }
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return {
            roots: [x1, x2],
            d
        }
    }
}

function showSolutionsMessage( a, b, c ){
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.d}`);
    if (result.d < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.d == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage( 7, 20, -3);


let data = {
    algebra: [5, 2, 3, 4],
    russian: [5, 2, 3, 4],
    physics: [5, 2, 3, 4],
    geometry: [5, 2, 3, 4],
    music: [5, 2, 3, 4],
    english: [5, 2, 3, 4, 3],
    poety: [5, 2, 3, 4],
    french: [5, 2],
}



function getAverageScore( data ){
    let test = 'average';
    let key = 0;
    let allSum = 0;
    for ( let prop in data ) {
        let value = data[prop];
        let sum = 0;
        
        for (let i = 0; i < value.length; i++) {
          sum += value[i];
        }
        data[prop].splice(0, value.length, sum / value.length);

        for (let i = 0; i < value.length; i++) {
        allSum += value[i];
        key++;
        }
        data[test] = [allSum / key];
    }

    return data;
}
    

getAverageScore( data );



let secretData = {
    aaa: 1,
    bbb: 0
}

function getPersonData( secretData ) {
    let data = {}
    let first = 'firstName'
    let second = 'lastName'
    for (let key in secretData) {
        let cell = secretData[key]

        if (key == 'aaa' && cell == 0) {
            data[first] = 'Родриго';
                for (let key in secretData) {
                    let cell = secretData[key]
                    if (key == 'bbb' && cell == 0) {
                    data[second] = 'Родриго';
                    } else if (key == 'bbb' && cell == 1) {
                    data[second] = 'Эмильо';
                    }
                } 
        }
        
        if (key == 'aaa' && cell == 1) {
            data[first] = 'Эмильо';
                for (let key in secretData) {
                    let cell = secretData[key]
                    if (key == 'bbb' && cell == 0) {
                    data[second] = 'Родриго';
                    } else if (key == 'bbb' && cell == 1) {
                    data[second] = 'Эмильо';
                    }
                } 
        }
    return data;
    }
}

getPersonData( secretData );















