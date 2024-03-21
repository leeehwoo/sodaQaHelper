let goHiresmodeFilterCategoryFoodie = "foodie";
let goHiresmodeFilterCategoryFilter = "135414";
let goHiresmodeFilterCategoryCategory = "00000";
let goHiresmodeFilterCategory = "standard";
let goHiresmodeFilterCategoryResult = `${goHiresmodeFilterCategoryFoodie}://go?filterId=${goHiresmodeFilterCategoryFilter}&filterCategoryId=${goHiresmodeFilterCategoryCategory}&hiresmode=${goHiresmodeFilterCategory}`;

// 최초
linkQr(
    "#goHiresmodeFilterCategoryValue",
    ".qr-goHiresmodeFilterCategoryValue",
    goHiresmodeFilterCategoryResult
);

// selectbox
$("#goHiresmodeFilterCategoryFoodie").change(function () {
    const val = $(this).val();
    goHiresmodeFilterCategoryFoodie = val;
    goHiresmodeFilterCategoryResult = `${goHiresmodeFilterCategoryFoodie}://go?filterId=${goHiresmodeFilterCategoryFilter}&filterCategoryId=${goHiresmodeFilterCategoryCategory}&hiresmode=${goHiresmodeFilterCategory}`;

    linkQr(
        "#goHiresmodeFilterCategoryValue",
        ".qr-goHiresmodeFilterCategoryValue",
        goHiresmodeFilterCategoryResult
    );
});

// Input
$("#goHiresmodeFilterCategoryFilter").keyup(function () {
    const val = $(this).val();
    goHiresmodeFilterCategoryFilter = val;
    goHiresmodeFilterCategoryResult = `${goHiresmodeFilterCategoryFoodie}://go?filterId=${goHiresmodeFilterCategoryFilter}&filterCategoryId=${goHiresmodeFilterCategoryCategory}&hiresmode=${goHiresmodeFilterCategory}`;

    linkQr(
        "#goHiresmodeFilterCategoryValue",
        ".qr-goHiresmodeFilterCategoryValue",
        goHiresmodeFilterCategoryResult
    );
});

// Input
$("#goHiresmodeFilterCategoryCategory").keyup(function () {
    const val = $(this).val();
    goHiresmodeFilterCategoryCategory = val;
    goHiresmodeFilterCategoryResult = `${goHiresmodeFilterCategoryFoodie}://go?filterId=${goHiresmodeFilterCategoryFilter}&filterCategoryId=${goHiresmodeFilterCategoryCategory}&hiresmode=${goHiresmodeFilterCategory}`;

    linkQr(
        "#goHiresmodeFilterCategoryValue",
        ".qr-goHiresmodeFilterCategoryValue",
        goHiresmodeFilterCategoryResult
    );
});

// selectbox
$("#goHiresmodeFilterCategory").change(function () {
    const val = $(this).val();
    goHiresmodeFilterCategory = val;
    goHiresmodeFilterCategoryResult = `${goHiresmodeFilterCategoryFoodie}://go?filterId=${goHiresmodeFilterCategoryFilter}&filterCategoryId=${goHiresmodeFilterCategoryCategory}&hiresmode=${goHiresmodeFilterCategory}`;

    linkQr(
        "#goHiresmodeFilterCategoryValue",
        ".qr-goHiresmodeFilterCategoryValue",
        goHiresmodeFilterCategoryResult
    );
});

// qr 다운로드
$(".qr-goHiresmodeFilterCategoryValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, goHiresmodeFilterCategoryResult);
});
