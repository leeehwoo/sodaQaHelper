let inappBrowserFromFoodie = "foodie";
let inappBrowserFromLink =
    "https://qa-b6s-webview.snow.me/foodie/events/ko/foodie/ai_events/ai_cooking_studio/";
let inappBrowserFromFrom = "push";
let inappBrowserFromResult = `${inappBrowserFromFoodie}://inappBrowser?url=${inappBrowserFromLink}?from=${inappBrowserFromFrom}`;

// 최초
linkQr(
    "#inappBrowserFromValue",
    ".qr-inappBrowserFromValue",
    inappBrowserFromResult
);

// selectbox
$("#inappBrowserFromFoodie").change(function () {
    const val = $(this).val();
    inappBrowserFromFoodie = val;
    inappBrowserFromResult = `${inappBrowserFromFoodie}://inappBrowser?url=${inappBrowserFromLink}?from=${inappBrowserFromFrom}`;

    linkQr(
        "#inappBrowserFromValue",
        ".qr-inappBrowserFromValue",
        inappBrowserFromResult
    );
});

// input
$("#inappBrowserFromLink").keyup(function () {
    const val = $(this).val();
    inappBrowserFromLink = val;
    inappBrowserFromResult = `${inappBrowserFromFoodie}://inappBrowser?url=${inappBrowserFromLink}?from=${inappBrowserFromFrom}`;

    linkQr(
        "#inappBrowserFromValue",
        ".qr-inappBrowserFromValue",
        inappBrowserFromResult
    );
});

// input
$("#inappBrowserFromFrom").keyup(function () {
    const val = $(this).val();
    inappBrowserFromFrom = val;
    inappBrowserFromResult = `${inappBrowserFromFoodie}://inappBrowser?url=${inappBrowserFromLink}?from=${inappBrowserFromFrom}`;

    linkQr(
        "#inappBrowserFromValue",
        ".qr-inappBrowserFromValue",
        inappBrowserFromResult
    );
});

// qr 다운로드
$(".qr-inappBrowserFromValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, inappBrowserFromResult);
});
