let PreviewCameraZoomValue2Foodie = "foodie";
let PreviewCameraZoom2 = "zoom";
let PreviewCameraZoomResult2 = `${PreviewCameraZoomValue2Foodie}://go?tab=zoom`;

// 최초
linkQr(
    "#PreviewCameraZoomValue2",
    ".qr-PreviewCameraZoomValue2",
    PreviewCameraZoomResult2
);

// selectbox
$("#PreviewCameraEffectIdFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraEffectIdFoodie = val;
    PreviewCameraZoomResult2 = `${PreviewCameraEffectIdFoodie}:${PreviewCameraZoomValue2Foodie}://go?tab=zoom`;

    linkQr(
        "#PreviewCameraZoomValue2",
        ".qr-PreviewCameraZoomValue2",
        PreviewCameraZoomResult2
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomValue2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomResult2);
});
