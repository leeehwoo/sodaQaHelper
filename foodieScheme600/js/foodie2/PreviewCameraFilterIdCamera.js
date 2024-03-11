let PreviewCameraFilterIdCamera3Foodie = "foodie";
let PreviewCameraFilterIdCamera3 = "00000";
let PreviewCameraFilterIdCamera3Position = "0";
let PreviewCameraFilterIdCamera3Result = `${PreviewCameraFilterIdCamera3Foodie}://go?filterId=${PreviewCameraFilterIdCamera3}&cameraPosition=${PreviewCameraFilterIdCamera3Position}`;

// 최초
linkQr(
    "#PreviewCameraFilterIdCamera3Value",
    ".qr-PreviewCameraFilterIdCamera3Value",
    PreviewCameraFilterIdCamera3Result
);

// selectbox
$("#PreviewCameraFilterIdCamera3Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCamera3Foodie = val;
    PreviewCameraFilterIdCamera3Result = `${PreviewCameraFilterIdCamera3Foodie}://go?filterId=${PreviewCameraFilterIdCamera3}&cameraPosition=${PreviewCameraFilterIdCamera3Position}`;

    linkQr(
        "#PreviewCameraFilterIdCamera3Value",
        ".qr-PreviewCameraFilterIdCamera3Value",
        PreviewCameraFilterIdCamera3Result
    );
});

// input
$("#PreviewCameraFilterIdCamera3").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCamera3 = val;
    PreviewCameraFilterIdCamera3Result = `${PreviewCameraFilterIdCamera3Foodie}://go?filterId=${PreviewCameraFilterIdCamera3}&cameraPosition=${PreviewCameraFilterIdCamera3Position}`;

    linkQr(
        "#PreviewCameraFilterIdCamera3Value",
        ".qr-PreviewCameraFilterIdCamera3Value",
        PreviewCameraFilterIdCamera3Result
    );
});

// selectbox
$("#PreviewCameraFilterIdCamera3Position").change(function () {
    const val = $(this).val();
    PreviewCameraFilterIdCamera3Position = val;
    PreviewCameraFilterIdCamera3Result = `${PreviewCameraFilterIdCamera3Foodie}://go?filterId=${PreviewCameraFilterIdCamera3}&cameraPosition=${PreviewCameraFilterIdCamera3Position}`;

    linkQr(
        "#PreviewCameraFilterIdCamera3Value",
        ".qr-PreviewCameraFilterIdCamera3Value",
        PreviewCameraFilterIdCamera3Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterIdCamera3Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterIdCamera3Result);
});
