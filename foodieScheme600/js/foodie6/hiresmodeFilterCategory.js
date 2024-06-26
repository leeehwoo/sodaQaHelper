let hiresmodeFilterCategoryFoodie = "foodie";
let hiresmodeFilterCategoryFilter = "135414";
let hiresmodeFilterCategoryCategory = "00000";
let hiresmodeFilterCategory = "standard";
let hiresmodeFilterCategoryResult = `${hiresmodeFilterCategoryFoodie}://previewcamera?filterId=${hiresmodeFilterCategoryFilter}&filterCategoryId=${hiresmodeFilterCategoryCategory}&hiresmode=${hiresmodeFilterCategory}`;

// 최초
linkQr(
    "#hiresmodeFilterCategoryValue",
    ".qr-hiresmodeFilterCategoryValue",
    hiresmodeFilterCategoryResult
);

// selectbox
$("#hiresmodeFilterCategoryFoodie").change(function () {
    const val = $(this).val();
    hiresmodeFilterCategoryFoodie = val;
    hiresmodeFilterCategoryResult = `${hiresmodeFilterCategoryFoodie}://previewcamera?filterId=${hiresmodeFilterCategoryFilter}&filterCategoryId=${hiresmodeFilterCategoryCategory}&hiresmode=${hiresmodeFilterCategory}`;

    linkQr(
        "#hiresmodeFilterCategoryValue",
        ".qr-hiresmodeFilterCategoryValue",
        hiresmodeFilterCategoryResult
    );
});

// Input
$("#hiresmodeFilterCategoryFilter").keyup(function () {
    const val = $(this).val();
    hiresmodeFilterCategoryFilter = val;
    hiresmodeFilterCategoryResult = `${hiresmodeFilterCategoryFoodie}://previewcamera?filterId=${hiresmodeFilterCategoryFilter}&filterCategoryId=${hiresmodeFilterCategoryCategory}&hiresmode=${hiresmodeFilterCategory}`;

    linkQr(
        "#hiresmodeFilterCategoryValue",
        ".qr-hiresmodeFilterCategoryValue",
        hiresmodeFilterCategoryResult
    );
});

// Input
$("#hiresmodeFilterCategoryCategory").keyup(function () {
    const val = $(this).val();
    hiresmodeFilterCategoryCategory = val;
    hiresmodeFilterCategoryResult = `${hiresmodeFilterCategoryFoodie}://previewcamera?filterId=${hiresmodeFilterCategoryFilter}&filterCategoryId=${hiresmodeFilterCategoryCategory}&hiresmode=${hiresmodeFilterCategory}`;

    linkQr(
        "#hiresmodeFilterCategoryValue",
        ".qr-hiresmodeFilterCategoryValue",
        hiresmodeFilterCategoryResult
    );
});

// selectbox
$("#hiresmodeFilterCategory").change(function () {
    const val = $(this).val();
    hiresmodeFilterCategory = val;
    hiresmodeFilterCategoryResult = `${hiresmodeFilterCategoryFoodie}://previewcamera?filterId=${hiresmodeFilterCategoryFilter}&filterCategoryId=${hiresmodeFilterCategoryCategory}&hiresmode=${hiresmodeFilterCategory}`;

    linkQr(
        "#hiresmodeFilterCategoryValue",
        ".qr-hiresmodeFilterCategoryValue",
        hiresmodeFilterCategoryResult
    );
});

// qr 다운로드
$(".qr-hiresmodeFilterCategoryValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, hiresmodeFilterCategoryResult);
});
