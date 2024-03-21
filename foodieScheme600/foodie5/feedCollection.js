let feedCollectionValueFoodie = "foodie";
let feedCollection = "221107669";
let feedCollectionResult = `${feedCollectionValueFoodie}://feed?collectionId=${feedCollection}`;

// 최초
linkQr("#feedCollectionValue", ".qr-feedCollectionValue", feedCollectionResult);

// selectbox
$("#feedCollectionValueFoodie").change(function () {
    const val = $(this).val();
    feedCollectionValueFoodie = val;
    feedCollectionResult = `${feedCollectionValueFoodie}://feed?collectionId=${feedCollection}`;

    linkQr(
        "#feedCollectionValue",
        ".qr-feedCollectionValue",
        feedCollectionResult
    );
});

// Input
$("#feedCollection").keyup(function () {
    const val = $(this).val();
    feedCollection = val;
    feedCollectionResult = `${feedCollectionValueFoodie}://feed?collectionId=${feedCollection}`;

    linkQr(
        "#feedCollectionValue",
        ".qr-feedCollectionValue",
        feedCollectionResult
    );
});

// qr 다운로드
$(".qr-feedCollectionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedCollectionResult);
});
