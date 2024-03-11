let PreviewCameraTakeFoodie = "foodie";
let PreviewCameraTakeMode = "film";
let PreviewCameraTakeModeResult = `${PreviewCameraTakeFoodie}://previewcamera?takemode=${PreviewCameraTakeMode}`;

// 최초
linkQr(
    "#PreviewCameraTakeModeValue",
    ".qr-PreviewCameraTakeModeValue",
    PreviewCameraTakeModeResult
);

// selectbox
$("#PreviewCameraTakeFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTakeFoodie = val;
    PreviewCameraTakeModeResult = `${PreviewCameraTakeFoodie}://previewcamera?takemode=${PreviewCameraTakeMode}`;

    linkQr(
        "#PreviewCameraTakeModeValue",
        ".qr-PreviewCameraTakeModeValue",
        PreviewCameraTakeModeResult
    );
});

// selectbox
$("#PreviewCameraTakeMode").change(function () {
    const val = $(this).val();
    PreviewCameraTakeMode = val;
    PreviewCameraTakeModeResult = `${PreviewCameraTakeFoodie}://previewcamera?takemode=${PreviewCameraTakeMode}`;

    linkQr(
        "#PreviewCameraTakeModeValue",
        ".qr-PreviewCameraTakeModeValue",
        PreviewCameraTakeModeResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraTakeModeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTakeModeResult);
});
