let feedRecipe = "foodie";
let feedRecipeCategory = "202209071529139";
let feedRecipeContentId = "240328405";
let feedRecipeResult = `${feedRecipe}://feed?categoryId=${feedRecipeCategory}&contentId=${feedRecipeContentId}`;

// 최초
linkQr("#feedRecipeValue", ".qr-feedRecipe", feedRecipeResult);

// selectbox
$("#feedRecipe").change(function () {
    const val = $(this).val();
    feedRecipe = val;
    feedRecipeResult = `${feedRecipe}://feed?categoryId=${feedRecipeCategory}&contentId=${feedRecipeContentId}`;

    linkQr("#feedRecipeValue", ".qr-feedRecipe", feedRecipeResult);
});

// input
$("#feedRecipeCategory").keyup(function () {
    const val = $(this).val();
    feedRecipeCategory = val;
    feedRecipeResult = `${feedRecipe}://feed?categoryId=${feedRecipeCategory}&contentId=${feedRecipeContentId}`;

    linkQr("#feedRecipeValue", ".qr-feedRecipe", feedRecipeResult);
});

// input
$("#feedRecipeContentId").keyup(function () {
    const val = $(this).val();
    feedRecipeContentId = val;
    feedRecipeResult = `${feedRecipe}://feed?categoryId=${feedRecipeCategory}&contentId=${feedRecipeContentId}`;

    linkQr("#feedRecipeValue", ".qr-feedRecipe", feedRecipeResult);
});

// qr 다운로드
$(".qr-feedRecipe-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, feedRecipeResult);
});
