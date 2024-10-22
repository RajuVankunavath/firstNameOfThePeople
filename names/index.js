const names= require("../country/state/city/index")
const getFirstNames= require("../utilities/utils/index")

const getPeopleInCity=(firstName)=>{
return getFirstNames(firstName)
} 
module.exports=getPeopleInCity;