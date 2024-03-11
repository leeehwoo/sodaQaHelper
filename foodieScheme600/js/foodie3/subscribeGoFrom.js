let subscribeGoOpenFromValueFoodie = "foodie";
// let subscribeGoOpenFrom = "film";
let subscribeGoOpenFromValueResult = `${subscribeGoOpenFromValueFoodie}://go?subscribeOpen=page&from=splash`;

// 최초
linkQr(
    "#subscribeGoOpenFromValue",
    ".qr-subscribeGoOpenFromValue",
    subscribeGoOpenFromValueResult
);

// selectbox
$("#subscribeGoOpenFromValueFoodie").change(function () {
    const val = $(this).val();
    subscribeGoOpenFromValueFoodie = val;
    subscribeGoOpenFromValueResult = `${subscribeGoOpenFromValueFoodie}://go?subscribeOpen=page&from=splash`;

    linkQr(
        "#subscribeGoOpenFromValue",
        ".qr-subscribeGoOpenFromValue",
        subscribeGoOpenFromValueResult
    );
});

// selectbox
// $("#subscribeGoOpenFromValue").change(function () {
//     const val = $(this).val();
//     subscribeGoOpenFromValue = val;
//     subscribeGoOpenFromValueResult = `foodie://go?subscribeOpen=page&from=splash`;

//     linkQr(
//         "#subscribeGoOpenFromValue",
//         ".qr-subscribeGoOpenFromValue",
//         subscribeGoOpenFromValueResult
//     );
// });

// qr 다운로드
$(".qr-subscribeGoOpenFromValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, subscribeGoOpenFromValueResult);
});
