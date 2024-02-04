let check = [false, false];
let res;
let userIds = ['id1234'];
let userPws = ['pw1234'];

const signIn = function () {
    let inputId = document.getElementById('userid')
    let inputPw = document.getElementById('userpw')
    for (let i = 0; i < userIds.length; i++) {
        if ((userIds[i] == inputId.value) && (userPws[i] == inputPw.value)) {
            window.open('./main.html');
        } else {
            inputPw.value = "";
            inputPw.focus();
            alert("아이디 혹은 비밀번호를 확인하세요.")
        }
    }
}

const goSignUp = function () {
    window.open('./signUp.html');
}

const idCheck = function () {
    let inputId = document.getElementById('userid');
    if (inputId.value == '') {
        alert("아이디를 입력하세요.")
        inputId.focus()
        check[0] = false;
        return;
    }
    for (let i = 0; i < userIds.length; i++) {
        res = (userIds[i] == inputId.value) ? false : true;
    }
    if (res == true) {
        alert("사용가능한 아이디입니다.");
        check[0] = true;
    } else {
        alert("중복된 아이디입니다.");
        inputId.value = "";
        inputId.focus();
        check[0] = false;
    }
}

const pwCheck = function () {
    let inputPw1 = document.getElementById('userpw');
    let inputPw2 = document.getElementById('userpw2');
    if (inputPw1.value == "" || inputPw2.value == "") {
        alert("비밀번호를 입력하세요.")
        inputPw1.focus();
        return;
    } else if (inputPw1.value == inputPw2.value) {
        let img = document.getElementById('pwMark')
        img.style.visibility = 'visible';
        check[1] = true;
    } else {
        inputPw1.value = "";
        inputPw2.value = "";
        let img = document.getElementById('pwMark')
        img.style.visibility = 'hidden';
        alert("입력한 비밀번호가 서로 다릅니다.")
        inputPw1.focus();
        check[1] = false;
        return;
    }
}

const signUp = function () {
    let inputId = document.getElementById('userid');
    let inputPw = document.getElementById('userpw');
    let ivCheck = false;
    let ivCode = document.getElementById('inviteCode');
    if (check[0] != true) {
        alert("아이디 중복 확인을 해주세요.")

        inputId.focus();
        return;
    }
    if (check[1] != true) {
        alert("비밀번호 일치 확인을 해주세요.")

        inputPw.focus();
        return;
    }

    for (let i = 0; i < userIds.length; i++) {
        ivCheck = (ivCode.value == userIds[i]) ? true : false;
    }
    if (ivCheck != true) {
        ivCode.value = "";
        alert("유효한 초대코드가 아닙니다.")
        ivCode.focus();
        return;
    } else {
        userIds.push(inputId.value);
        userPws.push(inputPw.value);
        alert('회원가입에 성공하였습니다.\n가입한 정보로 로그인 하세요(미구현)')
        location.href = './signIn.html';
    }

}

const btn1 = function () {
    let temp = document.getElementById('line1_1');
    document.getElementById('line1').innerHTML = "소띠, 천안사람, 남성, INTP, ";
    temp.innerHTML = "프로그래밍 24.01.15~";
    let btnHid = document.getElementById('more1');
    let btnVis = document.getElementById('more2');
    let imgVis = document.getElementById('program');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}

const btn2 = function () {
    let temp = document.getElementById('line2');
    temp.innerHTML = "게임 좋아함. 요즘 못함. 슬픔.";
    let btnHid = document.getElementById('more2');
    let btnVis = document.getElementById('more3');
    let imgVis = document.getElementById('switch');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}
const btn3 = function () {
    let temp = document.getElementById('line2_2');
    temp.innerHTML = "단거 좋아함. 마카롱 만들어 먹어봄.";
    let btnHid = document.getElementById('more3');
    let btnVis = document.getElementById('more4');
    let imgVis = document.getElementById('jelly');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}
const btn4 = function () {
    let temp = document.getElementById('line3');
    temp.innerHTML = "쳐보고 싶어서 일렉기타 샀음. 아직 칠 줄 아는 곡 없음,,";
    let btnHid = document.getElementById('more4');
    let btnVis = document.getElementById('more5');
    let imgVis = document.getElementById('thirsty');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}
