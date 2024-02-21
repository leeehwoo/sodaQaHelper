let FICZICamera = "foodie";
let FICZICameraPosition = "0";
let FICZICameraResult = `${FICZICamera}://go?tab=zoom&cameraPosition=${FICZICameraPosition}`;

// 최초
$("#FICZICameraValue").text(FICZICameraResult).attr("href", FICZICameraResult);
qrCode(".qr-FICZICamera", FICZICameraResult);

// [Foodie.Edit.Merge] : Foodie
$("#FICZICamera").change(function () {
    const val = $(this).val();
    FICZICamera = val;
    FICZICameraResult = `${FICZICamera}://go?tab=zoom&cameraPosition=${FICZICameraPosition}`;
    $("#FICZICameraValue")
        .text(FICZICameraResult)
        .attr("href", FICZICameraResult);
    qrCode(".qr-FICZICamera", FICZICameraResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FICZICameraPosition").change(function () {
    const val = $(this).val();
    FICZICameraPosition = val;
    FICZICameraResult = `${FICZICamera}://go?tab=zoom&cameraPosition=${FICZICameraPosition}`;
    $("#FICZICameraValue")
        .text(FICZICameraResult)
        .attr("href", FICZICameraResult);
    qrCode(".qr-FICZICamera", FICZICameraResult);
});

// qr 다운로드
$(".qr-FICZICamera-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FICZICameraResult);
});
