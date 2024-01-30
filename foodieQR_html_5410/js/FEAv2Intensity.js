let FEAv2FoodieIntensity = "foodie";
let FEAv2AdKeynameIntensity = "brilliance";
let FEAv2IntensityIntensity = "-100";
let FEAd2ResultIntensity = `${FEAv2FoodieIntensity}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeynameIntensity}&intensity=${FEAv2IntensityIntensity}`;

// 최초
$("#FEAv2ValueIntensity")
    .text(FEAd2ResultIntensity)
    .attr("href", FEAd2ResultIntensity);
for (let i = -100; i <= 100; i++) {
    $("#FEAv2IntensityIntensity").append(`<option value="${i}">${i}</option>`);
}
qrCode(".qr-FEAv2Intensity", FEAd2ResultIntensity);

// [Foodie.Edit.Adjustment.v2] : Foodie
$("#FEAv2Intensity").change(function () {
    const val = $(this).val();
    FEAv2FoodieIntensity = val;
    FEAd2ResultIntensity = `${FEAv2FoodieIntensity}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeynameIntensity}&intensity=${FEAv2IntensityIntensity}`;
    $("#FEAv2ValueIntensity")
        .text(FEAd2ResultIntensity)
        .attr("href", FEAd2ResultIntensity);
    qrCode(".qr-FEAv2Intensity", FEAd2ResultIntensity);
});

// [Foodie.Edit.Adjustment.v2] : AdjustKeyname
$("#FEAv2AdKeynameIntensity").change(function () {
    const val = $(this).val();
    FEAv2AdKeynameIntensity = val;
    FEAd2ResultIntensity = `${FEAv2FoodieIntensity}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeynameIntensity}&intensity=${FEAv2IntensityIntensity}`;
    $("#FEAv2ValueIntensity")
        .text(FEAd2ResultIntensity)
        .attr("href", FEAd2ResultIntensity);
    qrCode(".qr-FEAv2Intensity", FEAd2ResultIntensity);
});

// [Foodie.Edit.Adjustment.v2] : intensity
$("#FEAv2IntensityIntensity").change(function () {
    const val = $(this).val();
    FEAv2IntensityIntensity = val;
    FEAd2ResultIntensity = `${FEAv2FoodieIntensity}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeynameIntensity}&intensity=${FEAv2IntensityIntensity}`;
    $("#FEAv2ValueIntensity")
        .text(FEAd2ResultIntensity)
        .attr("href", FEAd2ResultIntensity);
    qrCode(".qr-FEAv2Intensity", FEAd2ResultIntensity);
});

// qr 다운로드
$(".qr-FEAv2Intensity-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEAd2ResultIntensity);
});
