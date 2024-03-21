let PreviewCameraTab2ValueFoodie = "foodie";
let PreviewCameraTab2 = "zoom";
let PreviewCameraTab2Result = `${PreviewCameraTab2ValueFoodie}://go?tab=${PreviewCameraTab2}`;

// 최초
linkQr(
    "#PreviewCameraTab2Value",
    ".qr-PreviewCameraTab2Value",
    PreviewCameraTab2Result
);

// selectbox
$("#PreviewCameraTab2ValueFoodie").change(function () {
    const val = $(this).val();
    PreviewCameraTab2ValueFoodie = val;
    PreviewCameraTab2Result = `${PreviewCameraTab2ValueFoodie}://go?tab=${PreviewCameraTab2}`;

    linkQr(
        "#PreviewCameraTab2Value",
        ".qr-PreviewCameraTab2Value",
        PreviewCameraTab2Result
    );
});

// selectbox
$("#PreviewCameraTab2").change(function () {
    const val = $(this).val();
    PreviewCameraTab2 = val;
    PreviewCameraTab2Result = `${PreviewCameraTab2ValueFoodie}://go?tab=${PreviewCameraTab2}`;

    linkQr(
        "#PreviewCameraTab2Value",
        ".qr-PreviewCameraTab2Value",
        PreviewCameraTab2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraTab2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTab2Result);
});
