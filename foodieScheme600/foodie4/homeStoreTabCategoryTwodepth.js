let homeStoreTabCategoryTwodepthValueFoodie = "foodie";
let homeStoreTabCategoryTwodepth = "main";
let homeStoreTabCategoryTwodepthCategory = "topchart";
let homeStoreTabCategoryTwodepthGroupId = "00000";
let homeStoreTabCategoryTwodepthResult = `${homeStoreTabCategoryTwodepthValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepth}&twodepthcategory=${homeStoreTabCategoryTwodepthCategory}&groupid=${homeStoreTabCategoryTwodepthGroupId}`;

// 최초
linkQr(
    "#homeStoreTabCategoryTwodepthValue",
    ".qr-homeStoreTabCategoryTwodepthValue",
    homeStoreTabCategoryTwodepthResult
);

// selectbox
$("#homeStoreTabCategoryTwodepthValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthValueFoodie = val;
    homeStoreTabCategoryTwodepthResult = `${homeStoreTabCategoryTwodepthValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepth}&twodepthcategory=${homeStoreTabCategoryTwodepthCategory}&groupid=${homeStoreTabCategoryTwodepthGroupId}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthValue",
        ".qr-homeStoreTabCategoryTwodepthValue",
        homeStoreTabCategoryTwodepthResult
    );
});

// selectbox
$("#homeStoreTabCategoryTwodepth").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepth = val;
    homeStoreTabCategoryTwodepthResult = `${homeStoreTabCategoryTwodepthValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepth}&twodepthcategory=${homeStoreTabCategoryTwodepthCategory}&groupid=${homeStoreTabCategoryTwodepthGroupId}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthValue",
        ".qr-homeStoreTabCategoryTwodepthValue",
        homeStoreTabCategoryTwodepthResult
    );
});

// selectbox
$("#homeStoreTabCategoryTwodepthCategory").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthCategory = val;
    homeStoreTabCategoryTwodepthResult = `${homeStoreTabCategoryTwodepthValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepth}&twodepthcategory=${homeStoreTabCategoryTwodepthCategory}&groupid=${homeStoreTabCategoryTwodepthGroupId}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthValue",
        ".qr-homeStoreTabCategoryTwodepthValue",
        homeStoreTabCategoryTwodepthResult
    );
});

// input
$("#homeStoreTabCategoryTwodepthGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGroupId = val;
    homeStoreTabCategoryTwodepthResult = `${homeStoreTabCategoryTwodepthValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepth}&category=${homeStoreTabCategoryTwodepthCategory}&groupid=${homeStoreTabCategoryTwodepthGroupId}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthValue",
        ".qr-homeStoreTabCategoryTwodepthValue",
        homeStoreTabCategoryTwodepthResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabCategoryTwodepthValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabCategoryTwodepthResult);
});
