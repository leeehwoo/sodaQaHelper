let PreviewCameraTabTakePosition2Foodie = "foodie";
let PreviewCameraTabTakePosition2 = "zoom";
let PreviewCameraTabTakePosition2Take = "film";
let PreviewCameraTabTakePosition2Position = "0";
let PreviewCameraTabTakePosition2Result = `${PreviewCameraTabTakePosition2Foodie}://go?tab=${PreviewCameraTabTakePosition2}&takemode=${PreviewCameraTabTakePosition2Take}&cameraPosition=${PreviewCameraTabTakePosition2Position}`;

// 최초
linkQr(
    "#PreviewCameraTabTakePosition2Value",
    ".qr-PreviewCameraTabTakePosition2Value",
    PreviewCameraTabTakePosition2Result
);

// selectbox
$("#PreviewCameraTabTakePosition2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePosition2Foodie = val;
    PreviewCameraTabTakePosition2Result = `${PreviewCameraTabTakePosition2Foodie}://go?tab=${PreviewCameraTabTakePosition2}&takemode=${PreviewCameraTabTakePosition2Take}&cameraPosition=${PreviewCameraTabTakePosition2Position}`;

    linkQr(
        "#PreviewCameraTabTakePosition2Value",
        ".qr-PreviewCameraTabTakePosition2Value",
        PreviewCameraTabTakePosition2Result
    );
});

// selectbox
$("#PreviewCameraTabTakePosition2").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePosition2 = val;
    PreviewCameraTabTakePosition2Result = `${PreviewCameraTabTakePosition2Foodie}://go?tab=${PreviewCameraTabTakePosition2}&takemode=${PreviewCameraTabTakePosition2Take}&cameraPosition=${PreviewCameraTabTakePosition2Position}`;

    linkQr(
        "#PreviewCameraTabTakePosition2Value",
        ".qr-PreviewCameraTabTakePosition2Value",
        PreviewCameraTabTakePosition2Result
    );
});

// selectbox
$("#PreviewCameraTabTakePosition2Take").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePosition2Take = val;
    PreviewCameraTabTakePosition2Result = `${PreviewCameraTabTakePosition2Foodie}://go?tab=${PreviewCameraTabTakePosition2}&takemode=${PreviewCameraTabTakePosition2Take}&cameraPosition=${PreviewCameraTabTakePosition2Position}`;

    linkQr(
        "#PreviewCameraTabTakePosition2Value",
        ".qr-PreviewCameraTabTakePosition2Value",
        PreviewCameraTabTakePosition2Result
    );
});

// selectbox
$("#PreviewCameraTabTakePosition2Position").change(function () {
    const val = $(this).val();
    PreviewCameraTabTakePosition2Position = val;
    PreviewCameraTabTakePosition2Result = `${PreviewCameraTabTakePosition2Foodie}://go?tab=${PreviewCameraTabTakePosition2}&takemode=${PreviewCameraTabTakePosition2Take}&cameraPosition=${PreviewCameraTabTakePosition2Position}`;

    linkQr(
        "#PreviewCameraTabTakePosition2Value",
        ".qr-PreviewCameraTabTakePosition2Value",
        PreviewCameraTabTakePosition2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraTabTakePosition2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTabTakePosition2Result);
});
