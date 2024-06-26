let PreviewCameraFilterCategoryIdCamera2Foodie = "foodie";
let PreviewCameraFilterCategoryIdCamera2 = "00000";
let PreviewCameraFilterCategoryIdCamera2Position = "0";
let PreviewCameraFilterCategoryIdCamera2Result = `${PreviewCameraFilterCategoryIdCamera2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryIdCamera2}&cameraPosition=${PreviewCameraFilterCategoryIdCamera2Position}`;

// 최초
linkQr(
    "#PreviewCameraFilterCategoryIdCamera2Value",
    ".qr-PreviewCameraFilterCategoryIdCamera2Value",
    PreviewCameraFilterCategoryIdCamera2Result
);

// selectbox
$("#PreviewCameraFilterCategoryIdCamera2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCamera2Foodie = val;
    PreviewCameraFilterCategoryIdCamera2Result = `${PreviewCameraFilterCategoryIdCamera2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryIdCamera2}&cameraPosition=${PreviewCameraFilterCategoryIdCamera2Position}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCamera2Value",
        ".qr-PreviewCameraFilterCategoryIdCamera2Value",
        PreviewCameraFilterCategoryIdCamera2Result
    );
});

// input
$("#PreviewCameraFilterCategoryIdCamera2").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCamera2 = val;
    PreviewCameraFilterCategoryIdCamera2Result = `${PreviewCameraFilterCategoryIdCamera2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryIdCamera2}&cameraPosition=${PreviewCameraFilterCategoryIdCamera2Position}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCamera2Value",
        ".qr-PreviewCameraFilterCategoryIdCamera2Value",
        PreviewCameraFilterCategoryIdCamera2Result
    );
});

// selectbox
$("#PreviewCameraFilterCategoryIdCamera2Position").change(function () {
    const val = $(this).val();
    PreviewCameraFilterCategoryIdCamera2Position = val;
    PreviewCameraFilterCategoryIdCamera2Result = `${PreviewCameraFilterCategoryIdCamera2Foodie}://go?filterCategoryId=${PreviewCameraFilterCategoryIdCamera2}&cameraPosition=${PreviewCameraFilterCategoryIdCamera2Position}`;

    linkQr(
        "#PreviewCameraFilterCategoryIdCamera2Value",
        ".qr-PreviewCameraFilterCategoryIdCamera2Value",
        PreviewCameraFilterCategoryIdCamera2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterCategoryIdCamera2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterCategoryIdCamera2Result);
});
