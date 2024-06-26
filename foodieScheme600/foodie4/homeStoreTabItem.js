let homeStoreTabItemValueFoodie = "foodie";
let homeStoreTabItem = "main";
let homeStoreTabItemGroupId = "00000";
let homeStoreTabItemItemId = "00000";
let homeStoreTabItemResult = `${homeStoreTabItemValueFoodie}://store?&tab=${homeStoreTabItem}&groupid=${homeStoreTabItemGroupId}&itemId=${homeStoreTabItemItemId}`;

// 최초
linkQr(
    "#homeStoreTabItemValue",
    ".qr-homeStoreTabItemValue",
    homeStoreTabItemResult
);

// selectbox
$("#homeStoreTabItemValueFoodie").change(function () {
    const val = $(this).val();
    homeStoreTabItemValueFoodie = val;
    homeStoreTabItemResult = `${homeStoreTabItemValueFoodie}://store?&tab=${homeStoreTabItem}&groupid=${homeStoreTabItemGroupId}&itemId=${homeStoreTabItemItemId}`;

    linkQr(
        "#homeStoreTabItemValue",
        ".qr-homeStoreTabItemValue",
        homeStoreTabItemResult
    );
});

// selectbox
$("#homeStoreTabItem").change(function () {
    const val = $(this).val();
    homeStoreTabItem = val;
    homeStoreTabItemResult = `${homeStoreTabItemValueFoodie}://store?&tab=${homeStoreTabItem}&groupid=${homeStoreTabItemGroupId}&itemId=${homeStoreTabItemItemId}`;

    linkQr(
        "#homeStoreTabItemValue",
        ".qr-homeStoreTabItemValue",
        homeStoreTabItemResult
    );
});

// input
$("#homeStoreTabItemGroupId").keyup(function () {
    const val = $(this).val();
    homeStoreTabItemGroupId = val;
    homeStoreTabItemResult = `${homeStoreTabItemValueFoodie}://store?&tab=${homeStoreTabItem}&groupid=${homeStoreTabItemGroupId}&itemId=${homeStoreTabItemItemId}`;

    linkQr(
        "#homeStoreTabItemValue",
        ".qr-homeStoreTabItemValue",
        homeStoreTabItemResult
    );
});

// input
$("#homeStoreTabItemItemId").keyup(function () {
    const val = $(this).val();
    homeStoreTabItemItemId = val;
    homeStoreTabItemResult = `${homeStoreTabItemValueFoodie}://store?&tab=${homeStoreTabItem}&groupid=${homeStoreTabItemGroupId}&itemId=${homeStoreTabItemItemId}`;

    linkQr(
        "#homeStoreTabItemValue",
        ".qr-homeStoreTabItemValue",
        homeStoreTabItemResult
    );
});

// qr 다운로드
$(".qr-homeStoreTabItemValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, homeStoreTabItemResult);
});
