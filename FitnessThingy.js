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

    //nabbing the personal data for later :wink:
    let goal = document.getElementById('goal').value
    let name = document.getElementById('name').value



    // Defining all relevant variables (meals)
    let breakfast = document.getElementById("bfast").value
    let snack1 = document.getElementById('snack').value
    let lunch = document.getElementById('lunch').value
    let snack2 = document.getElementById('snack2').value
    let dinner = document.getElementById('dinner').value

    /*Table Creation -- Creating one column for each meal along with a header for each, then inserting the
    data into the table, finally appending it all to the table*/
    let table = document.createElement('table')
    table.setAttribute('border', '5')

    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let tableData = [breakfast, snack1, lunch, snack2, dinner]

    //For loop to create Header Row
    
    let headerRow = document.createElement('tr')
    let headers = ['Week Day', 'Breakfast', 'Snack Time', 'Lunch', 'Snack Time', 'Dinner']
    for (let i=0; i<headers.length; i++) {
        let header = document.createElement('th')
        header.textContent = headers[i]
        headerRow.appendChild(header)
    }
    table.appendChild(headerRow)
    
    
    //For loop in order to create table rows and put the data in them
    for (let i = 0; i<daysOfWeek.length; i++) {
        let row = document.createElement('tr')
        row.textContent = daysOfWeek[i]
        for (let j=0; j<tableData.length; j++) {
            let data = document.createElement('td')
            data.textContent = tableData[j]
            data.style.textAlign = 'center'
            data.style.verticalAlign = 'middle'
            row.appendChild(data)
        }
        table.appendChild(row)
    }
    


    
    //Creation of a 'new' webpage
    let yippee = new Audio('meowmeowmeow.mp3')
    yippee.volume = .5
    let sickMusic = new Audio('meow2.mp3')
    sickMusic.play()
    yippee.play()

    //Basic format -- deleting everything and adding User name and Goal, with table beneath (and clear/print buttons)
    document.body.innerHTML = `<h1>Your Meal Plan</h1><h2>Your Goal: ${goal}</h2><h2>By: ${name}</h2>`
    document.body.appendChild(table)

    //formatting :3:3
    document.body.style.margin = '0'
    document.body.style.display = 'flex'
    document.body.style.flexDirection = 'column'
    document.body.style.padding = '20px'
    document.body.style.textAlign = 'center'
    document.body.style.alignItems = 'center'
    
    table.style.fontFamily = "'Comic Sans MS', cursive"
    table.style.margin = '0 auto'

    //Creating clear/print buttons
    let clear = document.createElement('button')
    clear.textContent = "CLEAR PAGE!!!"
    document.body.appendChild(clear)
    clear.addEventListener('click', function() {
        location.reload()
        sickMusic.pause()
        sickMusic.currentTime = 0
    })

    let print = document.createElement('button')
    print.textContent = "Print Plan"
    document.body.appendChild(print)
    print.addEventListener('click', function() {
        window.print()
    })

}
