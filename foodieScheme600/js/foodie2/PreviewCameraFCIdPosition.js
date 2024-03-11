let PreviewCameraFCIdPosition2Foodie = "foodie";
let PreviewCameraFIdPosition2 = "00000";
let PreviewCameraCIdPosition2 = "00000";
let PreviewCameraFCIdPosition2 = "0";
let PreviewCameraFCIdPosition2Result2 = `${PreviewCameraFCIdPosition2Foodie}://go?filterId=${PreviewCameraFIdPosition2}&filterCategoryId=${PreviewCameraCIdPosition2}&cameraPosition=${PreviewCameraFCIdPosition2}`;

// 최초
linkQr(
    "#PreviewCameraFCIdPosition2Value",
    ".qr-PreviewCameraFCIdPosition2Value",
    PreviewCameraFCIdPosition2Result2
);

// selectbox
$("#PreviewCameraFCIdPosition2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFCIdPosition2Foodie = val;
    PreviewCameraFCIdPosition2Result2 = `${PreviewCameraFCIdPosition2Foodie}://go?filterId=${PreviewCameraFIdPosition2}&filterCategoryId=${PreviewCameraCIdPosition2}&cameraPosition=${PreviewCameraFCIdPosition2}`;

    linkQr(
        "#PreviewCameraFCIdPosition2Value",
        ".qr-PreviewCameraFCIdPosition2Value",
        PreviewCameraFCIdPosition2Result2
    );
});

// input
$("#PreviewCameraFIdPosition2").keyup(function () {
    const val = $(this).val();
    PreviewCameraFIdPosition2 = val;
    PreviewCameraFCIdPosition2Result2 = `${PreviewCameraFCIdPosition2Foodie}://go?filterId=${PreviewCameraFIdPosition2}&filterCategoryId=${PreviewCameraCIdPosition2}&cameraPosition=${PreviewCameraFCIdPosition2}`;

    linkQr(
        "#PreviewCameraFCIdPosition2Value",
        ".qr-PreviewCameraFCIdPosition2Value",
        PreviewCameraFCIdPosition2Result2
    );
});

// input
$("#PreviewCameraCIdPosition2").keyup(function () {
    const val = $(this).val();
    PreviewCameraCIdPosition2 = val;
    PreviewCameraFCIdPosition2Result2 = `${PreviewCameraFCIdPosition2Foodie}://go?filterId=${PreviewCameraFIdPosition2}&filterCategoryId=${PreviewCameraCIdPosition2}&cameraPosition=${PreviewCameraFCIdPosition2}`;

    linkQr(
        "#PreviewCameraFCIdPosition2Value",
        ".qr-PreviewCameraFCIdPosition2Value",
        PreviewCameraFCIdPosition2Result2
    );
});

// selectbox
$("#PreviewCameraFCIdPosition2").change(function () {
    const val = $(this).val();
    PreviewCameraFCIdPosition2 = val;
    PreviewCameraFCIdPosition2Result2 = `${PreviewCameraFCIdPosition2Foodie}://go?filterId=${PreviewCameraFIdPosition2}&filterCategoryId=${PreviewCameraCIdPosition2}&cameraPosition=${PreviewCameraFCIdPosition2}`;

    linkQr(
        "#PreviewCameraFCIdPosition2Value",
        ".qr-PreviewCameraFCIdPosition2Value",
        PreviewCameraFCIdPosition2Result2
    );
});

// qr 다운로드
$(".qr-PreviewCameraFCIdPosition2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFCIdPosition2Result2);
});
