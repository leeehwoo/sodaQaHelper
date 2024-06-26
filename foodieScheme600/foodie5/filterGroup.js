let filterGroupValueFoodie = "foodie";
let filterGroup = "1039171394912387072";
let filterGroupResult = `${filterGroupValueFoodie}://feed?filterGroupId=${filterGroup}`;

// 최초
linkQr("#filterGroupValue", ".qr-filterGroupValue", filterGroupResult);

// selectbox
$("#filterGroupValueFoodie").change(function () {
    const val = $(this).val();
    filterGroupValueFoodie = val;
    filterGroupResult = `${filterGroupValueFoodie}://feed?filterGroupId=${filterGroup}`;

    linkQr("#filterGroupValue", ".qr-filterGroupValue", filterGroupResult);
});

// Input
$("#filterGroup").keyup(function () {
    const val = $(this).val();
    filterGroup = val;
    filterGroupResult = `${filterGroupValueFoodie}://feed?filterGroupId=${filterGroup}`;

    linkQr("#filterGroupValue", ".qr-filterGroupValue", filterGroupResult);
});

// qr 다운로드
$(".qr-filterGroupValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, filterGroupResult);
});
