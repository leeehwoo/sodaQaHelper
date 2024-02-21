let FSI = "foodie";
let FSITab = "main";
let FSICategory = "filter";
let FSICNumber = "00000";
let FSIValue = `${FSI}://store?&tab=${FSITab}&category=${FSICategory}&groupid=${FSICNumber}`;

// 최초
$("#FSIValue").text(FSIValue).attr("href", FSIValue);
qrCode(".qr-FSI", FSIValue);

// [Foodie.Edit.Merge] : foodie
$("#FSI").change(function () {
    const val = $(this).val();
    FSI = val;
    FSIValue = `${FSI}://store?&tab=${FSITab}&category=${FSICategory}&groupid=${FSICNumber}`;
    $("#FSIValue").text(FSIValue).attr("href", FSIValue);
    qrCode(".qr-FSI", FSIValue);
});

// [Foodie.Edit.Merge] : filter
$("#FSITab").change(function () {
    const val = $(this).val();
    FSITab = val;
    FSIValue = `${FSI}://store?&tab=${FSITab}&category=${FSICategory}&groupid=${FSICNumber}`;

    $("#FSIValue").text(FSIValue).attr("href", FSIValue);
    qrCode(".qr-FSI", FSIValue);
});

// [Foodie.Edit.Merge] : Category
$("#FSICategory").change(function () {
    const val = $(this).val();
    FSICategory = val;
    FSIValue = `${FSI}://store?&tab=${FSITab}&category=${FSICategory}&groupid=${FSICNumber}`;

    $("#FSIValue").text(FSIValue).attr("href", FSIValue);
    qrCode(".qr-FSI", FSIValue);
});

// [Foodie.Edit.Merge] : FSICNumber
$("#FSICNumber").keyup(function () {
    const val = $(this).val();
    FSICNumber = val;
    FSIValue = `${FSI}://store?&tab=${FSITab}&category=${FSICategory}&groupid=${FSICNumber}`;

    $("#FSIValue").text(FSIValue).attr("href", FSIValue);
    qrCode(".qr-FSI", FSIValue);
});

// qr 다운로드
$(".qr-FSI-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FSIValue);
});
