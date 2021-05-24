window.onload = function () {
    /* 메뉴 토글 스크립트 */
    var menuBtn = document.querySelector(".menuBtn");
    menuBtn.onclick = () => {
        var menu = document.querySelector(".menu");
        if (!menu.classList.contains("menuToggle")) {
            menu.classList.add("menuToggle");
        } else {
            menu.classList.remove("menuToggle");
        }
    }
    var category = document.querySelector(".category");
    var category_li = category.querySelectorAll(".content");
    /* 좌측사이드 스크립트 */
    category.onclick = () => {
        if (!event.target.classList.contains("depth1")) return;
        /* 1st 다른 메뉴는 닫아주는 아코디언
        //기존에 있던 content_open삭제
        for(var i = 0; i < category_li.length; i++) {
            category_li[i].classList.remove("content-open");
        }
        //content-open클래스로 높이 활성화
        event.target.nextElementSibling.classList.add("content-open"); 
        */

        /* 2nd 토글방식 */
        console.dir(event.target)
        event.target.nextElementSibling.classList.toggle("content-open");
    }
}