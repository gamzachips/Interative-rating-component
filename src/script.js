const buttons = document.querySelectorAll(".ratings .button");
let selected = null;

//각 버튼에 click 이벤트를 등록한다. 
//각 버튼을 체크하면서 selected 클래스 붙은걸 전부 지우고
//선택된 버튼에 대해서만 selected 클래스를 추가해준다.
//selected는 선택된 버튼으로부터 점수를 저장하고 넘기기 위한 변수.
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selected = btn.textContent;
    });
});

const ratingCard = document.getElementById("rating-card");
const thankyouCard = document.getElementById("thankyou-card");

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", ()=>{
    if(selected != null)
    {
        ratingCard.classList.add("hidden")
        thankyouCard.classList.remove("hidden");
        document.getElementById("score").textContent = selected;
    }
})

