let PreviewCameraFilterIdFoodie = "foodie";
let PreviewCameraFilterId = "135414";
let PreviewCameraFilterIdResult = `${PreviewCameraFilterIdFoodie}://previewcamera?filterId=${PreviewCameraFilterId}`;

// 최초
linkQr(
    "#PreviewCameraFilterIdValue",
    ".qr-PreviewCameraFilterIdValue",
    PreviewCameraFilterIdResult
);

// selectbox
$("#PreviewCameraFilterIdFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterIdFoodie = val;
    PreviewCameraFilterIdResult = `${PreviewCameraFilterIdFoodie}://previewcamera?filterId=${PreviewCameraFilterId}`;

    linkQr(
        "#PreviewCameraFilterIdValue",
        ".qr-PreviewCameraFilterIdValue",
        PreviewCameraFilterIdResult
    );
});

// Input
$("#PreviewCameraFilterId").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterId = val;
    PreviewCameraFilterIdResult = `${PreviewCameraFilterIdFoodie}://previewcamera?filterId=${PreviewCameraFilterId}`;

    linkQr(
        "#PreviewCameraFilterIdValue",
        ".qr-PreviewCameraFilterIdValue",
        PreviewCameraFilterIdResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterIdValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterIdResult);
});
