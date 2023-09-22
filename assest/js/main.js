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
let arrayPoint = [];

window.addEventListener('load', () => {
    // loadElemetQuestion()
    render()
    let btnAllElemet = document.querySelectorAll('.point');
    for (const btn of btnAllElemet) {
        btn.addEventListener('click', () => {

            const value = btn.getAttribute('data-value');
            
            arrayPoint[index] = {category: questionArray[index].categoryQuestion, point: +value}

            if(index >= questionArray.length - 1)
            {
                document.querySelector('#question-parent').classList.add('d-none');
                resultElement.classList.remove('d-none')
                const massage  = totalAllQuestion
                return renderResult(massage)
            }
            index++
            render()
        })
    }
    
});


 function totalAllQuestion()
 {
    let totleD = 0;
    let totleA = 0;
    let totleS = 0;
    for(const p of arrayPoint)
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

    return (totleA + ' ' + totleD + ' ' + totleS + 'Ddoo dep trai vl')

}


let index = 0
let questions = $('#question')
let step = $('#step')
let resultElement = $('#alert-content')
const render = () => {
    questions.html(questionArray[index].question)
    step.html(index + 1)
}

const renderResult = (massage) => {
    resultElement.html = massage
}



//load 1 element question
