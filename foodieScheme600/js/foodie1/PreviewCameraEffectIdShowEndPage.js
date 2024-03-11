let PreviewCameraEffectIdShowEndPageFoodie = "foodie";
let PreviewCameraEffectIdShowEndPage = "00000";
let PreviewCameraEffectIdShowEndPageTF = "true";
let PreviewCameraEffectIdShowEndPageResult = `${PreviewCameraEffectIdShowEndPageFoodie}://previewcamera?effectId=${PreviewCameraEffectIdShowEndPage}&showEndPage=${PreviewCameraEffectIdShowEndPageTF}`;

// 최초
linkQr(
    "#PreviewCameraEffectIdShowEndPageValue",
    ".qr-PreviewCameraEffectIdShowEndPageValue",
    PreviewCameraEffectIdShowEndPageResult
);

// selectbox
$("#PreviewCameraEffectIdShowEndPageFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPageFoodie = val;
    PreviewCameraEffectIdShowEndPageResult = `${PreviewCameraEffectIdShowEndPageFoodie}://previewcamera?effectId=${PreviewCameraEffectIdShowEndPage}&showEndPage=${PreviewCameraEffectIdShowEndPageTF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPageValue",
        ".qr-PreviewCameraEffectIdShowEndPageValue",
        PreviewCameraEffectIdShowEndPageResult
    );
});

// input
$("#PreviewCameraEffectIdShowEndPage").keyup(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPage = val;
    PreviewCameraEffectIdShowEndPageResult = `${PreviewCameraEffectIdShowEndPageFoodie}://previewcamera?effectId=${PreviewCameraEffectIdShowEndPage}&showEndPage=${PreviewCameraEffectIdShowEndPageTF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPageValue",
        ".qr-PreviewCameraEffectIdShowEndPageValue",
        PreviewCameraEffectIdShowEndPageResult
    );
});

// selectbox
$("#PreviewCameraEffectIdShowEndPageTF").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPageTF = val;
    PreviewCameraEffectIdShowEndPageResult = `${PreviewCameraEffectIdShowEndPageFoodie}://previewcamera?effectId=${PreviewCameraEffectIdShowEndPage}&showEndPage=${PreviewCameraEffectIdShowEndPageTF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPageValue",
        ".qr-PreviewCameraEffectIdShowEndPageValue",
        PreviewCameraEffectIdShowEndPageResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraEffectIdShowEndPageValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraEffectIdShowEndPageResult);
});
