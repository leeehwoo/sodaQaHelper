let PreviewCameraTabPositionFoodie = "foodie";
let PreviewCameraTabPosition = "zoom";
let PreviewCameraTabCameraPosition = "0";
let PreviewCameraTabPositionResult = `${PreviewCameraTabPositionFoodie}://previewcamera?tab=${PreviewCameraTabPosition}&cameraPosition=${PreviewCameraTabCameraPosition}`;

// 최초
linkQr(
    "#PreviewCameraTabPositionValue",
    ".qr-PreviewCameraTabPositionValue",
    PreviewCameraTabPositionResult
);

// selectbox
$("#PreviewCameraTabPositionFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabPositionFoodie = val;
    PreviewCameraTabPositionResult = `${PreviewCameraTabPositionFoodie}://previewcamera?tab=${PreviewCameraTabPosition}&cameraPosition=${PreviewCameraTabCameraPosition}`;

    linkQr(
        "#PreviewCameraTabPositionValue",
        ".qr-PreviewCameraTabPositionValue",
        PreviewCameraTabPositionResult
    );
});

// selectbox
$("#PreviewCameraTabPosition").change(function () {
    const val = $(this).val();
    PreviewCameraTabPosition = val;
    PreviewCameraTabPositionResult = `${PreviewCameraTabPositionFoodie}://previewcamera?tab=${PreviewCameraTabPosition}&cameraPosition=${PreviewCameraTabCameraPosition}`;

    linkQr(
        "#PreviewCameraTabPositionValue",
        ".qr-PreviewCameraTabPositionValue",
        PreviewCameraTabPositionResult
    );
});

// selectbox
$("#PreviewCameraTabCameraPosition").change(function () {
    const val = $(this).val();
    PreviewCameraTabCameraPosition = val;
    PreviewCameraTabPositionResult = `${PreviewCameraTabPositionFoodie}://previewcamera?tab=${PreviewCameraTabPosition}&cameraPosition=${PreviewCameraTabCameraPosition}`;

    linkQr(
        "#PreviewCameraTabPositionValue",
        ".qr-PreviewCameraTabPositionValue",
        PreviewCameraTabPositionResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabPositionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabPositionResult);
});
