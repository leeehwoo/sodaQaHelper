let PreviewCameraFilterIdCameraFoodie = "foodie";
let PreviewCameraFilterIdCamera = "00000";
let PreviewCameraFilterIdCameraPosition = "0";
let PreviewCameraFilterIdCameraResult = `${PreviewCameraFilterIdCameraFoodie}://previewcamera?filterId=${PreviewCameraFilterIdCamera}&cameraPosition=${PreviewCameraFilterIdCameraPosition}`;

// 최초
linkQr(
    "#PreviewCameraFilterIdCameraValue",
    ".qr-PreviewCameraFilterIdCameraValue",
    PreviewCameraFilterIdCameraResult
);

// selectbox
$("#PreviewCameraFilterIdCameraFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCameraFoodie = val;
    PreviewCameraFilterIdCameraResult = `${PreviewCameraFilterIdCameraFoodie}://previewcamera?filterId=${PreviewCameraFilterIdCamera}&cameraPosition=${PreviewCameraFilterIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterIdCameraValue",
        ".qr-PreviewCameraFilterIdCameraValue",
        PreviewCameraFilterIdCameraResult
    );
});

// input
$("#PreviewCameraFilterIdCamera").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCamera = val;
    PreviewCameraFilterIdCameraResult = `${PreviewCameraFilterIdCameraFoodie}://previewcamera?filterId=${PreviewCameraFilterIdCamera}&cameraPosition=${PreviewCameraFilterIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterIdCameraValue",
        ".qr-PreviewCameraFilterIdCameraValue",
        PreviewCameraFilterIdCameraResult
    );
});

// selectbox
$("#PreviewCameraFilterIdCameraPosition").change(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCameraPosition = val;
    PreviewCameraFilterIdCameraResult = `${PreviewCameraFilterIdCameraFoodie}://previewcamera?filterId=${PreviewCameraFilterIdCamera}&cameraPosition=${PreviewCameraFilterIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterIdCameraValue",
        ".qr-PreviewCameraFilterIdCameraValue",
        PreviewCameraFilterIdCameraResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterIdCameraValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterIdCameraResult);
});
