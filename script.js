let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');


let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = 'আপনি সঠিক নাম্বারটি ধারণা করছেন, আপনার অনুমিত নাম্বারটি হলো ${number}'
    }else if(input < number){
        output.innerHTML = 'আপনার অনুমিত নাম্বারটি অপেক্ষাকৃত ছোট'
    };
    if(input > number){
        output.innerHTML = 'আপনার অনুমিত নাম্বারাটি অপেক্ষাকৃত বড়'
    }
});