const btn5 = function () {
    let temp = document.getElementById('line3_2');
    temp.innerHTML = "사나고 3D펜도 샀음. 쓸만함.";
    let btnHid = document.getElementById('more5');
    let btnVis = document.getElementById('more6');
    let imgVis = document.getElementById('tdp');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}

const btn6 = function () {
    let temp = document.getElementById('line4');
    temp.innerHTML = "귀여운거 좋아함.";
    document.getElementById('line5').innerHTML = "콩순이 귀엽져? "
    let btnHid = document.getElementById('more6');
    let btnVis = document.getElementById('more7');
    let imgVis = document.getElementById('cong');
    btnHid.style.display = 'none';
    btnVis.style.display = 'inline';
    imgVis.style.display = 'inline';
}

const btn7 = function () {
    let temp = document.getElementById('line6')
    let btnHid = document.getElementById('more7');
    temp.innerHTML = "이제 없어요~";
    btnHid.style.display = 'none';
}

const btn8 = function () {
    let btnVis = document.getElementById('last');
    btnVis.style.opacity = 1;
}


const go = function (src) {
    switch (src) {
        case 'bluebird':
            window.open("https://youtu.be/YhFdtdTDMtU?si=BZLdnTd58TELoLO8");
            break;
        case 'abouttime':
            window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=1825486&qvt=0&query=%EC%96%B4%EB%B0%94%EC%9B%83%ED%83%80%EC%9E%84%20%EC%98%81%ED%99%94");
            break;
        case 'jelly':
            window.open("https://brand.naver.com/haribo/products/9015246660");
            break;
        case 'thirsty':
            window.open("https://youtu.be/bi3lPMmK7Vk?si=z72kLI8TE-bfqIFu");
            break;
        case 'cong.html':
            window.open=("./cong.html", "_blank");
            break;
        case 'secret.html':
            window.open=("./friends.html", "_blank");
            break;
        case 'main':
            window.open('./main.html');
            break;
        default:
            break;
    }
}

const gocong=function(){
    window.open=("./cong.html");
}

window.onload = function () {
    let line1_1 = document.getElementById('line1_1')
    let line2 = document.getElementById('line2');
    let line2_2 = document.getElementById('line2_2');
    let line3 = document.getElementById('line3');
    let line3_2 = document.getElementById('line3_2');
    let line5 = document.getElementById('line5');

    let imgProg = document.getElementById('program');
    let imgSwitch = document.getElementById('switch');
    let imgJel= document.getElementById('jelly');
    let imgTdp= document.getElementById('tdp');
    let imgThr= document.getElementById('thirsty');
    let imgCong= document.getElementById('cong');
    
    line1_1.addEventListener('mouseover', function () {
        imgProg.style.border = 'dashed', 'white';
    });

    line1_1.addEventListener('mouseout', function () {
        imgProg.style.border = 'none';
    });

    line2.addEventListener('mouseover', function () {
        imgSwitch.style.border = 'dashed', 'white';
        document.getElementById('sad').style.display = 'inline';
    });

    line2.addEventListener('mouseout', function () {
        imgSwitch.style.border = 'none';
        document.getElementById('sad').style.display = 'none';
    });

    line2_2.addEventListener('mouseover', function () {
        imgJel.style.border = 'dashed', 'white';
    });

    line2_2.addEventListener('mouseout', function () {
        imgJel.style.border = 'none';
    });

    line3.addEventListener('mouseover', function () {
        imgThr.style.border = 'dashed', 'white';
    });

    line3.addEventListener('mouseout', function () {
        imgThr.style.border = 'none';
    });

    line3_2.addEventListener('mouseover', function () {
        imgTdp.style.border = 'dashed', 'white';
    });

    line3_2.addEventListener('mouseout', function () {
        imgTdp.style.border = 'none';
    });

    line5.addEventListener('mouseover', function () {
        line5.style.color="rgb(39, 186, 255)";
        imgCong.style.border = 'dashed', 'white';
    });

    line5.addEventListener('mouseout', function () {
        line5.style.color="white";
        imgCong.style.border = 'none';
    });


    imgProg.addEventListener('mouseover', function () {
        line1_1.style.color = 'red';
    });
    imgProg.addEventListener('mouseout', function () {
        line1_1.style.color = 'white';
    });

    imgSwitch.addEventListener('mouseover', function () {
        document.getElementById('sad').style.display = 'inline';
        line2.style.color = 'red';
    });
    imgSwitch.addEventListener('mouseout', function () {
        document.getElementById('sad').style.display = 'none';
        line2.style.color = 'white';
    });

    imgJel.addEventListener('mouseover', function () {
        line2_2.style.color = 'red';
    });
    imgJel.addEventListener('mouseout', function () {
        line2_2.style.color = 'white';
    });

    imgThr.addEventListener('mouseover', function () {
        line3.style.color = 'red';
    });
    imgThr.addEventListener('mouseout', function () {
        line3.style.color = 'white';
    });

    imgTdp.addEventListener('mouseover', function () {
        line3_2.style.color = 'red';
    });
    imgTdp.addEventListener('mouseout', function () {
        line3_2.style.color = 'white';
    });

    imgCong.addEventListener('mouseover', function () {
        line5.style.color = 'rgb(39, 186, 255)';
    });
    imgCong.addEventListener('mouseout', function () {
        line5.style.color = 'white';
    });
}

