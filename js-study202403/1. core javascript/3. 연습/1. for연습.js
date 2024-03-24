//약수를 출력하고 개수를 출력하시오.

var num = prompt(`정수값: `);
var result = ``;
var count=0;

for(var i=1; i<=num; i++){
    if(num%i===0){
        result+=i+'\n';
        count++;
    }
}

alert('${result}약수는 ${count}개 입니다.');