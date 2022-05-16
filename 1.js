
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我叫小k
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div1
 **/
#div1 {
    width: 200px;
    height: 200px;
    border:1px solid red;
}
/* 接下来我把 div 变成一个太极
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;

}
/* 太极分阴阳
 * 具有黑白两色
 **/
#div1{
    background: linear-gradient(90deg, rgba(9, 0, 0, 1) 0%, rgba(0, 5, 6, 1) 50%, rgba(239, 239, 242, 1) 50%);
    border:none;
}
/* 加两个神秘的小球 **/
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(9, 0, 0, 1);
    }
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(239, 239, 242, 1);
    }
    #div1::before {      
        background: radial-gradient(circle, rgba(239, 239, 242, 1) 19%, rgba(9, 0, 0, 1) 19%, rgba(0, 5, 6, 1) 19%);
        border:none;
    }
    #div1::after {
        background: radial-gradient(circle, rgba(0, 5, 6, 1) 0%, rgba(9, 0, 0, 1) 19%, rgba(239, 239, 242, 1) 19%);
        border:none;
    }
`
let string2 = "";
let n = 0;
let step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果 n 不是最后一个,就继续
            n += 1;
            step();
        }
    }, 10);
};

step(); // 1=>2