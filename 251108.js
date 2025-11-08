// 파라미터 여러개
// 이래서 student 팩토리를 만드는건가??

let student1 = {
  name: '정건',
  age: 30
};
let student2 = {
  name: '형오',
  age: 25
};
function introduce(name, age){
  console.log(name + '는');
  console.log(age + '살 입니다.');
};

// introduce(student1.name, student1.age);
// introduce(student2.name, student2.age);


/*-----------------------------------------*/

//프로그래밍 핵심개념 js
//숫자형

// console.log(0.04 ** 30);
// console.log(((2+3)**2)**2);

console.log(7 % 3); 

// 이거 2.*** 이게 아니라 나머지임
//아마 1이지 않을까


/*-----------------------------------------*/
//문자열

// let 코드잇 = '코두'
// console.log(코드잇);
console.log('코드잇');


//문자열 활용

// console.log("i'm man");
// console.log("\"i'm man\"");
// console.log(`"i'm man"`)

// 백틱 `

// console.log('no' + ' yes');
// console.log('no' *3);


//불대수 (bool)
// and연산

//불린형 (boolean)

// console.log(2==1);
// console.log(3 === 3);
// console.log(3!=3);

// console.log(true && true);

// console.log(true || false);

// console.log(!!false)



console.log('---------typeof 연산자------');
//number string function

let num1 = typeof('1');
console.log(num1)

console.log( typeof 'hello' + 'Codeit');
console.log( typeof ('hello' + 'Codeit'));
console.log( typeof 8 - 3);

//연산자 우선순위
// 할당 =
// 논리 or ||
// 논리 and  &&

console.log (typeof (false || true && false));

//and먼저 계산. 우선순위가 높으니 먼저 계산
// 마지막이 or
// 그럼 false
// 엥 불린이라고 나오네?
// 맞네  typeof (false) > 불린타입



console.log('---------형변환------');

//형변환
// type conversion

console.log(Boolean('10') + Number('5'));
console.log(Boolean('10'));

//true는 1의 숫자로 들어가는구나
//false는 0

let x = 0;
console.log(Boolean(x));

// '', 0, NaN < falsy값
//불린으로 형변환시 false나오는 값들


console.log('4' - true);
//자동으로 true가 1로 형변환 되어버림



console.log('---------산술연산 ------');
//산술연산 
//숫자 + 문자는 문자열로감 (문자가 더 강함)

console.log(4 + '2'); 

console.log('2' / 4);
//이건 왜 문자열이 숫자로 변했어?
//더하기 연산이 아니면 숫자로감

console.log('4' ** true);
console.log( 4 % 'two');



//관계비교 연산 , 보통 숫자로 변경된다.

console.log(2 < '3');
// console.log(nan >= 1);
console.log(NaN >= 1);

console.log('----일치동등------')

// 일치 === 동등 ==
// 일치는 형변환 x 동등은 형변환 o

console.log(1 ==='1');
console.log(1 === true );

console.log(1 =='1');
console.log(1 == true );

//등호 두개는 동등으로 형변환 되기때문에
// 코드 작성시는 안전하게 === 3개로 작성

console.log(typeof ('4' - 3));

// 더하기 1개만 문자열로 가는구나 빼기는 숫자로가네
console.log(Number(true) == String(1));
console.log(String(1));
console.log(Number(true))
// 아 동등이라서 형변환 되는구나



console.log('---------템플릿 문자열------');

console.log(`생년월일은 ${student1.age}입니다.`)

function getTwice(x){
  return x*2;
}

console.log(`생년월일은 ${getTwice(student1.age)}입니다.`)



console.log('---------null과 undefined------');

//null 값이 없다. 의도적 표현
//undefined 코드를 실행하면서 값이 없다는 것 확인?

let Codeit;
console.log(Codeit);

let codeit1 = null;
console.log(codeit1)

console.log(Codeit == codeit1);
//형변환 동등 연산자 == 형변환 해버림. 0 == 0
console.log(Codeit === codeit1);

//null 의도적인 없음
//undefined 처음부터 없음



console.log('---------추상화시작, 할당연산자------');
// Assignment operators

let name = '코드잇';
let y = 5;

y = y - 2 ;

// 복합 할당 연산자
// compound assignment operators 

// z = z +1 ;
// z+= 1;
// z++;

//세개가 같음
// 증가 감소 연산자 ++ --

console.log('---------리턴문,콘솔로그-----');

function printSquare(x){
  console.log(x*x);
}

function getSquare(x){
  return x*x;
}

