let homeStoreValueGnbFoodie = "foodie";
let homeStoreTabGnb = "home";
let homeStoreValueGnbResult = `${homeStoreValueGnbFoodie}://store?gnb=${homeStoreTabGnb}`;

// 최초
linkQr("#homeStoreValueGnb", ".qr-homeStoreValueGnb", homeStoreValueGnbResult);

// selectbox
$("#homeStoreValueGnbFoodie").change(function () {
    const val = $(this).val();
    homeStoreValueGnbFoodie = val;
    homeStoreValueGnbResult = `${homeStoreValueGnbFoodie}://store?gnb=${homeStoreTabGnb}`;

    linkQr(
        "#homeStoreValueGnb",
        ".qr-homeStoreValueGnb",
        homeStoreValueGnbResult
    );
});

// selectbox
$("#homeStoreTabGnb").change(function () {
    const val = $(this).val();
    homeStoreTabGnb = val;
    homeStoreValueGnbResult = `${homeStoreValueGnbFoodie}://store?gnb=${homeStoreTabGnb}`;

    linkQr(
        "#homeStoreValueGnb",
        ".qr-homeStoreValueGnb",
        homeStoreValueGnbResult
    );
});

// qr 다운로드
$(".qr-homeStoreValueGnb-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreValueGnbResult);
});
