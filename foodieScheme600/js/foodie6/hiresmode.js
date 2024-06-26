let hiresmodeFoodie = "foodie";
let hiresmode = "standard";
let hiresmodeResult = `${hiresmodeFoodie}://previewcamera?hiresmode=${hiresmode}`;

// 최초
linkQr("#hiresmodeValue", ".qr-hiresmodeValue", hiresmodeResult);

// selectbox
$("#hiresmodeFoodie").change(function () {
    const val = $(this).val();
    hiresmodeFoodie = val;
    hiresmodeResult = `${hiresmodeFoodie}://previewcamera?hiresmode=${hiresmode}`;

    linkQr("#hiresmodeValue", ".qr-hiresmodeValue", hiresmodeResult);
});

// selectbox
$("#hiresmode").change(function () {
    const val = $(this).val();
    hiresmode = val;
    hiresmodeResult = `${hiresmodeFoodie}://previewcamera?hiresmode=${hiresmode}`;

    linkQr("#hiresmodeValue", ".qr-hiresmodeValue", hiresmodeResult);
});

// qr 다운로드
$(".qr-hiresmodeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, hiresmodeResult);
});
