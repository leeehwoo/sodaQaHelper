let PreviewCameraZoomFoodie = "foodie";
let PreviewCameraZoom = "zoom";
let PreviewCameraZoomResult = `${PreviewCameraZoomFoodie}://previewcamera?tab=zoom`;

// 최초
linkQr(
    "#PreviewCameraZoomValue",
    ".qr-PreviewCameraZoomValue",
    PreviewCameraZoomResult
);

// selectbox
$("#PreviewCameraZoomFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomFoodie = val;
    PreviewCameraZoomResult = `${PreviewCameraZoomFoodie}://previewcamera?tab=zoom`;

    linkQr(
        "#PreviewCameraZoomValue",
        ".qr-PreviewCameraZoomValue",
        PreviewCameraZoomResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomResult);
});
