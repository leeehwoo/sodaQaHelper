let PreviewCameraFCIdFoodie = "foodie";
let PreviewCameraFId = "135414";
let PreviewCameraCId = "00000";
let PreviewCameraFCIdResult = `${PreviewCameraFCIdFoodie}://previewcamera?filterId=${PreviewCameraFId}&filterCategoryId=${PreviewCameraCId}`;

// 최초
linkQr(
    "#PreviewCameraFCIdValue",
    ".qr-PreviewCameraFCIdValue",
    PreviewCameraFCIdResult
);

// selectbox
$("#PreviewCameraFCIdFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFCIdFoodie = val;
    PreviewCameraFCIdResult = `${PreviewCameraFCIdFoodie}://previewcamera?filterId=${PreviewCameraFId}&filterCategoryId=${PreviewCameraCId}`;

    linkQr(
        "#PreviewCameraFCIdValue",
        ".qr-PreviewCameraFCIdValue",
        PreviewCameraFCIdResult
    );
});

// input
$("#PreviewCameraFId").keyup(function () {
    const val = $(this).val();
    PreviewCameraFId = val;
    PreviewCameraFCIdResult = `${PreviewCameraFCIdFoodie}://previewcamera?filterId=${PreviewCameraFId}&filterCategoryId=${PreviewCameraCId}`;

    linkQr(
        "#PreviewCameraFCIdValue",
        ".qr-PreviewCameraFCIdValue",
        PreviewCameraFCIdResult
    );
});

// input
$("#PreviewCameraCId").keyup(function () {
    const val = $(this).val();
    PreviewCameraCId = val;
    PreviewCameraFCIdResult = `${PreviewCameraFCIdFoodie}://previewcamera?filterId=${PreviewCameraFId}&filterCategoryId=${PreviewCameraCId}`;

    linkQr(
        "#PreviewCameraFCIdValue",
        ".qr-PreviewCameraFCIdValue",
        PreviewCameraFCIdResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFCIdValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFCIdResult);
});
