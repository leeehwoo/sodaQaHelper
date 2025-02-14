let line5 = "foodie";
let line5_val1 = "00000";
let line5_val2 = "default";
let line5_val3 = "default";
let line5Result = `${line5}://go?effectCategoryId=${line5_val1}`;

// 최초
linkQr("#line5Value", ".qr-line5", line5Result);

// selectbox
$("#line5").change(function () {
    const val = $(this).val();
    line5 = val;

    // 둘다 값이 있는경우
    if (line5_val2 !== "default" && line5_val3 !== "default") {
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}&hiresmode=${line5_val3}`;
    } else if (line5_val2 !== "default" && line5_val3 === "default") {
        // 3번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}`;
    } else if (line5_val2 === "default" && line5_val3 !== "default") {
        // 4번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&hiresmode=${line5_val3}`;
    } else {
        // 둘다 값이 없는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}`;
    }

    linkQr("#line5Value", ".qr-line5", line5Result);
});

// input
$("#line5_val1").keyup(function () {
    const val = $(this).val();
    line5_val1 = val;

    // 둘다 값이 있는경우
    if (line5_val2 !== "default" && line5_val3 !== "default") {
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}&hiresmode=${line5_val3}`;
    } else if (line5_val2 !== "default" && line5_val3 === "default") {
        // 3번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}`;
    } else if (line5_val2 === "default" && line5_val3 !== "default") {
        // 4번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&hiresmode=${line5_val3}`;
    } else {
        // 둘다 값이 없는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}`;
    }

    linkQr("#line5Value", ".qr-line5", line5Result);
});

// selectbox
$("#line5_val2").change(function () {
    const val = $(this).val();
    line5_val2 = val;

    // 둘다 값이 있는경우
    if (line5_val2 !== "default" && line5_val3 !== "default") {
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}&hiresmode=${line5_val3}`;
    } else if (line5_val2 !== "default" && line5_val3 === "default") {
        // 3번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}`;
    } else if (line5_val2 === "default" && line5_val3 !== "default") {
        // 4번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&hiresmode=${line5_val3}`;
    } else {
        // 둘다 값이 없는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}`;
    }

    linkQr("#line5Value", ".qr-line5", line5Result);
});

// selectbox
$("#line5_val3").change(function () {
    const val = $(this).val();
    line5_val3 = val;

    // 둘다 값이 있는경우
    if (line5_val2 !== "default" && line5_val3 !== "default") {
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}&hiresmode=${line5_val3}`;
    } else if (line5_val2 !== "default" && line5_val3 === "default") {
        // 3번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&cameraPosition=${line5_val2}`;
    } else if (line5_val2 === "default" && line5_val3 !== "default") {
        // 4번 값만 있는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}&hiresmode=${line5_val3}`;
    } else {
        // 둘다 값이 없는경우
        line5Result = `${line5}://go?effectCategoryId=${line5_val1}`;
    }

    linkQr("#line5Value", ".qr-line5", line5Result);
});

// qr 다운로드
$(".qr-line5-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line5Result);
});

let line6 = "foodie";
let line6_val1 = "00000";
let line6_val2 = "00000";
let line6_val3 = "default";
let line6_val4 = "default";
let line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;

// 최초
linkQr("#line6Value", ".qr-line6", line6Result);

// selectbox
$("#line6").change(function () {
    const val = $(this).val();
    line6 = val;

    // 둘다 값이 있는경우
    if (line6_val3 !== "default" && line6_val4 !== "default") {
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}&hiresmode=${line6_val4}`;
    } else if (line6_val3 !== "default" && line6_val4 === "default") {
        // 3번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}`;
    } else if (line6_val3 === "default" && line6_val4 !== "default") {
        // 4번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&hiresmode=${line6_val4}`;
    } else {
        // 둘다 값이 없는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;
    }

    linkQr("#line6Value", ".qr-line6", line6Result);
});

// input
$("#line6_val1").keyup(function () {
    const val = $(this).val();
    line6_val1 = val;

    // 둘다 값이 있는경우
    if (line6_val3 !== "default" && line6_val4 !== "default") {
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}&hiresmode=${line6_val4}`;
    } else if (line6_val3 !== "default" && line6_val4 === "default") {
        // 3번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}`;
    } else if (line6_val3 === "default" && line6_val4 !== "default") {
        // 4번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&hiresmode=${line6_val4}`;
    } else {
        // 둘다 값이 없는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;
    }

    linkQr("#line6Value", ".qr-line6", line6Result);
});

