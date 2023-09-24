import { getStoredCart } from "../utility/fakeDb";

export const appliedJobs = async()=>{
    const jobData = await fetch('featureJobs.json')
    const jobs = await jobData.json()
    const jobCart = getStoredCart()
    
    let jobsData = [];
    for(const id in jobCart){
            const foundJobs = jobs.find(job=>job.id == id)
            if(foundJobs){
                jobsData.push(foundJobs)
            }
        }
        return jobsData
}
