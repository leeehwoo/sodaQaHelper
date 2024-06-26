let homeStoreTabValueFoodie = "foodie";
let homeStoreTab = "main";
let homeStoreTabResult = `${homeStoreTabValueFoodie}://store?tab=${homeStoreTab}`;

// 최초
linkQr("#homeStoreTabValue", ".qr-homeStoreTabValue", homeStoreTabResult);

// selectbox
$("#homeStoreTabValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabValueFoodie = val;
    homeStoreTabResult = `${homeStoreTabValueFoodie}://store?tab=${homeStoreTab}`;

    linkQr("#homeStoreTabValue", ".qr-homeStoreTabValue", homeStoreTabResult);
});

// selectbox
$("#homeStoreTab").change(function () {
    const val = $(this).val();
    homeStoreTab = val;
    homeStoreTabResult = `${homeStoreTabValueFoodie}://store?tab=${homeStoreTab}`;

    linkQr("#homeStoreTabValue", ".qr-homeStoreTabValue", homeStoreTabResult);
});

// qr 다운로드
$(".qr-homeStoreTabValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabResult);
});
