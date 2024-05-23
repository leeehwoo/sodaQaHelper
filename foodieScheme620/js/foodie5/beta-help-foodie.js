let betaHelpFoodie = "https://beta-help.snow.me/FOODIE";

// 최초
linkQr("#aaaaaaaa", ".qr-beta-help-foodie", betaHelpFoodie);

// qr 다운로드
$(".qr-beta-help-foodie-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, betaHelpFoodie);
});
