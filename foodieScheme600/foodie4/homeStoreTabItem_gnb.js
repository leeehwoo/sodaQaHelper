let homeStoreTabItemGnbValueFoodie = "foodie";
let homeStoreTabItemGnb = "main";
let homeStoreTabItemGnbGroupId = "00000";
let homeStoreTabItemGnbItemId = "00000";
let homeStoreTabItemGnbGnb = "home";
let homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

// 최초
linkQr(
    "#homeStoreTabItemGnbValue",
    ".qr-homeStoreTabItemGnbValue",
    homeStoreTabItemGnbResult
);

// selectbox
$("#homeStoreTabItemGnbValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabItemGnbValueFoodie = val;
    homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

    linkQr(
        "#homeStoreTabItemGnbValue",
        ".qr-homeStoreTabItemGnbValue",
        homeStoreTabItemGnbResult
    );
});

// selectbox
$("#homeStoreTabItemGnb").change(function () {
    const val = $(this).val();
    homeStoreTabItemGnb = val;
    homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

    linkQr(
        "#homeStoreTabItemGnbValue",
        ".qr-homeStoreTabItemGnbValue",
        homeStoreTabItemGnbResult
    );
});

// input
$("#homeStoreTabItemGnbGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabItemGnbGroupId = val;
    homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

    linkQr(
        "#homeStoreTabItemGnbValue",
        ".qr-homeStoreTabItemGnbValue",
        homeStoreTabItemGnbResult
    );
});

// input
$("#homeStoreTabItemGnbItemId").keyup(function () {
    const val = $(this).val();
    homeStoreTabItemGnbItemId = val;
    homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

    linkQr(
        "#homeStoreTabItemGnbValue",
        ".qr-homeStoreTabItemGnbValue",
        homeStoreTabItemGnbResult
    );
});

// selectbox
$("#homeStoreTabItemGnbGnb").change(function () {
    const val = $(this).val();
    homeStoreTabItemGnbGnb = val;
    homeStoreTabItemGnbResult = `${homeStoreTabItemGnbValueFoodie}://store?&tab=${homeStoreTabItemGnb}&groupid=${homeStoreTabItemGnbGroupId}&itemId=${homeStoreTabItemGnbItemId}&gnb=${homeStoreTabItemGnbGnb}`;

    linkQr(
        "#homeStoreTabItemGnbValue",
        ".qr-homeStoreTabItemGnbValue",
        homeStoreTabItemGnbResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabItemGnbValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabItemGnbResult);
});
