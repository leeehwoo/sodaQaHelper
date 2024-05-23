let purchase = "foodie";
let purchaseTab = "yearly";
let purchaseResult = `${purchase}://purchase?type=subscribe&product=${purchaseTab}`;

// 최초
linkQr("#purchaseValue", ".qr-purchase", purchaseResult);

// selectbox
$("#purchase").change(function () {
    const val = $(this).val();
    purchase = val;
    purchaseResult = `${purchase}://purchase?type=subscribe&product=${purchaseTab}`;
    linkQr("#purchaseValue", ".qr-purchase", purchaseResult);
});

// selectbox
$("#purchaseTab").change(function () {
    const val = $(this).val();
    purchaseTab = val;
    purchaseResult = `${purchase}://purchase?type=subscribe&product=${purchaseTab}`;
    linkQr("#purchaseValue", ".qr-purchase", purchaseResult);
});

// qr 다운로드
$(".qr-purchase-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, purchaseResult);
});
