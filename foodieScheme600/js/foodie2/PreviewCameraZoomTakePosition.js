let PreviewCameraZoomTakePositionValue2Foodie = "foodie";
let PreviewCameraZoomTakePosition2 = "zoom";
let PreviewCameraZoomTakePositionTake2 = "film";
let PreviewCameraZoomTakePositionPosition2 = "0";
let PreviewCameraZoomTakePositionResult2 = `${PreviewCameraZoomTakePositionValue2Foodie}://go?zoom=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake2}&cameraPosition=${PreviewCameraZoomTakePositionPosition2}`;

// 최초
linkQr(
    "#PreviewCameraZoomTakePositionValue2",
    ".qr-PreviewCameraZoomTakePositionValue2",
    PreviewCameraZoomTakePositionResult2
);

// selectbox
$("#PreviewCameraZoomTakePositionValue2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionValue2Foodie = val;
    PreviewCameraZoomTakePositionResult2 = `${PreviewCameraZoomTakePositionValue2Foodie}://go?zoom=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake2}&cameraPosition=${PreviewCameraZoomTakePositionPosition2}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue2",
        ".qr-PreviewCameraZoomTakePositionValue2",
        PreviewCameraZoomTakePositionResult2
    );
});

// selectbox
$("#PreviewCameraZoomTakePositionTake2").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionTake2 = val;
    PreviewCameraZoomTakePositionResult2 = `${PreviewCameraZoomTakePositionValue2Foodie}://go?zoom=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake2}&cameraPosition=${PreviewCameraZoomTakePositionPosition2}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue2",
        ".qr-PreviewCameraZoomTakePositionValue2",
        PreviewCameraZoomTakePositionResult2
    );
});

// selectbox
$("#PreviewCameraZoomTakePositionPosition2").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakePositionPosition2 = val;
    PreviewCameraZoomTakePositionResult2 = `${PreviewCameraZoomTakePositionValue2Foodie}://go?zoom=${PreviewCameraZoomTakePosition}&takemode=${PreviewCameraZoomTakePositionTake2}&cameraPosition=${PreviewCameraZoomTakePositionPosition2}`;

    linkQr(
        "#PreviewCameraZoomTakePositionValue2",
        ".qr-PreviewCameraZoomTakePositionValue2",
        PreviewCameraZoomTakePositionResult2
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomTakePositionValue2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomTakePositionResult2);
});
