let homeOpenEffectGnbValueFoodie = "foodie";
let homeOpenEffectGnbId = "00000";
let homeOpenEffectGnbGnb = "home";
let homeOpenEffectGnbResult = `${homeOpenEffectGnbValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectGnbId}&gnb=${homeOpenEffectGnbGnb}`;

// 최초
linkQr(
    "#homeOpenEffectGnbValue",
    ".qr-homeOpenEffectGnbValue",
    homeOpenEffectGnbResult
);

// selectbox
$("#homeOpenEffectGnbValueFoodie").change(function () {
    const val = $(this).val();
    homeOpenEffectGnbValueFoodie = val;
    homeOpenEffectGnbResult = `${homeOpenEffectGnbValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectGnbId}&gnb=${homeOpenEffectGnbGnb}`;

    linkQr(
        "#homeOpenEffectGnbValue",
        ".qr-homeOpenEffectGnbValue",
        homeOpenEffectGnbResult
    );
});

// input
$("#homeOpenEffectGnbId").keyup(function () {
    const val = $(this).val();
    homeOpenEffectGnbId = val;
    homeOpenEffectGnbResult = `${homeOpenEffectGnbValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectGnbId}&gnb=${homeOpenEffectGnbGnb}`;

    linkQr(
        "#homeOpenEffectGnbValue",
        ".qr-homeOpenEffectGnbValue",
        homeOpenEffectGnbResult
    );
});

// selectbox
$("#homeOpenEffectGnbGnb").change(function () {
    const val = $(this).val();
    homeOpenEffectGnbGnb = val;
    homeOpenEffectGnbResult = `${homeOpenEffectGnbValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectGnbId}&gnb=${homeOpenEffectGnbGnb}`;

    linkQr(
        "#homeOpenEffectGnbValue",
        ".qr-homeOpenEffectGnbValue",
        homeOpenEffectGnbResult
    );
});

// qr 다운로드
$(".qr-homeOpenEffectGnbValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeOpenEffectGnbResult);
});
