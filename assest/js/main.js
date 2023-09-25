var questionArray = [
    {
        categoryQuestion : 'S',
        question : 'Tôi thấy khó mà thoải mái được',
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi bị khô miệng',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi dường như chẳng có chút cảm xúc tích cực nào',
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi thấy khó bắt tay vào công việc',
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi có xu hướng phản ứng thái quá với mọi tình huống',
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay…)',
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi thấy mình đang suy nghĩ quá nhiều',
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi lo lắng về những tình huống có thể làm tôi hoảng sợ hoặc biến tôi thành trò cười',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi thấy mình chẳng có gì để mong đợi cả',
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi thấy bản thân dễ bị kích động',
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi thấy khó thư giãn được',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi cảm thấy chán nản, thất vọng',
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm',
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi thấy mình gần như hoảng loạn',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi không thấy hăng hái với bất kỳ việc gì nữa',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi cảm thấy mình chẳng đáng làm người'
    },
    {
        categoryQuestion : 'S',
        question : 'Tôi thấy mình khá dễ phật ý, tự ái'
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)'
    },
    {
        categoryQuestion : 'A',
        question : 'Tôi hay sợ vô cớ',
    },
    {
        categoryQuestion : 'D',
        question : 'Tôi thấy cuộc sống vô nghĩa'
    }
];

let indexWindow = 0;

var question = questionArray[0];
let arraysPoint = [];
let preIconClick = $('#pre');
let nextIconClick = $('#next');
let btns = document.querySelectorAll('.btn');

//sự kiện click các câu trả lời
window.addEventListener('load', () => {
    // loadElemetQuestion()
    render()
    let btnAllElemet = document.querySelectorAll('.point');

    if(index == 0)
    {
        nextIconClick.show();
    }
    for (const btn of btnAllElemet) {
        btn.addEventListener('click', () => {

            const value = btn.getAttribute('data-value');
            
            if(!arraysPoint[index])
            {
                arraysPoint[index] = {category: questionArray[index].categoryQuestion, point: +value}
            }
            else 
            {
                arraysPoint[index].point = Number(value)
            }

            if(index >= questionArray.length - 1)
            {
                
                document.querySelector('#question-parent').classList.add('d-none');
                document.querySelector('#btn-send-id').classList.remove('d-none')
                const massage  = getMassageAllQuestion(arraysPoint);
                return renderResult(massage);
            }

            index++
            
            if(index > 0 && index  < questionArray.length - 1)
            {
                preIconClick.show();
                nextIconClick.show();
            }
            else if(index == questionArray.length - 1)
            {
                nextIconClick.hide();
            }
            for (const btnRemove of btnAllElemet)
            {
                btnRemove.classList.remove('selected')
            }

            if(arraysPoint[index])
            {
                let btnElement = document.querySelector(`button[data-value="${arraysPoint[index].point}"]`)
                btnElement.classList.add('selected')
            }
            render()
        })
    }
    
    //Bắt sự kiện click nút tiến lên
    nextIconClick.on('click', function () {
        index++

        if(index > 0 && index  < questionArray.length - 1)
        {
            preIconClick.show();
            nextIconClick.show();
        }
        else if(index == questionArray.length - 1)
        {
            nextIconClick.hide();
        }
        
        let point = arraysPoint[index] ? arraysPoint[index].point : undefined

        if(point || point == 0)
        {
            let btns = document.querySelectorAll('.btn');
            for(var btn of btns)
            {
                if(Number(btn.getAttribute('data-value')) == point)
                {
                    let btnElement = document.querySelector(`button[data-value="${point}"]`)
                    btnElement.classList.add('selected')
                }
                else
                {
                    btn.classList.remove('selected');
                }
                
            }
        }
        else
        {
            for (const btnRemove of btnAllElemet)
            {
                btnRemove.classList.remove('selected')
            }
        }
        render()

    })

    //Bắt sự kiện click nút lùi xuống
    preIconClick.on('click',function () {
        index--
        if(index == 0)
        {
            preIconClick.hide();
            nextIconClick.show();
        }
        
        let point = arraysPoint[index] ? arraysPoint[index].point : undefined
        if(point || point == 0)
        {
            let btns = document.querySelectorAll('.btn');
            for(var btn of btns)
            {
                if(Number(btn.getAttribute('data-value')) == point)
                {
                    let btnElement = document.querySelector(`button[data-value="${point}"]`)
                    btnElement.classList.add('selected')
                }
                else
                {
                    btn.classList.remove('selected');
                }
                
            }
            
        }
        render()
    })

});

//Đưa ra thông báo kết quả 
function getMassageAllQuestion(arraysPoint)
{
    let totleD = 0;
    let totleA = 0;
    let totleS = 0;
    for(const p of arraysPoint)
    {
        if(p.category == 'A')
        {
            totleA += p.point * 2;
        }
        else if(p.category == 'D')
        {
            totleD += p.point * 2;
        }
        else if(p.category == 'S')
        {
            totleS += p.point * 2;    
        }
    }
    
    let massageD = getMassageA(totleA);
    let massageS = getMassageD(totleD); 
    let massageA = getMassageS(totleS);
    
    var massagResult =  "Bạn đang có khả năng trầm cảm ở mức độ " + massageD + " và lo âu ở mức độ " + massageA + " và độ stress ở mức độ " + massageS;
    return massagResult;
}

//lấy ra massage trầm cảm
const getMassageA = (totleA) => {
    let massageA;
    if(totleA >=0 && totleA <= 9)
    {
        massageA = "bình thường";
    }
    else if(totleA >=10 && totleA <= 13)
    {
        massageA = "nhẹ";
    }
    else if(totleA >=14 && totleA <= 20)
    {
        massageA = "vừa";
    }
    else if(totleA >=21 && totleA <= 27)
    {
        massageA = "nặng";
    }
    else if(totleA >= 28)
    {
        massageA = "rất nặng"
    }

    return massageA;
}
//lấy ra massage lo âu
const getMassageD = (totleD) => {
    let massageD;
    if(totleD >=0 && totleD <= 7)
    {
        massageD = "bình thường";
    }
    else if(totleD >=8 && totleD <= 9)
    {
        massageD = "nhẹ";
    }
    else if(totleD >=10 && totleD <= 14)
    {
        massageD = "vừa";
    }
    else if(totleD >=15 && totleD <= 19)
    {
        massageD = "nặng";
    }
    else if(totleD >= 20)
    {
        massageD = "rất nặng"
    }
    return massageD;
}
//lấy ra massage stress
const getMassageS = (totleS) => {
    let massageS;
    if(totleS >=0 && totleS <= 14)
    {
        massageS = "bình thường";
    }
    else if(totleS >=15 && totleS <= 18)
    {
        massageS = "nhẹ";
    }
    else if(totleS >=19 && totleS <= 25)
    {
        massageS = "vừa";
    }
    else if(totleS >=26 && totleS <= 33)
    {
        massageS = "nặng";
    }
    else if(totleS >= 34)
    {
        massageS = "rất nặng"
    }
    return massageS;
}



let index = 0
let questions = $('#question')
let step = $('#step')
let resultElement = document.querySelector('#alert-content')
const render = () => {
    questions.html(questionArray[index].question)
    step.html(index + 1)
}

const renderResult = (massage) => {
    resultElement.innerHTML = massage
}

