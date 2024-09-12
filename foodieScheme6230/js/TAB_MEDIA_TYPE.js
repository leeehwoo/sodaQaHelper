let tabMediaType = "foodie";
let tabMediaType2 = "batch";
let tabMediaType3 = "image";
let FEMFResult = `${tabMediaType}://pick?tab=${tabMediaType2}&mediatype=${tabMediaType3}`;

// 최초
$("#tabMediaTypeValue").text(FEMFResult).attr("href", FEMFResult);
qrCode(".qr-tabMediaType", FEMFResult);

// [Foodie.Edit.Merge] : foodie
$("#tabMediaType").change(function () {
    const val = $(this).val();
    tabMediaType = val;
    FEMFResult = `${tabMediaType}://pick?tab=${tabMediaType2}&mediatype=${tabMediaType3}`;
    $("#tabMediaTypeValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-tabMediaType", FEMFResult);
});

// [Foodie.Edit.Merge] : filter
$("#tabMediaType2").change(function () {
    const val = $(this).val();
    tabMediaType2 = val;
    FEMFResult = `${tabMediaType}://pick?tab=${tabMediaType2}&mediatype=${tabMediaType3}`;

    $("#tabMediaTypeValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-tabMediaType", FEMFResult);
});

// [Foodie.Edit.Merge] : Category
$("#tabMediaType3").change(function () {
    const val = $(this).val();
    tabMediaType3 = val;
    FEMFResult = `${tabMediaType}://pick?tab=${tabMediaType2}&mediatype=${tabMediaType3}`;

    $("#tabMediaTypeValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-tabMediaType", FEMFResult);
});

// qr 다운로드
$(".qr-tabMediaType-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEMFResult);
});
