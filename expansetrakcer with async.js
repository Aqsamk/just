async function saveToCloudStorage(event) {
    event.preventDefault();
    const description = event.target.discription.value;
    const money = event.target.amount.value;
    const catagory = event.target.selec.value;

    const obj = {
        description,
        money,
        catagory
    }
    try {
        const response = await axios.post("https://crudcrud.com/api/aed7459e241e4ad98bbd44dda249acb5/ExpanseData", obj);
        showList(response.data);
        console.log(response);

    } catch (err) {
        document.body.innerHTML = document.body.innerHTML + "<h4>something went wrong</h4>"
        console.log(err)
    }
}

window.addEventListener('DOMContentLoaded', async (event) => {
    try {
        const response = await axios.get("https://crudcrud.com/api/aed7459e241e4ad98bbd44dda249acb5/ExpanseData");
        for (var i = 0; i < response.data.length; i++) {
            showList(response.data[i])
        }
        console.log(response)
    } catch (err) {
        console.log(err);
    }
});

async function editExpDetails(description, cost, ExpId) {
    document.getElementById('discription').value = description;
    document.getElementById('amt').value = cost;
    // document.getElementById('select').value = catagory;
    try {
        await deleteExp(ExpId);
    } catch (err) {
        console.log(err);
    }
    /* axios.put(`https://crudcrud.com/api/f253cfa874674e8483e3daa36ca4b3b0/appointmentData/${UserId}`)
     .then((reeponse) => {

         console.log('editing started');
         removeItemFromScreen(UserId);
     })
     .catch((err) => {
         console.log(err);
     })*/

}


async function deleteExp(ExpId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/aed7459e241e4ad98bbd44dda249acb5/ExpanseData/${ExpId}`);
        removeItemFromScreen(ExpId);
        
    } catch (err) {
        console.log(err);
    }
}
