

export default function Lesson06() {

    let userName: string = 'Umut';
    userName = 'Dmitrii';
    console.log(userName);

    let number: number = 42;
    number = 4.33;
    console.log(number);

    let isAdmin: boolean = true;
    isAdmin = 2 > 4;
    console.log(isAdmin);

    let nothing: undefined = undefined;
    console.log(nothing);
    console.log(typeof undefined);

    let empty: null = null;
    console.log(empty);
    console.log(typeof null);

    let value: number | string = 100;
    value = 1000;
    value = 'my favorite number ' + value;
    console.log(value);

    const colors = ['red', 'green', 'blue'];
    colors.push('magenta');
    console.log(colors);

    const numbers: number[]  = [12, 122, 1222];
    numbers.push(444);
    numbers.pop();
    console.log(numbers);

    const person: readonly [string, number] = ['John', 35];
    console.log(person);

    function sum(a: number, b: number): number {
        return a + b;
    }

    const result: number = sum(42, 100);
    console.log(result);

    const showMessage = (message: string | number): void => {
        console.log('result: ', message);
    }
    const variable = showMessage(result);
    console.log(variable);
    
    return (
        <div>
            <h4>Lesson06</h4>
            <h2>Typescript 😳</h2>
            <p>Самое интересное на этом уроке происходит в теле функции компонента и в командной строке: </p>
        </div>
    )
}
