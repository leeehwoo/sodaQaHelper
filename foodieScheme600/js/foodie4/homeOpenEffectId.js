let homeOpenEffectValueFoodie = "foodie";
let homeOpenEffectId = "00000";
let homeOpenEffectResult = `${homeOpenEffectValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectId}`;

// 최초
linkQr("#homeOpenEffectValue", ".qr-homeOpenEffectValue", homeOpenEffectResult);

// selectbox
$("#homeOpenEffectValueFoodie").change(function () {
    const val = $(this).val();
    homeOpenEffectValueFoodie = val;
    homeOpenEffectResult = `${homeOpenEffectValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectId}`;

    linkQr(
        "#homeOpenEffectValue",
        ".qr-homeOpenEffectValue",
        homeOpenEffectResult
    );
});

// input
$("#homeOpenEffectId").keyup(function () {
    const val = $(this).val();
    homeOpenEffectId = val;
    homeOpenEffectResult = `${homeOpenEffectValueFoodie}://store?open=page&category=effect&effectId=${homeOpenEffectId}`;

    linkQr(
        "#homeOpenEffectValue",
        ".qr-homeOpenEffectValue",
        homeOpenEffectResult
    );
});

// qr 다운로드
$(".qr-homeOpenEffectValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeOpenEffectResult);
});
