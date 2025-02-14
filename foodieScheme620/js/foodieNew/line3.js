let line10 = "foodie";
let line10_val1 = "00000";
let line10_val2 = "default";
let line10_val3 = "default";
let line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}`;

// 최초
linkQr("#line10Value", ".qr-line10", line10Result);

// selectbox
$("#line10").change(function () {
    const val = $(this).val();
    line10 = val;

    // 둘다 값이 있는경우
    if (line10_val2 !== "default" && line10_val3 !== "default") {
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}&hiresmode=${line10_val3}`;
    } else if (line10_val2 !== "default" && line10_val3 === "default") {
        // 3번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}`;
    } else if (line10_val2 === "default" && line10_val3 !== "default") {
        // 4번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&hiresmode=${line10_val3}`;
    } else {
        // 둘다 값이 없는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}`;
    }

    linkQr("#line10Value", ".qr-line10", line10Result);
});

// input
$("#line10_val1").keyup(function () {
    const val = $(this).val();
    line10_val1 = val;

    // 둘다 값이 있는경우
    if (line10_val2 !== "default" && line10_val3 !== "default") {
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}&hiresmode=${line10_val3}`;
    } else if (line10_val2 !== "default" && line10_val3 === "default") {
        // 3번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}`;
    } else if (line10_val2 === "default" && line10_val3 !== "default") {
        // 4번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&hiresmode=${line10_val3}`;
    } else {
        // 둘다 값이 없는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}`;
    }

    linkQr("#line10Value", ".qr-line10", line10Result);
});

// selectbox
$("#line10_val2").change(function () {
    const val = $(this).val();
    line10_val2 = val;

    // 둘다 값이 있는경우
    if (line10_val2 !== "default" && line10_val3 !== "default") {
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}&hiresmode=${line10_val3}`;
    } else if (line10_val2 !== "default" && line10_val3 === "default") {
        // 3번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}`;
    } else if (line10_val2 === "default" && line10_val3 !== "default") {
        // 4번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&hiresmode=${line10_val3}`;
    } else {
        // 둘다 값이 없는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}`;
    }

    linkQr("#line10Value", ".qr-line10", line10Result);
});

// selectbox
$("#line10_val3").change(function () {
    const val = $(this).val();
    line10_val3 = val;

    // 둘다 값이 있는경우
    if (line10_val2 !== "default" && line10_val3 !== "default") {
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}&hiresmode=${line10_val3}`;
    } else if (line10_val2 !== "default" && line10_val3 === "default") {
        // 3번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&cameraPosition=${line10_val2}`;
    } else if (line10_val2 === "default" && line10_val3 !== "default") {
        // 4번 값만 있는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}&hiresmode=${line10_val3}`;
    } else {
        // 둘다 값이 없는경우
        line10Result = `${line10}://previewcamera?effectCategoryId=${line10_val1}`;
    }

    linkQr("#line10Value", ".qr-line10", line10Result);
});

// qr 다운로드
$(".qr-line10-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line10Result);
});

let line11 = "foodie";
let line11_val1 = "00000";
let line11_val2 = "00000";
let line11_val3 = "default";
let line11_val4 = "default";
let line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;

// 최초
linkQr("#line11Value", ".qr-line11", line11Result);

// selectbox
$("#line11").change(function () {
    const val = $(this).val();
    line11 = val;

    // 둘다 값이 있는경우
    if (line11_val3 !== "default" && line11_val4 !== "default") {
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}&hiresmode=${line11_val3}`;
    } else if (line11_val3 !== "default" && line11_val4 === "default") {
        // 3번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}`;
    } else if (line11_val3 === "default" && line11_val4 !== "default") {
        // 4번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&hiresmode=${line11_val3}`;
    } else {
        // 둘다 값이 없는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;
    }

    linkQr("#line11Value", ".qr-line11", line11Result);
});

