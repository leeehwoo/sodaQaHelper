let PreviewCameraEffectIdShowEndPage2Foodie = "foodie";
let PreviewCameraEffectIdShowEndPage2 = "00000";
let PreviewCameraEffectIdShowEndPage2TF = "true";
let PreviewCameraEffectIdShowEndPage2Result = `${PreviewCameraEffectIdShowEndPage2Foodie}://go?effectId=${PreviewCameraEffectIdShowEndPage2}&showEndPage=${PreviewCameraEffectIdShowEndPage2TF}`;

// 최초
linkQr(
    "#PreviewCameraEffectIdShowEndPage2Value",
    ".qr-PreviewCameraEffectIdShowEndPage2Value",
    PreviewCameraEffectIdShowEndPage2Result
);

// selectbox
$("#PreviewCameraEffectIdShowEndPage2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPage2Foodie = val;
    PreviewCameraEffectIdShowEndPage2Result = `${PreviewCameraEffectIdShowEndPage2Foodie}://go?effectId=${PreviewCameraEffectIdShowEndPage2}&showEndPage=${PreviewCameraEffectIdShowEndPage2TF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPage2Value",
        ".qr-PreviewCameraEffectIdShowEndPage2Value",
        PreviewCameraEffectIdShowEndPage2Result
    );
});

// input
$("#PreviewCameraEffectIdShowEndPage2").keyup(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPage2 = val;
    PreviewCameraEffectIdShowEndPage2Result = `${PreviewCameraEffectIdShowEndPage2Foodie}://go?effectId=${PreviewCameraEffectIdShowEndPage2}&showEndPage=${PreviewCameraEffectIdShowEndPage2TF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPage2Value",
        ".qr-PreviewCameraEffectIdShowEndPage2Value",
        PreviewCameraEffectIdShowEndPage2Result
    );
});

// selectbox
$("#PreviewCameraEffectIdShowEndPage2TF").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdShowEndPage2TF = val;
    PreviewCameraEffectIdShowEndPage2Result = `${PreviewCameraEffectIdShowEndPage2Foodie}://go?effectId=${PreviewCameraEffectIdShowEndPage2}&showEndPage=${PreviewCameraEffectIdShowEndPage2TF}`;

    linkQr(
        "#PreviewCameraEffectIdShowEndPage2Value",
        ".qr-PreviewCameraEffectIdShowEndPage2Value",
        PreviewCameraEffectIdShowEndPage2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraEffectIdShowEndPage2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraEffectIdShowEndPage2Result);
});
