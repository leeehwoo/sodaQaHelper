let homeStoreTabCategoryValueFoodie = "foodie";
let homeStoreTabCategory = "main";
let homeStoreTabCategoryCategory = "shortcut";
let homeStoreTabCategoryGroupId = "00000";
let homeStoreTabCategoryResult = `${homeStoreTabCategoryValueFoodie}://store?&tab=${homeStoreTabCategory}&category=${homeStoreTabCategoryCategory}&groupid=${homeStoreTabCategoryGroupId}`;

// 최초
linkQr(
    "#homeStoreTabCategoryValue",
    ".qr-homeStoreTabCategoryValue",
    homeStoreTabCategoryResult
);

// selectbox
$("#homeStoreTabCategoryValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryValueFoodie = val;
    homeStoreTabCategoryResult = `${homeStoreTabCategoryValueFoodie}://store?&tab=${homeStoreTabCategory}&category=${homeStoreTabCategoryCategory}&groupid=${homeStoreTabCategoryGroupId}`;

    linkQr(
        "#homeStoreTabCategoryValue",
        ".qr-homeStoreTabCategoryValue",
        homeStoreTabCategoryResult
    );
});

// selectbox
$("#homeStoreTabCategory").change(function () {
    const val = $(this).val();
    homeStoreTabCategory = val;
    homeStoreTabCategoryResult = `${homeStoreTabCategoryValueFoodie}://store?&tab=${homeStoreTabCategory}&category=${homeStoreTabCategoryCategory}&groupid=${homeStoreTabCategoryGroupId}`;

    linkQr(
        "#homeStoreTabCategoryValue",
        ".qr-homeStoreTabCategoryValue",
        homeStoreTabCategoryResult
    );
});

// selectbox
$("#homeStoreTabCategoryCategory").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryCategory = val;
    homeStoreTabCategoryResult = `${homeStoreTabCategoryValueFoodie}://store?&tab=${homeStoreTabCategory}&category=${homeStoreTabCategoryCategory}&groupid=${homeStoreTabCategoryGroupId}`;

    linkQr(
        "#homeStoreTabCategoryValue",
        ".qr-homeStoreTabCategoryValue",
        homeStoreTabCategoryResult
    );
});

// input
$("#homeStoreTabCategoryGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabCategoryGroupId = val;
    homeStoreTabCategoryResult = `${homeStoreTabCategoryValueFoodie}://store?&tab=${homeStoreTabCategory}&category=${homeStoreTabCategoryCategory}&groupid=${homeStoreTabCategoryGroupId}`;

    linkQr(
        "#homeStoreTabCategoryValue",
        ".qr-homeStoreTabCategoryValue",
        homeStoreTabCategoryResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabCategoryValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabCategoryResult);
});
