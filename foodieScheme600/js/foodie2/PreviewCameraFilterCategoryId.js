let PreviewCameraFilterCategoryId2Foodie = "foodie";
let PreviewCameraFilterCategoryId2 = "00000";
let PreviewCameraFilterCategoryId2Result = `${PreviewCameraFilterCategoryId2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryId2}`;

// 최초
linkQr(
    "#PreviewCameraFilterCategoryId2Value",
    ".qr-PreviewCameraFilterCategoryId2Value",
    PreviewCameraFilterCategoryId2Result
);

// selectbox
$("#PreviewCameraFilterCategoryId2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryId2Foodie = val;
    PreviewCameraFilterCategoryId2Result = `${PreviewCameraFilterCategoryId2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryId2}`;

    linkQr(
        "#PreviewCameraFilterCategoryId2Value",
        ".qr-PreviewCameraFilterCategoryId2Value",
        PreviewCameraFilterCategoryId2Result
    );
});

// Input
$("#PreviewCameraFilterCategoryId2").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryId2 = val;
    PreviewCameraFilterCategoryId2Result = `${PreviewCameraFilterCategoryId2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryId2}`;

    linkQr(
        "#PreviewCameraFilterCategoryId2Value",
        ".qr-PreviewCameraFilterCategoryId2Value",
        PreviewCameraFilterCategoryId2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterCategoryId2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterCategoryId2Result);
});
