let line1 = "foodie";
let line1_val1 = "0000";
let line1_val2 = "default";
let line1_val3 = "default";
let line1Result = `${line1}://go?filterId=${line1_val1}`;

// 최초
linkQr("#line1Value", ".qr-line1", line1Result);

// selectbox
$("#line1").change(function () {
    const val = $(this).val();
    line1 = val;

    // 둘다 값이 있는경우
    if (line1_val2 !== "default" && line1_val3 !== "default") {
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}&hiresmode=${line1_val3}`;
    } else if (line1_val2 !== "default" && line1_val3 === "default") {
        // 3번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}`;
    } else if (line1_val2 === "default" && line1_val3 !== "default") {
        // 4번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&hiresmode=${line1_val3}`;
    } else {
        // 둘다 값이 없는경우
        line1Result = `${line1}://go?filterId=${line1_val1}`;
    }

    linkQr("#line1Value", ".qr-line1", line1Result);
});

// input
$("#line1_val1").keyup(function () {
    const val = $(this).val();
    line1_val1 = val;

    // 둘다 값이 있는경우
    if (line1_val2 !== "default" && line1_val3 !== "default") {
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}&hiresmode=${line1_val3}`;
    } else if (line1_val2 !== "default" && line1_val3 === "default") {
        // 3번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}`;
    } else if (line1_val2 === "default" && line1_val3 !== "default") {
        // 4번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&hiresmode=${line1_val3}`;
    } else {
        // 둘다 값이 없는경우
        line1Result = `${line1}://go?filterId=${line1_val1}`;
    }

    linkQr("#line1Value", ".qr-line1", line1Result);
});

// selectbox
$("#line1_val2").change(function () {
    const val = $(this).val();
    line1_val2 = val;

    // 둘다 값이 있는경우
    if (line1_val2 !== "default" && line1_val3 !== "default") {
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}&hiresmode=${line1_val3}`;
    } else if (line1_val2 !== "default" && line1_val3 === "default") {
        // 3번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}`;
    } else if (line1_val2 === "default" && line1_val3 !== "default") {
        // 4번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&hiresmode=${line1_val3}`;
    } else {
        // 둘다 값이 없는경우
        line1Result = `${line1}://go?filterId=${line1_val1}`;
    }

    linkQr("#line1Value", ".qr-line1", line1Result);
});

// selectbox
$("#line1_val3").change(function () {
    const val = $(this).val();
    line1_val3 = val;

    // 둘다 값이 있는경우
    if (line1_val2 !== "default" && line1_val3 !== "default") {
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}&hiresmode=${line1_val3}`;
    } else if (line1_val2 !== "default" && line1_val3 === "default") {
        // 3번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&cameraPosition=${line1_val2}`;
    } else if (line1_val2 === "default" && line1_val3 !== "default") {
        // 4번 값만 있는경우
        line1Result = `${line1}://go?filterId=${line1_val1}&hiresmode=${line1_val3}`;
    } else {
        // 둘다 값이 없는경우
        line1Result = `${line1}://go?filterId=${line1_val1}`;
    }

    linkQr("#line1Value", ".qr-line1", line1Result);
});

// qr 다운로드
$(".qr-line1-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line1Result);
});

let line2 = "foodie";
let line2_val1 = "202209071529139";
let line2_val2 = "default";
let line2_val3 = "default";
let line2Result = `${line2}://go?filterCategoryId=${line2_val1}`;

// 최초
linkQr("#line2Value", ".qr-line2", line2Result);

// selectbox
$("#line2").change(function () {
    const val = $(this).val();
    line2 = val;

    // 둘다 값이 있는경우
    if (line2_val2 !== "default" && line2_val3 !== "default") {
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}&hiresmode=${line2_val3}`;
    } else if (line2_val2 !== "default" && line2_val3 === "default") {
        // 3번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}`;
    } else if (line2_val2 === "default" && line2_val3 !== "default") {
        // 4번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&hiresmode=${line2_val3}`;
    } else {
        // 둘다 값이 없는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}`;
    }

    linkQr("#line2Value", ".qr-line2", line2Result);
});

// input
$("#line2_val1").keyup(function () {
    const val = $(this).val();
    line2_val1 = val;

    // 둘다 값이 있는경우
    if (line2_val2 !== "default" && line2_val3 !== "default") {
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}&hiresmode=${line2_val3}`;
    } else if (line2_val2 !== "default" && line2_val3 === "default") {
        // 3번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}`;
    } else if (line2_val2 === "default" && line2_val3 !== "default") {
        // 4번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&hiresmode=${line2_val3}`;
    } else {
        // 둘다 값이 없는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}`;
    }

    linkQr("#line2Value", ".qr-line2", line2Result);
});

// selectbox
$("#line2_val2").change(function () {
    const val = $(this).val();
    line2_val2 = val;

    // 둘다 값이 있는경우
    if (line2_val2 !== "default" && line2_val3 !== "default") {
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}&hiresmode=${line2_val3}`;
    } else if (line2_val2 !== "default" && line2_val3 === "default") {
        // 3번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}`;
    } else if (line2_val2 === "default" && line2_val3 !== "default") {
        // 4번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&hiresmode=${line2_val3}`;
    } else {
        // 둘다 값이 없는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}`;
    }

    linkQr("#line2Value", ".qr-line2", line2Result);
});

// selectbox
$("#line2_val3").change(function () {
    const val = $(this).val();
    line2_val3 = val;

    // 둘다 값이 있는경우
    if (line2_val2 !== "default" && line2_val3 !== "default") {
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}&hiresmode=${line2_val3}`;
    } else if (line2_val2 !== "default" && line2_val3 === "default") {
        // 3번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&cameraPosition=${line2_val2}`;
    } else if (line2_val2 === "default" && line2_val3 !== "default") {
        // 4번 값만 있는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}&hiresmode=${line2_val3}`;
    } else {
        // 둘다 값이 없는경우
        line2Result = `${line2}://go?filterCategoryId=${line2_val1}`;
    }

    linkQr("#line2Value", ".qr-line2", line2Result);
});

