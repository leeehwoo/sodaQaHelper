let feedCollectionContentValueFoodie = "foodie";
let feedCollectionContent = "00000";
let feedCollectionContentContent = "00000";
let feedCollectionContentResult = `${feedCollectionContentValueFoodie}://feed?collectionId=${feedCollectionContent}&&contentId=${feedCollectionContentContent}`;

// 최초
linkQr(
    "#feedCollectionContentValue",
    ".qr-feedCollectionContentValue",
    feedCollectionContentResult
);

// selectbox
$("#feedCollectionContentValueFoodie").change(function () {
    const val = $(this).val();
    feedCollectionContentValueFoodie = val;
    feedCollectionContentResult = `${feedCollectionContentValueFoodie}://feed?collectionId=${feedCollectionContent}&&contentId=${feedCollectionContentContent}`;

    linkQr(
        "#feedCollectionContentValue",
        ".qr-feedCollectionContentValue",
        feedCollectionContentResult
    );
});

// Input
$("#feedCollectionContent").keyup(function () {
    const val = $(this).val();
    feedCollectionContent = val;
    feedCollectionContentResult = `${feedCollectionContentValueFoodie}://feed?collectionId=${feedCollectionContent}&&contentId=${feedCollectionContentContent}`;

    linkQr(
        "#feedCollectionContentValue",
        ".qr-feedCollectionContentValue",
        feedCollectionContentResult
    );
});

// Input
$("#feedCollectionContentContent").keyup(function () {
    const val = $(this).val();
    feedCollectionContentContent = val;
    feedCollectionContentResult = `${feedCollectionContentValueFoodie}://feed?collectionId=${feedCollectionContent}&&contentId=${feedCollectionContentContent}`;

    linkQr(
        "#feedCollectionContentValue",
        ".qr-feedCollectionContentValue",
        feedCollectionContentResult
    );
});

// qr 다운로드
$(".qr-feedCollectionContentValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedCollectionContentResult);
});
