let low = 0;

let high = 0;

let perem = 3;

function search() {
    
    for (let answer = 6; ;) {
        if (answer === perem) {
            console.log('Верно');
        }else if(answer>perem){
            low + 1;
        }else if(answer<perem){
            high + 1;
        }

        if (high>low) {
            answer++
        } else {
            answer--
        }
        console.log('Верно');
    }
}
