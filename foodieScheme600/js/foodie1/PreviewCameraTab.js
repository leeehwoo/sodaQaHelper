let PreviewCameraTabFoodie = "foodie";
let PreviewCameraTab = "zoom";
let PreviewCameraTabResult = `${PreviewCameraTabFoodie}://previewcamera?tab=${PreviewCameraTab}`;

// 최초
linkQr(
    "#PreviewCameraTabValue",
    ".qr-PreviewCameraTabValue",
    PreviewCameraTabResult
);

// selectbox
$("#PreviewCameraTabFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabFoodie = val;
    PreviewCameraTabResult = `${PreviewCameraTabFoodie}://previewcamera?tab=${PreviewCameraTab}`;

    linkQr(
        "#PreviewCameraTabValue",
        ".qr-PreviewCameraTabValue",
        PreviewCameraTabResult
    );
});

// selectbox
$("#PreviewCameraTab").change(function () {
    const val = $(this).val();
    PreviewCameraTab = val;
    PreviewCameraTabResult = `${PreviewCameraTabFoodie}://previewcamera?tab=${PreviewCameraTab}`;

    linkQr(
        "#PreviewCameraTabValue",
        ".qr-PreviewCameraTabValue",
        PreviewCameraTabResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabResult);
});
