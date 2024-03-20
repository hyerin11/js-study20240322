
//js는 정수 나눗셈이어도 실수 결과값이 나온다.
console.log(27/5);

//나머지 연산
console.log(27%5); //2
console.log(4%10); //4
console.log(5%0); //나눗셈 불가
console.log(0%5); //몫과 나머지 모두 0

//제곱 연산
console.log(3**4); //3의 4제곱

console.log(`====================`);

//단항 연산자
var x=3;
x++;
++x;
--x;
x--;
console.log(`x=${x}`);

//전위 연산, 후위 연산
var n1=10;
var n2=n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

var n3=10;
var n4=++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
xx++;
xx+=1; //xx=xx+1  xx에 1을 더해서 대입하세요~


xx--;
xx-=1;  //xx=xx-1  xx에 1을 빼서 대입하세요~

xx*=3;  // 15
xx/=5;  // 3
xx**=2; // 9
xx%=4;  //1
console.log(`xx: ${xx}`);  