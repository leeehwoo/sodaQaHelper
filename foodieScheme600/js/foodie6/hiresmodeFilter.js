let hiresmodeFilterFoodie = "foodie";
let hiresmodeFilterId = "135414";
let hiresmodeFilter = "standard";
let hiresmodeFilterResult = `${hiresmodeFilterFoodie}://previewcamera?filterId=${hiresmodeFilterId}&hiresmode=${hiresmodeFilter}`;

// 최초
linkQr(
    "#hiresmodeFilterValue",
    ".qr-hiresmodeFilterValue",
    hiresmodeFilterResult
);

// selectbox
$("#hiresmodeFilterFoodie").change(function () {
    const val = $(this).val();
    hiresmodeFilterFoodie = val;
    hiresmodeFilterResult = `${hiresmodeFilterFoodie}://previewcamera?filterId=${hiresmodeFilterId}&hiresmode=${hiresmodeFilter}`;

    linkQr(
        "#hiresmodeFilterValue",
        ".qr-hiresmodeFilterValue",
        hiresmodeFilterResult
    );
});

// Input
$("#hiresmodeFilterId").keyup(function () {
    const val = $(this).val();
    hiresmodeFilterId = val;
    hiresmodeFilterResult = `${hiresmodeFilterFoodie}://previewcamera?filterId=${hiresmodeFilterId}&hiresmode=${hiresmodeFilter}`;

    linkQr(
        "#hiresmodeFilterValue",
        ".qr-hiresmodeFilterValue",
        hiresmodeFilterResult
    );
});

// selectbox
$("#hiresmodeFilter").change(function () {
    const val = $(this).val();
    hiresmodeFilter = val;
    hiresmodeFilterResult = `${hiresmodeFilterFoodie}://previewcamera?filterId=${hiresmodeFilterId}&hiresmode=${hiresmodeFilter}`;

    linkQr(
        "#hiresmodeFilterValue",
        ".qr-hiresmodeFilterValue",
        hiresmodeFilterResult
    );
});

// qr 다운로드
$(".qr-hiresmodeFilterValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, hiresmodeFilterResult);
});
