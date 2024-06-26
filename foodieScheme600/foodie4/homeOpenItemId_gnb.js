let homeOpenGnbValueFoodie = "foodie";
let homeOpenGnbItemId = "00000";
let homeOpenGnbGnb = "home";
let homeOpenGnbItemIdResult = `${homeOpenGnbValueFoodie}://store?open=page&itemid=${homeOpenGnbItemId}&gnb=${homeOpenGnbGnb}`;

// 최초
linkQr("#homeOpenGnbValue", ".qr-homeOpenGnbValue", homeOpenGnbItemIdResult);

// selectbox
$("#homeOpenGnbValueFoodie").change(function () {
    const val = $(this).val();
    homeOpenGnbValueFoodie = val;
    homeOpenGnbItemIdResult = `${homeOpenGnbValueFoodie}://store?open=page&itemid=${homeOpenGnbItemId}&gnb=${homeOpenGnbGnb}`;

    linkQr(
        "#homeOpenGnbValue",
        ".qr-homeOpenGnbValue",
        homeOpenGnbItemIdResult
    );
});

// input
$("#homeOpenGnbItemId").keyup(function () {
    const val = $(this).val();
    homeOpenGnbItemId = val;
    homeOpenGnbItemIdResult = `${homeOpenGnbValueFoodie}://store?open=page&itemid=${homeOpenGnbItemId}&gnb=${homeOpenGnbGnb}`;

    linkQr(
        "#homeOpenGnbValue",
        ".qr-homeOpenGnbValue",
        homeOpenGnbItemIdResult
    );
});

// selectbox
$("#homeOpenGnbGnb").change(function () {
    const val = $(this).val();
    homeOpenGnbGnb = val;
    homeOpenGnbItemIdResult = `${homeOpenGnbValueFoodie}://store?open=page&itemid=${homeOpenGnbItemId}&gnb=${homeOpenGnbGnb}`;

    linkQr(
        "#homeOpenGnbValue",
        ".qr-homeOpenGnbValue",
        homeOpenGnbItemIdResult
    );
});

// qr 다운로드
$(".qr-homeOpenGnbValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeOpenGnbItemIdResult);
});
