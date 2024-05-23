let tab = "foodie";
let tabTab = "main";
let tabGroupId = "00000";
let tabItemId = "00000";
let tabResult = `${tab}://store?tab=${tabTab}&groupId=${tabGroupId}&itemId=${tabItemId}`;

// 최초
linkQr("#tabValue", ".qr-tab", tabResult);

// selectbox
$("#tab").change(function () {
    const val = $(this).val();
    tab = val;
    tabResult = `${tab}://store?tab=${tabTab}&groupId=${tabGroupId}&itemId=${tabItemId}`;

    linkQr("#tabValue", ".qr-tab", tabResult);
});

// selectbox
$("#tabTab").change(function () {
    const val = $(this).val();
    tabTab = val;
    tabResult = `${tab}://store?tab=${tabTab}&groupId=${tabGroupId}&itemId=${tabItemId}`;

    linkQr("#tabValue", ".qr-tab", tabResult);
});

// input
$("#tabGroupId").keyup(function () {
    const val = $(this).val();
    tabGroupId = val;
    tabResult = `${tab}://store?tab=${tabTab}&groupId=${tabGroupId}&itemId=${tabItemId}`;

    linkQr("#tabValue", ".qr-tab", tabResult);
});

// input
$("#tabItemId").keyup(function () {
    const val = $(this).val();
    tabItemId = val;
    tabResult = `${tab}://store?tab=${tabTab}&groupId=${tabGroupId}&itemId=${tabItemId}`;

    linkQr("#tabValue", ".qr-tab", tabResult);
});

// qr 다운로드
$(".qr-tab-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, tabResult);
});
