// 1 在名字以外欄位加上+-
// 2 透鍋+- event.target 來control 各項計分

let tbodyTrArray = document.querySelectorAll(".container tbody tr");
console.log("123");
console.log(`tbodyTrArray = ${tbodyTrArray[0].innerHTML}`);

// 1 在名字以外欄位加上+-

// 1-1 Start 建 + - icon -----------------------------
// 建 + icon
let iconP = document.createElement("i");
iconP.classList.add("fa-solid", "fa-circle-plus")
// tbodyTrArray[0].firstElementChild.appendChild(iconP);// 這兩行等等要移除 測試用
// 建 - icon
let iconD = document.createElement('i')
iconD.classList.add('fa-solid', 'fa-circle-minus')
// tbodyTrArray[0].firstElementChild.appendChild(iconD)
// End -----------------------------


// 1-2 Start 將icon 放在計分欄位 不放人名----------------
lengthForIcon = (tbodyTrArray[0].children.length)
console.log(`lengthForIcon= ${lengthForIcon}`)

tbodyTrArray.forEach(function putIcon(eachTr){
    //eachTr.childrenNode會返回所有類型的節點 包含空白和註解
    //eachTr.children只會返回元素節點

    //正常sample
    // console.log(eachTr.children[0])
    
    for (let i =1; i<lengthForIcon; i++){
        console.log(eachTr.children[i])
        eachTr.children[i].appendChild(iconP.cloneNode(true))
        eachTr.children[i].appendChild(iconD.cloneNode(true))
        // eachTr[i].firstElementChild.appendChild(iconP)
    }
})

// End -----------------------------


// 2 透鍋+- event.target 來control 各項計分------------
let table = document.querySelector('table')
table.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('fa-circle-plus')) {
        // console.log(`++`)
        // console.log(`'test' = ${event.target.parentElement.firstElementChild.textContent}`)
        //確保將值轉為數字在做計算
       
        event.target.parentElement.firstElementChild.textContent = parseInt(event.target.parentElement.textContent)+1
        //因為event.target.parentElement.textContent 的值增加 1 後
        //元素內容被替換為數字，這會導致子元素被覆蓋或移除
        //所以改變寫法 多加一層span給分數 要改分數時 直接進span去改
        // console.log('event.target.parentElement=',event.target.parentElement);

    }else if (event.target.classList.contains('fa-circle-minus')) {
        // console.log(`--`)
        event.target.parentElement.firstElementChild.textContent = parseInt(event.target.parentElement.textContent)-1
    }
})

// End -----------------------------
