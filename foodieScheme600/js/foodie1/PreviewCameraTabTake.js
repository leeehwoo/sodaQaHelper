let PreviewCameraTabTakeFoodie = "foodie";
let PreviewCameraTabTake = "zoom";
let PreviewCameraTabTakeMode = "film";
let PreviewCameraTabTakeResult = `${PreviewCameraTabTakeFoodie}://previewcamera?tab=${PreviewCameraTabTake}&takemode=${PreviewCameraTabTakeMode}`;

// 최초
linkQr(
    "#PreviewCameraTabTakeValue",
    ".qr-PreviewCameraTabTakeValue",
    PreviewCameraTabTakeResult
);

// selectbox
$("#PreviewCameraTabTakeFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakeFoodie = val;
    PreviewCameraTabTakeResult = `${PreviewCameraTabTakeFoodie}://previewcamera?tab=${PreviewCameraTabTake}&takemode=${PreviewCameraTabTakeMode}`;

    linkQr(
        "#PreviewCameraTabTakeValue",
        ".qr-PreviewCameraTabTakeValue",
        PreviewCameraTabTakeResult
    );
});

// selectbox
$("#PreviewCameraTabTake").change(function () {
    const val = $(this).val();
    PreviewCameraTabTake = val;
    PreviewCameraTabTakeResult = `${PreviewCameraTabTakeFoodie}://previewcamera?tab=${PreviewCameraTabTake}&takemode=${PreviewCameraTabTakeMode}`;

    linkQr(
        "#PreviewCameraTabTakeValue",
        ".qr-PreviewCameraTabTakeValue",
        PreviewCameraTabTakeResult
    );
});

// selectbox
$("#PreviewCameraTabTakeMode").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakeMode = val;
    PreviewCameraTabTakeResult = `${PreviewCameraTabTakeFoodie}://previewcamera?tab=${PreviewCameraTabTake}&takemode=${PreviewCameraTabTakeMode}`;

    linkQr(
        "#PreviewCameraTabTakeValue",
        ".qr-PreviewCameraTabTakeValue",
        PreviewCameraTabTakeResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabTakeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabTakeResult);
});
