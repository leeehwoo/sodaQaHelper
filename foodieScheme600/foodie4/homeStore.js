let homeStoreValueFoodie = "foodie";
// let subscribeGoOpen = "film";
let homeStoreValueResult = `${homeStoreValueFoodie}://store`;

// 최초
linkQr("#homeStoreValue", ".qr-homeStoreValue", homeStoreValueResult);

// selectbox
$("#homeStoreValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreValueFoodie = val;
    homeStoreValueResult = `${homeStoreValueFoodie}://store`;

    linkQr("#homeStoreValue", ".qr-homeStoreValue", homeStoreValueResult);
});

// selectbox
// $("#homeStoreValue").change(function () {
//     const val = $(this).val();
//     homeStoreValue = val;
//     homeStoreValueResult = `foodie://go?subscribeGoOpen=page`;

//     linkQr(
//         "#homeStoreValue",
//         ".qr-homeStoreValue",
//         homeStoreValueResult
//     );
// });

// qr 다운로드
$(".qr-homeStoreValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreValueResult);
});
