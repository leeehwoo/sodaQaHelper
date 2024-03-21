let homeStoreTabCategoryTwodepthGnbValueFoodie = "foodie";
let homeStoreTabCategoryTwodepthGnb = "main";
let homeStoreTabCategoryTwodepthGnbCategory = "topchart";
let homeStoreTabCategoryTwodepthGnbGroupId = "00000";
let homeStoreTabCategoryTwodepthGnbGnb = "home";
let homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&twodepthcategory=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

// 최초
linkQr(
    "#homeStoreTabCategoryTwodepthGnbValue",
    ".qr-homeStoreTabCategoryTwodepthGnbValue",
    homeStoreTabCategoryTwodepthGnbResult
);

// selectbox
$("#homeStoreTabCategoryTwodepthGnbValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGnbValueFoodie = val;
    homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&twodepthcategory=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthGnbValue",
        ".qr-homeStoreTabCategoryTwodepthGnbValue",
        homeStoreTabCategoryTwodepthGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryTwodepthGnb").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGnb = val;
    homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&twodepthcategory=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthGnbValue",
        ".qr-homeStoreTabCategoryTwodepthGnbValue",
        homeStoreTabCategoryTwodepthGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryTwodepthGnbCategory").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGnbCategory = val;
    homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&twodepthcategory=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthGnbValue",
        ".qr-homeStoreTabCategoryTwodepthGnbValue",
        homeStoreTabCategoryTwodepthGnbResult
    );
});

// input
$("#homeStoreTabCategoryTwodepthGnbGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGnbGroupId = val;
    homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&category=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthGnbValue",
        ".qr-homeStoreTabCategoryTwodepthGnbValue",
        homeStoreTabCategoryTwodepthGnbResult
    );
});

// selectbox
$("#homeStoreTabCategoryTwodepthGnbGnb").change(function () {
    const val = $(this).val();
    homeStoreTabCategoryTwodepthGnbGnb = val;
    homeStoreTabCategoryTwodepthGnbResult = `${homeStoreTabCategoryTwodepthGnbValueFoodie}://store?&tab=${homeStoreTabCategoryTwodepthGnb}&twodepthcategory=${homeStoreTabCategoryTwodepthGnbCategory}&groupid=${homeStoreTabCategoryTwodepthGnbGroupId}&gnb=${homeStoreTabCategoryTwodepthGnbGnb}`;

    linkQr(
        "#homeStoreTabCategoryTwodepthGnbValue",
        ".qr-homeStoreTabCategoryTwodepthGnbValue",
        homeStoreTabCategoryTwodepthGnbResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabCategoryTwodepthGnbValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabCategoryTwodepthGnbResult);
});
