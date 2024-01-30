let FEME = "foodie";
let FEMEFselect = "effect&effectId";
let FEMENumber = "00000";
let FEMEResult = `${FEME}://pick?tab=${FEMEFselect}=${FEMENumber}`;

// 최초
$("#FEMEValue").text(FEMEResult).attr("href", FEMEResult);
qrCode(".qr-FEME", FEMEResult);

// [Foodie.Edit.Merge] : foodie
$("#FEME").change(function () {
    const val = $(this).val();
    FEME = val;
    FEMEResult = `${FEME}://pick?tab=${FEMEFselect}=${FEMENumber}`;
    $("#FEMEValue").text(FEMEResult).attr("href", FEMEResult);
    qrCode(".qr-FEME", FEMEResult);
});

// [Foodie.Edit.Merge] : filter
$("#FEMEFselect").change(function () {
    const val = $(this).val();
    FEMEFselect = val;
    FEMEResult = `${FEME}://pick?tab=${FEMEFselect}=${FEMENumber}`;

    $("#FEMEValue").text(FEMEResult).attr("href", FEMEResult);
    qrCode(".qr-FEME", FEMEResult);
});

// [Foodie.Edit.Merge] : Category
$("#FEMENumber").keyup(function () {
    const val = $(this).val();
    FEMENumber = val;
    FEMEResult = `${FEME}://pick?tab=${FEMEFselect}=${FEMENumber}`;

    $("#FEMEValue").text(FEMEResult).attr("href", FEMEResult);
    qrCode(".qr-FEME", FEMEResult);
});

// qr 다운로드
$(".qr-FEME-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEMEResult);
});
