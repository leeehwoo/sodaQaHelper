let helpFoodie = "https://help.snow.me/FOODIE";

// 최초
linkQr("#aaaaaa", ".qr-help-foodie", helpFoodie);

// qr 다운로드
$(".qr-help-foodie-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, helpFoodie);
});
