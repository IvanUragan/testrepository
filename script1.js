/*var a1 = 'Hello';
prompt(a1);
var b1 = prompt(' ');
b1 = +b1 + 1;
prompt(b1);*/

/*//1
var a1 = 'Hello';
console.log(a1);

//2
var b1 = prompt(' ');
console.log(b1);

//3
var c1 = prompt(' ');
c1 = +c1 + 1;
console.log(c1);

//4
var a = Math.round(Math.random()*(0, 10));
var b = Math.round(Math.random()*(0, 10));
var operators = [
    {sign: '-',
     method:function(a,b){
         return a-b;}
    },
    {sign:'*',
     method:function(a,b){
         return a*b;}
    },
    {sign:'+',
    method:function(a,b){
        return a+b;}
    },
    {sign:'/',
    method:function(a,b){
        while(b==0){
          b = Math.round(Math.random()*10 );
        }
        return a/b;}
    }
]
var count = Math.round(Math.random()*3 );
console.log(`${a} ${operators[count].sign} ${b} = ${operators[count].method(a,b)}`  );*/

//5
/*var infin = true;
var c;
var d;
var num1;
var num2;

while(infin){
    c = Math.round(Math.random()*10);
    d = Math.round(Math.random()*10);
    while(d==0){
        d = Math.round(Math.random()*10);
    }
    num1 = (c/d).toFixed(1);
    console.log('${c}/${d}');
    num2;
    console.log(num2);
    if(+num2 == +num1){
        alert('I am fine');
    }else{
        alert('Stop!');
        infin = false;
    }
}*/

var t;
var b;
flag = true;
var neededStr;
var userStr;

while (flag) {
    t = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);

    while(b == 0) {
        b = Math.round(Math.random() * 10);
    }
    neededStr = (t/b).toFixed(1);
    console.log('neededStr: ', neededStr);
    console.log(t);
    console.log(b);
    userStr = prompt(`Enter number ${t}/${b}: `,);
    userStr = userStr.replace(",",".");

    console.log('userStr: ', userStr);
    if( +userStr == +neededStr) {
        alert('I want to drink!');
    } else {
        var dotCounter = 0;
        for( i = 0; i < userStr.length; i++) {
            if( userStr[i] = '.') dotCounter++;
        }
        if (dotCounter>1){
            alert('Akkuratno, alkogolik!');
            flag = false;
            break;
        }
        alert('Stop!');
        flag = false;
    }
}
