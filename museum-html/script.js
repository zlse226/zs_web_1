
// 스크롤시 메인메뉴 위로 붙으며 폰트 크기.여백 작아짐
window.addEventListener("scroll", function () {
    const mainMenu = document.querySelector("#mainMenu");

    if (window.scrollY > 80) {  // 스크롤이 80px보다 내려가면
        mainMenu.classList.add("scrollOn");  // scrollOn클래스 추가
    } else {  // 스코롤이 80px 이하면
        mainMenu.classList.remove("scrollOn");  // scrollOn 클래스 제거
    }
});

// 메인 이미지 fadeIn
$(document).ready(function() {
    $(".fadeImage").hide();     // 처음에는 숨김
    $(".fadeImage").fadeIn(2000);       // 2초동안 서서히 나타남
})



// 문화행사 파트 이미지 슬라이드

const sliders = document.querySelectorAll(".posterSlider");

sliders.forEach(function (slider){ 
    const posters = slider.querySelectorAll(".poster"); 

    // changeSlide: 슬라이드 이미지를 바꾸는 함수명, direction: prev/next 중 무엇을 받을지에 대한 임의의 변수명
    function changeSlide(direction) {
        posters.forEach(function (poster){
            if(direction === "next") {
                if(poster.classList.contains("active")){
                    poster.className = "poster prev";
                }
                else if(poster.classList.contains("next")){
                    poster.className = "poster active";
                }
                else if(poster.classList.contains("prev")) {
                    poster.className = "poster next"; 
                }
            }

            if(direction === "prev") {
                if(poster.classList.contains("active")){
                    poster.className = "poster next";
                }
                else if(poster.classList.contains("prev")){
                    poster.className = "poster active";
                }
                else if(poster.classList.contains("next")){
                    poster.className = "poster prev";
                }
            }
        })
    }

    posters.forEach(function (poster){
        poster.addEventListener("click", function(){
            if(poster.classList.contains("next")){
                changeSlide("next");
            }
            if(poster.classList.contains("prev")){
                changeSlide("prev");
            }
        })
    });
});




/////////// goods.html 구쭈 메인배너 슬라이더
const banners = document.querySelectorAll(".banner")
const btnIcon = document.querySelector(".slideBtnIcon")
const progressActive = document.querySelector(".progressActive")

let index = 0;          // 현재 보이는 사진 번호
let isplaying = true;   // 자동재상 중인지 확인
let timer;              // 자동재상 저장용

function showBanner(){
    banners.forEach(function(banner){
        banner.classList.remove("active");
    })
    banners[index].classList.add("active");
    progressActive.style.left = (index * 90) + "px"; /* 1번은 0px, 2번은 90px, 3번은 180px, 4번은 270px로 이동시키는 핵심 */

}

function nextBanner(){
    index++;
    if(index > 3) {
        index = 0;
    }
    showBanner();
}

function playSlide(){
    timer = setInterval(nextBanner, 4000);
    btnIcon.src = "../image/icon_pause.png"
    isplaying = true;
}

function pauseSlide(){
    clearInterval(timer);
    btnIcon.src = "../image/icon_play.png"
    isplaying = false;
}

btnIcon.addEventListener("click", function(){
    if(isplaying) {
        pauseSlide();
    } else{
        playSlide();
    }
})

showBanner();
playSlide();

////////// goods.html 문구탭, 신상품탭 슬라이더 구현

const storeLists = document.querySelectorAll(".storeList");

storeLists.forEach(function(list){
    const storeTotalInfo = list.querySelector(".storeTotalInfo");
    const storePrev = list.querySelector(".storePrev");
    const storeNext = list.querySelector(".storeNext");

    let storeIndex = 0; /* 현재보인느 묶음 번호 ( 0 = 1~4, 1 = 5~8, 2 = 9~12) */
    const storeMoveWidth = 333; /* 한줄 이동 크기 info 넓이 303px + gap 30px */
    const storeShowCount = 4;
    const storeTotalCount = 12;
    const storeMaxIndex = storeTotalCount/storeShowCount - 1;

    function moveStoreSlide(){
    storeTotalInfo.style.transform = 
            "translateX(" + -(storeIndex * storeMoveWidth * storeShowCount) + "px)";

    }


    storeNext.addEventListener("click", function () {
        storeIndex++;
        if (storeIndex > storeMaxIndex) {
            storeIndex = 0;
        }
        moveStoreSlide();
    });
    storePrev.addEventListener("click", function () {
        storeIndex--;
        if (storeIndex < 0) {
            storeIndex = storeMaxIndex;
        }
        moveStoreSlide();
    });
})


////////// goods.html 베스트탭 슬라이더 구현

const bestTrack = document.querySelector(".bestSlideTrack");
const bestSlide = document.querySelectorAll(".storeBestSlide");

// 실제 너비 가져오기 
const firstSlide = bestSlide[0]; // 첫번째 슬라이드
// offsetWidth는 실제 화면에 랜더링된 너비를 가져오는 JS기능
const slideWidth = firstSlide.offsetWidth; 

let bestIndex = 0;

function trackStyle(){
    // console.log(bestIndex);
    // console.log(slideWidth);
    bestTrack.style.transform = "translateX(" + -(bestIndex * slideWidth) + "px)";
}

function showTrack(){
    bestIndex++;
    // console.log("실행");
    if (bestIndex >= bestSlide.length) { /* bestSlide.length로 슬라이드 수 지정 */
        bestIndex = 0;
    }
    trackStyle(); /* 첫화면 표시 */
}
setInterval(showTrack, 3000); /* 자돵시작 (showTrack안에 있으면 index값 늘어날대마다 초수가 늘어남) */


