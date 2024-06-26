let feedRecipe3 = "foodie";
let feedRecipe3Category = "00000";
let feedRecipe3ContentId = "00000";
let feedRecipe3Result = `${feedRecipe3}://feed?filterGroupId=${feedRecipe3Category}&filterId=${feedRecipe3ContentId}`;

// 최초
linkQr("#feedRecipe3Value", ".qr-feedRecipe3", feedRecipe3Result);

// selectbox
$("#feedRecipe3").change(function () {
    const val = $(this).val();
    feedRecipe3 = val;
    feedRecipe3Result = `${feedRecipe3}://feed?filterGroupId=${feedRecipe3Category}&filterId=${feedRecipe3ContentId}`;

    linkQr("#feedRecipe3Value", ".qr-feedRecipe3", feedRecipe3Result);
});

// input
$("#feedRecipe3Category").keyup(function () {
    const val = $(this).val();
    feedRecipe3Category = val;
    feedRecipe3Result = `${feedRecipe3}://feed?filterGroupId=${feedRecipe3Category}&filterId=${feedRecipe3ContentId}`;

    linkQr("#feedRecipe3Value", ".qr-feedRecipe3", feedRecipe3Result);
});

// input
$("#feedRecipe3ContentId").keyup(function () {
    const val = $(this).val();
    feedRecipe3ContentId = val;
    feedRecipe3Result = `${feedRecipe3}://feed?filterGroupId=${feedRecipe3Category}&filterId=${feedRecipe3ContentId}`;

    linkQr("#feedRecipe3Value", ".qr-feedRecipe3", feedRecipe3Result);
});

// qr 다운로드
$(".qr-feedRecipe3-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedRecipe3Result);
});
