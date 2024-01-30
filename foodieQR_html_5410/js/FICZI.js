let FICZI = "foodie";
let FICZITab = "Filter";
let FICZIResult = `${FICZI}://go?tab=${FICZITab}`;

// 최초
$("#FICZIValue").text(FICZIResult).attr("href", FICZIResult);
qrCode(".qr-FICZI", FICZIResult);

// [Foodie.Edit.Merge] : Foodie
$("#FICZI").change(function () {
    const val = $(this).val();
    FICZI = val;
    FICZIResult = `${FICZI}://go?tab=${FICZITab}`;
    $("#FICZIValue").text(FICZIResult).attr("href", FICZIResult);
    qrCode(".qr-FICZI", FICZIResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FICZITab").change(function () {
    const val = $(this).val();
    FICZITab = val;
    FICZIResult = `${FICZI}://go?tab=${FICZITab}`;
    $("#FICZIValue").text(FICZIResult).attr("href", FICZIResult);
    qrCode(".qr-FICZI", FICZIResult);
});

// qr 다운로드
$(".qr-FICZI-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FICZIResult);
});
