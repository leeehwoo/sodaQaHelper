let PreviewCameraEffectId2ValueFoodie = "foodie";
let PreviewCameraEffectId2 = "00000";
let PreviewCameraEffectId2Result = `${PreviewCameraEffectId2ValueFoodie}://go?effectId=${PreviewCameraEffectId2}`;

// 최초
linkQr(
    "#PreviewCameraEffectId2Value",
    ".qr-PreviewCameraEffectId2Value",
    PreviewCameraEffectId2Result
);

// selectbox
$("#PreviewCameraEffectId2ValueFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraEffectId2ValueFoodie = val;
    PreviewCameraEffectId2Result = `${PreviewCameraEffectId2ValueFoodie}://go?effectId=${PreviewCameraEffectId2}`;

    linkQr(
        "#PreviewCameraEffectId2Value",
        ".qr-PreviewCameraEffectId2Value",
        PreviewCameraEffectId2Result
    );
});

// input
$("#PreviewCameraEffectId2").keyup(function () {
    const val = $(this).val();
    PreviewCameraEffectId2 = val;
    PreviewCameraEffectId2Result = `${PreviewCameraEffectId2ValueFoodie}://go?effectId=${PreviewCameraEffectId2}`;

    linkQr(
        "#PreviewCameraEffectId2Value",
        ".qr-PreviewCameraEffectId2Value",
        PreviewCameraEffectId2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraEffectId2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraEffectId2Result);
});
