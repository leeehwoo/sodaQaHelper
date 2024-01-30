let FDS = "foodie";
let FDSType = "image";
let FDSPath = "00000";
let FDSValue = `${FDS}://edit?mediatype=${FDSType}&filepath=${FDSPath}`;

// 최초
$("#FDSValue").text(FDSValue).attr("href", FDSValue);
qrCode(".qr-FDS", FDSValue);

// [Foodie.Edit.Merge] : foodie
$("#FDS").change(function () {
    const val = $(this).val();
    FDS = val;
    FDSValue = `${FDS}://edit?mediatype=${FDSType}&filepath=${FDSPath}`;
    $("#FDSValue").text(FDSValue).attr("href", FDSValue);
    qrCode(".qr-FDS", FDSValue);
});

// [Foodie.Edit.Merge] : filter
$("#FDSType").change(function () {
    const val = $(this).val();
    FDSType = val;
    FDSValue = `${FDS}://edit?mediatype=${FDSType}&filepath=${FDSPath}`;

    $("#FDSValue").text(FDSValue).attr("href", FDSValue);
    qrCode(".qr-FDS", FDSValue);
});

// [Foodie.Edit.Merge] : FDSPath
$("#FDSPath").keyup(function () {
    const val = $(this).val();
    FDSPath = val;
    FDSValue = `${FDS}://edit?mediatype=${FDSType}&filepath=${FDSPath}`;

    $("#FDSValue").text(FDSValue).attr("href", FDSValue);
    qrCode(".qr-FDS", FDSValue);
});

// qr 다운로드
$(".qr-FDS-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FDSValue);
});