// input
$("#line6_val2").keyup(function () {
    const val = $(this).val();
    line6_val2 = val;

    // 둘다 값이 있는경우
    if (line6_val3 !== "default" && line6_val4 !== "default") {
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}&hiresmode=${line6_val4}`;
    } else if (line6_val3 !== "default" && line6_val4 === "default") {
        // 3번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}`;
    } else if (line6_val3 === "default" && line6_val4 !== "default") {
        // 4번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&hiresmode=${line6_val4}`;
    } else {
        // 둘다 값이 없는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;
    }

    linkQr("#line6Value", ".qr-line6", line6Result);
});

// selectbox
$("#line6_val3").change(function () {
    const val = $(this).val();
    line6_val3 = val;

    // 둘다 값이 있는경우
    if (line6_val3 !== "default" && line6_val4 !== "default") {
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}&hiresmode=${line6_val4}`;
    } else if (line6_val3 !== "default" && line6_val4 === "default") {
        // 3번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}`;
    } else if (line6_val3 === "default" && line6_val4 !== "default") {
        // 4번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&hiresmode=${line6_val4}`;
    } else {
        // 둘다 값이 없는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;
    }

    linkQr("#line6Value", ".qr-line6", line6Result);
});

// selectbox
$("#line6_val4").change(function () {
    const val = $(this).val();
    line6_val4 = val;

    // 둘다 값이 있는경우
    if (line6_val3 !== "default" && line6_val4 !== "default") {
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}&hiresmode=${line6_val4}`;
    } else if (line6_val3 !== "default" && line6_val4 === "default") {
        // 3번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&cameraPosition=${line6_val3}`;
    } else if (line6_val3 === "default" && line6_val4 !== "default") {
        // 4번 값만 있는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}&hiresmode=${line6_val4}`;
    } else {
        // 둘다 값이 없는경우
        line6Result = `${line6}://go?effectId=${line6_val1}&effectCategoryId=${line6_val2}`;
    }

    linkQr("#line6Value", ".qr-line6", line6Result);
});

// qr 다운로드
$(".qr-line6-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line6Result);
});

let line7 = "foodie";
let line7_val1 = "00000";
let line7_val2 = "default";
let line7_val3 = "default";
let line7Result = `${line7}://previewcamera?filter=${line7_val1}`;

// 최초
linkQr("#line7Value", ".qr-line7", line7Result);

// selectbox
$("#line7").change(function () {
    const val = $(this).val();
    line7 = val;

    // 둘다 값이 있는경우
    if (line7_val2 !== "default" && line7_val3 !== "default") {
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}&hiresmode=${line7_val3}`;
    } else if (line7_val2 !== "default" && line7_val3 === "default") {
        // 3번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}`;
    } else if (line7_val2 === "default" && line7_val3 !== "default") {
        // 4번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&hiresmode=${line7_val3}`;
    } else {
        // 둘다 값이 없는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}`;
    }

    linkQr("#line7Value", ".qr-line7", line7Result);
});

// input
$("#line7_val1").keyup(function () {
    const val = $(this).val();
    line7_val1 = val;

    // 둘다 값이 있는경우
    if (line7_val2 !== "default" && line7_val3 !== "default") {
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}&hiresmode=${line7_val3}`;
    } else if (line7_val2 !== "default" && line7_val3 === "default") {
        // 3번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}`;
    } else if (line7_val2 === "default" && line7_val3 !== "default") {
        // 4번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&hiresmode=${line7_val3}`;
    } else {
        // 둘다 값이 없는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}`;
    }

    linkQr("#line7Value", ".qr-line7", line7Result);
});

// selectbox
$("#line7_val2").change(function () {
    const val = $(this).val();
    line7_val2 = val;

    // 둘다 값이 있는경우
    if (line7_val2 !== "default" && line7_val3 !== "default") {
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}&hiresmode=${line7_val3}`;
    } else if (line7_val2 !== "default" && line7_val3 === "default") {
        // 3번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}`;
    } else if (line7_val2 === "default" && line7_val3 !== "default") {
        // 4번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&hiresmode=${line7_val3}`;
    } else {
        // 둘다 값이 없는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}`;
    }

    linkQr("#line7Value", ".qr-line7", line7Result);
});

// selectbox
$("#line7_val3").change(function () {
    const val = $(this).val();
    line7_val3 = val;

    // 둘다 값이 있는경우
    if (line7_val2 !== "default" && line7_val3 !== "default") {
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}&hiresmode=${line7_val3}`;
    } else if (line7_val2 !== "default" && line7_val3 === "default") {
        // 3번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&cameraPosition=${line7_val2}`;
    } else if (line7_val2 === "default" && line7_val3 !== "default") {
        // 4번 값만 있는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}&hiresmode=${line7_val3}`;
    } else {
        // 둘다 값이 없는경우
        line7Result = `${line7}://previewcamera?filter=${line7_val1}`;
    }

    linkQr("#line7Value", ".qr-line7", line7Result);
});

