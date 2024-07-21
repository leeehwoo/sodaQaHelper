let FEAv2Foodie = "foodie";
let FEAv2AdKeyname = "brilliance";
let FEAd2Result = `${FEAv2Foodie}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeyname}`;

// 최초
$("#FEAv2Value").text(FEAd2Result).attr("href", FEAd2Result);
qrCode(".qr-FEAv2", FEAd2Result);

// [Foodie.Edit.Adjustment.v2] : Foodie
$("#FEAv2").change(function () {
    const val = $(this).val();
    FEAv2Foodie = val;
    FEAd2Result = `${FEAv2Foodie}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeyname}`;
    $("#FEAv2Value").text(FEAd2Result).attr("href", FEAd2Result);
    qrCode(".qr-FEAv2", FEAd2Result);
});

// [Foodie.Edit.Adjustment.v2] : AdjustKeyname
$("#FEAv2AdKeyname").change(function () {
    const val = $(this).val();
    FEAv2AdKeyname = val;
    FEAd2Result = `${FEAv2Foodie}://pick?tab=adjustment&adjustKeyname=${FEAv2AdKeyname}`;
    $("#FEAv2Value").text(FEAd2Result).attr("href", FEAd2Result);
    qrCode(".qr-FEAv2", FEAd2Result);
});

// qr 다운로드
$(".qr-FEAv2-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEAd2Result);
});
