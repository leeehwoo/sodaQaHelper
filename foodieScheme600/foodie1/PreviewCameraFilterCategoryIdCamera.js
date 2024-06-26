let PreviewCameraFilterCategoryIdCameraFoodie = "foodie";
let PreviewCameraFilterCategoryIdCamera = "00000";
let PreviewCameraFilterCategoryIdCameraPosition = "0";
let PreviewCameraFilterCategoryIdCameraResult = `${PreviewCameraFilterCategoryIdCameraFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryIdCamera}&cameraPosition=${PreviewCameraFilterCategoryIdCameraPosition}`;

// 최초
linkQr(
    "#PreviewCameraFilterCategoryIdCameraValue",
    ".qr-PreviewCameraFilterCategoryIdCameraValue",
    PreviewCameraFilterCategoryIdCameraResult
);

// selectbox
$("#PreviewCameraFilterCategoryIdCameraFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCameraFoodie = val;
    PreviewCameraFilterCategoryIdCameraResult = `${PreviewCameraFilterCategoryIdCameraFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryIdCamera}&cameraPosition=${PreviewCameraFilterCategoryIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCameraValue",
        ".qr-PreviewCameraFilterCategoryIdCameraValue",
        PreviewCameraFilterCategoryIdCameraResult
    );
});

// input
$("#PreviewCameraFilterCategoryIdCamera").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCamera = val;
    PreviewCameraFilterCategoryIdCameraResult = `${PreviewCameraFilterCategoryIdCameraFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryIdCamera}&cameraPosition=${PreviewCameraFilterCategoryIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCameraValue",
        ".qr-PreviewCameraFilterCategoryIdCameraValue",
        PreviewCameraFilterCategoryIdCameraResult
    );
});

// selectbox
$("#PreviewCameraFilterCategoryIdCameraPosition").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCameraPosition = val;
    PreviewCameraFilterCategoryIdCameraResult = `${PreviewCameraFilterCategoryIdCameraFoodie}://previewcamera?filterCategoryId=${PreviewCameraFilterCategoryIdCamera}&cameraPosition=${PreviewCameraFilterCategoryIdCameraPosition}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCameraValue",
        ".qr-PreviewCameraFilterCategoryIdCameraValue",
        PreviewCameraFilterCategoryIdCameraResult
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterCategoryIdCameraValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterCategoryIdCameraResult);
});
