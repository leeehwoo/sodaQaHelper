let PreviewCameraZoomTakePositionFoodie = "foodie";
let PreviewCameraZoomTakePosition = "zoom";
let PreviewCameraZoomTakePositionTake = "film";
let PreviewCameraZoomTakePositionPosition = "0";
let PreviewCameraZoomTakePositionResult = `${PreviewCameraZoomTakePositionFoodie}://previewcamera?tab=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake}&cameraPosition=${PreviewCameraZoomTakePositionPosition}`;

// 최초
linkQr(
    "#PreviewCameraZoomTakePositionValue",
    ".qr-PreviewCameraZoomTakePositionValue",
    PreviewCameraZoomTakePositionResult
);

// selectbox
$("#PreviewCameraZoomTakePositionFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionFoodie = val;
    PreviewCameraZoomTakePositionResult = `${PreviewCameraZoomTakePositionFoodie}://previewcamera?tab=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake}&cameraPosition=${PreviewCameraZoomTakePositionPosition}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue",
        ".qr-PreviewCameraZoomTakePositionValue",
        PreviewCameraZoomTakePositionResult
    );
});

// selectbox
$("#PreviewCameraZoomTakePositionTake").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionTake = val;
    PreviewCameraZoomTakePositionResult = `${PreviewCameraZoomTakePositionFoodie}://previewcamera?tab=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake}&cameraPosition=${PreviewCameraZoomTakePositionPosition}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue",
        ".qr-PreviewCameraZoomTakePositionValue",
        PreviewCameraZoomTakePositionResult
    );
});

// selectbox
$("#PreviewCameraZoomTakePositionPosition").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionPosition = val;
    PreviewCameraZoomTakePositionResult = `${PreviewCameraZoomTakePositionFoodie}://previewcamera?tab=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake}&cameraPosition=${PreviewCameraZoomTakePositionPosition}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue",
        ".qr-PreviewCameraZoomTakePositionValue",
        PreviewCameraZoomTakePositionResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomTakePositionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomTakePositionResult);
});
