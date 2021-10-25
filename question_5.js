const originalString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

function changeString(string) {
    const dividedString = string.split("").reverse().join('')
    console.log(dividedString)
    return dividedString;
}

changeString(originalString);