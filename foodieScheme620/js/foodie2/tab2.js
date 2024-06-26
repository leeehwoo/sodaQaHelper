let tab2 = "foodie";
let tab2Tab = "main";
let tab2GroupId = "00000";
let tab2ItemId = "00000";
let tab2Result = `${tab2}://store?open=page&itemId=${tab2ItemId}`;

// 최초
linkQr("#tab2Value", ".qr-tab2", tab2Result);

// selectbox
$("#tab2").change(function () {
    const val = $(this).val();
    tab2 = val;
    tab2Result = `${tab2}://store?open=page&itemId=${tab2ItemId}`;

    linkQr("#tab2Value", ".qr-tab2", tab2Result);
});

// selectbox
$("#tab2Tab").change(function () {
    const val = $(this).val();
    tab2Tab = val;
    tab2Result = `${tab2}://store?open=page&itemId=${tab2ItemId}`;

    linkQr("#tab2Value", ".qr-tab2", tab2Result);
});

// input
$("#tab2GroupId").keyup(function () {
    const val = $(this).val();
    tab2GroupId = val;
    tab2Result = `${tab2}://store?open=page&itemId=${tab2ItemId}`;

    linkQr("#tab2Value", ".qr-tab2", tab2Result);
});

// input
$("#tab2ItemId").keyup(function () {
    const val = $(this).val();
    tab2ItemId = val;
    tab2Result = `${tab2}://store?open=page&itemId=${tab2ItemId}`;

    linkQr("#tab2Value", ".qr-tab2", tab2Result);
});

// qr 다운로드
$(".qr-tab2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, tab2Result);
});
