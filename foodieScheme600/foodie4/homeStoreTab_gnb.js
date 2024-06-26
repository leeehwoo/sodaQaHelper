let homeStoreTabGnb2ValueFoodie = "foodie";
let homeStoreTabGnb2 = "main";
let homeStoreTabGnb2Gnb = "home";
let homeStoreTabGnb2Result = `${homeStoreTabGnb2ValueFoodie}://store?tab=${homeStoreTabGnb2}&gnb=${homeStoreTabGnb2Gnb}`;

// 최초
linkQr(
    "#homeStoreTabGnb2Value",
    ".qr-homeStoreTabGnb2Value",
    homeStoreTabGnb2Result
);

// selectbox
$("#homeStoreTabGnb2ValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabGnb2ValueFoodie = val;
    homeStoreTabGnb2Result = `${homeStoreTabGnb2ValueFoodie}://store?tab=${homeStoreTabGnb2}&gnb=${homeStoreTabGnb2Gnb}`;

    linkQr(
        "#homeStoreTabGnb2Value",
        ".qr-homeStoreTabGnb2Value",
        homeStoreTabGnb2Result
    );
});

// selectbox
$("#homeStoreTabGnb2").change(function () {
    const val = $(this).val();
    homeStoreTabGnb2 = val;
    homeStoreTabGnb2Result = `${homeStoreTabGnb2ValueFoodie}://store?tab=${homeStoreTabGnb2}&gnb=${homeStoreTabGnb2Gnb}`;

    linkQr(
        "#homeStoreTabGnb2Value",
        ".qr-homeStoreTabGnb2Value",
        homeStoreTabGnb2Result
    );
});

// selectbox
$("#homeStoreTabGnb2Gnb").change(function () {
    const val = $(this).val();
    homeStoreTabGnb2Gnb = val;
    homeStoreTabGnb2Result = `${homeStoreTabGnb2ValueFoodie}://store?tab=${homeStoreTabGnb2}&gnb=${homeStoreTabGnb2Gnb}`;

    linkQr(
        "#homeStoreTabGnb2Value",
        ".qr-homeStoreTabGnb2Value",
        homeStoreTabGnb2Result
    );
});

// qr 다운로드
$(".qr-homeStoreTabGnb2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabGnb2Result);
});
