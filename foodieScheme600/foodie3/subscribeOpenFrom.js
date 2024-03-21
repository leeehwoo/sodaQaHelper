let subscribeOpenFromValueFoodie = "foodie";
// let subscribeOpenFrom = "film";
let subscribeOpenFromValueResult = `${subscribeOpenFromValueFoodie}://open?subscribeOpen=page&from=splash`;

// 최초
linkQr(
    "#subscribeOpenFromValue",
    ".qr-subscribeOpenFromValue",
    subscribeOpenFromValueResult
);

// selectbox
$("#subscribeOpenFromValueFoodie").change(function () {
    const val = $(this).val();
    subscribeOpenFromValueFoodie = val;
    subscribeOpenFromValueResult = `${subscribeOpenFromValueFoodie}://open?subscribeOpen=page&from=splash`;

    linkQr(
        "#subscribeOpenFromValue",
        ".qr-subscribeOpenFromValue",
        subscribeOpenFromValueResult
    );
});

// selectbox
// $("#subscribeOpenFromValue").change(function () {
//     const val = $(this).val();
//     subscribeOpenFromValue = val;
//     subscribeOpenFromValueResult = `foodie://go?subscribeOpen=page&from=splash`;

//     linkQr(
//         "#subscribeOpenFromValue",
//         ".qr-subscribeOpenFromValue",
//         subscribeOpenFromValueResult
//     );
// });

// qr 다운로드
$(".qr-subscribeOpenFromValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, subscribeOpenFromValueResult);
});
