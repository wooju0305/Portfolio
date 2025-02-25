let isThrottled = false;

const focusEl = document.querySelector("#focus");
if (!focusEl) {
    console.error("#focus element not found in the DOM.");
} else {
    const handleMouseMove = (event) => {
        if (!isThrottled) {
            isThrottled = true;
            requestAnimationFrame(() => {
                updateFocus(event);
                isThrottled = false;
            });
        }
    };

    document.addEventListener("mousemove", handleMouseMove);

    function updateFocus(event) {
        const focusElX = event.clientX + "px";
        const focusElY = event.clientY + "px";
        focusEl.style.background = `radial-gradient(
            circle ${getScreenAvg() * 0.15}px at ${focusElX} ${focusElY}, /* 크기 증가 */
            rgba(0, 0, 0, 0.01) 20%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 0.8) 100%)`;
    }

    function getScreenAvg() {
        return Math.floor((window.innerWidth + window.innerHeight) * 0.5);
    }
}

// .Pplanet 요소를 선택
const pPlanet = document.querySelector(".Pplanet");

// 클릭 이벤트 추가
pPlanet.addEventListener("click", () => {
    // 특정 URL로 이동
    window.location.href = "https://www.linkedin.com/in/jihyo-jeong"; // 이동할 링크로 변경
});

const gPlanet = document.querySelector(".Gplanet");

// 클릭 이벤트 추가
gPlanet.addEventListener("click", () => {
    // 특정 URL로 이동
    window.location.href = "https://github.com/jihyo0331"; // 이동할 링크로 변경
});

const bPlanet = document.querySelector(".Bplanet");

// 클릭 이벤트 추가
bPlanet.addEventListener("click", () => {
    // 특정 URL로 이동
    window.location.href = "https://velog.io/@jihyo/posts"; // 이동할 링크로 변경
});