// qr 다운로드
$(".qr-line7-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line7Result);
});

let line8 = "foodie";
let line8_val1 = "00000";
let line8_val2 = "default";
let line8_val3 = "default";
let line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}`;

// 최초
linkQr("#line8Value", ".qr-line8", line8Result);

// selectbox
$("#line8").change(function () {
    const val = $(this).val();
    line8 = val;

    // 둘다 값이 있는경우
    if (line8_val2 !== "default" && line8_val3 !== "default") {
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}&hiresmode=${line8_val3}`;
    } else if (line8_val2 !== "default" && line8_val3 === "default") {
        // 3번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}`;
    } else if (line8_val2 === "default" && line8_val3 !== "default") {
        // 4번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&hiresmode=${line8_val3}`;
    } else {
        // 둘다 값이 없는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}`;
    }

    linkQr("#line8Value", ".qr-line8", line8Result);
});

// input
$("#line8_val1").keyup(function () {
    const val = $(this).val();
    line8_val1 = val;

    // 둘다 값이 있는경우
    if (line8_val2 !== "default" && line8_val3 !== "default") {
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}&hiresmode=${line8_val3}`;
    } else if (line8_val2 !== "default" && line8_val3 === "default") {
        // 3번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}`;
    } else if (line8_val2 === "default" && line8_val3 !== "default") {
        // 4번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&hiresmode=${line8_val3}`;
    } else {
        // 둘다 값이 없는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}`;
    }

    linkQr("#line8Value", ".qr-line8", line8Result);
});

// selectbox
$("#line8_val2").change(function () {
    const val = $(this).val();
    line8_val2 = val;

    // 둘다 값이 있는경우
    if (line8_val2 !== "default" && line8_val3 !== "default") {
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}&hiresmode=${line8_val3}`;
    } else if (line8_val2 !== "default" && line8_val3 === "default") {
        // 3번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}`;
    } else if (line8_val2 === "default" && line8_val3 !== "default") {
        // 4번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&hiresmode=${line8_val3}`;
    } else {
        // 둘다 값이 없는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}`;
    }

    linkQr("#line8Value", ".qr-line8", line8Result);
});

// selectbox
$("#line8_val3").change(function () {
    const val = $(this).val();
    line8_val3 = val;

    // 둘다 값이 있는경우
    if (line8_val2 !== "default" && line8_val3 !== "default") {
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}&hiresmode=${line8_val3}`;
    } else if (line8_val2 !== "default" && line8_val3 === "default") {
        // 3번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&cameraPosition=${line8_val2}`;
    } else if (line8_val2 === "default" && line8_val3 !== "default") {
        // 4번 값만 있는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}&hiresmode=${line8_val3}`;
    } else {
        // 둘다 값이 없는경우
        line8Result = `${line8}://previewcamera?filterCategoryId=${line8_val1}`;
    }

    linkQr("#line8Value", ".qr-line8", line8Result);
});

// qr 다운로드
$(".qr-line8-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line8Result);
});

let line9 = "foodie";
let line9_val1 = "00000";
let line9_val2 = "default";
let line9Result = `${line9}://previewcamera?effectId=${line9_val1}`;

// 최초
linkQr("#line9Value", ".qr-line9", line9Result);

// selectbox
$("#line9").change(function () {
    const val = $(this).val();
    line9 = val;

    if (line9_val2 !== "default") {
        // 2번 값만 있는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}&showEndPage=${line9_val2}`;
    } else {
        // 둘다 값이 없는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}`;
    }

    linkQr("#line9Value", ".qr-line9", line9Result);
});

// input
$("#line9_val1").keyup(function () {
    const val = $(this).val();
    line9_val1 = val;

    if (line9_val2 !== "default") {
        // 2번 값만 있는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}&showEndPage=${line9_val2}`;
    } else {
        // 둘다 값이 없는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}`;
    }

    linkQr("#line9Value", ".qr-line9", line9Result);
});

// selectbox
$("#line9_val2").change(function () {
    const val = $(this).val();
    line9_val2 = val;

    if (line9_val2 !== "default") {
        // 2번 값만 있는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}&showEndPage=${line9_val2}`;
    } else {
        // 둘다 값이 없는경우
        line9Result = `${line9}://previewcamera?effectId=${line9_val1}`;
    }

    linkQr("#line9Value", ".qr-line9", line9Result);
});

// qr 다운로드
$(".qr-line9-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line9Result);
});