// qr 다운로드
$(".qr-line2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line2Result);
});

let line3 = "foodie";
let line3_val1 = "00000";
let line3_val2 = "202209071529139";
let line3_val3 = "default";
let line3_val4 = "default";
let line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;

// 최초
linkQr("#line3Value", ".qr-line3", line3Result);

// selectbox
$("#line3").change(function () {
    const val = $(this).val();
    line3 = val;

    // 둘다 값이 있는경우
    if (line3_val3 !== "default" && line3_val4 !== "default") {
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}&hiresmode=${line3_val4}`;
    } else if (line3_val3 !== "default" && line3_val4 === "default") {
        // 3번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}`;
    } else if (line3_val3 === "default" && line3_val4 !== "default") {
        // 4번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&hiresmode=${line3_val4}`;
    } else {
        // 둘다 값이 없는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;
    }

    linkQr("#line3Value", ".qr-line3", line3Result);
});

// input
$("#line3_val1").keyup(function () {
    const val = $(this).val();
    line3_val1 = val;

    // 둘다 값이 있는경우
    if (line3_val3 !== "default" && line3_val4 !== "default") {
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}&hiresmode=${line3_val4}`;
    } else if (line3_val3 !== "default" && line3_val4 === "default") {
        // 3번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}`;
    } else if (line3_val3 === "default" && line3_val4 !== "default") {
        // 4번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&hiresmode=${line3_val4}`;
    } else {
        // 둘다 값이 없는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;
    }

    linkQr("#line3Value", ".qr-line3", line3Result);
});

// input
$("#line3_val2").keyup(function () {
    const val = $(this).val();
    line3_val2 = val;

    // 둘다 값이 있는경우
    if (line3_val3 !== "default" && line3_val4 !== "default") {
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}&hiresmode=${line3_val4}`;
    } else if (line3_val3 !== "default" && line3_val4 === "default") {
        // 3번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}`;
    } else if (line3_val3 === "default" && line3_val4 !== "default") {
        // 4번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&hiresmode=${line3_val4}`;
    } else {
        // 둘다 값이 없는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;
    }

    linkQr("#line3Value", ".qr-line3", line3Result);
});

// selectbox
$("#line3_val3").change(function () {
    const val = $(this).val();
    line3_val3 = val;

    // 둘다 값이 있는경우
    if (line3_val3 !== "default" && line3_val4 !== "default") {
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}&hiresmode=${line3_val4}`;
    } else if (line3_val3 !== "default" && line3_val4 === "default") {
        // 3번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}`;
    } else if (line3_val3 === "default" && line3_val4 !== "default") {
        // 4번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&hiresmode=${line3_val4}`;
    } else {
        // 둘다 값이 없는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;
    }

    linkQr("#line3Value", ".qr-line3", line3Result);
});

// selectbox
$("#line3_val4").change(function () {
    const val = $(this).val();
    line3_val4 = val;

    // 둘다 값이 있는경우
    if (line3_val3 !== "default" && line3_val4 !== "default") {
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}&hiresmode=${line3_val4}`;
    } else if (line3_val3 !== "default" && line3_val4 === "default") {
        // 3번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&cameraPosition=${line3_val3}`;
    } else if (line3_val3 === "default" && line3_val4 !== "default") {
        // 4번 값만 있는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}&hiresmode=${line3_val4}`;
    } else {
        // 둘다 값이 없는경우
        line3Result = `${line3}://go?filterId=${line3_val1}&filterCategoryId=${line3_val2}`;
    }

    linkQr("#line3Value", ".qr-line3", line3Result);
});

// qr 다운로드
$(".qr-line3-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line3Result);
});

let line4 = "foodie";
let line4_val1 = "00000";
let line4_val2 = "default";
let line4Result = `${line4}://go?effectId=${line4_val1}`;

// 최초
linkQr("#line4Value", ".qr-line4", line4Result);

// selectbox
$("#line4").change(function () {
    const val = $(this).val();
    line4 = val;

    if (line4_val2 !== "default") {
        // 2번 값만 있는경우
        line4Result = `${line4}://go?effectId=${line4_val1}&showEndPage=${line4_val2}`;
    } else {
        // 둘다 값이 없는경우
        line4Result = `${line4}://go?effectId=${line4_val1}`;
    }

    linkQr("#line4Value", ".qr-line4", line4Result);
});

// input
$("#line4_val1").keyup(function () {
    const val = $(this).val();
    line4_val1 = val;

    if (line4_val2 !== "default") {
        // 2번 값만 있는경우
        line4Result = `${line4}://go?effectId=${line4_val1}&showEndPage=${line4_val2}`;
    } else {
        // 둘다 값이 없는경우
        line4Result = `${line4}://go?effectId=${line4_val1}`;
    }

    linkQr("#line4Value", ".qr-line4", line4Result);
});

// selectbox
$("#line4_val2").change(function () {
    const val = $(this).val();
    line4_val2 = val;

    if (line4_val2 !== "default") {
        // 2번 값만 있는경우
        line4Result = `${line4}://go?effectId=${line4_val1}&showEndPage=${line4_val2}`;
    } else {
        // 둘다 값이 없는경우
        line4Result = `${line4}://go?effectId=${line4_val1}`;
    }

    linkQr("#line4Value", ".qr-line4", line4Result);
});

// qr 다운로드
$(".qr-line4-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, line4Result);
});
