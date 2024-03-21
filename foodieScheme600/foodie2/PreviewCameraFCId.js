let PreviewCameraFCId2Foodie = "foodie";
let PreviewCameraFId2 = "135414";
let PreviewCameraCId2 = "00000";
let PreviewCameraFCIdResult2 = `${PreviewCameraFCId2Foodie}://go?filterId=${PreviewCameraFId2}&filterCategoryId=${PreviewCameraCId2}`;

// 최초
linkQr(
    "#PreviewCameraFCIdValue2",
    ".qr-PreviewCameraFCIdValue2",
    PreviewCameraFCIdResult2
);

// selectbox
$("#PreviewCameraFCId2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFCId2Foodie = val;
    PreviewCameraFCIdResult2 = `${PreviewCameraFCId2Foodie}://go?filterId=${PreviewCameraFId2}&filterCategoryId=${PreviewCameraCId2}`;

    linkQr(
        "#PreviewCameraFCIdValue2",
        ".qr-PreviewCameraFCIdValue2",
        PreviewCameraFCIdResult2
    );
});

// input
$("#PreviewCameraFId2").keyup(function () {
    const val = $(this).val();
    PreviewCameraFId2 = val;
    PreviewCameraFCIdResult2 = `${PreviewCameraFCId2Foodie}://go?filterId=${PreviewCameraFId2}&filterCategoryId=${PreviewCameraCId2}`;

    linkQr(
        "#PreviewCameraFCIdValue2",
        ".qr-PreviewCameraFCIdValue2",
        PreviewCameraFCIdResult2
    );
});

// input
$("#PreviewCameraCId2").keyup(function () {
    const val = $(this).val();
    PreviewCameraCId2 = val;
    PreviewCameraFCIdResult2 = `${PreviewCameraFCId2Foodie}://go?filterId=${PreviewCameraFId2}&filterCategoryId=${PreviewCameraCId2}`;

    linkQr(
        "#PreviewCameraFCIdValue2",
        ".qr-PreviewCameraFCIdValue2",
        PreviewCameraFCIdResult2
    );
});

// qr 다운로드
$(".qr-PreviewCameraFCIdValue2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFCIdResult2);
});
