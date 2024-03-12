let filterGroupContentValueFoodie = "foodie";
let filterGroupContent = "00000";
let filterGroupContentfilterId = "00000";
let filterGroupContentResult = `${filterGroupContentValueFoodie}://feed?filterGroupId=${filterGroupContent}&filterId=${filterGroupContentfilterId}`;

// 최초
linkQr(
    "#filterGroupContentValue",
    ".qr-filterGroupContentValue",
    filterGroupContentResult
);

// selectbox
$("#filterGroupContentValueFoodie").change(function () {
    const val = $(this).val();
    filterGroupContentValueFoodie = val;
    filterGroupContentResult = `${filterGroupContentValueFoodie}://feed?filterGroupId=${filterGroupContent}&filterId=${filterGroupContentfilterId}`;

    linkQr(
        "#filterGroupContentValue",
        ".qr-filterGroupContentValue",
        filterGroupContentResult
    );
});

// Input
$("#filterGroupContent").keyup(function () {
    const val = $(this).val();
    filterGroupContent = val;
    filterGroupContentResult = `${filterGroupContentValueFoodie}://feed?filterGroupId=${filterGroupContent}&filterId=${filterGroupContentfilterId}`;

    linkQr(
        "#filterGroupContentValue",
        ".qr-filterGroupContentValue",
        filterGroupContentResult
    );
});

// Input
$("#filterGroupContentfilterId").keyup(function () {
    const val = $(this).val();
    filterGroupContentfilterId = val;
    filterGroupContentResult = `${filterGroupContentValueFoodie}://feed?filterGroupId=${filterGroupContent}&filterId=${filterGroupContentfilterId}`;

    linkQr(
        "#filterGroupContentValue",
        ".qr-filterGroupContentValue",
        filterGroupContentResult
    );
});

// qr 다운로드
$(".qr-filterGroupContentValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, filterGroupContentResult);
});