// input
$("#line11_val1").keyup(function () {
    const val = $(this).val();
    line11_val1 = val;

    // 둘다 값이 있는경우
    if (line11_val3 !== "default" && line11_val4 !== "default") {
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}&hiresmode=${line11_val3}`;
    } else if (line11_val3 !== "default" && line11_val4 === "default") {
        // 3번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}`;
    } else if (line11_val3 === "default" && line11_val4 !== "default") {
        // 4번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&hiresmode=${line11_val3}`;
    } else {
        // 둘다 값이 없는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;
    }

    linkQr("#line11Value", ".qr-line11", line11Result);
});

// input
$("#line11_val2").keyup(function () {
    const val = $(this).val();
    line11_val2 = val;

    // 둘다 값이 있는경우
    if (line11_val3 !== "default" && line11_val4 !== "default") {
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}&hiresmode=${line11_val3}`;
    } else if (line11_val3 !== "default" && line11_val4 === "default") {
        // 3번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}`;
    } else if (line11_val3 === "default" && line11_val4 !== "default") {
        // 4번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&hiresmode=${line11_val3}`;
    } else {
        // 둘다 값이 없는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;
    }

    linkQr("#line11Value", ".qr-line11", line11Result);
});

// selectbox
$("#line11_val3").change(function () {
    const val = $(this).val();
    line11_val3 = val;

    // 둘다 값이 있는경우
    if (line11_val3 !== "default" && line11_val4 !== "default") {
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}&hiresmode=${line11_val3}`;
    } else if (line11_val3 !== "default" && line11_val4 === "default") {
        // 3번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}`;
    } else if (line11_val3 === "default" && line11_val4 !== "default") {
        // 4번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&hiresmode=${line11_val3}`;
    } else {
        // 둘다 값이 없는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;
    }

    linkQr("#line11Value", ".qr-line11", line11Result);
});

// selectbox
$("#line11_val4").change(function () {
    const val = $(this).val();
    line11_val4 = val;

    // 둘다 값이 있는경우
    if (line11_val3 !== "default" && line11_val4 !== "default") {
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}&hiresmode=${line11_val4}`;
    } else if (line11_val3 !== "default" && line11_val4 === "default") {
        // 3번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&cameraPosition=${line11_val3}`;
    } else if (line11_val3 === "default" && line11_val4 !== "default") {
        // 4번 값만 있는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}&hiresmode=${line11_val4}`;
    } else {
        // 둘다 값이 없는경우
        line11Result = `${line11}://previewcamera?effectId=${line11_val1}&effectCategoryId${line11_val2}`;
    }

    linkQr("#line11Value", ".qr-line11", line11Result);
});

// qr 다운로드
$(".qr-line11-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line11Result);
});

let line12 = "foodie";
let line12_val1 = "filter";
let line12_val2 = "00000";
let line12Result = `${line12}://pick?tab=${line12_val1}&filterId=${line12_val2}`;

// 최초
linkQr("#line12Value", ".qr-line12", line12Result);

// selectbox
$("#line12").change(function () {
    const val = $(this).val();
    line12 = val;
    line12Result = `${line12}://pick?tab=${line12_val1}&filterId=${line12_val2}`;

    linkQr("#line12Value", ".qr-line12", line12Result);
});

// input
$("#line12_val1").change(function () {
    const val = $(this).val();
    line12_val1 = val;
    line12Result = `${line12}://pick?tab=${line12_val1}&filterId=${line12_val2}`;

    linkQr("#line12Value", ".qr-line12", line12Result);
});

// input
$("#line12_val2").keyup(function () {
    const val = $(this).val();
    line12_val2 = val;
    line12Result = `${line12}://pick?tab=${line12_val1}&filterId=${line12_val2}`;

    linkQr("#line12Value", ".qr-line12", line12Result);
});

// qr 다운로드
$(".qr-line12-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line12Result);
});

let line13 = "foodie";
let line13_val1 = "filter";
let line13_val2 = "00000";
let line13_val3 = "00000";
let line13Result = `${line13}://pick?tab=${line13_val1}&filterId=${line13_val2}&filterCategoryId=${line13_val3}`;

// 최초
linkQr("#line13Value", ".qr-line13", line13Result);

