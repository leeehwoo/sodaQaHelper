let subscribeOpenValueFoodie = "foodie";
// let subscribeOpen = "film";
let subscribeOpenValueResult = `${subscribeOpenValueFoodie}://open?subscribeOpen=page`;

// 최초
linkQr(
    "#subscribeOpenValue",
    ".qr-subscribeOpenValue",
    subscribeOpenValueResult
);

// selectbox
$("#subscribeOpenValueFoodie").change(function () {
    const val = $(this).val();
    subscribeOpenValueFoodie = val;
    subscribeOpenValueResult = `${subscribeOpenValueFoodie}://open?subscribeOpen=page`;

    linkQr(
        "#subscribeOpenValue",
        ".qr-subscribeOpenValue",
        subscribeOpenValueResult
    );
});

// selectbox
// $("#subscribeOpenValue").change(function () {
//     const val = $(this).val();
//     subscribeOpenValue = val;
//     subscribeOpenValueResult = `foodie://go?subscribeOpen=page`;

//     linkQr(
//         "#subscribeOpenValue",
//         ".qr-subscribeOpenValue",
//         subscribeOpenValueResult
//     );
// });

// qr 다운로드
$(".qr-subscribeOpenValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, subscribeOpenValueResult);
});
