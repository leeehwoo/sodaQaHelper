let PreviewCameraFilterCategoryIdFoodie = "foodie";
let PreviewCameraFilterCategoryId = "00000";
let PreviewCameraFilterCategoryIdResult = `${PreviewCameraFilterCategoryIdFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryId}`;

// 최초
linkQr(
    "#PreviewCameraFilterCategoryIdValue",
    ".qr-PreviewCameraFilterCategoryIdValue",
    PreviewCameraFilterCategoryIdResult
);

// selectbox
$("#PreviewCameraFilterCategoryIdFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdFoodie = val;
    PreviewCameraFilterCategoryIdResult = `${PreviewCameraFilterCategoryIdFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryId}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdValue",
        ".qr-PreviewCameraFilterCategoryIdValue",
        PreviewCameraFilterCategoryIdResult
    );
});

// Input
$("#PreviewCameraFilterCategoryId").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryId = val;
    PreviewCameraFilterCategoryIdResult = `${PreviewCameraFilterCategoryIdFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryId}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdValue",
        ".qr-PreviewCameraFilterCategoryIdValue",
        PreviewCameraFilterCategoryIdResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterCategoryIdValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterCategoryIdResult);
});
