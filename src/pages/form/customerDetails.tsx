export let customer = {
    customerCode:"",
    customerName:"",
    gender:"",
    loyaltyJoinedDate:"",
    totalPoints:"",
    level:"",
    dob:"",
    addressLine01:"",
    addressLine02:"",
    addressLine03:"",
    addressLine04:"",
    addressLine05:"",
    contactNo:"",
    email:""
}


export function getCustomer() {


    return [
        [{
            id: "uid",
            title: "User Id",
            type: "text",
            placeholder: "",
            description: "Auto generated",
            isEdit:true
        },
            {
                id: "name",
                title: "User Name",
                type: "text",
                placeholder: "Name",
                description: "Full name required",
                required: true,
        }],

       [
            {
                id: "phone_number",
                title: "User number",
                type: "number",
                placeholder: "Contact",
                description: "Mobile number",
                required: true
            },
            {
                id: "email",
                title: "User Email",
                type: "email",
                placeholder: "Email",
                description: "Email required",
       }]
    ]


}


