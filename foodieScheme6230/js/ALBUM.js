let albumFoodie = "foodie";
let FEAd2Result = `${albumFoodie}://album`;

// 최초
$("#albumValue").text(FEAd2Result).attr("href", FEAd2Result);
qrCode(".qr-album", FEAd2Result);

// [Foodie.Edit.Adjustment.v2] : Foodie
$("#album").change(function () {
    const val = $(this).val();
    albumFoodie = val;
    FEAd2Result = `${albumFoodie}://album`;
    $("#albumValue").text(FEAd2Result).attr("href", FEAd2Result);
    qrCode(".qr-album", FEAd2Result);
});

// qr 다운로드
$(".qr-album-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEAd2Result);
});
