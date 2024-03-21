let PreviewCameraZoomPositionValue2Foodie = "foodie";
let PreviewCameraZoomPosition2 = "zoom";
let PreviewCameraZoomCameraPosition2 = "0";
let PreviewCameraZoomPositionResult2 = `${PreviewCameraZoomPositionValue2Foodie}://go?tab=zoom&cameraPosition=${PreviewCameraZoomCameraPosition2}`;

// 최초
linkQr(
    "#PreviewCameraZoomPositionValue2",
    ".qr-PreviewCameraZoomPositionValue2",
    PreviewCameraZoomPositionResult2
);

// selectbox
$("#PreviewCameraZoomPositionValue2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomPositionValue2Foodie = val;
    PreviewCameraZoomPositionResult2 = `${PreviewCameraZoomPositionValue2Foodie}://go?tab=zoom&cameraPosition=${PreviewCameraZoomCameraPosition2}`;

    linkQr(
        "#PreviewCameraZoomPositionValue2",
        ".qr-PreviewCameraZoomPositionValue2",
        PreviewCameraZoomPositionResult2
    );
});

// selectbox
$("#PreviewCameraZoomCameraPosition2").change(function () {
    const val = $(this).val();
    PreviewCameraZoomCameraPosition2 = val;
    PreviewCameraZoomPositionResult2 = `${PreviewCameraZoomPositionValue2Foodie}://go?tab=zoom&cameraPosition=${PreviewCameraZoomCameraPosition2}`;

    linkQr(
        "#PreviewCameraZoomPositionValue2",
        ".qr-PreviewCameraZoomPositionValue2",
        PreviewCameraZoomPositionResult2
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomPositionValue2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomPositionResult2);
});
