let homeStoreTabCategoryGnbValueFoodie = "foodie";
let homeStoreTabCategoryGnb = "main";
let homeStoreTabCategoryGnbCategory = "shortcut";
let homeStoreTabCategoryGnbGroupId = "00000";
let homeStoreTabCategoryGnbGnb = "home";
let homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

// 최초
linkQr(
    "#homeStoreTabCategoryGnbValue",
    ".qr-homeStoreTabCategoryGnbValue",
    homeStoreTabCategoryGnbResult
);

// selectbox
$("#homeStoreTabCategoryGnbValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryGnbValueFoodie = val;
    homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryGnbValue",
        ".qr-homeStoreTabCategoryGnbValue",
        homeStoreTabCategoryGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryGnb").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryGnb = val;
    homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryGnbValue",
        ".qr-homeStoreTabCategoryGnbValue",
        homeStoreTabCategoryGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryGnbCategory").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryGnbCategory = val;
    homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryGnbValue",
        ".qr-homeStoreTabCategoryGnbValue",
        homeStoreTabCategoryGnbResult
    );
});

// input
$("#homeStoreTabCategoryGnbGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabCategoryGnbGroupId = val;
    homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryGnbValue",
        ".qr-homeStoreTabCategoryGnbValue",
        homeStoreTabCategoryGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryGnbGnb").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryGnbGnb = val;
    homeStoreTabCategoryGnbResult = `${homeStoreTabCategoryGnbValueFoodie}://store?&tab=${homeStoreTabCategoryGnb}&category=${homeStoreTabCategoryGnbCategory}&groupid=${homeStoreTabCategoryGnbGroupId}&gnb=${homeStoreTabCategoryGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryGnbValue",
        ".qr-homeStoreTabCategoryGnbValue",
        homeStoreTabCategoryGnbResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabCategoryGnbValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabCategoryGnbResult);
});
