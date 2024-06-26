let goHiresmodeFilterGroupFoodie = "foodie";
let goHiresmodeFilterGroupId = "00000";
let goHiresmodeFilterGroup = "standard";
let goHiresmodeFilterGroupResult = `${goHiresmodeFilterGroupFoodie}://go?filterCategoryId=${goHiresmodeFilterGroupId}&hiresmode=${goHiresmodeFilterGroup}`;

// 최초
linkQr(
    "#goHiresmodeFilterGroupValue",
    ".qr-goHiresmodeFilterGroupValue",
    goHiresmodeFilterGroupResult
);

// selectbox
$("#goHiresmodeFilterGroupFoodie").change(function () {
    const val = $(this).val();
    goHiresmodeFilterGroupFoodie = val;
    goHiresmodeFilterGroupResult = `${goHiresmodeFilterGroupFoodie}://go?filterCategoryId=${goHiresmodeFilterGroupId}&hiresmode=${goHiresmodeFilterGroup}`;

    linkQr(
        "#goHiresmodeFilterGroupValue",
        ".qr-goHiresmodeFilterGroupValue",
        goHiresmodeFilterGroupResult
    );
});

// Input
$("#goHiresmodeFilterGroupId").keyup(function () {
    const val = $(this).val();
    goHiresmodeFilterGroupId = val;
    goHiresmodeFilterGroupResult = `${goHiresmodeFilterGroupFoodie}://go?filterCategoryId=${goHiresmodeFilterGroupId}&hiresmode=${goHiresmodeFilterGroup}`;

    linkQr(
        "#goHiresmodeFilterGroupValue",
        ".qr-goHiresmodeFilterGroupValue",
        goHiresmodeFilterGroupResult
    );
});

// selectbox
$("#goHiresmodeFilterGroup").change(function () {
    const val = $(this).val();
    goHiresmodeFilterGroup = val;
    goHiresmodeFilterGroupResult = `${goHiresmodeFilterGroupFoodie}://go?filterCategoryId=${goHiresmodeFilterGroupId}&hiresmode=${goHiresmodeFilterGroup}`;

    linkQr(
        "#goHiresmodeFilterGroupValue",
        ".qr-goHiresmodeFilterGroupValue",
        goHiresmodeFilterGroupResult
    );
});

// qr 다운로드
$(".qr-goHiresmodeFilterGroupValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, goHiresmodeFilterGroupResult);
});
