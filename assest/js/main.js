// var questionArray = [
//     {
//         categoryQuestion : 'D',
//         question : 'Tôi thấy khó mà thoải mái được'
//     },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi bị khô miệng'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi dường như chẳng có chút cảm xúc tích cực nào'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi thấy khó bắt tay vào công việc'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi có xu hướng phản ứng thái quá với mọi tình huống'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay…)'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi thấy mình đang suy nghĩ quá nhiều'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi lo lắng về những tình huống có thể làm tôi hoảng sợ hoặc biến tôi thành trò cười'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi thấy mình chẳng có gì để mong đợi cả'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi thấy bản thân dễ bị kích động'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi thấy khó thư giãn được'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi cảm thấy chán nản, thất vọng'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi thấy mình gần như hoảng loạn'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi không thấy hăng hái với bất kỳ việc gì nữa'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi cảm thấy mình chẳng đáng làm người'
    // },
    // {
    //     categoryQuestion : 'S',
    //     question : 'Tôi thấy mình khá dễ phật ý, tự ái'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)'
    // },
    // {
    //     categoryQuestion : 'A',
    //     question : 'Tôi hay sợ vô cớ'
    // },
    // {
    //     categoryQuestion : 'D',
    //     question : 'Tôi thấy cuộc sống vô nghĩa'
    // },
//]


// var answerArray = [
//     {
//         answer : 'Không đúng với tôi chút nào cả',
//         value : 0
//     },
//     {
//         answer : 'Đúng với tôi phần nào, hoặc thỉnh thoảng mới đúng',
//         value : 1
//     },
//     {
//         answer : 'Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng',
//         value : 2
//     },
//     {
//         answer : 'Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng',
//         value : 3
//     },
// ]












// var btnElement = document.querySelector('.btn-submit')

// var colElement = document.querySelector('.col')

// btnElement.onclick = function() {

//     var totleD = 0;
//     var totleA = 0;
//     var totleS = 0;
//     var resultText;
//     for (var i = 1; i <= 21 ; i++ ){

        
//         var inputquestionElement = document.getElementsByName('answers['+ i +']');
//         var count = 0;
//         for(var j = 0 ; j <inputquestionElement.length ; j++)
//         {
            
//             var idInputquestion = inputquestionElement[j].className;

            
//             // var broken = false;

//             if(inputquestionElement[j].checked)
//             {
                
//                 if(idInputquestion == 'A')
//                 {
//                     totleA = totleA + Number(inputquestionElement[j].value) * 2;
//                 }
//                 else if(idInputquestion == 'D')
//                 {
//                     totleD = totleD + Number(inputquestionElement[j].value) * 2;
//                 }
//                 else if(idInputquestion == 'S')
//                 {
//                     totleS = totleS + Number(inputquestionElement[j].value) * 2;
//                 }
                
//             }
//             else
//             {
//                 count++;
//             }
//         }

//         if(count == 4)
//         {
//             alert('Bạn chưa trả lời hết các câu hỏi. Xin mời kiểm tra lại');
//             break;
//         }
//         else
//         {
//             continue;
//         }

//     }

//     if(totleD >=0 && totleD <=9 && totleA >=0 && totleA <=7 && totleS >=0 && totleS <=14 )
//     {
//         alert('Kết luận : Bạn không có dấu hiệu Trầm Cảm, Lo âu và Stress. Hãy luôn giữ tâm trạng thoải mái và vui vẻ!') ; 
//     }
//     else if(totleD >=10 && totleD <=13 && totleA >=8 && totleA <=9 && totleS >=15 && totleS <=18){
//         alert(' Kết luận : Bạn  có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ nhẹ. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
//     }
//     else if(totleD >=14 && totleD <=20 && totleA >=10 && totleA <=14 && totleS >=19 && totleS <=25){
//         alert('Kết luận : Bạn  có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ vừa. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
//     }
//     else if(totleD >=21 && totleD <=27 && totleA >=15 && totleA <=19 && totleS >=26 && totleS <=33){
//         alert('Kết luận : Bạn có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ nặng. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
//     }
//     else if(totleD >=28 &&  totleA >= 20 && totleS >= 34){
//         alert('Kết luận : Bạn có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ rất nặng. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');

