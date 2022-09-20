/*
정규표현식(Regular expression)은 문자열에서 특정한 문자를 찾아내는 도구이며,
JavaScript, Java, Perl 등 다양한 언어에서 지원하는 하위 메소드에 해당한다.

정규표현식은 크게 컴파일 단계와 실행 단계로 나뉜다.
컴파일(Complile): 필요한 대상, 즉 패턴을 찾는 단계
실행(Execute): 컴파일 단계로 찾아낸 대상에 대해 수행할 구체적인 작업을 지시하는 단계
*/

/*
컴파일은 크게 정규표현식 리터럴, 정규표현식 객체 생성자 두 가지 방법으로 나뉜다.
각 방법은 장단점을 가진다.
*/

// 정규표현식 리터럴: 두 개의 슬래시(/) 사이에 찾고자 하는 문자열을 입력하는 방식
var pattern1 = /a/;

// 정규표현식 객체 생성자: 정규표현식 객체를 새로 생성하는 방식
var pattern2 = new RegExp('a');