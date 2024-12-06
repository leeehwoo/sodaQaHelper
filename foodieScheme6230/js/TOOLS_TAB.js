let toolsTab = "foodie";
let toolsTabSelect = "filter";
let toolsTabSelectKey = "선택";
let toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}`;

// 최초
$("#toolsTabValue")
    .text(toolsTabSelectResult)
    .attr("href", toolsTabSelectResult);
qrCode(".qr-toolsTab", toolsTabSelectResult);

// [Foodie.Edit.Merge] : Foodie
$("#toolsTab").change(function () {
    const val = $(this).val();
    toolsTab = val;

    if (toolsTabSelect === "tools") {
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}&adjustKeyName=${toolsTabSelectKey}`;
    } else {
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}`;
    }

    $("#toolsTabValue")
        .text(toolsTabSelectResult)
        .attr("href", toolsTabSelectResult);
    qrCode(".qr-toolsTab", toolsTabSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolsTabSelect").change(function () {
    const val = $(this).val();
    if (val === "adjustment") {
        $(".hidden2").show();
        toolsTabSelect = val;
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}`;
    } else {
        $(".hidden2").hide();
        toolsTabSelect = val;
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}`;
    }

    $("#toolsTabValue")
        .text(toolsTabSelectResult)
        .attr("href", toolsTabSelectResult);
    qrCode(".qr-toolsTab", toolsTabSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolsTabSelectKey").change(function () {
    const val = $(this).val();
    toolsTabSelectKey = val;

    if (toolsTabSelectKey === "선택") {
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}`;
    } else {
        toolsTabSelectResult = `${toolsTab}://pick?tab=${toolsTabSelect}&adjustKeyName=${toolsTabSelectKey}`;
    }

    $("#toolsTabValue")
        .text(toolsTabSelectResult)
        .attr("href", toolsTabSelectResult);
    qrCode(".qr-toolsTab", toolsTabSelectResult);
});

// qr 다운로드
$(".qr-toolsTab-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, toolsTabSelectResult);
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
