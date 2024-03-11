let feedCategoryContentValueFoodie = "foodie";
let feedCategoryContent = "00000";
let feedCategoryContentContent = "00000";
let feedCategoryContentResult = `${feedCategoryContentValueFoodie}://feed?categoryId=${feedCategoryContent}&&contentId=${feedCategoryContentContent}`;

// 최초
linkQr(
    "#feedCategoryContentValue",
    ".qr-feedCategoryContentValue",
    feedCategoryContentResult
);

// selectbox
$("#feedCategoryContentValueFoodie").change(function () {
    const val = $(this).val();
    feedCategoryContentValueFoodie = val;
    feedCategoryContentResult = `${feedCategoryContentValueFoodie}://feed?categoryId=${feedCategoryContent}&&contentId=${feedCategoryContentContent}`;

    linkQr(
        "#feedCategoryContentValue",
        ".qr-feedCategoryContentValue",
        feedCategoryContentResult
    );
});

// Input
$("#feedCategoryContent").keyup(function () {
    const val = $(this).val();
    feedCategoryContent = val;
    feedCategoryContentResult = `${feedCategoryContentValueFoodie}://feed?categoryId=${feedCategoryContent}&&contentId=${feedCategoryContentContent}`;

    linkQr(
        "#feedCategoryContentValue",
        ".qr-feedCategoryContentValue",
        feedCategoryContentResult
    );
});

// Input
$("#feedCategoryContentContent").keyup(function () {
    const val = $(this).val();
    feedCategoryContentContent = val;
    feedCategoryContentResult = `${feedCategoryContentValueFoodie}://feed?categoryId=${feedCategoryContent}&&contentId=${feedCategoryContentContent}`;

    linkQr(
        "#feedCategoryContentValue",
        ".qr-feedCategoryContentValue",
        feedCategoryContentResult
    );
});

// qr 다운로드
$(".qr-feedCategoryContentValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedCategoryContentResult);
});
