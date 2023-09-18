// console.log("what really!")

let count=0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    // countEl.textContent = count
    countEl.innerText = count
}

function save() {
    // console.log(count)
    // console.log(saveEl.innerText +  count)
    // console.log(saveEl.textContent)


    let countStr = " " + count + " - "
    // saveEl.innerText += countStr

    saveEl.textContent += countStr


    // saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}