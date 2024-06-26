let PreviewCameraZoomTakeFoodie = "foodie";
let PreviewCameraZoomTake = "zoom";
let PreviewCameraZoomTakeMode = "film";
let PreviewCameraZoomTakeResult = `${PreviewCameraZoomTakeFoodie}://previewcamera?tab=zoom&takemode=${PreviewCameraZoomTakeMode}`;

// 최초
linkQr(
    "#PreviewCameraZoomTakeValue",
    ".qr-PreviewCameraZoomTakeValue",
    PreviewCameraZoomTakeResult
);

// selectbox
$("#PreviewCameraZoomTakeFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakeFoodie = val;
    PreviewCameraZoomTakeResult = `${PreviewCameraZoomTakeFoodie}://previewcamera?tab=zoom&takemode=${PreviewCameraZoomTakeMode}`;

    linkQr(
        "#PreviewCameraZoomTakeValue",
        ".qr-PreviewCameraZoomTakeValue",
        PreviewCameraZoomTakeResult
    );
});

// selectbox
$("#PreviewCameraZoomTakeMode").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakeMode = val;
    PreviewCameraZoomTakeResult = `${PreviewCameraZoomTakeFoodie}://previewcamera?tab=zoom&takemode=${PreviewCameraZoomTakeMode}`;

    linkQr(
        "#PreviewCameraZoomTakeValue",
        ".qr-PreviewCameraZoomTakeValue",
        PreviewCameraZoomTakeResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomTakeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomTakeResult);
});
