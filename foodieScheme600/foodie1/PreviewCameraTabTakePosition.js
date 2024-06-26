let PreviewCameraTabTakePositionFoodie = "foodie";
let PreviewCameraTabTakePosition = "zoom";
let PreviewCameraTabTakePositionTake = "film";
let PreviewCameraTabTakePositionPosition = "0";
let PreviewCameraTabTakePositionResult = `${PreviewCameraTabTakePositionFoodie}://previewcamera?tab=${PreviewCameraTabTakePosition}&takemode=${PreviewCameraTabTakePositionTake}&cameraPosition=${PreviewCameraTabTakePositionPosition}`;

// 최초
linkQr(
    "#PreviewCameraTabTakePositionValue",
    ".qr-PreviewCameraTabTakePositionValue",
    PreviewCameraTabTakePositionResult
);

// selectbox
$("#PreviewCameraTabTakePositionFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePositionFoodie = val;
    PreviewCameraTabTakePositionResult = `${PreviewCameraTabTakePositionFoodie}://previewcamera?tab=${PreviewCameraTabTakePosition}&takemode=${PreviewCameraTabTakePositionTake}&cameraPosition=${PreviewCameraTabTakePositionPosition}`;

    linkQr(
        "#PreviewCameraTabTakePositionValue",
        ".qr-PreviewCameraTabTakePositionValue",
        PreviewCameraTabTakePositionResult
    );
});

// selectbox
$("#PreviewCameraTabTakePosition").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePosition = val;
    PreviewCameraTabTakePositionResult = `${PreviewCameraTabTakePositionFoodie}://previewcamera?tab=${PreviewCameraTabTakePosition}&takemode=${PreviewCameraTabTakePositionTake}&cameraPosition=${PreviewCameraTabTakePositionPosition}`;

    linkQr(
        "#PreviewCameraTabTakePositionValue",
        ".qr-PreviewCameraTabTakePositionValue",
        PreviewCameraTabTakePositionResult
    );
});

// selectbox
$("#PreviewCameraTabTakePositionTake").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePositionTake = val;
    PreviewCameraTabTakePositionResult = `${PreviewCameraTabTakePositionFoodie}://previewcamera?tab=${PreviewCameraTabTakePosition}&takemode=${PreviewCameraTabTakePositionTake}&cameraPosition=${PreviewCameraTabTakePositionPosition}`;

    linkQr(
        "#PreviewCameraTabTakePositionValue",
        ".qr-PreviewCameraTabTakePositionValue",
        PreviewCameraTabTakePositionResult
    );
});

// selectbox
$("#PreviewCameraTabTakePositionPosition").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePositionPosition = val;
    PreviewCameraTabTakePositionResult = `foodie://previewcamera?tab=${PreviewCameraTabTakePosition}&takemode=${PreviewCameraTabTakePositionTake}&cameraPosition=${PreviewCameraTabTakePositionPosition}`;

    linkQr(
        "#PreviewCameraTabTakePositionValue",
        ".qr-PreviewCameraTabTakePositionValue",
        PreviewCameraTabTakePositionResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabTakePositionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabTakePositionResult);
});