// selectbox
$("#line13").change(function () {
    const val = $(this).val();
    line13 = val;
    line13Result = `${line13}://pick?tab=${line13_val1}&filterId=${line13_val2}&filterCategoryId=${line13_val3}`;

    linkQr("#line13Value", ".qr-line13", line13Result);
});

// input
$("#line13_val1").change(function () {
    const val = $(this).val();
    line13_val1 = val;
    line13Result = `${line13}://pick?tab=${line13_val1}&filterId=${line13_val2}&filterCategoryId=${line13_val3}`;

    linkQr("#line13Value", ".qr-line13", line13Result);
});

// input
$("#line13_val2").keyup(function () {
    const val = $(this).val();
    line13_val2 = val;
    line13Result = `${line13}://pick?tab=${line13_val1}&filterId=${line13_val2}&filterCategoryId=${line13_val3}`;

    linkQr("#line13Value", ".qr-line13", line13Result);
});

// input
$("#line13_val3").keyup(function () {
    const val = $(this).val();
    line13_val3 = val;
    line13Result = `${line13}://pick?tab=${line13_val1}&filterId=${line13_val2}&filterCategoryId=${line13_val3}`;

    linkQr("#line13Value", ".qr-line13", line13Result);
});

// qr 다운로드
$(".qr-line13-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line13Result);
});

let line14 = "foodie";
let line14_val1 = "effect";
let line14_val2 = "00000";
let line14Result = `${line14}://pick?tab=${line14_val1}&effectId=${line14_val2}`;

// 최초
linkQr("#line14Value", ".qr-line14", line14Result);

// selectbox
$("#line14").change(function () {
    const val = $(this).val();
    line14 = val;
    line14Result = `${line14}://pick?tab=${line14_val1}&effectId=${line14_val2}`;

    linkQr("#line14Value", ".qr-line14", line14Result);
});

// input
$("#line14_val1").change(function () {
    const val = $(this).val();
    line14_val1 = val;
    line14Result = `${line14}://pick?tab=${line14_val1}&effectId=${line14_val2}`;

    linkQr("#line14Value", ".qr-line14", line14Result);
});

// input
$("#line14_val2").keyup(function () {
    const val = $(this).val();
    line14_val2 = val;
    line14Result = `${line14}://pick?tab=${line14_val1}&effectId=${line14_val2}`;

    linkQr("#line14Value", ".qr-line14", line14Result);
});

// qr 다운로드
$(".qr-line14-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line14Result);
});

let line15 = "foodie";
let line15_val1 = "effect";
let line15_val2 = "00000";
let line15_val3 = "00000";
let line15Result = `${line15}://pick?tab=${line15_val1}&effectId=${line15_val2}&effectCategoryId=${line15_val3}`;

// 최초
linkQr("#line15Value", ".qr-line15", line15Result);

// selectbox
$("#line15").change(function () {
    const val = $(this).val();
    line15 = val;
    line15Result = `${line15}://pick?tab=${line15_val1}&effectId=${line15_val2}&effectCategoryId=${line15_val3}`;

    linkQr("#line15Value", ".qr-line15", line15Result);
});

// input
$("#line15_val1").change(function () {
    const val = $(this).val();
    line15_val1 = val;
    line15Result = `${line15}://pick?tab=${line15_val1}&effectId=${line15_val2}&effectCategoryId=${line15_val3}`;

    linkQr("#line15Value", ".qr-line15", line15Result);
});

// input
$("#line15_val2").keyup(function () {
    const val = $(this).val();
    line15_val2 = val;
    line15Result = `${line15}://pick?tab=${line15_val1}&effectId=${line15_val2}&effectCategoryId=${line15_val3}`;

    linkQr("#line15Value", ".qr-line15", line15Result);
});

// input
$("#line15_val3").keyup(function () {
    const val = $(this).val();
    line15_val3 = val;
    line15Result = `${line15}://pick?tab=${line15_val1}&effectId=${line15_val2}&effectCategoryId=${line15_val3}`;

    linkQr("#line15Value", ".qr-line15", line15Result);
});

// qr 다운로드
$(".qr-line15-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line15Result);
});
