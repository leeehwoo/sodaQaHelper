let FSIIEM = "foodie";
let FSIIEMTab = "main";
let FSIIEMTabGroup = "00000";
let FSIIEMTabNumber = "00000";
let FSIIEMValue = `${FSIIEM}://store?&tab=${FSIIEMTab}&groupid=${FSIIEMTabGroup}&itemid=${FSIIEMTabNumber}`;

// 최초
$("#FSIIEMValue").text(FSIIEMValue).attr("href", FSIIEMValue);
qrCode(".qr-FSIIEM", FSIIEMValue);

// [Foodie.Edit.Merge] : foodie
$("#FSIIEM").change(function () {
    const val = $(this).val();
    FSIIEM = val;
    FSIIEMValue = `${FSIIEM}://store?&tab=${FSIIEMTab}&groupid=${FSIIEMTabGroup}&itemid=${FSIIEMTabNumber}`;
    $("#FSIIEMValue").text(FSIIEMValue).attr("href", FSIIEMValue);
    qrCode(".qr-FSIIEM", FSIIEMValue);
});

// [Foodie.Edit.Merge] : filter
$("#FSIIEMTab").change(function () {
    const val = $(this).val();
    FSIIEMTab = val;
    FSIIEMValue = `${FSIIEM}://store?&tab=${FSIIEMTab}&groupid=${FSIIEMTabGroup}&itemid=${FSIIEMTabNumber}`;

    $("#FSIIEMValue").text(FSIIEMValue).attr("href", FSIIEMValue);
    qrCode(".qr-FSIIEM", FSIIEMValue);
});

// [Foodie.Edit.Merge] : Group
$("#FSIIEMTabGroup").keyup(function () {
    const val = $(this).val();
    FSIIEMTabGroup = val;
    FSIIEMValue = `${FSIIEM}://store?&tab=${FSIIEMTab}&groupid=${FSIIEMTabGroup}&itemid=${FSIIEMTabNumber}`;

    $("#FSIIEMValue").text(FSIIEMValue).attr("href", FSIIEMValue);
    qrCode(".qr-FSIIEM", FSIIEMValue);
});

// [Foodie.Edit.Merge] : FSIIEMTabNumber
$("#FSIIEMTabNumber").keyup(function () {
    const val = $(this).val();
    FSIIEMTabNumber = val;
    FSIIEMValue = `${FSIIEM}://store?&tab=${FSIIEMTab}&groupid=${FSIIEMTabGroup}&itemid=${FSIIEMTabNumber}`;

    $("#FSIIEMValue").text(FSIIEMValue).attr("href", FSIIEMValue);
    qrCode(".qr-FSIIEM", FSIIEMValue);
});

// qr 다운로드
$(".qr-FSIIEM-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FSIIEMValue);
});
