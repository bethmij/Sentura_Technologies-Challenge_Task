const genderList = ["MALE", "FEMALE", "OTHER"]


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
            id: "customerCode",
            title: "Customer Code",
            type: "text",
            placeholder: "",
            description: "Auto generated",
            isEdit:true
        },
            {
                id: "customerName",
                title: "Customer Name",
                type: "text",
                placeholder: "Name",
                description: "Full name required",
                required: true,
        }],
        [{
            id: "gender",
            title: "Customer Gender",
            type: "select",
            placeholder: "Gender",
            description: "",
            selectList: genderList,
        },
            {
                id: "dob",
                title: "Customer DOB",
                type: "date",
                placeholder: "Date",
                description: "Date of birth",
        }],
       [
            {
                id: "contactNo",
                title: "Contact number",
                type: "number",
                placeholder: "Contact",
                description: "Mobile number",
                required: true
            },
            {
                id: "email",
                title: "Customer Email",
                type: "email",
                placeholder: "Email",
                description: "Email required",
       }]
    ]


}


