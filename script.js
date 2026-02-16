//DOM操作用定義
const listDocS = document.getElementById("listS")
const listDocM = document.getElementById("listM")
const listDocL = document.getElementById("listL")
const sumDocS = document.getElementById("sumS")
const sumDocM = document.getElementById("sumM")
const sumDocL = document.getElementById("sumL")
const textS = document.getElementById("textS")
const textM = document.getElementById("textM")
const textL = document.getElementById("textL")
const btnS = document.getElementById("btnS")
const btnM = document.getElementById("btnM")
const btnL = document.getElementById("btnL")

//配列定義
let listS = []
let listM = []
let listL = []

class change{
    constructor(value){
        this.value = value;
    }
    setS(){
            listS.push(Number(this.value))
            textS.value = ""
            listDocS.textContent = listS
            let sum = 0
            for(let num of listS){
                sum += num
            }
            sumDocS.textContent = sum
    }
    setM(){
            listM.push(Number(this.value))
            textM.value = ""
            listDocM.textContent = listM
            let sum = 0
            for(let num of listM){
                sum += num
            }
            sumDocM.textContent = sum
    }
    setL(){
            listL.push(Number(this.value))
            textL.value = ""
            listDocL.textContent = listL
            let sum = 0
            for(let num of listL){
                sum += num
            }
            sumDocL.textContent = sum
    }
}
btnS.addEventListener("click",() => {
    if(textS.value != ""){
    const changeS = new change(Number(textS.value))
    changeS.setS()
    }
})
btnM.addEventListener("click",() => {
    if(textM.value != ""){
    const changeM = new change(Number(textM.value))
    changeM.setM()
    }
})
btnL.addEventListener("click",() => {
    if(textL.value != ""){
    const changeL = new change(Number(textL.value))
    changeL.setL()
    }
})
