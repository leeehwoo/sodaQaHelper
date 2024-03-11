let PreviewCameraTakeMode2Foodie = "foodie";
let PreviewCameraTakeMode2 = "film";
let PreviewCameraTakeMode2Result = `${PreviewCameraTakeMode2Foodie}://go?takemode=${PreviewCameraTakeMode2}`;

// 최초
linkQr(
    "#PreviewCameraTakeMode2Value",
    ".qr-PreviewCameraTakeMode2Value",
    PreviewCameraTakeMode2Result
);

// selectbox
$("#PreviewCameraTakeMode2Foodie").change(function () {
    const val = $(this).val();
    PreviewCameraTakeMode2Foodie = val;
    PreviewCameraTakeMode2Result = `${PreviewCameraTakeMode2Foodie}://go?takemode=${PreviewCameraTakeMode2}`;

    linkQr(
        "#PreviewCameraTakeMode2Value",
        ".qr-PreviewCameraTakeMode2Value",
        PreviewCameraTakeMode2Result
    );
});

// selectbox
$("#PreviewCameraTakeMode2").change(function () {
    const val = $(this).val();
    PreviewCameraTakeMode2 = val;
    PreviewCameraTakeMode2Result = `${PreviewCameraTakeMode2Foodie}://go?takemode=${PreviewCameraTakeMode2}`;

    linkQr(
        "#PreviewCameraTakeMode2Value",
        ".qr-PreviewCameraTakeMode2Value",
        PreviewCameraTakeMode2Result
    );
});

// qr 다운로드
$(".qr-PreviewCameraTakeMode2Value-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, PreviewCameraTakeMode2Result);
});
