let homeOpenValueFoodie = "foodie";
let homeOpenItemId = "00000";
let homeOpenItemIdResult = `${homeOpenValueFoodie}://store?open=page&itemid=${homeOpenItemId}`;

// 최초
linkQr("#homeOpenValue", ".qr-homeOpenValue", homeOpenItemIdResult);

// selectbox
$("#homeOpenValueFoodie").change(function () {
    const val = $(this).val();
    homeOpenValueFoodie = val;
    homeOpenItemIdResult = `${homeOpenValueFoodie}://store?open=page&itemid=${homeOpenItemId}`;

    linkQr("#homeOpenValue", ".qr-homeOpenValue", homeOpenItemIdResult);
});

// input
$("#homeOpenItemId").keyup(function () {
    const val = $(this).val();
    homeOpenItemId = val;
    homeOpenItemIdResult = `${homeOpenValueFoodie}://store?open=page&itemid=${homeOpenItemId}`;

    linkQr("#homeOpenValue", ".qr-homeOpenValue", homeOpenItemIdResult);
});

// qr 다운로드
$(".qr-homeOpenValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeOpenItemIdResult);
});