printSquare(getSquare(3));
console.log(getSquare(printSquare(3)));
// undefined * undefined -> NaN
// 산술연산 자동 형변환인 것 같은데
// undefined을 숫자로 바꾸면 NaN이라고?
// NaN과 undefined null 3개의 차이점.
// NaN 숫자가 아님
// undefined 값이 정의되지 않음 정해지지 않음. 미설정
// null 값이 의도적으로 정해지지 않음
// 강제 형변환 coercion
console.log(printSquare(3))
console.log('3'*'3');



console.log('---------옵셔널 파라미터-------');
//글로벌 변수, 전역변수 global variable
//블록문 (block statement)
function hello(name, nationality = '한국', age ){
//로컬변수, 지역변수 (local variable)
  let zz = 1;
  console.log('안녕')
  console.log(`${name}`);
  console.log(`${age}`);
  console.log(`${nationality}`)
}

hello(student1.name, student2.age);


console.log('---------scope 범위 영역-------');
//로컬변수 글로벌변수
//블록문 내에서만 유효한 지역변수, 로컬변수

//상수 constant, const

const PI = 3.14;

// 공식적으로 고정된 값. 변할 일이 없음
// 실제 어떤 예시들이 있나? 파이말고
// 재할당 못함. 
// 상수는 대문자와 _이걸로 구분
// MY_NUMBER


console.log('--------제어문--------');
console.log('---------if문-------');

let temperature = -24;

if (temperature <= 0){
  console.log('물이 업니다')
} else if(temperature < 100) {
  console.log('물이 얼지도 끓지도않어')
} else if(temperature > 150) {
  console.log(`물이 끓어서 날아가부러 ${temperature}도니께`)
} else {
  1
}


console.log('---------switch 문-------');
// 스위치문은 그냥 숫자 케이스만 적음 break꼭 넣고.
// 마지막은 디폴트임


switch (temperature){

  case 100:
    console.log('물이 끓어!');
    break;

  case -24:
    console.log('무리어러!');
    break;

  default:
    console.log('제대로 골라');
}



// switch문은 암시적 형변환 허용 안함

let myChoice = '2';

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice == 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice == 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice == 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice == 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

//if로 할때는 == 로 쓰면 '2'를 2로 변경해버리기 때문에
// 같지 않은데 같다고 할 수 있음. 
// 그래서 === 일치로 해야함
// 그러나 스위치는 자료형을 엄격하게 구분해서 괜차음



console.log('---------for 반복문-------');

// for (초기화부분; 조건부분; 추가동작부분){
//   동작부분
// }

for (let i=0; i<10; i++){
  console.log(`왕자정건${i}번 말하기`);
  let nomore = i*i;
  console.log(`냠${nomore}`)
  i++;
};

// 이렇게 만들면 어떻게 출력?
// 가장 아래i++은 그냥 데드코드될듯?
// 아니네?
// 실제로 재할당이 되네?
// 그럼 파라미터의 i도 로컬변수인건가?
// 아 함수가 아니구나
// 그냥 블록 스코프 변수.
// 블록스코프 변수라면 지역변수?

// {}블록 단위로 범위가 제한되는 변수 = 블록스코프 변수
// 초기화 부분도 반드시 채울 필요없음
// 추가 동작 부분도 반드시 채울 필요없음

function printTriangle(height) {
	// 여기에 코드를 작성하세요
  let message = '';
	for(i=1; i<=height; i++){
    message += '*';
    // message = message + '*' 이라는뜻
    console.log(message);
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);



console.log('--------while 반복문-------');
let iii =1;

while (iii<10){
  console.log(`${iii}`)
  iii++;
}

//for 이 더 깔끔한데 이런건 for 이 더좋음
//그럼 while은 언제 좋은가?

let no = 30;

while (no % 7 != 0){
  no++;
}

console.log(no);

//글로벌 변수를 조건변수로 사용하고 
// 반복문이 종료되고도 글로벌 변수에 적용된 것을 사용하려면
// while이 더 좋음


console.log('--------break continue-------');

let iz = 1;

while (iz<1000){
  console.log(iz);
  if(iz===7){
    break;
  }
  iz++;
  //이거 없으면 무한실행된다.조심
};


let message = '';

for (; iz<=10; iz++){
  

  if (iz%2 !== 0){
    message+='냠'
    console.log(message)
    continue;
  }
  // message+='냠'
  // console.log(message)
}


//아래 구구단 while로도 만들어보기

// for(let i=1; i<=9; i++){
//   for(let j=1; j<=9; j++){
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }

//피보나치 수열 미쳤다. 피보나치 수열 50개 만들기 재시도
1
1
2
3
5
8
13