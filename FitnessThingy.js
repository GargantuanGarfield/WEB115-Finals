//definition and config of my form and also the audio that plays when invalid form
let meow = new Audio("sad-meow-song.mp3")
meow.playbackRate = 7
let inform = document.forms[0]


inform.addEventListener('submit', function (e) {
    e.preventDefault()

    //Validates the email is not empty, and if it is it alerts the user and plays silly sound
    let email = document.getElementById('email').value
    if (email == '') {
        meow.play()
        window.alert("ENTER EMAIL PLEASE")
        inform.reset()
    } else {
        generateMealPlan() //When email is valid, the meal plan will be generated
    }
})


function generateMealPlan() {
    /*  This function will generate a table using the meal inputs
        From the user to create a meal plan, OVERRIDING all of the
        stuff currently on the page, thus creating a new webpage.   */ 

    // Defining all relevant variables (meals)
    let breakfast = document.getElementById("bfast").value
    let snack1 = document.getElementById('snack').value
    let lunch = document.getElementById('lunch').value
    let snack2 = document.getElementById('snack2').value
    let dinner = document.getElementById('dinner').value

    /*Table Creation -- Creating one column for each meal along with a header for each, then inserting the
    data into the table, finally appending it all to the table*/
    let table = document.createElement('table')
    table.style.border = "1px solid pink"

    let row1 = doument.createElement('tr')
    let header1 = doument.createElement('th')
    header1.textContent = "Breakfast"
    let header2 = doument.createElement('th')
    header2.textContent = "Snack"
    let header3 = doument.createElement('th')
    header3.textContent = "Lunch"
    let header4 = doument.createElement('th')
    header4.textContent = "Snack"
    let header5 = doument.createElement('th')
    header5.textContent = "Dinner"

    row1.append(header1, header2, header3, header4, header5)

    let row2 = doument.createElement('tr')
    let breakfastData = doument.createElement('th')
    breakfastData.textContent = breakfast
    let snack1Data = doument.createElement('th')
    snack1Data.textContent = snack1
    let lunchData = doument.createElement('th')
    lunchData.textContent = lunch
    let snack2Data = doument.createElement('th')
    snack2Data.textContent = snack2
    let dinnerData = doument.createElement('th')
    dinnerData.textContent = dinner

    row2.append(breakfastData, snack1Data, lunchData, snack2Data, dinnerData)

    table.append(row1, row2)

    document.write(table)
}
