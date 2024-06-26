let hiresmodeFilterGroupFoodie = "foodie";
let hiresmodeFilterGroupId = "00000";
let hiresmodeFilterGroup = "standard";
let hiresmodeFilterGroupResult = `${hiresmodeFilterGroupFoodie}://previewcamera?filterCategoryId=${hiresmodeFilterGroupId}&hiresmode=${hiresmodeFilterGroup}`;

// 최초
linkQr(
    "#hiresmodeFilterGroupValue",
    ".qr-hiresmodeFilterGroupValue",
    hiresmodeFilterGroupResult
);

// selectbox
$("#hiresmodeFilterGroupFoodie").change(function () {
    const val = $(this).val();
    hiresmodeFilterGroupFoodie = val;
    hiresmodeFilterGroupResult = `${hiresmodeFilterGroupFoodie}://previewcamera?filterCategoryId=${hiresmodeFilterGroupId}&hiresmode=${hiresmodeFilterGroup}`;

    linkQr(
        "#hiresmodeFilterGroupValue",
        ".qr-hiresmodeFilterGroupValue",
        hiresmodeFilterGroupResult
    );
});

// Input
$("#hiresmodeFilterGroupId").keyup(function () {
    const val = $(this).val();
    hiresmodeFilterGroupId = val;
    hiresmodeFilterGroupResult = `${hiresmodeFilterGroupFoodie}://previewcamera?filterCategoryId=${hiresmodeFilterGroupId}&hiresmode=${hiresmodeFilterGroup}`;

    linkQr(
        "#hiresmodeFilterGroupValue",
        ".qr-hiresmodeFilterGroupValue",
        hiresmodeFilterGroupResult
    );
});

// selectbox
$("#hiresmodeFilterGroup").change(function () {
    const val = $(this).val();
    hiresmodeFilterGroup = val;
    hiresmodeFilterGroupResult = `${hiresmodeFilterGroupFoodie}://previewcamera?filterCategoryId=${hiresmodeFilterGroupId}&hiresmode=${hiresmodeFilterGroup}`;

    linkQr(
        "#hiresmodeFilterGroupValue",
        ".qr-hiresmodeFilterGroupValue",
        hiresmodeFilterGroupResult
    );
});

// qr 다운로드
$(".qr-hiresmodeFilterGroupValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, hiresmodeFilterGroupResult);
});
