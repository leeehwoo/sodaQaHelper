let PreviewCameraFilterId2Foodie = "foodie";
let PreviewCameraFilterId2 = "00000";
let PreviewCameraFilterId2Result = `${PreviewCameraFilterId2Foodie}://go?filterId=${PreviewCameraFilterId2}`;

// 최초
linkQr(
    "#PreviewCameraFilterId2Value",
    ".qr-PreviewCameraFilterId2Value",
    PreviewCameraFilterId2Result
);

// selectbox
$("#PreviewCameraFilterId2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraFilterId2Foodie = val;
    PreviewCameraFilterId2Result = `${PreviewCameraFilterId2Foodie}://go?filterId=${PreviewCameraFilterId2}`;

    linkQr(
        "#PreviewCameraFilterId2Value",
        ".qr-PreviewCameraFilterId2Value",
        PreviewCameraFilterId2Result
    );
});

// Input
$("#PreviewCameraFilterId2").keyup(function () {
    const val = $(this).val();
    PreviewCameraFilterId2 = val;
    PreviewCameraFilterId2Result = `${PreviewCameraFilterId2Foodie}://go?filterId=${PreviewCameraFilterId2}`;

    linkQr(
        "#PreviewCameraFilterId2Value",
        ".qr-PreviewCameraFilterId2Value",
        PreviewCameraFilterId2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraFilterId2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraFilterId2Result);
});
