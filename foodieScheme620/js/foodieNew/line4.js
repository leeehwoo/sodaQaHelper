let line16 = "foodie";
let line16_val1 = "filter";
let line16_val2 = "00000";
let line16Result = `${line16}://editscreen?tab=${line16_val1}&filterId=${line16_val2}`;

// 최초
linkQr("#line16Value", ".qr-line16", line16Result);

// selectbox
$("#line16").change(function () {
    const val = $(this).val();
    line16 = val;
    line16Result = `${line16}://editscreen?tab=${line16_val1}&filterId=${line16_val2}`;

    linkQr("#line16Value", ".qr-line16", line16Result);
});

// input
$("#line16_val1").change(function () {
    const val = $(this).val();
    line16_val1 = val;
    line16Result = `${line16}://editscreen?tab=${line16_val1}&filterId=${line16_val2}`;

    linkQr("#line16Value", ".qr-line16", line16Result);
});

// input
$("#line16_val2").keyup(function () {
    const val = $(this).val();
    line16_val2 = val;
    line16Result = `${line16}://editscreen?tab=${line16_val1}&filterId=${line16_val2}`;

    linkQr("#line16Value", ".qr-line16", line16Result);
});

// qr 다운로드
$(".qr-line16-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line16Result);
});

let line17 = "foodie";
let line17_val1 = "filter";
let line17_val2 = "00000";
let line17_val3 = "00000";
let line17Result = `${line17}://pick?tab=${line17_val1}&filterId=${line17_val2}&filterCategoryId=${line17_val3}`;

// 최초
linkQr("#line17Value", ".qr-line17", line17Result);

// selectbox
$("#line17").change(function () {
    const val = $(this).val();
    line17 = val;
    line17Result = `${line17}://pick?tab=${line17_val1}&filterId=${line17_val2}&filterCategoryId=${line17_val3}`;

    linkQr("#line17Value", ".qr-line17", line17Result);
});

// input
$("#line17_val1").change(function () {
    const val = $(this).val();
    line17_val1 = val;
    line17Result = `${line17}://pick?tab=${line17_val1}&filterId=${line17_val2}&filterCategoryId=${line17_val3}`;

    linkQr("#line17Value", ".qr-line17", line17Result);
});

// input
$("#line17_val2").keyup(function () {
    const val = $(this).val();
    line17_val2 = val;
    line17Result = `${line17}://pick?tab=${line17_val1}&filterId=${line17_val2}&filterCategoryId=${line17_val3}`;

    linkQr("#line17Value", ".qr-line17", line17Result);
});

// input
$("#line17_val3").keyup(function () {
    const val = $(this).val();
    line17_val3 = val;
    line17Result = `${line17}://pick?tab=${line17_val1}&filterId=${line17_val2}&filterCategoryId=${line17_val3}`;

    linkQr("#line17Value", ".qr-line17", line17Result);
});

// qr 다운로드
$(".qr-line17-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line17Result);
});

let line18 = "foodie";
let line18_val1 = "effect";
let line18_val2 = "00000";
let line18Result = `${line18}://editscreen?tab=${line18_val1}&effectId=${line18_val2}`;

// 최초
linkQr("#line18Value", ".qr-line18", line18Result);

// selectbox
$("#line18").change(function () {
    const val = $(this).val();
    line18 = val;
    line18Result = `${line18}://editscreen?tab=${line18_val1}&effectId=${line18_val2}`;

    linkQr("#line18Value", ".qr-line18", line18Result);
});

// input
$("#line18_val1").change(function () {
    const val = $(this).val();
    line18_val1 = val;
    line18Result = `${line18}://editscreen?tab=${line18_val1}&effectId=${line18_val2}`;

    linkQr("#line18Value", ".qr-line18", line18Result);
});

// input
$("#line18_val2").keyup(function () {
    const val = $(this).val();
    line18_val2 = val;
    line18Result = `${line18}://editscreen?tab=${line18_val1}&effectId=${line18_val2}`;

    linkQr("#line18Value", ".qr-line18", line18Result);
});

// qr 다운로드
$(".qr-line18-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line18Result);
});

let line19 = "foodie";
let line19_val1 = "effect";
let line19_val2 = "00000";
let line19_val3 = "00000";
let line19Result = `${line19}://pick?tab=${line19_val1}&effectId=${line19_val2}&effectCategoryId=${line19_val3}`;

// 최초
linkQr("#line19Value", ".qr-line19", line19Result);

// selectbox
$("#line19").change(function () {
    const val = $(this).val();
    line19 = val;
    line19Result = `${line19}://pick?tab=${line19_val1}&effectId=${line19_val2}&effectCategoryId=${line19_val3}`;

    linkQr("#line19Value", ".qr-line19", line19Result);
});

// input
$("#line19_val1").change(function () {
    const val = $(this).val();
    line19_val1 = val;
    line19Result = `${line19}://pick?tab=${line19_val1}&effectId=${line19_val2}&effectCategoryId=${line19_val3}`;

    linkQr("#line19Value", ".qr-line19", line19Result);
});

// input
$("#line19_val2").keyup(function () {
    const val = $(this).val();
    line19_val2 = val;
    line19Result = `${line19}://pick?tab=${line19_val1}&effectId=${line19_val2}&effectCategoryId=${line19_val3}`;

    linkQr("#line19Value", ".qr-line19", line19Result);
});

// input
$("#line19_val3").keyup(function () {
    const val = $(this).val();
    line19_val3 = val;
    line19Result = `${line19}://pick?tab=${line19_val1}&effectId=${line19_val2}&effectCategoryId=${line19_val3}`;

    linkQr("#line19Value", ".qr-line19", line19Result);
});

// qr 다운로드
$(".qr-line19-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line17Result);
});
