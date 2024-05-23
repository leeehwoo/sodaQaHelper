let pickTab = "foodie";
let pickTabTab = "filter";
let pickTabResult = `${pickTab}://pick?tab=${pickTabTab}`;

// 최초
linkQr("#pickTabValue", ".qr-pickTab", pickTabResult);

// selectbox
$("#pickTab").change(function () {
    const val = $(this).val();
    pickTab = val;
    pickTabResult = `${pickTab}://pick?tab=${pickTabTab}`;
    linkQr("#pickTabValue", ".qr-pickTab", pickTabResult);
});

// selectbox
$("#pickTabTab").change(function () {
    const val = $(this).val();
    pickTabTab = val;
    pickTabResult = `${pickTab}://pick?tab=${pickTabTab}`;
    linkQr("#pickTabValue", ".qr-pickTab", pickTabResult);
});

// qr 다운로드
$(".qr-pickTab-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, pickTabResult);
});
