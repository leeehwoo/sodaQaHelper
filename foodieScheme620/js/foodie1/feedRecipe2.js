let feedRecipe2 = "foodie";
let feedRecipe2Category = "230314665";
let feedRecipe2ContentId = "230315229";
let feedRecipe2Result = `${feedRecipe2}://feed?collectionId=${feedRecipe2Category}&contentId=${feedRecipe2ContentId}`;

// 최초
linkQr("#feedRecipe2Value", ".qr-feedRecipe2", feedRecipe2Result);

// selectbox
$("#feedRecipe2").change(function () {
    const val = $(this).val();
    feedRecipe2 = val;
    feedRecipe2Result = `${feedRecipe2}://feed?collectionId=${feedRecipe2Category}&contentId=${feedRecipe2ContentId}`;

    linkQr("#feedRecipe2Value", ".qr-feedRecipe2", feedRecipe2Result);
});

// input
$("#feedRecipe2Category").keyup(function () {
    const val = $(this).val();
    feedRecipe2Category = val;
    feedRecipe2Result = `${feedRecipe2}://feed?collectionId=${feedRecipe2Category}&contentId=${feedRecipe2ContentId}`;

    linkQr("#feedRecipe2Value", ".qr-feedRecipe2", feedRecipe2Result);
});

// input
$("#feedRecipe2ContentId").keyup(function () {
    const val = $(this).val();
    feedRecipe2ContentId = val;
    feedRecipe2Result = `${feedRecipe2}://feed?collectionId=${feedRecipe2Category}&contentId=${feedRecipe2ContentId}`;

    linkQr("#feedRecipe2Value", ".qr-feedRecipe2", feedRecipe2Result);
});

// qr 다운로드
$(".qr-feedRecipe2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedRecipe2Result);
});
