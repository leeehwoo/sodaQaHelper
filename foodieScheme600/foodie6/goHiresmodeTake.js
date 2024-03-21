let goHiresmodeTakeFoodie = "foodie";
let goHiresmodeTake = "standard";
let goHiresmodeTakeTake = "film";
let goHiresmodeTakeResult = `${goHiresmodeTakeFoodie}://go?goHiresmodeTake=${goHiresmodeTake}&takemode=${goHiresmodeTakeTake}`;

// 최초
linkQr(
    "#goHiresmodeTakeValue",
    ".qr-goHiresmodeTakeValue",
    goHiresmodeTakeResult
);

// selectbox
$("#goHiresmodeTakeFoodie").change(function () {
    const val = $(this).val();
    goHiresmodeTakeFoodie = val;
    goHiresmodeTakeResult = `${goHiresmodeTakeFoodie}://go?goHiresmodeTake=${goHiresmodeTake}&takemode=${goHiresmodeTakeTake}`;

    linkQr(
        "#goHiresmodeTakeValue",
        ".qr-goHiresmodeTakeValue",
        goHiresmodeTakeResult
    );
});

// selectbox
$("#goHiresmodeTake").change(function () {
    const val = $(this).val();
    goHiresmodeTake = val;
    goHiresmodeTakeResult = `${goHiresmodeTakeFoodie}://go?goHiresmodeTake=${goHiresmodeTake}&takemode=${goHiresmodeTakeTake}`;

    linkQr(
        "#goHiresmodeTakeValue",
        ".qr-goHiresmodeTakeValue",
        goHiresmodeTakeResult
    );
});

// selectbox
$("#goHiresmodeTakeTake").change(function () {
    const val = $(this).val();
    goHiresmodeTakeTake = val;
    goHiresmodeTakeResult = `${goHiresmodeTakeFoodie}://go?goHiresmodeTake=${goHiresmodeTake}&takemode=${goHiresmodeTakeTake}`;

    linkQr(
        "#goHiresmodeTakeValue",
        ".qr-goHiresmodeTakeValue",
        goHiresmodeTakeResult
    );
});

// qr 다운로드
$(".qr-goHiresmodeTakeValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, goHiresmodeTakeResult);
});
