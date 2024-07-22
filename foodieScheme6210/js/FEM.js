let FEM = "foodie";
let FEMTab = "filter";
let FEMTabResult = `${FEM}://store?tab=${FEMTab}`;

// 최초
$("#FEMValue").text(FEMTabResult).attr("href", FEMTabResult);
qrCode(".qr-FEM", FEMTabResult);

// [Foodie.Edit.Merge] : Foodie
$("#FEM").change(function () {
    const val = $(this).val();
    FEM = val;
    FEMTabResult = `${FEM}://store?tab=${FEMTab}`;
    $("#FEMValue").text(FEMTabResult).attr("href", FEMTabResult);
    qrCode(".qr-FEM", FEMTabResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FEMTab").change(function () {
    const val = $(this).val();
    FEMTab = val;
    FEMTabResult = `${FEM}://store?tab=${FEMTab}`;
    $("#FEMValue").text(FEMTabResult).attr("href", FEMTabResult);
    qrCode(".qr-FEM", FEMTabResult);
});

// qr 다운로드
$(".qr-FEM-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEMTabResult);
});
