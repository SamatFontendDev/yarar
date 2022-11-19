export const kitcut = (text, limit) => {
    if(text == 'null') {
        return null
    }
 
    if(text.length > limit) {
        let newText = text.slice(0, limit) + ' ...'
        return newText
    }

    return text
}