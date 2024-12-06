let tool = "foodie";
let toolSelect = "filter";
let toolSelectKey = "enhance";
let toolSelectResult = `${tool}://pick?tab=${toolSelect}`;

// 최초
$("#toolValue").text(toolSelectResult).attr("href", toolSelectResult);
qrCode(".qr-tool", toolSelectResult);

// [Foodie.Edit.Merge] : Foodie
$("#tool").change(function () {
    const val = $(this).val();
    tool = val;

    if (toolSelect === "tool") {
        toolSelectResult = `${tool}://pick?tab=${toolSelect}&toolKeyname=${toolSelectKey}`;
    } else {
        toolSelectResult = `${tool}://pick?tab=${toolSelect}`;
    }

    $("#toolValue").text(toolSelectResult).attr("href", toolSelectResult);
    qrCode(".qr-tool", toolSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolSelect").change(function () {
    const val = $(this).val();
    if (val === "tool") {
        $(".hidden").show();
        toolSelect = val;
        toolSelectResult = `${tool}://pick?tab=${toolSelect}&toolKeyname=${toolSelectKey}`;
    } else {
        $(".hidden").hide();
        toolSelect = val;
        toolSelectResult = `${tool}://pick?tab=${toolSelect}`;
    }

    $("#toolValue").text(toolSelectResult).attr("href", toolSelectResult);
    qrCode(".qr-tool", toolSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolSelectKey").change(function () {
    const val = $(this).val();
    toolSelectKey = val;
    toolSelectResult = `${tool}://pick?tab=${toolSelect}&toolKeyname=${toolSelectKey}`;
    $("#toolValue").text(toolSelectResult).attr("href", toolSelectResult);
    qrCode(".qr-tool", toolSelectResult);
});

// qr 다운로드
$(".qr-tool-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, toolSelectResult);
});

// 캡쳐된 파일을 저장하는 함수
function saveImg(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

$(".handleImgDown").click(function () {
    const element = $(this).data("id");
    const dataName = $(this).data("name");
    // 캡쳐할 영역을 html2canvas로 캡쳐하여 canvas로 변환
    html2canvas(document.querySelector(`#${element}`)).then((canvas) => {
        saveImg(canvas.toDataURL("image/jpg"), `${dataName}.png`);
    });
});
