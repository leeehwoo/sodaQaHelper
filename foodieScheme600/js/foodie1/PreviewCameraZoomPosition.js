let PreviewCameraZoomPositionFoodie = "foodie";
let PreviewCameraZoomPosition = "zoom";
let PreviewCameraZoomCameraPosition = "0";
let PreviewCameraZoomPositionResult = `${PreviewCameraZoomPositionFoodie}://previewcamera?zoom=zoom&cameraPosition=${PreviewCameraZoomCameraPosition}`;

// 최초
linkQr(
    "#PreviewCameraZoomPositionValue",
    ".qr-PreviewCameraZoomPositionValue",
    PreviewCameraZoomPositionResult
);

// selectbox
$("#PreviewCameraZoomPositionFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomPositionFoodie = val;
    PreviewCameraZoomPositionResult = `${PreviewCameraZoomPositionFoodie}://previewcamera?zoom=zoom&cameraPosition=${PreviewCameraZoomCameraPosition}`;

    linkQr(
        "#PreviewCameraZoomPositionValue",
        ".qr-PreviewCameraZoomPositionValue",
        PreviewCameraZoomPositionResult
    );
});

// selectbox
$("#PreviewCameraZoomCameraPosition").change(function () {
    const val = $(this).val();
    PreviewCameraZoomCameraPosition = val;
    PreviewCameraZoomPositionResult = `${PreviewCameraZoomPositionFoodie}://previewcamera?zoom=zoom&cameraPosition=${PreviewCameraZoomCameraPosition}`;

    linkQr(
        "#PreviewCameraZoomPositionValue",
        ".qr-PreviewCameraZoomPositionValue",
        PreviewCameraZoomPositionResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomPositionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomPositionResult);
});
