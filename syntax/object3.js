// Object Oriented Programming

let o = {
    v1: 'v1',
    v2: 'v2',
    v3: 'v3',
    v4: 'v4',
    f1:function() {
        // 함수가 자신이 속해있는 객체를 참조할 수 있는 특수한 약속 : this라는 약속된 키워드
        console.log(this.v1);
    },
    f2:function() {
        console.log(this.v2);
    }

};

o.f1();
o.f2();