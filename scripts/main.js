// import {getOfficers} from "./officers/OfficerProvider.js"
// import {OfficerList} from "./officers/"
import criminalList from "./criminals/CriminalList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import { getConvictions } from "./convictions/convictionProvider.js"

criminalList()

getConvictions().then(()=>{
    ConvictionSelect()
})
// getOfficers()
