let x = prompt('Введите значение');
let res = +x;
if ((typeof(res) == 'number') && (x % 2 == 0)) {
    console.log('Чётное число')
}
else if ((typeof(res) == 'number') && (x % 2 == !0)) {
    console.log('Нечётное число')
} else {
console.log('Упс, кажется вы ошиблись!')
}
