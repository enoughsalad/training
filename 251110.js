// 객체
// object

//여러가지 값을 한번에 저장
// 프로퍼티 네임: 프로퍼티 벨류

console.log('------------객체------------')

let jg = {
  name : '정건',
  age : 30,
  'born Year' : 1995,
  freind : {
    no : '없음',
    yes : '외톨이'
  }
};

//벨류네임
//첫글자 문자 밑줄 달러기호
//띄어쓰기 금지
//하이픈 금지

console.log(typeof(jg));


//점 표기법
console.log(jg.age);
//대괄호 표기법
console.log(jg['born Year']);

let name1 = 'name';
console.log(jg.name1);
console.log(jg[name1]);
console.log(jg['born'+ ' Year']);

console.log(jg.freind.no);


console.log('------------객체 다루기------------');

//객체 재할당
jg.name = '왕자정건';
// console.log(jg);

jg.worstCourse = undefined;
console.log(jg);

//삭제도 가능
// delete jg.worstCourse;
console.log(jg.worstCourse);

//in 연산자로 객체에 해당 프로퍼티 네임이 잇는지
//확인가능 그런데 문자열로 넣어야함?
//불린형태로 리턴
console.log('age' in jg);

//왜 굳이 in ? 더 안전해서
// undefined가 할당된 프로퍼티는 진짜 있는지 구분안됨
// in사용하면 undefined로 정의된 프로퍼티 있는지 확인가능 true로 나옴

console.log('worstCourse' in jg);

console.log('------------객체와 메소드------------');

//메소드 (Method)
// 연관성있는 여러 함수를 하나로 묶음
//메소드로 모듈을 만드는구나?
// console.log도 메소드네
//그럼 console.log()는 어떤 메소드로 동작하는거지?
// console 은 객체이고 log()는 그 안에 있는 여러 메소드 중에 하나
// console에 대해서 더 깊이 이해해보기

console['log']('대괄호로 출력');
//이것도 동일하게 작동함. 하나의 프로퍼티이기 때문에
// 그냥 함수로 만들어서 써도 되는데 왜 굳이 메소드를 만드는가?

//계산기 모듈(객체)
/*
메서드가 필요한 이유:
- 함수들을 의미 있는 묶음으로 만들고 (네임 스페이스)
- 필요하면 상태를 함께 다루며
- 규칙/ 검증/ 확장을 한 군데에 모아 관리하려고
plus, minus를 전역변수로 뿌리는 것보다
calculator.plus처럼 의미있는 묶음으로 관리하면
이름 충돌이 줄고 자동완선/탐색도 쉬워짐.

캡슐화
*/
let calculator = {
  //이렇게 ': function'부분은 생략도 되눈군
  plus(x, y){
    return x+y;
  },
  minus: function(x, y){
    return x-y;
  },
  multiply: function(x, y){
    return x*y;
  }
}

let size = {
  x: 1,
  y: 5
}

let result = calculator.minus(size.y, size.x);
console['log'](result)