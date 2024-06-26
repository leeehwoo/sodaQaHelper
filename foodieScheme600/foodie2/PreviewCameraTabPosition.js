let PreviewCameraTabPosition2Foodie = "foodie";
let PreviewCameraTabPosition2 = "zoom";
let PreviewCameraTabCameraPosition2 = "0";
let PreviewCameraTabPosition2Result = `${PreviewCameraTabPosition2Foodie}://go?tab=${PreviewCameraTabPosition2}&cameraPosition=${PreviewCameraTabCameraPosition2}`;

// 최초
linkQr(
    "#PreviewCameraTabPosition2Value",
    ".qr-PreviewCameraTabPosition2Value",
    PreviewCameraTabPosition2Result
);

// selectbox
$("#PreviewCameraTabPosition2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabPosition2Foodie = val;
    PreviewCameraTabPosition2Result = `${PreviewCameraTabPosition2Foodie}://go?tab=${PreviewCameraTabPosition2}&cameraPosition=${PreviewCameraTabCameraPosition2}`;

    linkQr(
        "#PreviewCameraTabPosition2Value",
        ".qr-PreviewCameraTabPosition2Value",
        PreviewCameraTabPosition2Result
    );
});

// selectbox
$("#PreviewCameraTabPosition2").change(function () {
    const val = $(this).val();
    PreviewCameraTabPosition2 = val;
    PreviewCameraTabPosition2Result = `${PreviewCameraTabPosition2Foodie}://go?tab=${PreviewCameraTabPosition2}&cameraPosition=${PreviewCameraTabCameraPosition2}`;

    linkQr(
        "#PreviewCameraTabPosition2Value",
        ".qr-PreviewCameraTabPosition2Value",
        PreviewCameraTabPosition2Result
    );
});

// selectbox
$("#PreviewCameraTabCameraPosition2").change(function () {
    const val = $(this).val();
    PreviewCameraTabCameraPosition2 = val;
    PreviewCameraTabPosition2Result = `${PreviewCameraTabPosition2Foodie}://go?tab=${PreviewCameraTabPosition2}&cameraPosition=${PreviewCameraTabCameraPosition2}`;

    linkQr(
        "#PreviewCameraTabPosition2Value",
        ".qr-PreviewCameraTabPosition2Value",
        PreviewCameraTabPosition2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabPosition2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabPosition2Result);
});
