let FEMF = "foodie";
let FEMFFilter = "00000";
let FEMFCategory = "00000";
let FEMFResult = `${FEMF}://pick?tab=filter&filterId=${FEMFFilter}&filterCategoryId=${FEMFCategory}`;

// 최초
$("#FEMFValue").text(FEMFResult).attr("href", FEMFResult);
qrCode(".qr-FEMF", FEMFResult);

// [Foodie.Edit.Merge] : foodie
$("#FEMF").change(function () {
    const val = $(this).val();
    FEMF = val;
    FEMFResult = `${FEMF}://pick?tab=filter&filterId=${FEMFFilter}&filterCategoryId=${FEMFCategory}`;
    $("#FEMFValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-FEMF", FEMFResult);
});

// [Foodie.Edit.Merge] : filter
$("#FEMFFilter").keyup(function () {
    const val = $(this).val();
    FEMFFilter = val;
    FEMFResult = `${FEMF}://pick?tab=filter&filterId=${FEMFFilter}&filterCategoryId=${FEMFCategory}`;

    $("#FEMFValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-FEMF", FEMFResult);
});

// [Foodie.Edit.Merge] : Category
$("#FEMFCategory").keyup(function () {
    const val = $(this).val();
    FEMFCategory = val;
    FEMFResult = `${FEMF}://pick?tab=filter&filterId=${FEMFFilter}&filterCategoryId=${FEMFCategory}`;

    $("#FEMFValue").text(FEMFResult).attr("href", FEMFResult);
    qrCode(".qr-FEMF", FEMFResult);
});

// qr 다운로드
$(".qr-FEMF-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FEMFResult);
});
