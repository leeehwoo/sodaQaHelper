let subscribeGoOpenValueFoodie = "foodie";
// let subscribeGoOpen = "film";
let subscribeGoOpenValueResult = `${subscribeGoOpenValueFoodie}://go?subscribeOpen=page`;

// 최초
linkQr(
    "#subscribeGoOpenValue",
    ".qr-subscribeGoOpenValue",
    subscribeGoOpenValueResult
);

// selectbox
$("#subscribeGoOpenValueFoodie").change(function () {
    const val = $(this).val();
    subscribeGoOpenValueFoodie = val;
    subscribeGoOpenValueResult = `${subscribeGoOpenValueFoodie}://go?subscribeOpen=page`;

    linkQr(
        "#subscribeGoOpenValue",
        ".qr-subscribeGoOpenValue",
        subscribeGoOpenValueResult
    );
});

// selectbox
// $("#subscribeGoOpenValue").change(function () {
//     const val = $(this).val();
//     subscribeGoOpenValue = val;
//     subscribeGoOpenValueResult = `foodie://go?subscribeGoOpen=page`;

//     linkQr(
//         "#subscribeGoOpenValue",
//         ".qr-subscribeGoOpenValue",
//         subscribeGoOpenValueResult
//     );
// });

// qr 다운로드
$(".qr-subscribeGoOpenValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, subscribeGoOpenValueResult);
});
