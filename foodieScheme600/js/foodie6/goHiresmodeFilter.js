let goHiresmodeFilterFoodie = "foodie";
let goHiresmodeFilterId = "135414";
let goHiresmodeFilter = "standard";
let goHiresmodeFilterResult = `${goHiresmodeFilterFoodie}://go?filterId=${goHiresmodeFilterId}&hiresmode=${goHiresmodeFilter}`;

// 최초
linkQr(
    "#goHiresmodeFilterValue",
    ".qr-goHiresmodeFilterValue",
    goHiresmodeFilterResult
);

// selectbox
$("#goHiresmodeFilterFoodie").change(function () {
    const val = $(this).val();
    goHiresmodeFilterFoodie = val;
    goHiresmodeFilterResult = `${goHiresmodeFilterFoodie}://go?filterId=${goHiresmodeFilterId}&hiresmode=${goHiresmodeFilter}`;

    linkQr(
        "#goHiresmodeFilterValue",
        ".qr-goHiresmodeFilterValue",
        goHiresmodeFilterResult
    );
});

// Input
$("#goHiresmodeFilterId").keyup(function () {
    const val = $(this).val();
    goHiresmodeFilterId = val;
    goHiresmodeFilterResult = `${goHiresmodeFilterFoodie}://go?filterId=${goHiresmodeFilterId}&hiresmode=${goHiresmodeFilter}`;

    linkQr(
        "#goHiresmodeFilterValue",
        ".qr-goHiresmodeFilterValue",
        goHiresmodeFilterResult
    );
});

// selectbox
$("#goHiresmodeFilter").change(function () {
    const val = $(this).val();
    goHiresmodeFilter = val;
    goHiresmodeFilterResult = `${goHiresmodeFilterFoodie}://go?filterId=${goHiresmodeFilterId}&hiresmode=${goHiresmodeFilter}`;

    linkQr(
        "#goHiresmodeFilterValue",
        ".qr-goHiresmodeFilterValue",
        goHiresmodeFilterResult
    );
});

// qr 다운로드
$(".qr-goHiresmodeFilterValue-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, goHiresmodeFilterResult);
});
