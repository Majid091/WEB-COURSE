document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("button_search");
    const usernameInput = document.getElementById("user_name");
    const statsContainer = document.querySelector(".stats_container");
    const easyProgressCircle = document.querySelector(".easy_level");
    const mediumProgressCircle = document.querySelector(".medium_level");
    const hardProgressCircle = document.querySelector(".hard_level");
    const easyLabel = document.querySelector(".easy_label");
    const mediumLabel = document.querySelector(".medium_label");
    const hardLabel = document.querySelector(".hard_label");
    const cardStatsContainer = document.querySelector(".cart_info");


    function validateUser(username){
        if(username ===""){
            alert("username field can not be empty!");
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const ifMatch = regex.test(username);
        if(!ifMatch){
            alert("Invalid Username");
        }
        return ifMatch;
    }


async function fecthUserInformation(username){

    try{
        searchButton.textContent = "Searching...";
        searchButton.disabled = true;

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
        const targetUrl = 'https://leetcode.com/graphql/';

        const myHeader = new Headers();
        myHeader.append("content-type", "application/json");

        const qldata = JSON.stringify({
            query : "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            variables : {"username": `${username}`}
        });

        const requestData = {
            method: "POST",
            headers: myHeader,
            body: qldata,
        };


        const response = await fetch(proxyUrl+targetUrl, requestData);

        if(!response.ok){
            throw new Error("the response is not generated well");
        }

        const jsondata = await response.json();
        console.log("parsed data is :", jsondata);
        displayUserData(parsedData);


    }
    catch(error){
        statsContainer.innerHTML= `<p>${error.message}</p>`

    }
    finally{
        searchButton.textContent = "Search";
        searchButton.disabled = false;

    }
}




function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved/total)*100;
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
}



function displayUserData(parsedData){

    const totalQues = parsedData.data.allQuestionsCount[0].count;
    const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
    const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
    const totalHardQues = parsedData.data.allQuestionsCount[3].count;

    const totalSolvedQuestions = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const totalSolvedEasyQuestions = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const totalSolvedMediumQuestions = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const totalSolvedHardQuestions = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;


    updateProgress(totalSolvedEasyQuestions, totalEasyQues, easyLabel, easyProgressCircle);
    updateProgress(totalSolvedMediumQuestions, totalMediumQues, mediumLabel, easyProgressCircle);
    updateProgress(totalSolvedHardQuestions, totalHardQues, hardLabel, hardProgressCircle);


    const cardsData = [
        {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
        {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
        {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
        {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions},
    ];

    console.log("cards data are: ", cardsData);

    cardStatsContainer.innerHTML = cardsData.map(
        data =>
            `
        <div class = "card">

        <h4>${data.label}</h>
        <p>${data.value}</p>
        </div>
        `
    )

}






    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logggin username: ", username);

        if(validateUser(username)){
            console.log("valid username you entered :", username);
            fecthUserInformation(username);
        }
    })


})