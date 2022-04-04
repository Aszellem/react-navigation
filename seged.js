//segéd modul

const szinek = {
    elso: "#d64933",
    masodik: "#0c7c59"
}

//min és max között generál egy véletlen számot
function veletlen(min, max){ 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

export {szinek,veletlen}