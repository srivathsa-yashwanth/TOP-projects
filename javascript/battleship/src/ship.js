
const Ship = function (length){
    let body = [];
    for ( let i = 0; i < length; i++){
        body[i] = 1;
    }
    // console.log(body);

    const hit = function(index){
        body[index] = 0;
    }

    const isSunk = () => {
        let shipSum = body.reduce((a,b) => a+b, 0);
        return shipSum ? false : true;
    }

    return {body, hit, isSunk};
}

export {Ship};