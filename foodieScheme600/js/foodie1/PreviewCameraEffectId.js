let PreviewCameraEffectIdFoodie = "foodie";
let PreviewCameraEffectId = "00000";
let PreviewCameraEffectIdResult = `${PreviewCameraEffectIdFoodie}://previewcamera?effectId=${PreviewCameraEffectId}`;

// 최초
linkQr(
    "#PreviewCameraEffectIdValue",
    ".qr-PreviewCameraEffectIdValue",
    PreviewCameraEffectIdResult
);

// selectbox
$("#PreviewCameraEffectIdFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdFoodie = val;
    PreviewCameraEffectIdResult = `${PreviewCameraEffectIdFoodie}://previewcamera?effectId=${PreviewCameraEffectId}`;

    linkQr(
        "#PreviewCameraEffectIdValue",
        ".qr-PreviewCameraEffectIdValue",
        PreviewCameraEffectIdResult
    );
});

// input
$("#PreviewCameraEffectId").keyup(function () {
    const val = $(this).val();
    PreviewCameraEffectId = val;
    PreviewCameraEffectIdResult = `${PreviewCameraEffectIdFoodie}://previewcamera?effectId=${PreviewCameraEffectId}`;

    linkQr(
        "#PreviewCameraEffectIdValue",
        ".qr-PreviewCameraEffectIdValue",
        PreviewCameraEffectIdResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraEffectIdValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraEffectIdResult);
});
