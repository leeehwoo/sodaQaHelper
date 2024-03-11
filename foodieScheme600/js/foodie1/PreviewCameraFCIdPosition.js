let PreviewCameraFCIdPositionFoodie = "foodie";
let PreviewCameraFIdPosition = "00000";
let PreviewCameraCIdPosition = "00000";
let PreviewCameraFCIdPosition = "0";
let PreviewCameraFCIdPositionResult = `${PreviewCameraFCIdPositionFoodie}://previewcamera?filterId=${PreviewCameraFIdPosition}&filterCategoryId=${PreviewCameraCIdPosition}&cameraPosition=${PreviewCameraFCIdPosition}`;

// 최초
linkQr(
    "#PreviewCameraFCIdPositionValue",
    ".qr-PreviewCameraFCIdPositionValue",
    PreviewCameraFCIdPositionResult
);

// selectbox
$("#PreviewCameraFCIdPositionFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFCIdPositionFoodie = val;
    PreviewCameraFCIdPositionResult = `${PreviewCameraFCIdPositionFoodie}://previewcamera?filterId=${PreviewCameraFIdPosition}&filterCategoryId=${PreviewCameraCIdPosition}&cameraPosition=${PreviewCameraFCIdPosition}`;

    linkQr(
        "#PreviewCameraFCIdPositionValue",
        ".qr-PreviewCameraFCIdPositionValue",
        PreviewCameraFCIdPositionResult
    );
});

// input
$("#PreviewCameraFIdPosition").keyup(function () {
    const val = $(this).val();
    PreviewCameraFIdPosition = val;
    PreviewCameraFCIdPositionResult = `${PreviewCameraFCIdPositionFoodie}://previewcamera?filterId=${PreviewCameraFIdPosition}&filterCategoryId=${PreviewCameraCIdPosition}&cameraPosition=${PreviewCameraFCIdPosition}`;

    linkQr(
        "#PreviewCameraFCIdPositionValue",
        ".qr-PreviewCameraFCIdPositionValue",
        PreviewCameraFCIdPositionResult
    );
});

// input
$("#PreviewCameraCIdPosition").keyup(function () {
    const val = $(this).val();
    PreviewCameraCIdPosition = val;
    PreviewCameraFCIdPositionResult = `${PreviewCameraFCIdPositionFoodie}://previewcamera?filterId=${PreviewCameraFIdPosition}&filterCategoryId=${PreviewCameraCIdPosition}&cameraPosition=${PreviewCameraFCIdPosition}`;

    linkQr(
        "#PreviewCameraFCIdPositionValue",
        ".qr-PreviewCameraFCIdPositionValue",
        PreviewCameraFCIdPositionResult
    );
});

// selectbox
$("#PreviewCameraFCIdPosition").change(function () {
    const val = $(this).val();
    PreviewCameraFCIdPosition = val;
    PreviewCameraFCIdPositionResult = `${PreviewCameraFCIdPositionFoodie}://previewcamera?filterId=${PreviewCameraFIdPosition}&filterCategoryId=${PreviewCameraCIdPosition}&cameraPosition=${PreviewCameraFCIdPosition}`;

    linkQr(
        "#PreviewCameraFCIdPositionValue",
        ".qr-PreviewCameraFCIdPositionValue",
        PreviewCameraFCIdPositionResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFCIdPositionValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFCIdPositionResult);
});