//     }
    
// }


var buttonsElememt = document.querySelectorAll('.btn');

buttonsElememt.forEach(function(button){

    button.onclick = function(){

        var parentQuestion = button.closest('.qusetion-progess');
        var buttonQuestion = parentQuestion.querySelectorAll('.btn');

        buttonQuestion.forEach(function(btn){
            
            btn.classList.add('btn-hover');
            btn.classList.remove('selected');
        });

        button.classList.add('selected');
        
        if(button.classList.contains('selected'))
        {
            button.closest('.qusetion-progess').classList.add('d-none');
            button.classList.remove('btn-hover');

            var vlaueQuestion = Number(button.closest('.qusetion-progess').getAttribute('value')) + 1;
            var questionElement = document.querySelector('#question-'+ String(vlaueQuestion));

            if(questionElement != null)
            {
                document.querySelector('#back-step').classList.remove('back-block');
                questionElement.classList.remove('d-none');
            }
            else
            {
                document.querySelector('.btn-submit').classList.remove('d-none');
            }
            
        }
    };
});


var qusetionProgessElement =  document.querySelectorAll('.qusetion-progess');
for(var i = 1 ; i <= 2 ; i++)
{
    var pElement = qusetionProgessElement[i];
    var valueP = Number(pElement.getAttribute('value'));
    
    if( valueP == i+1)
    {
        pElement.classList.add('d-none');
    }
}



var backStep = document.querySelector('#back-step');
var qusetionsElement =  document.querySelectorAll(".qusetion-progess");

backStep.addEventListener("click", function(){

    var valueQuestion = 0;
    
    qusetionsElement.forEach(function(question){

        if(!question.classList.contains('d-none'))
        {
            valueQuestion = Number(question.getAttribute('value'));

            question.classList.add('d-none');
            
            document.querySelector('#question-'+ String(valueQuestion-1)).classList.remove('d-none');
        }
    });
    
});


var btnSend = document.getElementById('btn-send-id');

btnSend.addEventListener('click',function(){

    var totleD = 0;
    var totleA = 0;
    var totleS = 0;
    qusetionsElement.forEach(function(question){
        var dataType = question.getAttribute('data-type');
        var valueButtonElement = Number(question.querySelector('.selected').getAttribute('value'));
        if(dataType == 'D')
        {
            totleD += valueButtonElement * 2;
        }
        else if(dataType == 'S')
        {
            totleS += valueButtonElement * 2;
        }
        else if(dataType == 'A')
        {
            totleA += valueButtonElement * 2;
        }

        if(totleD >=0 && totleD <=9 && totleA >=0 && totleA <=7 && totleS >=0 && totleS <=14 )
        {
            alert('Kết luận : Bạn không có dấu hiệu Trầm Cảm, Lo âu và Stress. Hãy luôn giữ tâm trạng thoải mái và vui vẻ!') ; 
        }
        else if(totleD >=10 && totleD <=13 && totleA >=8 && totleA <=9 && totleS >=15 && totleS <=18){
            alert(' Kết luận : Bạn  có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ nhẹ. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
        }
        else if(totleD >=14 && totleD <=20 && totleA >=10 && totleA <=14 && totleS >=19 && totleS <=25){
            alert('Kết luận : Bạn  có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ vừa. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
        }
        else if(totleD >=21 && totleD <=27 && totleA >=15 && totleA <=19 && totleS >=26 && totleS <=33){
            alert('Kết luận : Bạn có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ nặng. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');
        }
        else if(totleD >=28 &&  totleA >= 20 && totleS >= 34){
            alert('Kết luận : Bạn có dấu hiệu Trầm Cảm, Lo âu và Stress mức độ rất nặng. Bạn nên đến cơ sở y tế để được tư vấn, hỗ trợ.');

        }
    });

});