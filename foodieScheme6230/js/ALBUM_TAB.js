let albumTabFoodieIntensity = "foodie";
let albumTabAdKeynameIntensity = "batch";
let FEAd2ResultIntensity = `${albumTabFoodieIntensity}://album?tab=${albumTabAdKeynameIntensity}`;

// 최초
$("#albumTabValueIntensity")
    .text(FEAd2ResultIntensity)
    .attr("href", FEAd2ResultIntensity);
for (let i = -100; i <= 100; i++) {
    $("#albumTabIntensityIntensity").append(
        `<option value="${i}">${i}</option>`
    );
}
qrCode(".qr-albumTabIntensity", FEAd2ResultIntensity);

// [Foodie.Edit.Adjustment.v2] : Foodie
$("#albumTabIntensity").change(function () {
    const val = $(this).val();
    albumTabFoodieIntensity = val;
    FEAd2ResultIntensity = `${albumTabFoodieIntensity}://album?tab=${albumTabAdKeynameIntensity}`;
    $("#albumTabValueIntensity")
        .text(FEAd2ResultIntensity)
        .attr("href", FEAd2ResultIntensity);
    qrCode(".qr-albumTabIntensity", FEAd2ResultIntensity);
});

// [Foodie.Edit.Adjustment.v2] : AdjustKeyname
$("#albumTabAdKeynameIntensity").change(function () {
    const val = $(this).val();
    albumTabAdKeynameIntensity = val;
    FEAd2ResultIntensity = `${albumTabFoodieIntensity}://album?tab=${albumTabAdKeynameIntensity}`;
    $("#albumTabValueIntensity")
        .text(FEAd2ResultIntensity)
        .attr("href", FEAd2ResultIntensity);
    qrCode(".qr-albumTabIntensity", FEAd2ResultIntensity);
});

// qr 다운로드
$(".qr-albumTabIntensity-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEAd2ResultIntensity);
});