const beMyFriends =function(){
    let sec=document.getElementById("Secret");
    let fnd=document.getElementById("Friend");
    console.log(fnd)
    sec.style.textDecoration='line-through';
    sec.style.color='rgb(233, 73, 73)';
    sec.style.transform='rotate(-30deg)';
    fnd.style.display='block';
    fnd.style.transform='translateX(100px)','translateY(50px)'
}


let page = 0;

const left = function(){
    console.log(page);
    switch(page){
        case 1 : 
            document.getElementById('c1').style.zIndex='8';
            document.getElementById('c2').style.zIndex='7';
            page--;
            break;
        case 2: 
            document.getElementById('c2').style.zIndex='8';
            document.getElementById('c3').style.zIndex='6';
            page--;
            break;
        case 3: 
            document.getElementById('c3').style.zIndex='8';
            document.getElementById('c4').style.zIndex='5';
            page--;
            break;    
        case 4: 
            document.getElementById('c4').style.zIndex='8';
            document.getElementById('c5').style.zIndex='4';
            page--;
            break;
        case 5: 
            document.getElementById('c5').style.zIndex='8';
            document.getElementById('c6').style.zIndex='3';
            page--;
            break;
        case 6: 
            document.getElementById('c6').style.zIndex='8';
            document.getElementById('c7').style.zIndex='2';
            page--;
            break;
        case 7: 
            document.getElementById('c7').style.zIndex='8';
            document.getElementById('c8').style.zIndex='1';
            page--;
            break;
        case 8:
            document.getElementById('c8').style.zIndex='8';
            document.getElementById('c9').style.zIndex='0';
            page--;
            break;

        default:
            break;
    }
}

const right = function(){
    console.log(page);
    switch(page){
        case 0 : 
            document.getElementById('c1').style.zIndex='7';
            document.getElementById('c2').style.zIndex='8';
            page++;
            break;
        case 1: 
            document.getElementById('c2').style.zIndex='7';
            document.getElementById('c3').style.zIndex='8';
            page++;
            break;
        case 2: 
            document.getElementById('c3').style.zIndex='7';
            document.getElementById('c4').style.zIndex='8';
            page++;
            break;    
        case 3: 
            document.getElementById('c4').style.zIndex='7';
            document.getElementById('c5').style.zIndex='8';
            page++;
            break;
        case 4: 
            document.getElementById('c5').style.zIndex='7';
            document.getElementById('c6').style.zIndex='8';
            page++;
            break;
        case 5: 
            document.getElementById('c6').style.zIndex='7';
            document.getElementById('c7').style.zIndex='8';
            page++;
            break;
        case 6: 
            document.getElementById('c7').style.zIndex='7';
            document.getElementById('c8').style.zIndex='8';
            page++;
            break;
        case 7: 
            document.getElementById('c8').style.zIndex='7';
            document.getElementById('c9').style.zIndex='8';
            page++;
            break;
        default:
            break;
    }
}
