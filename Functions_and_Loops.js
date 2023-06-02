//First homework

//1 задача
let i = 1;
for (i = 0; i <= 10; i++){
    console.log(i)
}

//2 задача
let sum = 0;
i = 1;
while (i <= 100) {
    sum += i;
    i++;
};
console.log(sum);

//3 задача
i = 10;
while (i >= 1){

    console.log(i--)
}

//4 задача
let n = 50;
for (let i = 2; i <= n; i += 2) {

  console.log(i);
}

//5 задача
n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i + ' x ' + j + ' = ' + (i * j));
  }
}

//6 задача
n = 7;
let factorial = 1;
for (let i = 1; i <= n; i++) {

  factorial *= i;
}
console.log(factorial)

//7 задача

n = 10;
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {

  let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci.push(nextNumber);
}

console.log(fibonacci.join(", "));

//8 задача
n = 100
let j;
for (i = 1; i <= n; i++){
    
    j = i - 1;
    while (j > 1)
    {
        if (i % j === 0)
            break
        j--
    }
    if (j === 1)
        console.log(i)
}


//9 задача
n = 100
let m = []
for (i = 0; i < n; i++){

    m[i] = i + 1
    if(m[i] % 5 === 0)
        console.log(m[i])
}


//10 задача
n = 10
sum = 0
m=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < m.length; i++)
    sum += m[i]
console.log(sum)

