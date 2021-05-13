export const addCollection = (collection) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/collections', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(collection)
        })
        .then(resp => resp.json())
        .then(collection => dispatch({
            type: 'ADD_COLLECTION',
            payload: collection.data
        }))
    }
    
}