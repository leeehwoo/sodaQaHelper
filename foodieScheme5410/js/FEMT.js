let FEMT = "foodie";
let FEMTTab = "main";
let FEMTTabResult = `${FEMT}://pick?tab=${FEMTTab}`;

// 최초
$("#FEMTValue").text(FEMTTabResult).attr("href", FEMTTabResult);
qrCode(".qr-FEMT", FEMTTabResult);

// [Foodie.Edit.Merge] : Foodie
$("#FEMT").change(function () {
    const val = $(this).val();
    FEMT = val;
    FEMTTabResult = `${FEMT}://pick?tab=${FEMTTab}`;
    $("#FEMTValue").text(FEMTTabResult).attr("href", FEMTTabResult);
    qrCode(".qr-FEMT", FEMTTabResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FEMTTab").change(function () {
    const val = $(this).val();
    FEMTTab = val;
    FEMTTabResult = `${FEMT}://pick?tab=${FEMTTab}`;
    $("#FEMTValue").text(FEMTTabResult).attr("href", FEMTTabResult);
    qrCode(".qr-FEMT", FEMTTabResult);
});

// qr 다운로드
$(".qr-FEMT-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEMTTabResult);
});
