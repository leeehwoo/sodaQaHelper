let feedCategoryValueFoodie = "foodie";
let feedCategory = "202209051824911";
let feedCategoryResult = `${feedCategoryValueFoodie}://feed?categoryId=${feedCategory}`;

// 최초
linkQr("#feedCategoryValue", ".qr-feedCategoryValue", feedCategoryResult);

// selectbox
$("#feedCategoryValueFoodie").change(function () {
    const val = $(this).val();
    feedCategoryValueFoodie = val;
    feedCategoryResult = `${feedCategoryValueFoodie}://feed?categoryId=${feedCategory}`;

    linkQr("#feedCategoryValue", ".qr-feedCategoryValue", feedCategoryResult);
});

// Input
$("#feedCategory").keyup(function () {
    const val = $(this).val();
    feedCategory = val;
    feedCategoryResult = `${feedCategoryValueFoodie}://feed?categoryId=${feedCategory}`;

    linkQr("#feedCategoryValue", ".qr-feedCategoryValue", feedCategoryResult);
});

// qr 다운로드
$(".qr-feedCategoryValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedCategoryResult);
});
