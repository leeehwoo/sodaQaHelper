let PreviewCameraZoomTakeValue2Foodie = "foodie";
let PreviewCameraZoomTake2 = "zoom";
let PreviewCameraZoomTakeMode2 = "film";
let PreviewCameraZoomTakeResult2 = `${PreviewCameraZoomTakeValue2Foodie}://go?tab=zoom&takemode=${PreviewCameraZoomTakeMode2}`;

// 최초
linkQr(
    "#PreviewCameraZoomTakeValue2",
    ".qr-PreviewCameraZoomTakeValue2",
    PreviewCameraZoomTakeResult2
);

// selectbox
$("#PreviewCameraZoomTakeValue2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakeValue2Foodie = val;
    PreviewCameraZoomTakeResult2 = `${PreviewCameraZoomTakeValue2Foodie}://go?tab=zoom&takemode=${PreviewCameraZoomTakeMode2}`;

    linkQr(
        "#PreviewCameraZoomTakeValue2",
        ".qr-PreviewCameraZoomTakeValue2",
        PreviewCameraZoomTakeResult2
    );
});

// selectbox
$("#PreviewCameraZoomTakeMode2").change(function () {
    const val = $(this).val();
    PreviewCameraZoomTakeMode2 = val;
    PreviewCameraZoomTakeResult2 = `${PreviewCameraZoomTakeValue2Foodie}://go?tab=zoom&takemode=${PreviewCameraZoomTakeMode2}`;

    linkQr(
        "#PreviewCameraZoomTakeValue2",
        ".qr-PreviewCameraZoomTakeValue2",
        PreviewCameraZoomTakeResult2
    );
});

// qr 다운로드
$(".qr-PreviewCameraZoomTakeValue2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraZoomTakeResult2);
});
