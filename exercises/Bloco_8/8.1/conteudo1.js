const wakeUp = () => console.log('Acordando!!');
const breakfast = () => console.log('Bora tomar café!!');
const goingSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(breakfast);

