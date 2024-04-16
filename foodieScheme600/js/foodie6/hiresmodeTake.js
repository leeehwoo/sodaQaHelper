let hiresmodeTakeFoodie = "foodie";
let hiresmodeTake = "standard";
let hiresmodeTakeTake = "film";
let hiresmodeTakeResult = `${hiresmodeTakeFoodie}://previewcamera?hiresmode=${hiresmodeTake}&takemode=${hiresmodeTakeTake}`;

// 최초
linkQr("#hiresmodeTakeValue", ".qr-hiresmodeTakeValue", hiresmodeTakeResult);

// selectbox
$("#hiresmodeTakeFoodie").change(function () {
    const val = $(this).val();
    hiresmodeTakeFoodie = val;
    hiresmodeTakeResult = `${hiresmodeTakeFoodie}://previewcamera?hiresmode=${hiresmodeTake}&takemode=${hiresmodeTakeTake}`;

    linkQr(
        "#hiresmodeTakeValue",
        ".qr-hiresmodeTakeValue",
        hiresmodeTakeResult
    );
});

// selectbox
$("#hiresmodeTake").change(function () {
    const val = $(this).val();
    hiresmodeTake = val;
    hiresmodeTakeResult = `${hiresmodeTakeFoodie}://previewcamera?hiresmode=${hiresmodeTake}&takemode=${hiresmodeTakeTake}`;

    linkQr(
        "#hiresmodeTakeValue",
        ".qr-hiresmodeTakeValue",
        hiresmodeTakeResult
    );
});

// selectbox
$("#hiresmodeTakeTake").change(function () {
    const val = $(this).val();
    hiresmodeTakeTake = val;
    hiresmodeTakeResult = `${hiresmodeTakeFoodie}://previewcamera?hiresmode=${hiresmodeTake}&takemode=${hiresmodeTakeTake}`;

    linkQr(
        "#hiresmodeTakeValue",
        ".qr-hiresmodeTakeValue",
        hiresmodeTakeResult
    );
});

// qr 다운로드
$(".qr-hiresmodeTakeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, hiresmodeTakeResult);
});
