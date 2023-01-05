// footer 중복방지
let footer = document.querySelector('#footer')
if (window.location.pathname == '/') {
  footer.style.display = 'none';
}

//사이트맵 header/footer 삭제
let header = document.querySelector('#header')
if (window.location.pathname == '/siteMapPage') {
  header.style.display = 'none';
}


window.addEventListener('wheel', () => {
  // 세번째 섹션 도달했을때 footer 나오게 하기
  let footerPagination = document.getElementById('swiper-pagination-bullet4');
  let section3 = document.getElementById('section3');
  let footer = document.getElementById('section4');
  if (footerPagination.classList[1] != undefined) {
    section3.style.top = 'calc(100vh - 400px)';
    footer.style.top = 'calc(100vh - 400px)';
  } else {
    section3.style.top = 0;
    footer.style.top = 0;
  };

  // 첫번째 섹션 벗어났을시 header 한줄화
  let swiperPage1 = document.getElementById('swiper-pagination-bullet0');
  let topArea = document.querySelector('.topArea');
  if (swiperPage1.classList[1] == undefined) {
    topArea.style.height = '0px';
  } else {
    topArea.style.height = '35px';
  }
});



let leftNav = document.querySelector('.swiper-pagination-vertical');
leftNav.addEventListener('click', () => {
  // footer가 나왔을때 leftNav클릭하면 섹션 원위치로
  let section3 = document.getElementById('section3');
  let footer = document.getElementById('section4');
  section3.style.top = 0;
  footer.style.top = 0;

  // 첫번째 섹션 벗어났을시 header 한줄화
  let swiperPage1 = document.getElementById('swiper-pagination-bullet0');
  let topArea = document.querySelector('.topArea');
  if (swiperPage1.classList[1] == undefined) {
    topArea.style.height = '0px';
  } else {
    topArea.style.height = '35px';
  }
})

// 공지사항 번호 매기기
let num = document.querySelectorAll(".main_listNum");
let numArray = []

for (let i = 0; i < num.length; i++) {
  numArray.push(i)
}

for (let j = 0; j < numArray.length; j++) {
  num[j].innerHTML = `${numArray[j]+1}`
}