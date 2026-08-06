/// [전시 history.html] - 지도보기
const mapOpenBtn = document.querySelectorAll(".mapOpenBtn");  // 층별 지도보기 버튼's
const mapModal = document.querySelector(".mapModal");  // 팝업 전체
const mapModalImg = document.querySelector(".mapModalImg");  // 팝업안의 지도 이미지
const mapCloseBtn = document.querySelector(".mapCloseBtn");  // 닫기 버튼


mapOpenBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        const mapSrc = btn.dataset.map;
        mapModalImg.src = mapSrc;
        mapModal.classList.add("open");
    })
})

mapCloseBtn.addEventListener("click", function(){
    mapModal.classList.remove("open");
})