let PreviewCameraTabTake2Foodie = "foodie";
let PreviewCameraTabTake2 = "zoom";
let PreviewCameraTabTake2Mode = "film";
let PreviewCameraTabTake2Result = `${PreviewCameraTabTake2Foodie}://previewcamera?tab=${PreviewCameraTabTake2}&takemode=${PreviewCameraTabTake2Mode}`;

// 최초
linkQr(
    "#PreviewCameraTabTake2Value",
    ".qr-PreviewCameraTabTake2Value",
    PreviewCameraTabTake2Result
);

// selectbox
$("#PreviewCameraTabTake2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabTake2Foodie = val;
    PreviewCameraTabTake2Result = `${PreviewCameraTabTake2Foodie}://previewcamera?tab=${PreviewCameraTabTake2}&takemode=${PreviewCameraTabTake2Mode}`;

    linkQr(
        "#PreviewCameraTabTake2Value",
        ".qr-PreviewCameraTabTake2Value",
        PreviewCameraTabTake2Result
    );
});

// selectbox
$("#PreviewCameraTabTake2").change(function () {
    const val = $(this).val();
    PreviewCameraTabTake2 = val;
    PreviewCameraTabTake2Result = `${PreviewCameraTabTake2Foodie}://previewcamera?tab=${PreviewCameraTabTake2}&takemode=${PreviewCameraTabTake2Mode}`;

    linkQr(
        "#PreviewCameraTabTake2Value",
        ".qr-PreviewCameraTabTake2Value",
        PreviewCameraTabTake2Result
    );
});

// selectbox
$("#PreviewCameraTabTake2Mode").change(function () {
    const val = $(this).val();
    PreviewCameraTabTake2Mode = val;
    PreviewCameraTabTake2Result = `${PreviewCameraTabTake2Foodie}://previewcamera?tab=${PreviewCameraTabTake2}&takemode=${PreviewCameraTabTake2Mode}`;

    linkQr(
        "#PreviewCameraTabTake2Value",
        ".qr-PreviewCameraTabTake2Value",
        PreviewCameraTabTake2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabTake2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabTake2Result);
});
