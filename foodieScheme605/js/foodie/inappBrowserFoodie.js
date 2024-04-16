let inappBrowserFoodie = "foodie";
let inappBrowserLink = "https://qa-b6s-webview.snow.me/foodie/events/ko/foodie/ai_events/ai_cooking_studio/";
let inappBrowserResult = `${inappBrowserFoodie}://inappBrowser?url=${inappBrowserLink}`;

// 최초
linkQr("#inappBrowserValue", ".qr-inappBrowserValue", inappBrowserResult);

// selectbox
$("#inappBrowserFoodie").change(function () {
    const val = $(this).val();
    inappBrowserFoodie = val;
    inappBrowserResult = `${inappBrowserFoodie}://inappBrowser?url=${inappBrowserLink}`;

    linkQr("#inappBrowserValue", ".qr-inappBrowserValue", inappBrowserResult);
});

// input
$("#inappBrowserLink").keyup(function () {
    const val = $(this).val();
    inappBrowserLink = val;
    inappBrowserResult = `${inappBrowserFoodie}://inappBrowser?url=${inappBrowserLink}`;

    linkQr("#inappBrowserValue", ".qr-inappBrowserValue", inappBrowserResult);
});

// qr 다운로드
$(".qr-inappBrowserValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, inappBrowserResult);
});
